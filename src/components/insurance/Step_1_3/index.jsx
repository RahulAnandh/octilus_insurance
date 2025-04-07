import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { useState } from "react";
import {
  setPersonelData,
  setPreviousAddressActive,
} from "../../../features/insurance/insuranceSlice";

const Step_1_3 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setPersonelData({ name: e.target.name, value: e.target.value }));
  };
  return (
    <>
      <h2>Address</h2>
      <form>
        <div className="input_card">
          <label>Post Code</label>
          <input
            type="text"
            onChange={(e) => {
              onChange(e);
            }}
            name="txtPostCode"
            value={insurance.personal_data_api_payload.data.txtPostCode}
          />
          <div className="error_message">
            {insurance.form_error_messages.error_txtPostCode}
          </div>
        </div>
        <div className="input_card">
          <label>Address line 1</label>
          <input
            type="text"
            onChange={(e) => {
              onChange(e);
            }}
            name="txtaddressline1"
            value={insurance.personal_data_api_payload.data.txtaddressline1}
          />
          <div className="error_message">
            {insurance.form_error_messages.error_txtaddressline1}
          </div>
        </div>
        <div className="input_card">
          <label>Address line 2</label>
          <input
            type="text"
            onChange={(e) => {
              onChange(e);
            }}
            name="txtaddressline2"
            value={insurance.personal_data_api_payload.data.txtaddressline2}
          />
          <div className="error_message">
            {insurance.form_error_messages.error_txtaddressline2}
          </div>
        </div>
        {!insurance.previos_address_active && (
          <button
            className="address-button"
            onClick={() => {
              dispatch(setPreviousAddressActive(true));
            }}
          >
            I Have a previous Address
          </button>
        )}
        {insurance.previos_address_active && (
          <>
            <div className="input_card">
              <label>Previous Postcode</label>
              <input
                type="text"
                onChange={(e) => {
                  onChange(e);
                }}
                name="txtPostPrevCode"
                value={insurance.personal_data_api_payload.data.txtPostPrevCode}
              />
              <div className="error_message">
                {insurance.form_error_messages.error_txtPostPrevCode}
              </div>
            </div>
            <div className="input_card">
              <label>Previous Address Line1</label>
              <input
                type="text"
                onChange={(e) => {
                  onChange(e);
                }}
                name="txtPrevaddressline1"
                value={
                  insurance.personal_data_api_payload.data.txtPrevaddressline1
                }
              />
              <div className="error_message">
                {insurance.form_error_messages.error_txtPrevaddressline1}
              </div>
            </div>
            <div className="input_card">
              <label>Previous Address Line1</label>
              <input
                type="text"
                onChange={(e) => {
                  onChange(e);
                }}
                name="txtPrevaddressline2"
                value={
                  insurance.personal_data_api_payload.data.txtPrevaddressline2
                }
              />
              <div className="error_message">
                {insurance.form_error_messages.error_txtPrevaddressline2}
              </div>
            </div>
            <button
              className="address-button"
              onClick={() => {
                dispatch(setPreviousAddressActive(false));
              }}
            >
              I don't have a previous Address
            </button>
          </>
        )}
      </form>
    </>
  );
};
export default Step_1_3;
