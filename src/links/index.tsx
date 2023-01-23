import { FaStethoscope, FaWheelchair } from "react-icons/fa";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";

export const links = [
  {
    icon: <GiAlarmClock className="h-4.5 w-4.5" />,
    name: "Dashboard",
    link: "/dashboard",
    access: ["admin", "doctor", "patient", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <FaStethoscope className="h-4.5 w-4.5" />,
    name: "Appointment",
    link: "/appointment/:id",
    access: ["admin", "doctor", "patient", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <FaStethoscope className="h-4.5 w-4.5" />,
    name: "Doctor-Appointment",
    link: "/doctor-appointment/:id",
    access: ["admin", "doctor", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <AiOutlineUser className="h-4.5 w-4.5" />,
    name: "Doctors",
    link: "/doctors",
    access: ["admin", "patient", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <AiOutlineUser className="h-4.5 w-4.5" />,
    name: "Add Doctor",
    link: "/doctors/new",
    access: ["admin", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <AiOutlineUser className="h-4.5 w-4.5" />,
    name: "Profile",
    link: "/doctors/:id",
    access: ["admin", "doctor", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <FaWheelchair className="h-4.5 w-4.5" />,
    name: "Patients",
    link: "/patients",
    access: ["admin", "doctor", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <FaWheelchair className="h-4.5 w-4.5" />,
    name: "Add New Patient",
    link: "/patients/new/",
    access: ["admin", "doctor", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <FaWheelchair className="h-4.5 w-4.5" />,
    name: "Patient Profile",
    link: "/patients/:id",
    access: ["admin", "patient", "doctor", "secretary"],
    childrenLinks: [],
  },

  {
    icon: <AiOutlineAppstore className="h-4.5 w-4.5" />,
    name: "Messages",
    link: "/chatt",
    access: ["admin", "doctor", "patient", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <AiOutlineAppstore className="h-4.5 w-4.5" />,
    name: "Emails",
    link: "/email/:id",
    access: ["admin", "doctor", "patient", "secretary"],
    childrenLinks: [],
  },
  {
    icon: <AiOutlineAppstore className="h-4.5 w-4.5" />,
    name: "Calendar",
    link: "/calender",
    access: ["admin", "doctor", "patient", "secretary"],
    childrenLinks: [],
  },
];
