import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../setup/app-hooks";
import { getAllDoctorsAction } from "../../../store/actions/doctors.action";

const useFetchAllDoctor = () => {
  const [doctors, setDoctors] = useState({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getDoctors = async () => {
      const res: any = await dispatch(getAllDoctorsAction());
      setDoctors(res.payload.doctors);
      return res.payload;
    };
    getDoctors();
  }, [dispatch]);

  return [doctors];
};

export default useFetchAllDoctor;
