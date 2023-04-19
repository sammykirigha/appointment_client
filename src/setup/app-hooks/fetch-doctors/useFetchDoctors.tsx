import { useEffect, useState } from "react";
import { useAppDispatch } from "..";
import { getAllDoctorsAction } from "../../../store/actions/doctors.action";

const useFetchAllDoctors = () => {
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

export default useFetchAllDoctors;
