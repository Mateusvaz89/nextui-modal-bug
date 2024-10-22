import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <FirstModal />
    </div>
  );
}

export default App;

function FirstModal() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Button onClick={handleOpen}>open modal</Button>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalContent>
          <ModalHeader>First Modal</ModalHeader>
          <ModalBody>
            <SecondModal onOpen={handleClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

function SecondModal(props: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    props.onOpen();
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Button onClick={handleOpen}>open second modal</Button>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalContent>
          <ModalHeader>Second Modal</ModalHeader>
        </ModalContent>
        <ModalBody></ModalBody>
      </Modal>
    </Fragment>
  );
}
