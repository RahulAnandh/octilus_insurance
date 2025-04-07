import { useSelector, useDispatch } from "react-redux";
import { SignatureCanvas } from "react-signature-canvas";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import {
  postSignatureData,
  changeCollection,
  changeStep,
} from "../../../features/insurance/insuranceSlice";
import Modal from "react-modal";

const DigitalSignature = () => {
  const sigCanvas = useRef(null);
  const [imageUrl, setImageURL] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  function clear() {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setImageURL(null);
    }
  }
  const confirmSubmit = () => {
    setShowModal(true);
  };
  const submit = () => {
    if (sigCanvas.current) {
      setImageURL(sigCanvas.current.getSignaturePad().toDataURL("image/png"));
      dispatch(
        postSignatureData({
          signature_data: sigCanvas.current
            .getSignaturePad()
            .toDataURL("image/png"),
          visitor_parameters: {
            uuid: insurance.uuid,
          },
        })
      );
      dispatch(changeCollection(insurance.collection + 1));
      dispatch(changeStep(insurance.step + 1));
    }
    setShowModal(false);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <div className="signature-container">
        <SignatureCanvas
          penColor="black"
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
          ref={sigCanvas}
        />
      </div>
      <button className="clear-button" onClick={clear}>
        Clear
      </button>
      <button className="submit-button" onClick={confirmSubmit}>
        Submit
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        // className="modal_style"
        style={customStyles}
      >
        <h2>Signature Confirmation</h2>
        <p>Confirm the signature.</p>
        <button onClick={submit} className="confirm_button">
          Confirm
        </button>
        <button onClick={closeModal} className="cancel_button">
          Cancel
        </button>
      </Modal>
    </>
  );
};
export default DigitalSignature;
