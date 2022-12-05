import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logo from "../../../../assets/images/logo.jpg";
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
    <div className="flex flex-col mt-10 ">
      <div className="mx-auto flex">
        <img
          src={logo}
          alt="logo"
          height="54"
          width="64"
          className="ml-2 cursor-pointer rounded-full"
        />
        <h3 className="text-2xl text-gray-800 font-bold pt-3 pl-1 cursor-pointer ml-3">
          Doctris
        </h3>
      </div>
      <div className="mt-5 bg-white border sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
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
              <div className="my-6 w-full flex justify-center ">
                <h3 className="px-auto text-2xl font-bold">Welcome Back</h3>
              </div>
              <div className="flex flex-col gap-2">
                <InputField name="email" type="email" label="Enter email:" />
                <ErrorMessage name="email">
                  {(error) => <p className="text-md text-red-600">{error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <InputField
                  name="password"
                  //   validate={validatePassword}
                  type="password"
                  label="Password:"
                />
                <ErrorMessage name="password">
                  {(error) => <p className="text-md text-red-600"> {error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-row gap-3 items-center mt-3">
                  <Field name="rememberMe" type="checkbox" />
                  <span className="text-lg text-slate-900">Remember me</span>
                </div>
                <div className="flex flex-row gap-3 items-center mt-3">
                  <span
                    onClick={() => navigate("/forgot-password")}
                    className="text-lg text-slate-900 cursor-pointer font-medium hover:text-bluee-700 hover:text-blue-800"
                  >
                    Forgot your passsword?
                  </span>
                </div>
              </div>

              <button
                className={`mt-5 w-full flex justify-center items-center gap-3 bg-blue-500 text-white py-2 px-8 rounded-md ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                } `}
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting && <FaSpinner className="animate-spin" />} Submit
              </button>
              <div className=" flex justify-center mt-2">
                <span className="mx-auto text-lg font-semibold">or</span>
              </div>
              <div className="flex justify-between mt-4 w-full gap-x-5">
                <div className="border bg-blue-100 rounded-md flex items-center justify-center w-[50%] h-[50px] cursor-pointer">
                  <FaFacebook className="h-6 w-6" />
                  <span className="ml-5">Facebook</span>
                </div>
                <div className="border bg-blue-100 rounded-md flex items-center justify-center w-[50%] h-[50px] cursor-pointer">
                  <FcGoogle className="h-6 w-6" />
                  <span className="ml-5">Google</span>
                </div>
              </div>

              <div className="mt-5 flex justify-center">
                <h3 className="text-md">
                  Don't have an account?{" "}
                  <strong className="cursor-pointer">
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
