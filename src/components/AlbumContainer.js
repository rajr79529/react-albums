import React, { useState, useEffect } from "react";
import AlbumList from "./AlbumList";
import ModalComponent from "./ModalComponet";
import {
  getAlbums,
  deleteAlbum,
  updateAlbum,
  addAlbum,
} from "../services/albumService";
import { toast } from "react-toastify";
import LoadComponent from "./LoadComponent";
import NavBar from "./NavBar";

function AlbumContainer() {
  const [albums, setAlbums] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [albumEdit, setAlbumEdit] = useState({});
  const [loading, setLoading] = useState(false);
  const [createFlag, setCreateFlag] = useState(false);
  const [toBeAlbum, setToBeAlbum] = useState({});

  const handleCreateClick = () => {
    const newAlbum = {
      id: albums.length,
      title: "",
      userId: albums.length,
    };
    setToBeAlbum(() => newAlbum);
    setCreateFlag(() => true);
  };

  const notify = (message) => {
    toast.success(message);
  };

  const handleGetAlbums = async () => {
    const data = await getAlbums();
    if (typeof data == String) {
      alert(data);
      return;
    }
    setAlbums(data);
  };

  const handleDeleteAlbum = async (id) => {
    setLoading(true);
    const data = await deleteAlbum(id);

    if (typeof data == String) {
      alert(data);
      setLoading(false);
      return;
    }
    const filteredList = albums.filter((album) => {
      return album.id !== id;
    });
    setAlbums(filteredList);
    setLoading(false);
    notify("Deleted Successfully");
  };

  const handleEditAlbum = async (album) => {
    setAlbumEdit(album);
    setShowModal(true);
  };

  const handleCreateAlbum = async (id, name) => {
    setLoading(true);
    const albumBody = { ...toBeAlbum, title: name };
    const data = await addAlbum(albumBody);
    if (typeof data == String) {
      setLoading(false);
      alert(data);
      return;
    }

    const newAlbums = [data, ...albums];
    setLoading(false);
    setAlbums(newAlbums);
    setCreateFlag(false);
    notify("Added Successfully");
  };

  const handleSetAlbums = async (id, name) => {
    setLoading(true);
    const albumBody = { ...albumEdit, title: name };
    const data = await updateAlbum(albumBody);
    if (typeof data == String) {
      setLoading(false);
      alert(data);
      return;
    }
    const newAlbums = albums?.map((album) => {
      if (album.id == data.id) {
        album.title = data.title;
      }
      return album;
    });

    setLoading(false);
    setAlbums(newAlbums);
    setShowModal(false);
    notify("Updated Successfully");
  };

  useEffect(() => {
    handleGetAlbums();
  }, []);

  return loading ? (
    <LoadComponent />
  ) : (
    <>
      <NavBar handleCreateClick={handleCreateClick} />
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        albumEdit={albumEdit}
        handleSetAlbums={handleSetAlbums}
      />
      <ModalComponent
        showModal={createFlag}
        setShowModal={setCreateFlag}
        albumEdit={toBeAlbum}
        handleSetAlbums={handleCreateAlbum}
      />
      <AlbumList
        albums={albums}
        handleDeleteAlbum={handleDeleteAlbum}
        handleEditAlbum={handleEditAlbum}
      />
    </>
  );
}

export default AlbumContainer;
