import { useSelector, useDispatch } from "react-redux";
import {
  setDemographicData,
  postDemographicInformation,
} from "../../../features/insurance/insuranceSlice";
import { useEffect } from "react";

const Step_2_2 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      postDemographicInformation({
        visitor_parameters: {
          uuid: insurance.uuid,
        },
        question_data: {
          question_id: "3",
          option_id: "1",
          answer_text: "Yes",
          input_answer: "Yes",
          bank: "13",
        },
      })
    );
  }, []);
  const changeDemographicData = (event) => {
    const { question_id, option_id, answer_text, input_answer, bank, name } =
      event;
    dispatch(setDemographicData({ name: name, value: answer_text }));
    const payload = {
      visitor_parameters: {
        uuid: insurance.uuid,
      },
      question_data: {
        question_id: question_id,
        option_id: option_id,
        answer_text: answer_text,
        input_answer: input_answer,
        bank_id: bank,
      },
    };
    dispatch(postDemographicInformation(payload));
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
            onClick={(event) =>
              changeDemographicData({
                name: "recommend",
                question_id: "3",
                option_id: "1",
                answer_text: "Yes",
                input_answer: "Yes",
                bank: "13",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "recommend",
                question_id: "3",
                option_id: "2",
                answer_text: "No",
                input_answer: "No",
                bank: "2",
              })
            }
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
