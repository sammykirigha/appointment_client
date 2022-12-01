import { createSlice } from "@reduxjs/toolkit";
import { changePateintPasswordAction, createNewPatientAccountAction, fetchSinglePatientAction, updatePatientAction } from "../actions/patient.action";



const initialState = {
    patients: [],
    patient: null,
    loading: false,
};

export const createPatientAccountdSlice = createSlice({
    name: "create-patient-account",
    initialState,
    extraReducers: (builder) => {
        //builders
        builder.addCase(createNewPatientAccountAction.pending, (state, action) => {
            state.loading = true;
            state.patient = null;
        });
        builder.addCase(fetchSinglePatientAction.pending, (state, action) => {
            state.loading = true;
            state.patient = null;
        });

        builder.addCase(updatePatientAction.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(changePateintPasswordAction.pending, (state, action) => {
            state.loading = true
        })

        //fullfilled
        builder.addCase(createNewPatientAccountAction.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload.patient;
        });
        builder.addCase(fetchSinglePatientAction.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload.patient;
        });
        builder.addCase(updatePatientAction.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(changePateintPasswordAction.fulfilled, (state, action) => {
            state.loading = false;
        })

        //rejected
        builder.addCase(createNewPatientAccountAction.rejected, (state, action) => {
            state.loading = false;
            state.patient = null;
        });
        builder.addCase(fetchSinglePatientAction.rejected, (state, action) => {
            state.loading = false;
            state.patient = null;
        });
        builder.addCase(updatePatientAction.rejected, (state, action) => {
            state.loading = false;
        })
        builder.addCase(changePateintPasswordAction.rejected, (state, action) => {
            state.loading = false
        })

    },
});


const { reducer } = createPatientAccountdSlice;

export default reducer;
