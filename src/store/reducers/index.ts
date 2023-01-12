import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./auth.reducer";
import errorReducer from "./error.reducer";
// import doctorReducer from "./doctor.reducer";
import forgetPasswordReducer from "./forgetPassword.reducer";
import resetPassswordReducer from "./resetPassword.reducer";
import confirmEmaildReducer from "./confirmEmail.reducer";
import createPatientAccountdReducer from "./patient.reducer";
import fetchSignlePatientReducer from "./patient.reducer";
// import Appointment from "./appointments";

export const rootReducer = combineReducers({
	notifications: errorReducer,
	auth: reducer,
	// doctor: doctorReducer,
	forgotPassword: forgetPasswordReducer,
	resetPasssword: resetPassswordReducer,
	confirmEmail: confirmEmaildReducer,
	createPatientAccount: createPatientAccountdReducer,
	patient: fetchSignlePatientReducer,
	// appoinment: Appointment
})


