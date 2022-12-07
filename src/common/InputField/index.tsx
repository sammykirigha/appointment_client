import React, { useState } from "react";
import {
  ErrorMessage,
  Field,
  useField,
  FieldAttributes,
  FieldValidator,
  FieldInputProps,
} from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type InputProps = {
  label: string;
  type?: string;
  validate?: (value: any) => FieldValidator;
} & FieldAttributes<{}>;

// interface MyInputProps extends FieldInputProps<""> {
// label: string,
//  type?: string
// }

const InputField = (props: InputProps) => {
  const { label, validate, type = "text", ...otherProps } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [field, meta, onChange] = useField<{}>(otherProps);

  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
        htmlFor={otherProps.id || otherProps.name}
      >
        {label}
      </label>
      <div className="relative flex-1">
        <Field
          {...field}
          {...otherProps}
          {...onChange}
          type={
            type === "password" ? (showPassword ? "text" : "password") : "text"
          }
          className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
        />
        {type === "password" && (
          <>
            {!showPassword ? (
              <FaRegEye
                onClick={() => setShowPassword(true)}
                className="mt-8 absolute right-2 -top-1/2 cursor-pointer text-gray-700 h-5 w-5"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShowPassword(false)}
                className="mt-8 absolute right-2 -top-1/2 cursor-pointer text-gray-700 h-5 w-5"
              />
            )}
          </>
        )}
      </div>

      {/* {meta.touched && meta.error && (
                <ErrorMessage>{meta.error}</ErrorMessage>
            )} */}
    </div>
  );
};

export default InputField;
