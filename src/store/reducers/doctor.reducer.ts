import { createSlice } from "@reduxjs/toolkit";
import {  getAllDoctorsAction, getDoctorAction } from "../actions/doctors.action";
import { IDoctorsReturned } from "../models/interfaces";

interface IDoctorsReducerInitialstate {
    doctors: IDoctorsReturned[],
    doctor: IDoctorsReturned | null,
    loading: boolean,
}

const initialState:IDoctorsReducerInitialstate = {
    doctors: [],
    doctor: null,
    loading: false,
};

export const authSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
        //builders
        // builder.addCase(createDoctorAction.pending, (state, action) => {
        //     state.loading = true;
        // });

        builder.addCase(getDoctorAction.pending, (state, action) => {
            state.loading = true;
        });

        //  builder.addCase(changePasswordAction.pending, (state, action) => {
        //     state.loading = true;
        //  });
        
        // builder.addCase(updateDoctorAction.pending, (state, action) => {
        //     state.loading = true;
        // });
        
         builder.addCase(getAllDoctorsAction.pending, (state, action) => {
         state.loading = true;
         });

        //fullfilled
        // builder.addCase(createDoctorAction.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.doctor = action.payload.doctor;
        // });

        builder.addCase(getDoctorAction.fulfilled, (state, action) => {
            state.loading = false;
            state.doctor = action.payload.doctor;
        });

        //  builder.addCase(updateDoctorAction.fulfilled, (state, action) => {
        //     state.loading = false;
        //  });
        
        // builder.addCase(changePasswordAction.fulfilled, (state, action) => {
        //     state.loading = false;
        // });
        
         builder.addCase(getAllDoctorsAction.fulfilled, (state, action) => {
             state.loading = false;
             state.doctors = action.payload.doctors
         });


        //rejected
        // builder.addCase(createDoctorAction.rejected, (state, action) => {
        //     state.loading = false;
        //     state.doctor = null;
        // });

        builder.addCase(getDoctorAction.rejected, (state, action) => {
            state.loading = false;
            state.doctor = null;
        });

        // builder.addCase(updateDoctorAction.rejected, (state, action) => {
        //     state.loading = false;
        // });

        // builder.addCase(changePasswordAction.rejected, (state, action) => {
        //     state.loading = false;
        // });
        
         builder.addCase(getAllDoctorsAction.rejected, (state, action) => {
             state.loading = false;
         });

    },
});

const { reducer } = authSlice;

export default reducer;
