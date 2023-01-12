import React, { useEffect, useState } from "react";

import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import InputField from "../../../../common/InputField";
import { RESET_PASSWORD } from "../../../../constants/queries/auth";
import { resetPasswordAction } from "../../../../store/actions/auth.action";
import { resetNotifications } from "../../../../store/reducers/error.reducer";
import {
  NewPasswordSchema,
  validateConfirmPassword,
  validateNewPassword,
} from "../../../../utils/validationhelper";
import { useAppDispatch, useAppSelector } from "../../../../setup/app-hooks";
import {
  IResetPasswordInputValues,
  IResetPasswordQueryString,
} from "../../interfaces";
import { RootState } from "../../../../store";

const ResetPassword = () => {
  const { resetToken } = useParams<{ resetToken?: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, message: mssg } = useAppSelector(
    (state: RootState) => state.notifications
  );
  const { message, loading } = useAppSelector(
    (state: RootState) => state.resetPasssword
  );

  const onSubmit = async (values: IResetPasswordInputValues) => {
    const inputValues = {
      token: resetToken,
      newPassword: values.newPassword,
    };

    const details: any = {
      query: RESET_PASSWORD,
      variables: {
        input: inputValues,
      },
    };

    await dispatch(resetPasswordAction(details));

    if (!loading && error === null) {
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetNotifications({}));
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col mt-[10%] ">
      <div className="mt-5 bg-white border sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
        <Formik
          initialValues={{
            token: "",
            newPassword: "",
          }}
          onSubmit={onSubmit}
          validationSchema={NewPasswordSchema}
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
              <div className="my-12 w-full flex justify-center ">
                <h3 className="px-auto text-2xl font-bold">
                  Reset Your Password
                </h3>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <InputField
                  name="newPassword"
                  validate={validateNewPassword}
                  type="password"
                  label="Enter New Password:"
                />
                <ErrorMessage name="newPassword">
                  {(error) => <p className="text-md text-red-600"> {error}</p>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <InputField
                  name="confirmNewPassword"
                  validate={validateConfirmPassword}
                  type="password"
                  label="Confirm New Password:"
                />
                <ErrorMessage name="confirmNewPassword">
                  {(error) => <p className="text-md text-red-600"> {error}</p>}
                </ErrorMessage>
              </div>

              <button
                className={`mt-5 w-full bg-blue-500 text-white py-2 px-8 rounded-md ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                } `}
                disabled={isSubmitting}
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
