// import Delete from "../components/emails/Delete";
// import Drafts from "../components/emails/Drafts";
// import Inbox from "../components/emails/Inbox";
// import Notes from "../components/emails/Notes";
// import Sent from "../components/emails/Sent";
// import Spam from "../components/emails/Spam";
// import Starred from "../components/emails/Starred";
// import ChatMessages from "../components/others/ChatMessages";
// import PatientProfileSettings from "../components/others/PatientProfileSettings";
// import Doctors from "../pages/doctors/Doctors";
// import PatientAppointments from "../pages/patients/PatientAppointments";
// import PatientsProfile from "../pages/patients/Patients-Profile";
// import Calender from "../pages/social/Calendar";
// import Chat from "../pages/social/Chat";
// import Chatts from "../pages/social/Chatts";
// import Email from "../pages/social/Email";
// import ReadyToChat from "../pages/social/ReadyToChat";
// import SingleAppointment from "../pages/SingleAppointment";
// import Profile from "../pages/patients/Profile";
import DashboardRoutes from "./DashboardRoutes";
import PatientDashboard from "../../pages/patients/components/dashboard";
import UpcomingAppointments from "../../pages/patients/components/appointments/UpcomingAppointments";
import PastAppointments from "../../pages/patients/components/appointments/PastAppointments";

export const PatientRoutes = [
  {
    path: "patient",
    exact: true,
    component: DashboardRoutes,
    children: [
      { path: "", component: PatientDashboard },
      {
        path: "dashboard",
        exact: true,
        component: PatientDashboard,
        children: [
          { path: "", exact: true, component: UpcomingAppointments },
          {
            path: "upcoming-appointments",
            exact: true,
            component: UpcomingAppointments,
          },
          {
            path: "past-appointments",
            exact: true,
            component: PastAppointments,
          },
        ],
      },
      // {
      //   path: "appointment/:id",
      //   exact: true,
      //   component: PatientAppointments,
      // },
      // { path: "doctors", exact: true, component: Doctors },
      // {
      //   path: "single-appointment/:appointmentId",
      //   exact: true,
      //   component: SingleAppointment,
      // },
      // {
      //   path: "patients/:id",
      //   exact: true,
      //   component: PatientsProfile,
      //   children: [
      //     { path: "", component: Profile },
      //     { path: "profile", exact: true, component: Profile },
      //     {
      //       path: "settings",
      //       exact: true,
      //       component: PatientProfileSettings,
      //     },
      //   ],
      // },
      // {
      //   path: "chatt",
      //   exact: true,
      //   component: Chat,
      //   children: [
      //     { path: "", component: Chatts },
      //     { path: "chatts", exact: true, component: Chatts },
      //     {
      //       path: "ready-to-chat",
      //       exact: true,
      //       component: ReadyToChat,
      //     },
      //   ],
      // },
      // {
      //   path: "email/:id",
      //   exact: true,
      //   component: Email,
      //   children: [
      //     { path: "", component: Inbox },
      //     { path: "inbox", exact: true, component: Inbox },
      //     { path: "spam", exact: true, component: Spam },
      //     { path: "sent", exact: true, component: Sent },
      //     { path: "starred", exact: true, component: Starred },
      //     { path: "drafts", exact: true, component: Drafts },
      //     { path: "delete", exact: true, component: Delete },
      //     { path: "notes", exact: true, component: Notes },
      //   ],
      // },
      // { path: "calender", exact: true, component: Calender },
    ],
  },
];
