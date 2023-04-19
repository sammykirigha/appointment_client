import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../setup/app-hooks";
import useFetchPatient from "../../../../setup/app-hooks/fetch-patients";
import { resetNotifications } from "../../../../store/reducers/error.reducer";
import Appointment from "../Appointment";

const PatientAppointments = () => {
  const { patient, loading } = useAppSelector((state) => state.patient);
  const dispatch = useAppDispatch();

  useFetchPatient();

  useEffect(() => {
    return () => dispatch(resetNotifications());
  }, [dispatch]);

  return <Appointment appointments={patient?.appointments} loading={loading} />;
};

export default PatientAppointments;
