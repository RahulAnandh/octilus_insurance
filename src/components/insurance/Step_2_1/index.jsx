import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { setDemographicData } from "../../../features/insurance/insuranceSlice";
import { useState } from "react";
const Step_2_1 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();

  const changeDemographicData = (e) => {
    const { name, value } = e.target;
    dispatch(setDemographicData({ name: name, value: value }));
  };
  return (
    <>
      <form className="form-continer">
        <p>Please indicate your age range.</p>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="18-25"
            name="age_range"
            value="18-25"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .age_range === "18-25"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .age_range === "18-25"
            }
          />
          <label for="age_range">18 - 25</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="26-34"
            name="age_range"
            value="26-34"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .age_range === "26-34"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .age_range === "26-34"
            }
          />
          <label for="age_range">26 - 34</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="35-44"
            name="age_range"
            value="35-44"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .age_range === "35-44"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .age_range === "35-44"
            }
          />
          <label for="age_range">35 - 44</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="45-54"
            name="age_range"
            value="45-54"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .age_range === "45-54"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .age_range === "45-54"
            }
          />
          <label for="age_range">45 - 54</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="55-65"
            name="age_range"
            value="55-65"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .age_range === "55-65"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .age_range === "55-65"
            }
          />
          <label for="age_range">55 - 65</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="66+"
            name="age_range"
            value="66+"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .age_range === "66+"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .age_range === "66+"
            }
          />
          <label for="age_range">66 +</label>
        </div>
        <br />
        <p>Please indicate your annual income range.</p>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="Less than $20,000"
            name="income_range"
            value="Less than $20,000"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .income_range === "Less than $20,000"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .income_range === "Less than $20,000"
            }
          />
          <label for="income_range">Less than $ 20,000</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="$20-49,999"
            name="income_range"
            value="$20-49,999"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$20-49,999"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$20-49,999"
            }
          />
          <label for="income_range">$ 20-49,999</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="$50-74,999"
            name="income_range"
            value="$50-74,999"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$50-74,999"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$50-74,999"
            }
          />
          <label for="income_range">$ 50-74,999</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="$75-99,999"
            name="income_range"
            value="$75-99,999"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$75-99,999"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$75-99,999"
            }
          />
          <label for="income_range">$ 75-99,999</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="$100-149,999"
            name="income_range"
            value="$100-149,999"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$100-149,999"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$100-149,999"
            }
          />
          <label for="income_range">$ 100-149,999</label>
        </div>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="$ 150,000+"
            name="income_range"
            value="$150,000+"
            onClick={(event) => changeDemographicData(event)}
            selected={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$150,000+"
            }
            checked={
              insurance.demographic_information_api_payload.question_data
                .income_range === "$150,000+"
            }
          />
          <label for="income_range">$ 150,000+</label>
        </div>
      </form>
    </>
  );
};
export default Step_2_1;
