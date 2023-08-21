import React from "react";
import Modal from "react-bootstrap/Modal";

interface Props {
  open: boolean;
  setOpen: () => void;
}
const ErrorModal: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal show={open} onHide={setOpen}>
      <h5>Erreur</h5>
      <Modal.Body>Tous les champs doivent etre remples</Modal.Body>

      <div className="w-100 d-flex justify-content-end  align-items-center ">
        <button onClick={setOpen} className="drawer-close-btn">
          Continuer
        </button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
