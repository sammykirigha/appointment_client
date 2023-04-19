import React, { useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Button, FormSelect, DatePickerField } from "../../../../common";
import { Form, Formik } from "formik";
import { resetNotifications } from "../../../../store/reducers/error.reducer";
import { CREATE_PATIENT_QUERY } from "../../../../constants/queries/patient";
import { createNewPatientAccountAction } from "../../../../store/actions/patient.action";
import { RootState } from "../../../../store";
import {
  ICreatePatientInputValues,
  ICreatePatientQueryStringValues,
} from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../../../setup/app-hooks";
import ImageUpload from "../upload_image";
import { genderOptions, maritalStatusOptions } from "../../helpers";
import CreateInput from "../../../../common/createInput";

const AddPatient = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  // const { doctor, doctors } = useSelector((state: RootState) => state.doctor);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: ICreatePatientInputValues) => {
    let myValues = JSON.parse(JSON.stringify(values));

    const inputValues: ICreatePatientInputValues = {
      firstname: myValues.firstname,
      lastname: myValues.lastname,
      email: myValues.email,
      phone: myValues.phone,
      address: myValues.address,
      dateOfBirth: myValues.dateOfBirth,
      gender: myValues.gender,
      age: parseInt(myValues.age),
      bloodGroup: myValues.bloodGroup,
      county: myValues.county,
      nationality: myValues.nationality,
      maritalStatus: myValues.maritalStatus,
      image: myValues.image,
      disability: myValues.disability,
    };

    const details: ICreatePatientQueryStringValues = {
      query: CREATE_PATIENT_QUERY,
      variables: {
        input: inputValues,
      },
    };

    const res: any = await dispatch(createNewPatientAccountAction(details));
    
    if (res.payload.success) {
      navigate("/patient", { replace: true });
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetNotifications({}));
    };
  }, [dispatch]);

  return (
    <div className="mx-4 min-h-screen bg-gray-200 pb-8">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between py-4 px-4 border">
        <h3 className="text-lg text-slate-900 font-bold">
          Create A New Patient Account
        </h3>
        <div>
          <p className="paragraph inline-flex items-center justify-between uppercase text-sm sm:text-sm md:text-md lg:text-md ">
            Doctris{" "}
            <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
            <span className="text-blue-700 text-md">firstName</span>{" "}
            <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
            <span className="text-blue-700 text-md">secondName</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-col md:flex-col lg:flex-row mt-3 w-full gap-3 rounded-md">
        <div className="sm:w-[100%] md:w-[100%] lg:w-[60%] bg-white rounded-md sm:h-auto">
          <div className="mx-3 mt-5 mb-5">
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                image: "",
                age: 0,
                address: "",
                county: "",
                bloodGroup: "",
                nationality: "",
                gender: "",
                dateOfBirth: "",
                maritalStatus: "",
                disability: false,
              }}
              onSubmit={onSubmit}
              // validationSchema={createDoctorSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
              }) => (
                <Form className="flex flex-col">
                  <div className="flex justify-center">
                    <h2 className="text-[1.7rem] font-[700]">Create Account</h2>
                  </div>
                  <ImageUpload setFieldValue={setFieldValue} />

                  <div className="flex mt-10  flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                    <CreateInput
                      name="firstname"
                      value={values.firstname}
                      type="text"
                      label="First Name"
                      placeholder="First Name:"
                    />
                    <CreateInput
                      name="lastname"
                      value={values.lastname}
                      type="text"
                      label="Last Name"
                      placeholder="Last Name:"
                    />
                  </div>
                  <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                    <CreateInput
                      name="email"
                      value={values.email}
                      type="email"
                      label="Email address:"
                      placeholder="Email address:"
                    />
                    <CreateInput
                      name="phone"
                      value={values.phone}
                      type="text"
                      label="Phone Num:"
                      placeholder="Phone Num:"
                    />
                  </div>
                  <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                    <CreateInput
                      name="address"
                      value={values.address}
                      type="text"
                      label="Address:"
                      placeholder="Address:"
                    />
                    <div className="flex flex-col sm:w-full ">
                      <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                        Gender
                      </label>
                      <FormSelect name="gender" options={genderOptions} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                    <div className="flex flex-col sm:w-full ">
                      <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                        DOB
                      </label>
                      <DatePickerField name="dateOfBirth" />
                    </div>
                    <div className="flex flex-col sm:w-full">
                      <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-3 ">
                        Disability
                      </label>
                      <div className="flex justify-between mt-0">
                        <div className="flex flex-row gap-3 items-center ">
                          <input
                            name="disability"
                            onChange={(event) => {
                              const value = event.target.checked ? true : false;
                              setFieldValue("disability", value);
                            }}
                            type="checkbox"
                            className="w-6 h-6"
                          />
                          <span className="text-xl text-slate-900">
                            Do you have any disability?
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                    <CreateInput
                      name="county"
                      value={values.county}
                      type="text"
                      label="County:"
                      placeholder="County of Residence:"
                    />
                    <CreateInput
                      name="bloodGroup"
                      value={values.bloodGroup}
                      type="text"
                      label="Blood Group:"
                      placeholder="Blood Group:"
                    />
                  </div>
                  <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                    <CreateInput
                      name="nationality"
                      value={values.nationality}
                      type="text"
                      label="Nationality:"
                      placeholder="Nationality:"
                    />
                    <div className="flex flex-col sm:w-full ">
                      <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                        Marital Status
                      </label>
                      <FormSelect
                        name="maritalStatus"
                        options={maritalStatusOptions}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                    <CreateInput
                      customStyles="!w-[50%]"
                      name="age"
                      value={values.age}
                      type="number"
                      label="Age:"
                      placeholder="age:"
                    />
                  </div>
                  <div className=" ml-3 ">
                    <Button
                      className={`mt-5 w-[200px] bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer`}
                      disabled={isSubmitting}
                      type="submit"
                      text="Create Account"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;

// {user?.role === "doctor" || user?.role === "user" ? null : (
//   <div className="sm:w-[100%] md:w-[100%] lg:w-[40%] bg-white rounded-md pb-5">
//     <div className="mt-4 pl-4 border-b border-gray-400 pb-7 pt-4">
//       <h4 className="text-lg text-slate-800 font-semibold">
//         Doctor's List
//       </h4>
//     </div>
//     <div className="slim-scrollbar overflow-auto h-[700px]  ">
//       {doctors &&
//         doctors?.map((doc, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-row  pl-3 mb-5 mt-2 mx-2 rounded-md border"
//             >
//               <div className="h-[100px] w-[100px] border my-3 rounded-lg drop-shadow-sm">
//                 <img
//                   src={doc?.image}
//                   alt="doc"
//                   height="100%"
//                   width="100%"
//                 />
//               </div>
//               <div className="flex flex-col ml-5 mt-3">
//                 <h5 className="text-lg text-slate-900 font-semibold">
//                   {doc.firstname} {doc.lastname}
//                 </h5>
//                 <span className="text-md text-gray-400">
//                   {doc.specialization}
//                 </span>
//                 <p className="text-md text-gray-400">
//                   {/* //TODO:show rating */}
//                   {/* {doc.experirnce} */}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       <div className="mt-3 ml-7 mb-3">
//         <Button
//           text="All Doctors"
//           // to="/"
//         />
//       </div>
//     </div>
//   </div>
// )}
