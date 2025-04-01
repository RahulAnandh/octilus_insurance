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
        <label>Post Code</label>
        <input
          type="text"
          onChange={(e) => {
            onChange(e);
          }}
          name="txtPostCode"
          value={insurance.personal_data_api_payload.data.txtPostCode}
        />

        <label>Address line 1</label>
        <input
          type="text"
          onChange={(e) => {
            onChange(e);
          }}
          name="txtaddressline1"
          value={insurance.personal_data_api_payload.data.txtaddressline1}
        />

        <label>Address line 2</label>
        <input
          type="text"
          onChange={(e) => {
            onChange(e);
          }}
          name="txtaddressline2"
          value={insurance.personal_data_api_payload.data.txtaddressline2}
        />
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
            <label>Previous Postcode</label>
            <input
              type="text"
              onChange={(e) => {
                onChange(e);
              }}
              name="txtPostPrevCode"
              value={insurance.personal_data_api_payload.data.txtPostPrevCode}
            />

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
