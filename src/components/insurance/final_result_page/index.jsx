import { useSelector, useDispatch } from "react-redux";

const FinalResultPage = () => {
  const insurance = useSelector((state) => state.insurance);

  return (
    <>
      {insurance.personal_data_api_payload.data.txtLName &&
      insurance.personal_data_api_payload.data.txtFName &&
      insurance.personal_data_api_payload.data.lstSalutation ? (
        <>
          <h2>
            Thank You {insurance.personal_data_api_payload.data.lstSalutation}.
            {insurance.personal_data_api_payload.data.txtFName}{" "}
            {insurance.personal_data_api_payload.data.txtLName}
          </h2>
          <h3>You have Successfully Submitted</h3>
        </>
      ) : (
        <>
          <h2>Sorry Your Name is missing</h2>
        </>
      )}
    </>
  );
};
export default FinalResultPage;
