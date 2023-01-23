import React from "react";
import InputField from "../InputField";

type Props = {
  name: string;
  value: string | number;
  type: string;
  label: string;
  placeholder: string;
  customStyles?: string;
};

const CreateInput = (props: Props) => {
  const { name, value, type, label, placeholder, customStyles } = props;
  return (
    <div className={`flex flex-col sm:w-full ${customStyles}`}>
      <InputField
        name={name}
        value={value}
        type={type}
        label={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CreateInput;
