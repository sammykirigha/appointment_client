import React from "react";
import {  useField, useFormikContext, FieldHookConfig } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type InputProps = {
  name: string
}

const DatePickerField = ({...props} : InputProps) => {
    const { setFieldValue } = useFormikContext();
	const [field] = useField(props);
	
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value) ) || null}
      onChange={(value) => {
        setFieldValue(field.name, value);
      }}
      className=" px-1 w-full placeholder:italic pl-2 placeholder:text-slate-300 outline-gray-200 h-[40px] rounded-md placeholder:pl-3  focus:border-0 focus:outline focus:outline-blue-600"
    />
  );
};

export default DatePickerField