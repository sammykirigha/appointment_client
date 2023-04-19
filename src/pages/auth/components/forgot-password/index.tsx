import React, { useState } from "react";
import { ErrorMessage, Formik, Form } from "formik";
import InputField from "../../../../common/InputField";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FORGET_PASSWORD } from "../../../../constants/queries/auth";
import { forgotPasswordAction } from "../../../../store/actions/auth.action";
import { FaSpinner } from "react-icons/fa";
import { useAppDispatch } from "../../../../setup/app-hooks";

type Details = {
  query: string;
  variables: {
    input: {
      email: string;
    };
  };
};

interface IInputValues {
  email: string;
}

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: IInputValues) => {
    const inputValues = {
      email: values.email,
    };

    const details: Details = {
      query: FORGET_PASSWORD,
      variables: {
        input: inputValues,
      },
    };

    let res: any = await dispatch(forgotPasswordAction(details));

    if (res.payload.success) {
      navigate("/login");
    }
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("Email can't be empty"),
  });

  return (
    <div className="flex flex-col mt-[10%] ">
      <div className="mt-5 bg-white border sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={onSubmit}
          validationSchema={SignUpSchema}
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
              <div className="my-10 w-full flex justify-center ">
                <h3 className="px-auto text-2xl font-bold">Send Your Email</h3>
              </div>
              <div className="flex flex-col gap-2">
                <InputField name="email" type="email" label="Enter email:" />
                <ErrorMessage name="email">
                  {(error) => <p className="text-md text-red-600">{error}</p>}
                </ErrorMessage>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
