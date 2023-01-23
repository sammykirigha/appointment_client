import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "..";
import { GET_DOCTOR_QUERY } from "../../../constants/queries/doctors";
import { getDoctorAction } from "../../../store/actions/doctors.action";

const useFetchDoctor = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [doctor, setDoctor] = useState({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?.role === "doctor") {
      if (user?.email) {
        const inputValues = {
          email: user?.email,
        };

        const details = {
          query: GET_DOCTOR_QUERY,
          variables: {
            input: inputValues,
          },
        };

        const getDoctor = async () => {
          const res: any = await dispatch(getDoctorAction(details));
          setDoctor(res.payload.doctor);
          return res.payload;
        };
        getDoctor();
      }
    }
  }, [user?.email, dispatch, setDoctor, user?.role]);

  return [doctor];
};

export default useFetchDoctor;
