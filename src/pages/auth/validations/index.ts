import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
    username: Yup.string().required("username cant be empty"),
    email: Yup.string().email("invalid email").required("Email cant be empty"),
  });

export  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password cant be empty")
      .test("len", "Very weak", (val) => val!.length > 5)
      .test("len", "Weak", (val) => val!.length > 8),
  });

export const validatePassword = (value: any) => {
    let error = undefined;
    try {
      PasswordSchema.validateSync({ password: value });
    } catch (validationError) {
      if (validationError instanceof Error) {
        error = validationError;
      } else {
        console.log("====================================");
        console.log("Unexpected error", validationError);
        console.log("====================================");
      }
    }

    return error;
  };

  export const SignInSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("Email cant be empty"),
    password: Yup.string().required("Password cant be empty").test("len", "Very weak", (val) => val!.length > 4).test("len", "Weak", (val) => val!.length > 6),
});
