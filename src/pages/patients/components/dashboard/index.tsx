import { gql } from "@apollo/client";
import React, { useEffect } from "react";
import DashboardCards from "../../../../common/dashboardCards";
import Title from "../../../../common/title";
import { useAppDispatch, useAppSelector } from "../../../../setup/app-hooks";
import useFetchPatient from "../../../../setup/app-hooks/fetch-patients";
import { resetNotifications } from "../../../../store/reducers/error.reducer";
import AppointmentsNav from "../appointments_navbar";

type Props = {};

const PatientDashboard = (props: Props) => {
  const MESSAGE_SUBSCRIPTION = gql`
    subscription newNotification {
      newNotification {
        message {
          id
          message
          sender_ {
            id
            username
          }
          receiver_ {
            username
            id
          }
        }
      }
    }
  `;

  // const { data } = useSubscription(MESSAGE_SUBSCRIPTION);

  const { patient } = useAppSelector((state) => state.patient);
  const dispatch = useAppDispatch();

  useFetchPatient();

  useEffect(() => {
    return () => {
      dispatch(resetNotifications({}));
    };
  }, [dispatch]);

  return (
    <div className="mx-5 sm:px-3 sm:pt-3 md:pt-0 lg:pb-3">
      <Title title={"Dashbord"} />
      <div className="bg-white mt-3 border shadow-md flex flex-col sm:flex-col md:flex-row items-center py-4 rounded-md ">
        {/* <img src={welcome} alt="" /> */}
        <div className="ml-5 mt-5 sm:mt-5 md:mt-0 lg:mt-0">
          <span className="text-xl text-slate-900 tracking-wide font-bold">
            Welcome back
          </span>
          <h2 className="text-2xl text-blue-600 tracking-wider font-bold mt-2">
            {patient?.firstname} {patient?.lastname}
          </h2>
          <p className="text-xl mt-3 font-normal text-gray-700 pr-3">
            We would like to take this opportunity to welcome you to our
            practice and to thank you for choosing our physicians to participate
            in your healthcare. We look forward to providing you with
            personalized, comprehensive health care focusing on wellness and
            prevention.
          </p>
        </div>
      </div>
      <DashboardCards />
      <div>
        <AppointmentsNav />
      </div>
    </div>
  );
};

export default PatientDashboard;
