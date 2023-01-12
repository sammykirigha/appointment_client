import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/httpRequests";
import { parseError } from "../../utils/parseError";
import { ICreatePatientInputData, ICreatePatientReturnedData } from "../models/interfaces";
import {
  resetNotifications,
  setErrorNotification,
  setMessageNotification,
} from "../reducers/error.reducer";

export const createNewPatientAccountAction = createAsyncThunk(
  "patient/create-account",
  async (data: ICreatePatientInputData, thunkAPI) => {
    try {
      thunkAPI.dispatch(resetNotifications({}));
      const response = await apiPost(data);
      return {
        user: response.data.createPatient as ICreatePatientReturnedData,
        success: true,
      };
    } catch (err) {
      const error = parseError(err);
      thunkAPI.dispatch(setErrorNotification(error));
      return thunkAPI.rejectWithValue({
        success: false,
      });
    }
  }
);

// export const fetchSinglePatientAction = createAsyncThunk(
//   "patient/get-one",
//   async (data, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(resetNotifications());
//       const response = await apiPost(data);
//       return {
//         patient: response.data.fetchSinglePatient,
//         success: true,
//       };
//     } catch (err) {
//       const error = parseError(err);
//       thunkAPI.dispatch(setErrorNotification(error));
//       return thunkAPI.rejectWithValue({
//         success: false,
//       });
//     }
//   }
// );

// export const updatePatientAction = createAsyncThunk(
//   "patient/update-one",
//   async (data, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(resetNotifications());
//       const response = await apiPost(data);
//       thunkAPI.dispatch(
//         setMessageNotification(response.data.changeDoctorsPassword)
//       );
//       return {
//         message: response.data.updatePatientInfo,
//         success: true,
//       };
//     } catch (err) {
//       const error = parseError(err);
//       thunkAPI.dispatch(setErrorNotification(error));
//       return thunkAPI.rejectWithValue({
//         success: false,
//       });
//     }
//   }
// );

// export const changePateintPasswordAction = createAsyncThunk(
//   "patient/change-password",
//   async (data, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(resetNotifications());
//       const response = await apiPost(data);
//       return {
//         message: response.data.changePatientPassword,
//         success: true,
//       };
//     } catch (err) {
//       const error = parseError(err);
//       thunkAPI.dispatch(setErrorNotification(error));
//       return thunkAPI.rejectWithValue({
//         success: false,
//       });
//     }
//   }
// );
