
import { createSlice } from "@reduxjs/toolkit";
import { confirmEmailrAction } from "../actions/auth.action";


const initialState = {
    message: null,
    loading: false,
};

export const confirmEmailSlice = createSlice({
    name: "confirm-email",
    initialState,
    extraReducers: (builder) => {
        //builders
        builder.addCase(confirmEmailrAction.pending, (state, action) => {
            state.loading = true;
            state.message = null;
        });

        //fullfilled
        builder.addCase(confirmEmailrAction.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        });

        //rejected
        builder.addCase(confirmEmailrAction.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
        });

    },
});


const { reducer } = confirmEmailSlice;

export default reducer;