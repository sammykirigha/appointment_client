import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_ALL_DOCTORS_QUERY } from "../../queries/doctors";
import apiPost from "../../utils/https";
import {  resetNotifications, setErrorNotification, setMessageNotification } from "../reducers/error.reducer";

export const createDoctorAction = createAsyncThunk(
    "doctors/new",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                doctor: response.data.createDoctor,
                success: true,
            };
        } catch (err) {
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

export const getDoctorAction = createAsyncThunk(
    "doctors/get",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                doctor: response.data.getOneDoctor,
                success: true,
            };
        } catch (err) {
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

export const updateDoctorAction = createAsyncThunk(
    "doctors/update",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            thunkAPI.dispatch(setMessageNotification(response.data.updateDoctor));
            return {
                message: response.data.updateDoctor,
                success: true,
            };
        } catch (err) {
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);


export const changePasswordAction = createAsyncThunk(
    "doctors/change-password",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            thunkAPI.dispatch(setMessageNotification(response.data.changeDoctorsPassword));
            return {
                message: response.data.changeDoctorsPassword,
                success: true,
            };
        } catch (err) {
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

export const getAllDoctorsdAction = createAsyncThunk(
    "doctors/all",
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost({ query: FETCH_ALL_DOCTORS_QUERY });
            
            return {
                doctors: response.data.getDoctors,
                success: true,
            };
        } catch (err) {
            thunkAPI.dispatch(setErrorNotification(err));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);


