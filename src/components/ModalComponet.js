import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

function ModalComponent({
  albumEdit,
  showModal,
  setShowModal,
  handleSetAlbums,
}) {
  const [name, setName] = useState(albumEdit.title);

  const toggle = () => setShowModal(!showModal);

  useEffect(() => {
    setName(albumEdit.title);
  }, [albumEdit]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {albumEdit.title ? "Edit Album Name" : "Write Album Name"}
      </ModalHeader>
      <ModalBody>
        <Input value={name} onChange={(e) => handleNameChange(e)} />
        {name ? <></> : <p id="error">Input can not be blank.</p>}
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => handleSetAlbums(albumEdit.id, name)}
          disabled={!name}
        >
          {albumEdit.title ? "Save Changes" : "Create Album"}
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalComponent;
