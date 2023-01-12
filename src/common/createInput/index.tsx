import React from "react";
import InputField from "../InputField";

type Props = {
  name: string;
  value: string;
  type: string;
  label: string;
  placeholder: string;
};

const CreateInput = (props: Props) => {
  const { name, value, type, label, placeholder } = props;
  return (
    <div className="flex flex-col sm:w-full">
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
