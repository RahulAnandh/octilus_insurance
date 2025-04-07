import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import {
  setDemographicData,
  postDemographicInformation,
} from "../../../features/insurance/insuranceSlice";
import { useEffect, useState } from "react";
const Step_2_1 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      postDemographicInformation({
        visitor_parameters: {
          uuid: insurance.uuid,
        },
        question_data: {
          question_id: "1",
          option_id: "1",
          answer_text: "18-25",
          input_answer: "18-25",
          bank: "1",
        },
      })
    );
    dispatch(
      postDemographicInformation({
        visitor_parameters: {
          uuid: insurance.uuid,
        },
        question_data: {
          question_id: "2",
          option_id: "1",
          answer_text: "Less than $20,000",
          input_answer: "Less than $20,000",
          bank: "1",
        },
      })
    );
  }, []);

  const changeDemographicData = (event) => {
    // const { name, value } = e.target;
    // console.log(name, value);
    // dispatch(postDemographicInformation());
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
        <p>Please indicate your age range.</p>
        <div className="radio-label-and-input-container">
          <input
            type="radio"
            id="18-25"
            name="age_range"
            value="18-25"
            onClick={(event) =>
              changeDemographicData({
                name: "age_range",
                question_id: "1",
                option_id: "1",
                answer_text: "18-25",
                input_answer: "18-25",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "age_range",
                question_id: "1",
                option_id: "2",
                answer_text: "26-34",
                input_answer: "26-34",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "age_range",
                question_id: "1",
                option_id: "3",
                answer_text: "35-44",
                input_answer: "35-44",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "age_range",
                question_id: "1",
                option_id: "4",
                answer_text: "45-54",
                input_answer: "45-54",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "age_range",
                question_id: "1",
                option_id: "5",
                answer_text: "55-65",
                input_answer: "55-65",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "age_range",
                question_id: "1",
                option_id: "6",
                answer_text: "66+",
                input_answer: "66+",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "income_range",
                question_id: "2",
                option_id: "1",
                answer_text: "Less than $20,000",
                input_answer: "Less than $20,000",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "income_range",
                question_id: "2",
                option_id: "2",
                answer_text: "$20-49,999",
                input_answer: "$20-49,999",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "income_range",
                question_id: "2",
                option_id: "3",
                answer_text: "$50-74,999",
                input_answer: "$50-74,999",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "income_range",
                question_id: "2",
                option_id: "4",
                answer_text: "$75-99,999",
                input_answer: "$75-99,999",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "income_range",
                question_id: "2",
                option_id: "5",
                answer_text: "$100-149,999",
                input_answer: "$100-149,999",
                bank: "1",
              })
            }
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
            onClick={(event) =>
              changeDemographicData({
                name: "income_range",
                question_id: "2",
                option_id: "6",
                answer_text: "$150,000+",
                input_answer: "$150,000+",
                bank: "1",
              })
            }
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
