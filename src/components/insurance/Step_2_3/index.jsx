import { useSelector, useDispatch } from "react-redux";
import { setDemographicData } from "../../../features/insurance/insuranceSlice";

const Step_2_3 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(setDemographicData({ name: name, value: value }));
  };
  return (
    <>
      <h2>Please share the details</h2>
      <form>
        <label>FirstName</label>
        <input
          type="text"
          name="txtFirstName"
          onChange={(e) => {
            onChange(e);
          }}
          value={
            insurance.demographic_information_api_payload.question_data
              .txtFirstName
          }
        />

        <label>Last Name</label>
        <input
          type="text"
          name="txtSecondName"
          onChange={(e) => {
            onChange(e);
          }}
          value={
            insurance.demographic_information_api_payload.question_data
              .txtSecondName
          }
        />

        <label>Email</label>
        <input
          type="email"
          name="txtEMail"
          onChange={(e) => {
            onChange(e);
          }}
          value={
            insurance.demographic_information_api_payload.question_data.txtEMail
          }
        />

        <label>Phone number</label>
        <input
          type="text"
          name="txtPhoneNumber"
          onChange={(e) => {
            onChange(e);
          }}
          value={
            insurance.demographic_information_api_payload.question_data
              .txtPhoneNumber
          }
        />
      </form>
    </>
  );
};
export default Step_2_3;
