import { createSlice } from "@reduxjs/toolkit";
// import { changePasswordAction, createDoctorAction, getAllDoctorsdAction, getDoctorAction, updateDoctorAction } from "../actions/doctors.action";

// const initialState = {
//     doctors: [],
//     doctor: null,
//     loading: false,
// };

// export const authSlice = createSlice({
//     name: "doctor",
//     initialState,
//     extraReducers: (builder) => { 
//         //builders
//         builder.addCase(createDoctorAction.pending, (state, action) => {
//             state.loading = true;
//         });

//         builder.addCase(getDoctorAction.pending, (state, action) => {
//             state.loading = true;
//         });

//          builder.addCase(changePasswordAction.pending, (state, action) => {
//             state.loading = true;
//          });
        
//         builder.addCase(updateDoctorAction.pending, (state, action) => {
//             state.loading = true;
//         });
        
//          builder.addCase(getAllDoctorsdAction.pending, (state, action) => {
//          state.loading = true;
//          });

//         //fullfilled
//         builder.addCase(createDoctorAction.fulfilled, (state, action) => {
//             state.loading = false;
//             state.doctor = action.payload.doctor;
//         });

//         builder.addCase(getDoctorAction.fulfilled, (state, action) => {
//             state.loading = false;
//             state.doctor = action.payload.doctor;
//         });

//          builder.addCase(updateDoctorAction.fulfilled, (state, action) => {
//             state.loading = false;
//          });
        
//         builder.addCase(changePasswordAction.fulfilled, (state, action) => {
//             state.loading = false;
//         });
        
//          builder.addCase(getAllDoctorsdAction.fulfilled, (state, action) => {
//              state.loading = false;
//              state.doctors = action.payload.doctors
//          });


//         //rejected
//         builder.addCase(createDoctorAction.rejected, (state, action) => {
//             state.loading = false;
//             state.doctor = null;
//         });

//         builder.addCase(getDoctorAction.rejected, (state, action) => {
//             state.loading = false;
//             state.doctor = null;
//         });

//         builder.addCase(updateDoctorAction.rejected, (state, action) => {
//             state.loading = false;
//         });

//         builder.addCase(changePasswordAction.rejected, (state, action) => {
//             state.loading = false;
//         });
        
//          builder.addCase(getAllDoctorsdAction.rejected, (state, action) => {
//              state.loading = false;
//          });

//     },
// });

// const { reducer } = authSlice;

// export default reducer;
