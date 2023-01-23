import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "..";
import { GET_ONE_PATIENT_QUERY } from "../../../constants/queries/patient";
import { fetchSinglePatientAction } from "../../../store/actions/patient.action";
import { IGetSinglePatientInputData } from "../../../store/models/interfaces";

const useFetchPatient = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [patient, setPatient] = useState({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?.role === "patient") {
      if (user?.user_id) {
        const inputValues = {
          id: user?.user_id,
        };

        const details: IGetSinglePatientInputData = {
          query: GET_ONE_PATIENT_QUERY,
          variables: {
            input: inputValues,
          },
        };

        const getPatient = async () => {
          const res: any = await dispatch(fetchSinglePatientAction(details));
          setPatient(res.payload.patient);
        };
        getPatient();
      }
    }
  }, [user?.role, dispatch, setPatient, user?.user_id]);

  return [patient];
};

export default useFetchPatient;
