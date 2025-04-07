import { useSelector, useDispatch } from "react-redux";
import { setPersonelData } from "../../../features/insurance/insuranceSlice";
const Step_1_2 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setPersonelData({ name: e.target.name, value: e.target.value }));
  };
  return (
    <>
      <h2>Contact information</h2>
      <form>
        <div className="input_card">
          <label>E mail</label>
          <input
            type="email"
            name="txtEmail"
            onChange={(e) => {
              onChange(e);
            }}
            value={insurance.personal_data_api_payload.data.txtEmail}
          />
          <div className="error_message">
            {insurance.form_error_messages.error_txtEmail}
          </div>
        </div>
        <div className="input_card">
          <label>Phone Number</label>
          <input
            type="text"
            name="txtPhone"
            onChange={(e) => {
              onChange(e);
            }}
            value={insurance.personal_data_api_payload.data.txtPhone}
          />
          <div className="error_message">
            {insurance.form_error_messages.error_txtPhone}
          </div>
        </div>
      </form>
    </>
  );
};
export default Step_1_2;
