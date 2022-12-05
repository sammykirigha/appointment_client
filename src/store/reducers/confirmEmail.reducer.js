import { createSlice } from "@reduxjs/toolkit";
import { confirmEmailAction } from "../actions/auth.action";

const initialState = {
  message: null,
  loading: false,
};

export const confirmEmailSlice = createSlice({
  name: "confirm-email",
  initialState,
  extraReducers: (builder) => {
    //builders
    builder.addCase(confirmEmailAction.pending, (state, action) => {
      state.loading = true;
      state.message = null;
    });

    //fullfilled
    builder.addCase(confirmEmailAction.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });

    //rejected
    builder.addCase(confirmEmailAction.rejected, (state, action) => {
      state.loading = false;
      state.message = null;
    });
  },
});

const { reducer } = confirmEmailSlice;

export default reducer;
