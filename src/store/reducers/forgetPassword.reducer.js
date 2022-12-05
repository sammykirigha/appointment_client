// import { createSlice } from "@reduxjs/toolkit";
// import { forgotPasswordAction } from "../actions/auth.action";

// const initialState = {
//     message: null,
//     loading: false,
// };

// export const forgetPasswordSlice = createSlice({
//     name: "forget-password",
//     initialState,
//     extraReducers: (builder) => {
//         //builders
//         builder.addCase(forgotPasswordAction.pending, (state, action) => {
//             state.loading = true;
//             state.message = null;
//         });

//         //fullfilled
//         builder.addCase(forgotPasswordAction.fulfilled, (state, action) => {
//             state.loading = false;
//             state.message = action.payload.message;
//         });

//         //rejected
//         builder.addCase(forgotPasswordAction.rejected, (state, action) => {
//             state.loading = false;
//             state.message = null;
//         });

//     },
// });

// const { reducer } = forgetPasswordSlice;

// export default reducer;
