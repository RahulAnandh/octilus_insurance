import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Step_1_1 from "./components/insurance/step_1_1";
import Step_1_2 from "./components/insurance/step_1_2";
import Step_1_3 from "./components/insurance/step_1_3";
import Step_2_1 from "./components/insurance/step_2_1";
import Step_2_2 from "./components/insurance/step_2_2";
import Step_2_3 from "./components/insurance/step_2_3";
import DigitalSignature from "./components/insurance/digital_signature";
import FinalResultPage from "./components/insurance/final_result_page";
import { useSelector, useDispatch } from "react-redux";
import {
  changeStep,
  changeCollection,
  postPersonalData,
  postDemographicInformation,
  setErrorMessages,
} from "./features/insurance/insuranceSlice";

function App() {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  const callErrorMessage = (error_name, error_text) => {
    dispatch(setErrorMessages({ name: error_name, value: error_text }));
  };
  const callInputValidater = () => {
    if (insurance.step === 1) {
      if (insurance.personal_data_api_payload.data.lstSalutation.length == 0) {
        callErrorMessage("error_lstSalutation", "Please select a title.");
        return;
      } else {
        callErrorMessage("error_lstSalutation", "");
      }
      if (insurance.personal_data_api_payload.data.txtFName.length == 0) {
        callErrorMessage("error_txtFName", "First name cannot be empty.");
        return;
      } else if (
        !/^[a-zA-Z]+$/.test(insurance.personal_data_api_payload.data.txtFName)
      ) {
        callErrorMessage(
          "error_txtFName",
          "Cannot have characters or numbers besides letters."
        );
        return;
      } else {
        callErrorMessage("error_txtFName", "");
      }
      if (insurance.personal_data_api_payload.data.txtLName.length == 0) {
        callErrorMessage("error_txtLName", "Last name cannot be empty.");
        return;
      } else if (
        !/^[a-zA-Z]+$/.test(insurance.personal_data_api_payload.data.txtLName)
      ) {
        callErrorMessage(
          "error_txtLName",
          "Cannot have characters or numbers besides letters."
        );
        return;
      } else {
        callErrorMessage("error_txtLName", "");
      }
      if (insurance.personal_data_api_payload.data.birthday.length == 0) {
        callErrorMessage("error_birthday", "Please select birthday.");
        return;
      } else {
        callErrorMessage("error_birthday", "");
      }
      dispatch(changeStep(2));
    }
    if (insurance.step === 2) {
      if (insurance.personal_data_api_payload.data.txtEmail.length == 0) {
        callErrorMessage("error_txtEmail", "E-Mail cannot be empty.");
        return;
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          insurance.personal_data_api_payload.data.txtEmail
        )
      ) {
        callErrorMessage("error_txtEmail", "E-Mail is not valid.");
        return;
      } else {
        callErrorMessage("error_txtEmail", "");
      }
      if (insurance.personal_data_api_payload.data.txtPhone.length == 0) {
        callErrorMessage("error_txtPhone", "Phone number cannot be empty.");
        return;
      } else if (
        insurance.personal_data_api_payload.data.txtPhone.length < 10
      ) {
        callErrorMessage("error_txtPhone", "Phone number is below 10 numbers");
        return;
      } else if (
        insurance.personal_data_api_payload.data.txtPhone.length > 10
      ) {
        callErrorMessage(
          "error_txtPhone",
          "Phone number is more than 10 numbers"
        );
        return;
      } else if (
        !/^[0-9]+$/.test(insurance.personal_data_api_payload.data.txtPhone)
      ) {
        callErrorMessage(
          "error_txtPhone",
          "Phone number cannot have Charecters or spechial charecters."
        );
        return;
      } else {
        callErrorMessage("error_txtPhone", "");
      }
      dispatch(changeStep(3));
    }
    if (insurance.step === 3) {
      if (insurance.personal_data_api_payload.data.txtPostCode.length == 0) {
        callErrorMessage("error_txtPostCode", "Post code cannot be empty.");
        return;
      } else if (
        !/^[A-Z0-9]+$/.test(
          insurance.personal_data_api_payload.data.txtPostCode
        )
      ) {
        callErrorMessage(
          "error_txtPostCode",
          "Post code should only contains capital letters and numbers"
        );
        return;
      } else {
        callErrorMessage("error_txtPostCode", "");
      }
      if (
        insurance.personal_data_api_payload.data.txtaddressline1.length == 0
      ) {
        callErrorMessage(
          "error_txtaddressline1",
          "Address line 1 cannot be empty.."
        );
        return;
      } else if (
        !/^[a-zA-Z0-9\s]+$/.test(
          insurance.personal_data_api_payload.data.txtaddressline1
        )
      ) {
        callErrorMessage(
          "error_txtaddressline1",
          "Address line 1 can have only numbers and letters."
        );
        return;
      } else {
        callErrorMessage("error_txtaddressline1", "");
      }
      if (
        insurance.personal_data_api_payload.data.txtaddressline2.length == 0
      ) {
        callErrorMessage(
          "error_txtaddressline2",
          "Address line 2 cannot be empty."
        );
        return;
      } else if (
        !/^[a-zA-Z0-9\s]+$/.test(
          insurance.personal_data_api_payload.data.txtaddressline2
        )
      ) {
        callErrorMessage(
          "error_txtaddressline2",
          "Address line 2 can have only numbers and letters."
        );
        return;
      } else {
        callErrorMessage("error_txtaddressline2", "");
      }
      if (insurance.previos_address_active) {
        if (
          insurance.personal_data_api_payload.data.txtPostPrevCode.length == 0
        ) {
          callErrorMessage(
            "error_txtPostPrevCode",
            "Previous Post code cannot be empty."
          );
          return;
        } else if (
          !/^[A-Z0-9]+$/.test(
            insurance.personal_data_api_payload.data.txtPostPrevCode
          )
        ) {
          callErrorMessage(
            "error_txtPostPrevCode",
            "Previous post code should only contains capital letters and numbers"
          );
          return;
        } else {
          callErrorMessage("error_txtPostPrevCode", "");
        }
        if (
          insurance.personal_data_api_payload.data.txtPrevaddressline1.length ==
          0
        ) {
          callErrorMessage(
            "error_txtPrevaddressline1",
            "Previous address line 1 cannot be empty.."
          );
          return;
        } else if (
          !/^[a-zA-Z0-9\s]+$/.test(
            insurance.personal_data_api_payload.data.txtPrevaddressline1
          )
        ) {
          callErrorMessage(
            "error_txtPrevaddressline1",
            "Previous Address line 1 can have only numbers and letters."
          );
          return;
        } else {
          callErrorMessage("error_txtPrevaddressline1", "");
        }
        if (
          insurance.personal_data_api_payload.data.txtPrevaddressline2.length ==
          0
        ) {
          callErrorMessage(
            "error_txtPrevaddressline2",
            "Previous Address line 2 cannot be empty."
          );
          return;
        } else if (
          !/^[a-zA-Z0-9\s]+$/.test(
            insurance.personal_data_api_payload.data.txtPrevaddressline2
          )
        ) {
          callErrorMessage(
            "error_txtPrevaddressline2",
            "Previous address line 2 can have only numbers and letters."
          );
          return;
        } else {
          callErrorMessage("error_txtPrevaddressline2", "");
        }
      }
      dispatch(changeStep(4));
      dispatch(changeCollection(2));
      dispatch(postPersonalData(insurance.personal_data_api_payload));
    }
    if (
      insurance.step === 6 &&
      insurance.demographic_information_api_payload.question_data.recommend ===
        "Yes"
    ) {
      if (
        insurance.demographic_information_api_payload.question_data.txtFirstName
          .length == 0
      ) {
        callErrorMessage(
          "error_txtFirstName_step6",
          "First name cannot be empty."
        );
        return;
      } else if (
        !/^[a-zA-Z]+$/.test(
          insurance.demographic_information_api_payload.question_data
            .txtFirstName
        )
      ) {
        callErrorMessage(
          "error_txtFirstName_step6",
          "First name cannot have Numbers or Special Charecters."
        );
        return;
      } else {
        callErrorMessage("error_txtFirstName_step6", "");
      }
      if (
        insurance.demographic_information_api_payload.question_data
          .txtSecondName.length == 0
      ) {
        callErrorMessage(
          "error_txtSecondName_step6",
          "Second name cannot be empty."
        );
        return;
      } else if (
        !/^[a-zA-Z]+$/.test(
          insurance.demographic_information_api_payload.question_data
            .txtSecondName
        )
      ) {
        callErrorMessage(
          "error_txtSecondName_step6",
          "Second name cannot have Numbers or Special Charecters."
        );
        return;
      } else {
        callErrorMessage("error_txtPhoneNumber_step6", "");
      }
      if (
        insurance.demographic_information_api_payload.question_data.txtEMail
          .length == 0
      ) {
        callErrorMessage("error_txtEMail_step6", "E-Mail cannot be empty.");
        return;
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          insurance.demographic_information_api_payload.question_data.txtEMail
        )
      ) {
        callErrorMessage("error_txtEMail_step6", "E-Mail is not valid");
        return;
      } else {
        callErrorMessage("error_txtEMail_step6", "");
      }
      if (
        insurance.demographic_information_api_payload.question_data
          .txtPhoneNumber.length == 0
      ) {
        callErrorMessage(
          "error_txtPhoneNumber_step6",
          "Phone number cannot be empty."
        );
        return;
      } else if (
        insurance.demographic_information_api_payload.question_data
          .txtPhoneNumber.length < 10
      ) {
        callErrorMessage(
          "error_txtPhoneNumber_step6",
          "Phone number cannot be less than 10 digits"
        );
        return;
      } else if (
        insurance.demographic_information_api_payload.question_data
          .txtPhoneNumber.length > 10
      ) {
        callErrorMessage(
          "error_txtPhoneNumber_step6",
          "Phone number cannot greater than 10 digits"
        );
        return;
      } else if (
        !/^[0-9]+$/.test(
          insurance.demographic_information_api_payload.question_data
            .txtPhoneNumber
        )
      ) {
        callErrorMessage(
          "error_txtPhoneNumber_step6",
          "Phone number cannot have Charecters or spechial charecters."
        );
        return;
      } else {
        callErrorMessage("error_txtPhoneNumber_step6", "");
      }
      dispatch(changeStep(7));
      dispatch(changeCollection(3));
      dispatch(
        postDemographicInformation({
          visitor_parameters: insurance.uuid,
          question_data: {
            txtFirstName:
              insurance.demographic_information_api_payload.question_data
                .txtFirstName,
            txtSecondName:
              insurance.demographic_information_api_payload.question_data
                .txtSecondName,
            txtEMail:
              insurance.demographic_information_api_payload.question_data
                .txtEMail,
            txtPhoneNumber:
              insurance.demographic_information_api_payload.question_data
                .txtPhoneNumber,
          },
        })
      );
    } else if (
      insurance.demographic_information_api_payload.question_data.recommend ===
      "No"
    ) {
      dispatch(changeStep(7));
      dispatch(changeCollection(3));
    }
  };
  const steps_collection = [
    {
      key: 1,
      title: "Personal data",
      content: <Step_1_1 />,
      step: "1_1",
      step_collection: 1,
      previous_button: false,
      next_button: true,
      finish_button: false,
    },
    {
      key: 2,
      title: "Contact information",
      content: <Step_1_2 />,
      step: "1_2",
      step_collection: 1,
      previous_button: true,
      next_button: true,
      finish_button: false,
    },
    {
      key: 3,
      title: "Address",
      content: <Step_1_3 />,
      step: "1_3",
      step_collection: 1,
      previous_button: true,
      next_button: false,
      finish_button: true,
    },
    {
      key: 4,
      title: "",
      content: <Step_2_1 />,
      step: "2_1",
      step_collection: 2,
      previous_button: false,
      next_button: true,
      finish_button: false,
    },
    {
      key: 5,
      title: "",
      content: <Step_2_2 />,
      step: "2_2",
      step_collection: 2,
      previous_button: true,
      next_button: true,
      finish_button: false,
    },
    {
      key: 6,
      title: "Please share the details",
      content: <Step_2_3 />,
      step: "2_3",
      step_collection: 2,
      previous_button: true,
      next_button: false,
      finish_button: true,
    },
  ];

  return (
    <div className="container">
      <div className="heading-and-step-container">
        <div className="form-heading">
          <h1>Survey</h1>
          <p>Insurance Evaluation Survey</p>
        </div>
        {insurance.collection === 1 && (
          <>
            <button
              onClick={() => dispatch(changeStep(1))}
              className={
                insurance.step === 1 ? "step-button-active" : "step-button"
              }
            >
              Step 1
            </button>
            <button
              onClick={() => dispatch(changeStep(2))}
              className={
                insurance.step === 2 ? "step-button-active" : "step-button"
              }
            >
              Step 2
            </button>
            <button
              onClick={() => dispatch(changeStep(3))}
              className={
                insurance.step === 3 ? "step-button-active" : "step-button"
              }
            >
              Step 3
            </button>
          </>
        )}
        {insurance.collection === 2 && (
          <>
            <button
              onClick={() => dispatch(changeStep(4))}
              className={
                insurance.step === 4 ? "step-button-active" : "step-button"
              }
            >
              Step 1
            </button>
            <button
              onClick={() => dispatch(changeStep(5))}
              className={
                insurance.step === 5 ? "step-button-active" : "step-button"
              }
            >
              Step 2
            </button>
            <button
              onClick={() => dispatch(changeStep(6))}
              className={
                insurance.step === 6 ? "step-button-active" : "step-button"
              }
            >
              Step 3
            </button>
          </>
        )}
      </div>
      <div>
        {steps_collection.map((obj) => {
          return (
            <>
              {obj.step_collection === insurance.collection &&
                obj.key === insurance.step && (
                  <div>
                    <div className="form-container">{obj.content}</div>
                    <button
                      className={
                        obj.previous_button
                          ? "previous-button-active "
                          : "previous-button-not-active "
                      }
                      disabled={!obj.previous_button}
                      onClick={() => {
                        dispatch(changeStep(insurance.step - 1));
                      }}
                    >
                      Previous
                    </button>
                    {obj.next_button && (
                      <button
                        className={
                          obj.next_button
                            ? "next-button-active "
                            : "next-button-not-active "
                        }
                        onClick={() => {
                          insurance.step === 1 || insurance.step === 2
                            ? callInputValidater()
                            : dispatch(changeStep(insurance.step + 1));
                        }}
                      >
                        Next
                      </button>
                    )}
                    {console.log("1---2", insurance)}
                    {obj.finish_button && (
                      <button
                        onClick={() => {
                          callInputValidater();
                        }}
                        className={
                          obj.finish_button
                            ? "finish-button"
                            : "button-not-active"
                        }
                      >
                        Finish
                      </button>
                    )}
                  </div>
                )}
            </>
          );
        })}
        {insurance.step === 7 && (
          <div className="form-container">
            <DigitalSignature />
          </div>
        )}
        {insurance.step === 8 && insurance.collection === 4 && (
          <div className="form-container">
            <FinalResultPage />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
