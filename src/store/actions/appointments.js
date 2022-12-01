import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/https";
import { resetNotifications, setErrorNotification } from "../reducers/error.reducer";

export const createAppointmentAction = createAsyncThunk(
    "appointment/new",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                appointment: response.data.createAppointment,
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

export const getAppointmentsByDate = createAsyncThunk(
    "appointment/get",
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications());
            const response = await apiPost(data);
            return {
                appointments: response.data.getAppointmentsByDate,
                success: true
            }
        } catch (error) {
            thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false
            })
        }
    }
)