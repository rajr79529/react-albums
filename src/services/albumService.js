import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";
const albumUrl = baseUrl + "/albums";
const photoUrl = baseUrl + "/photos";

export const getPhotos = async () => {
  try {
    const response = await axios.get(photoUrl);
    return response.data;
  } catch (error) {
    return "Internal Server Error";
  }
};

export const getAlbums = async () => {
  try {
    const response = await axios.get(albumUrl);
    return response.data;
  } catch (error) {
    return "Internal Server Error";
  }
};
export const addAlbum = async (albumObj) => {
  try {
    const response = await axios.post(albumUrl, {
      body: JSON.stringify(albumObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return JSON.parse(response.data.body);
  } catch (error) {
    return "Internal Server Error";
  }
};
export const updateAlbum = async (albumObj) => {
  try {
    const response = await axios.put(albumUrl + "/" + albumObj.id, {
      body: JSON.stringify(albumObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return JSON.parse(response.data.body);
  } catch (error) {
    return "Internal Server Error";
  }
};

export const deleteAlbum = async (id) => {
  try {
    const response = await axios.delete(albumUrl + "/" + id);
    return response.data;
  } catch (error) {
    return "Internal Server Error";
  }
};
