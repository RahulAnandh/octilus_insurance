import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUUID,
  setPersonelData,
  postVisitorParams,
} from "../../../features/insurance/insuranceSlice";
const findMonthString = (month) => {
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    default:
      return "Dec";
  }
};
const Step_1_1 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  useEffect(() => {
    if (insurance.uuid !== "") {
      dispatch(
        postVisitorParams({
          visitor_parameters: {
            uuid: insurance.uuid,
          },
          data: {
            ip_address: window.location.hostname,
            domain_name: window.location.host,
            existingdomain: window.location.href,
          },
        })
      );
    } else {
      dispatch(fetchUUID());
      // dispatch(fetchIPAddress());
    }
  }, [insurance.uuid]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthday") {
      const date_array = value.split("-");
      dispatch(setPersonelData({ name: "DobDay", value: date_array[2] }));
      dispatch(
        setPersonelData({
          name: "DobMonth",
          value: findMonthString(date_array[1]),
        })
      );
      dispatch(setPersonelData({ name: "DobYear", value: date_array[0] }));
      dispatch(setPersonelData({ name: "birthday", value: value }));
    } else {
      dispatch(setPersonelData({ name: e.target.name, value: e.target.value }));
    }
  };
  return (
    <>
      <h2>Personal data</h2>
      <form>
        <label>Title</label>
        <select
          name="lstSalutation"
          onChange={(e) => {
            onChange(e);
          }}
          value={insurance.personal_data_api_payload.data.lstSalutation}
          required
        >
          <option value="Mr">Mr.</option>
          <option value="Mrs">Mrs.</option>
          <option value="Miss">Miss.</option>
        </select>

        <label>First name</label>
        <input
          type="text"
          name="txtFName"
          onChange={(e) => {
            onChange(e);
          }}
          value={insurance.personal_data_api_payload.data.txtFName}
          required
        />

        <label>Last Name</label>
        <input
          name="txtLName"
          type="text"
          onChange={(e) => {
            onChange(e);
          }}
          value={insurance.personal_data_api_payload.data.txtLName}
          required
        />
        <label for="birthday">Birthday:</label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          onChange={(e) => {
            onChange(e);
          }}
          value={insurance.personal_data_api_payload.data.birthday}
        />
      </form>
    </>
  );
};
export default Step_1_1;
