import { useSelector, useDispatch } from "react-redux";
import { setDemographicData } from "../../../features/insurance/insuranceSlice";

const Step_2_2 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  const changeDemographicData = (e) => {
    const { name, value } = e.target;
    dispatch(setDemographicData({ name: name, value: value }));
  };
  return (
    <>
      <form className="form-continer">
        <p>Would you recommended your insurance to friends/family?.</p>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="Yes"
            name="recommend"
            value="Yes"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .recommend === "Yes"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .recommend === "Yes"
            }
          />
          <label for="recommend">Yes</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="No"
            name="recommend"
            value="No"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .recommend === "No"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .recommend === "No"
            }
          />
          <label for="recommend">No</label>
        </div>
      </form>
    </>
  );
};
export default Step_2_2;
