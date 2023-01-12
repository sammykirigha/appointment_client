import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from "../../utils/httpRequests";

import {
    resetNotifications,
    setErrorNotification,
    setMessageNotification,
} from "../reducers/error.reducer";
import { logoutUserSuccess } from "../reducers/auth.reducer";
import { parseError } from "../../utils/parseError";
import {  ME_QUERY } from "../../constants/queries/auth";
import { IAuthenticatedUserReturnedData, IAuthenticatedUserInputValues, IConfirmEmailInputValues, IRestPasswordInputValues } from "../models/interfaces";

export interface IForgotPassword {
    query: string;
    variables: {
        input: {
            email: string;
        };
    };
}

//register user action
export const signUpUserAction = createAsyncThunk(
    "user/signup",
    async (data : IAuthenticatedUserInputValues, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications({}));
            const response = await apiPost(data);
            return {
                user: response.data.registerUser as IAuthenticatedUserReturnedData,
                success: true,
            };
        } catch (err) {
           const error = parseError(err)
            thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

//login user action
export const signinUserAction = createAsyncThunk(
    "user/login",
    async (data:IAuthenticatedUserInputValues, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications({}));
            const response = await apiPost(data);
            localStorage.setItem("auth-token", response.data.loginUser.token);
            return {
                user: response.data.loginUser as IAuthenticatedUserReturnedData,
                success: true,
            };
        } catch (err) {
            const error = parseError(err)
            thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

//forgotpassword
export const forgotPasswordAction = createAsyncThunk(
    "user/forgetPassword",
    async (data: IForgotPassword, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications({}));
            const response = await apiPost(data);
            thunkAPI.dispatch(setMessageNotification(response.data.forgotUserPasssword));
            return {
                message: response.data.forgotUserPasssword as string,
                success: true,
            };
        } catch (err) {
             const error = parseError(err)
            thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

//resetpassord action
export const resetPasswordAction = createAsyncThunk(
    "user/resetPassord",
    async (data: IRestPasswordInputValues, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications({}));
            const response = await apiPost(data);
            return {
                message: response.data.resetUsersPassword as string,
                success: true,
            };
        } catch (err) {
            const error = parseError(err)
            thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);

//logout user
// export const logoutUserAction = () => async (dispatch) => {
//     try {
//         localStorage.clear();
//         return dispatch(logoutUserSuccess());
//     } catch (e) {
//         return console.error(e.message);

//     }

// };

//getcurrent user
export const getCurrentUserAction = createAsyncThunk(
    "user/current",
    async (_data, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications({}));
            const response = await apiPost({ query: ME_QUERY });
            const { token, ...rest } = response.data.currentUser;
            localStorage.setItem("auth-token", token)
            return {
                user: rest,
                success: true,
            };
        } catch (err) {
            localStorage.clear()
            return {
                success: false
            }
        }
    }
);



// confirm email
export const confirmEmailAction = createAsyncThunk(
    "user/confirm-email",
    async (data:IConfirmEmailInputValues, thunkAPI) => {
        try {
            thunkAPI.dispatch(resetNotifications({}));
            const response = await apiPost(data);
            thunkAPI.dispatch(setMessageNotification(response.data.resetUsersPassword));
            return {
                message: response.data.resetUsersPassword as string,
                success: true,
            };
        } catch (err) {
            const error = parseError(err)
             thunkAPI.dispatch(setErrorNotification(error));
            return thunkAPI.rejectWithValue({
                success: false,
            });
        }
    }
);