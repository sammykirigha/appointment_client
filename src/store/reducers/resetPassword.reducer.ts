import { createSlice } from "@reduxjs/toolkit";
import { resetPasswordAction } from "../actions/auth.action";
import { IInitialState } from "./confirmEmail.reducer";

const initialState:IInitialState = {
  message: null,
  loading: false,
};

export const resetPasswordSlice = createSlice({
  name: "reset-password",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //builders/pending
    builder.addCase(resetPasswordAction.pending, (state, action) => {
      state.loading = true;
      state.message = null;
    });

    //fullfilled
    builder.addCase(resetPasswordAction.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });

    //rejected
    builder.addCase(resetPasswordAction.rejected, (state, action) => {
      state.loading = false;
      state.message = null;
    });
  },
});

const { reducer } = resetPasswordSlice;

export default reducer;
