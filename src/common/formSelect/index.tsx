import { useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";

type Props = {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
};

const FormSelect = ({ name, options }: Props) => {
  const [field, meta, helpers] = useField(name);

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "white",
      height: "40px",
      outline: "1px solid lightgray",
      marginTop: "8px",
    }),
  };

  return (
    <>
      <Select
        name={name}
        value={field.value.value}
        onChange={({ value }: any) => helpers.setValue(value)}
        options={options}
        styles={colourStyles}
      />
      <ErrorMessage name={name} />
    </>
  );
};

export default FormSelect;
