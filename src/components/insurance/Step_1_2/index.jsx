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
        <label>E mail</label>
        <input
          type="email"
          name="txtEmail"
          onChange={(e) => {
            onChange(e);
          }}
          value={insurance.personal_data_api_payload.data.txtEmail}
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="txtPhone"
          onChange={(e) => {
            onChange(e);
          }}
          value={insurance.personal_data_api_payload.data.txtPhone}
        />
      </form>
    </>
  );
};
export default Step_1_2;
