import { createSlice } from "@reduxjs/toolkit";
import {IAuthenticatedUserReturnedData} from "../models/interfaces";

import {
  signUpUserAction,
  signinUserAction,
  getCurrentUserAction,
} from "../actions/auth.action";
import { boolean } from "yup";

const initialState = {
  user: {} as IAuthenticatedUserReturnedData | null,
  loading:  false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUserSuccess: (state, action) => {
      state.loading = false;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    //builders
    builder.addCase(signinUserAction.pending, (state, action) => {
      state.loading = true;
      state.user = null;
    });

    builder.addCase(signUpUserAction.pending, (state, action) => {
      state.loading = true;
      state.user = null;
    });

    //fullfilled
    builder.addCase(signinUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user! = action.payload.user;
    });

    builder.addCase(signUpUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(getCurrentUserAction.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    // rejected
    builder.addCase(signinUserAction.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
    });

    builder.addCase(signUpUserAction.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
    });
  },
});

export const { logoutUserSuccess } = authSlice.actions;
const { reducer } = authSlice;

export default reducer;
