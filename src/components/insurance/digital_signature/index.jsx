import { useSelector, useDispatch } from "react-redux";
import { SignatureCanvas } from "react-signature-canvas";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import {
  postSignatureData,
  changeCollection,
  changeStep,
} from "../../../features/insurance/insuranceSlice";
const DigitalSignature = () => {
  const sigCanvas = useRef(null);
  const [imageUrl, setImageURL] = useState(null);
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  function clear() {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setImageURL(null);
    }
  }

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
      <button className="submit-button" onClick={submit}>
        Submit
      </button>
    </>
  );
};
export default DigitalSignature;
