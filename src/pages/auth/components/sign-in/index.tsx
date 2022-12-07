import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../../../constants/queries/auth";
import InputField from "../../../../common/InputField";
import { signinUserAction } from "../../../../store/actions/auth.action";
import { useEffect } from "react";
import { resetNotifications } from "../../../../store/reducers/error.reducer";
import { FaSpinner } from "react-icons/fa";
import { ISignInQueryString, ISignInInputValues } from "../../interfaces";
import { SignInSchema } from "../../validations";
import { useAppDispatch, useAppSelector } from "../../../../setup/app-hooks";

type Props = {};

export const LoginForm = (props: Props) => {
  const { user, loading } = useAppSelector((state) => state.auth);
  const { message } = useAppSelector((state) => state.notifications);
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const onSubmit = async (values: ISignInInputValues) => {
    const inputValues = {
      email: values.email,
      password: values.password,
    };

    const details: ISignInQueryString = {
      query: LOGIN_USER,
      variables: {
        input: inputValues,
      },
    };

    await dispatch(signinUserAction(details));
  };

  useEffect(() => {
    setError(message!);
    setTimeout(() => {
      setError("");
    }, 3000);

    if (user?.["role"] === "user") {
      navigate("/landing-page", { replace: true });
    }
    if (user?.["role"] === "doctor") {
      navigate("/doctor", { replace: true });
    }

    if (user?.["role"] === "patient") {
      navigate("/patient", { replace: true });
    }
    // if (user.role === "admin") {
    //         navigate("../layout", { replace: true });
    // }
  }, [user, navigate, message]);

  useEffect(() => {
    return () => {
      dispatch(resetNotifications({}));
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col mt-3 ">
      <div className="mt-5 bg-white opacity-90 border sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={onSubmit}
          validationSchema={SignInSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="pb-5 px-10">
              <div className="mb-3 w-full flex justify-center ">
                <h3 className="px-auto text-[1.7rem] pt-5  font-bold">
                  Welcome Back
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <InputField name="email" type="email" label="Enter email:" />
                <ErrorMessage name="email">
                  {(error) => <p className="text-sm text-red-600">{error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <InputField name="password" type="password" label="Password:" />
                <ErrorMessage name="password">
                  {(error) => <p className="text-md text-red-600"> {error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex gap-2 my-3 justify-between">
                <div className="flex flex-row gap-3 items-center mt-3">
                  <Field name="rememberMe" type="checkbox" />
                  <span className="text-lg text-slate-900">Remember me</span>
                </div>
                <div className="flex flex-col gap-3 items-center mt-3">
                  <span
                    onClick={() => navigate("/forgot-password")}
                    className="text-lg ml-3 text-slate-900 cursor-pointer font-medium text-blue-600 hover:underline"
                  >
                    Forgot your password?
                  </span>
                </div>
              </div>

              <button
                className={`mt-5 w-full flex justify-center items-center gap-3 bg-blue-400 hover:bg-blue-600 text-[1.5rem] font-[500] text-white py-2 px-8 rounded-md ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                } `}
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting && <FaSpinner className="animate-spin" />} Submit
              </button>
              <div className=" flex justify-even items-center w-[100%] my-5">
                <div className="h-[1px] bg-gray-500 w-[45%]  "></div>
                <div className="text-lg font-semibold w-[10%] mr-2 ml-5 p-0">
                  or
                </div>
                <div className="h-[1px] bg-gray-500 w-[45%] "></div>
              </div>
              <div className="flex justify-between mt-4 w-full gap-x-5">
                <div className="border border-indigo-600 group bg-blue-100 hover:bg-blue-400 rounded-md flex items-center justify-center w-[50%] h-[50px] cursor-pointer">
                  <FaFacebook className="h-6 w-6 group-hover:text-white" />
                  <span className="ml-3 text-[1.1rem]  text-blue-400 group-hover:text-white">
                    Facebook
                  </span>
                </div>
                <div className="border border-indigo-600 bg-blue-100 group hover:bg-blue-400 rounded-md flex items-center justify-center w-[50%] h-[50px] cursor-pointer">
                  <FaGoogle className="h-5 w-5 group-hover:text-white" />
                  <span className="ml-3 text-[1.1rem]  text-blue-400 group-hover:text-white">
                    Google
                  </span>
                </div>
              </div>

              <div className="mt-5 flex justify-center">
                <h3 className="text-[1rem] text-black">
                  Don't have an account?{" "}
                  <strong className="cursor-pointer tracking-wide text-[1rem] text-slate-900 cursor-pointer font-medium text-blue-600 hover:underline">
                    <Link to="/">Sign Up</Link>
                  </strong>
                </h3>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
