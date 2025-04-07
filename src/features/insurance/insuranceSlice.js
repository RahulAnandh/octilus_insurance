import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// To GET UUID
export const fetchUUID = createAsyncThunk("insurance/fetchUUID", async () => {
  const response = await fetch(
    "https://dev.octilus.in/machinetest/insurance_survey_api/getuuid.php",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data; // Return the data from the API
});
//fetchIPAddress

export const fetchIPAddress = createAsyncThunk(
  "insurance/fetchIPAddress",
  async () => {
    const response = await fetch("https://api.ipify.org/?format=json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data; // Return the data from the API
  }
);
// To POST Visitor Params
export const postVisitorParams = createAsyncThunk(
  "insurance/postVisitorParams",
  async (payload) => {
    const response = await fetch(
      "https://dev.octilus.in/machinetest/insurance_survey_api/visitors.php ",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json(payload);
    return data; // Return the data from the API
  }
);
// To POST Personal Data

export const postPersonalData = createAsyncThunk(
  "insurance/postPersonalData",
  async (payload) => {
    const response = await fetch(
      "https://dev.octilus.in/machinetest/insurance_survey_api/userdata.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    return data; // Return the data from the API
  }
);
// To POST Demographic Information(Questionnaire)
export const postDemographicInformation = createAsyncThunk(
  "insurance/postDemographicInformation",
  async (payload) => {
    const response = await fetch(
      "https://dev.octilus.in/machinetest/insurance_survey_api/questions.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    return data; // Return the data from the API
  }
);
// To POST Signature Data
export const postSignatureData = createAsyncThunk(
  "insurance/postSignatureData",
  async (payload) => {
    const response = await fetch(
      "https://dev.octilus.in/machinetest/insurance_survey_api/signature.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    return data; // Return the data from the API
  }
);

const insuranceSlice = createSlice({
  name: "insurance",
  initialState: {
    collection: 1, // 1, 2
    step: 1, // 1,2,3,4,5,6,7
    status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
    uuid: "",
    form_error_messages: {
      error_lstSalutation: "",
      error_txtFName: "",
      error_txtLName: "",
      error_birthday: "",
      error_txtEmail: "",
      error_txtPhone: "",
      error_txtPostCode: "",
      error_txtaddressline1: "",
      error_txtaddressline2: "",
      error_txtFirstName_step6: "",
      error_txtSecondName_step6: "",
      error_txtEMail_step6: "",
      error_txtPhoneNumber_step6: "",
      error_txtPostPrevCode: "",
      error_txtPrevaddressline1: "",
      error_txtPrevaddressline2: "",
    },
    previos_address_active: false,
    uuid_manangement_api_payload: {
      visitor_parameters: { uuid: "" },
      data: {
        ip_address: "",
        domain_name: "",
        existingdomain: "",
      },
    },
    personal_data_api_payload: {
      visitor_parameters: { uuid: "" },
      data: {
        lstSalutation: "",
        txtFName: "",
        txtLName: "",
        birthday: "",
        DobDay: "",
        DobMonth: "",
        DobYear: "",
        txtEmail: "",
        txtPhone: "",
        txtPostCode: "",
        txtaddressline1: "",
        txtaddressline2: "",
        txtPostPrevCode: "",
        txtPrevaddressline1: "",
        txtPrevaddressline2: "",
        bank: 1,
      },
    },
    demographic_information_api_payload: {
      visitor_parameters: { uuid: "" },
      question_data: {
        age_range: "18-25",
        income_range: "Less than $20,000",
        recommend: "Yes",
        txtFirstName: "",
        txtSecondName: "",
        txtEMail: "",
        txtPhoneNumber: "",
        question_id: "",
        option_id: "",
        answer_text: "",
        input_answer: "",
        bank_id: "",
      },
    },
    signature_data_api_payload: {
      visitor_parameters: { uuid: "" },
      signature_data: "",
    },
    status_uuid: false,
    status_user_data: false,
    status_questions: false,
    status_signature: false,
  },
  reducers: {
    changeStep: (state, action) => {
      state.step = action.payload;
    },
    changeCollection: (state, action) => {
      state.collection = action.payload;
    },
    setPersonelData: (state, action) => {
      const { name, value } = action.payload;
      state.personal_data_api_payload.data[name] = value;
    },
    setDemographicData: (state, action) => {
      const { name, value } = action.payload;
      state.demographic_information_api_payload.question_data[name] = value;
    },
    setErrorMessages: (state, action) => {
      const { name, value } = action.payload;
      state.form_error_messages[name] = value;
    },
    setPreviousAddressActive: (state, action) => {
      if (action.payload === false) {
        state.personal_data_api_payload.data.txtPostPrevCode = "";
        state.personal_data_api_payload.data.txtPrevaddressline1 = "";
        state.personal_data_api_payload.data.txtPrevaddressline2 = "";
      }
      state.previos_address_active = action.payload;
    },
  },
  extraReducers: (builder) => {
    //fetchUUID
    builder
      .addCase(fetchUUID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUUID.fulfilled, (state, action) => {
        state.status_uuid = true;
        state.status = "succeeded";
        state.uuid = action.payload.uuid;
        state.uuid_manangement_api_payload.visitor_parameters.uuid =
          action.payload.uuid;

        state.personal_data_api_payload.visitor_parameters.uuid =
          action.payload.uuid;
        state.demographic_information_api_payload.visitor_parameters.uuid =
          action.payload.uuid;
        state.signature_data_api_payload.visitor_parameters.uuid =
          action.payload.uuid;
      })
      .addCase(fetchUUID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //fetchIPAddress
    builder
      .addCase(fetchIPAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIPAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.uuid_manangement_api_payload.data.ip_address =
          action.payload.data;
      })
      .addCase(fetchIPAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //postVisitorParams
    builder
      .addCase(postVisitorParams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postVisitorParams.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(postVisitorParams.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    //postPersonalData

    builder
      .addCase(postPersonalData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postPersonalData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.status_user_data = true;
      })
      .addCase(postPersonalData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //postDemographicInformation
    builder
      .addCase(postDemographicInformation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postDemographicInformation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.status_questions = true;
      })
      .addCase(postDemographicInformation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //postSignatureData
    builder
      .addCase(postSignatureData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postSignatureData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.status_signature = true;
      })
      .addCase(postSignatureData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  changeStep,
  changeCollection,
  setPersonelData,
  setDemographicData,
  setPreviousAddressActive,
  setErrorMessages,
} = insuranceSlice.actions;
export default insuranceSlice.reducer;
