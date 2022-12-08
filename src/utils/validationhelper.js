import * as Yup from "yup";

export const PasswordSchema = Yup.object().shape({
    password: Yup.string()
        .test("len", "Very weak", (val) => val.length > 5)
        .test("len", "Weak", (val) => val.length > 8)
        .required("new Password cant be empty"),
});

export const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
        .test("len", "Very weak", (val) => val.length > 5)
        .test("len", "Weak", (val) => val.length > 8)
        .required("new Password cant be empty"),
});

export const ConfirmNewPasswordSchema = Yup.object().shape({
    confirmNewPassword: Yup.string()
        .test("len", "Very weak", (val) => val.length > 5)
        .test("len", "Weak", (val) => val.length > 8)
        .required("confirm password cant be empty"),
});

// validation
export const validatePassword = (value) => {
    let error = undefined;
    try {
        PasswordSchema.validateSync({
            password: value,
        });
    } catch (validationError) {
        error = validationError.errors[0];
    }

    return error;
};


export const validateNewPassword = (value) => {
    let error = undefined;
    try {
        NewPasswordSchema.validateSync({
            newPassword: value,
        });
    } catch (validationError) {
        error = validationError.errors[0];
    }

    return error;
};

export const validateConfirmPassword = (value) => {
    let error = undefined;
    try {
        ConfirmNewPasswordSchema.validateSync({
            confirmNewPassword: value,
        });
    } catch (validationError) {
        error = validationError.errors[0];
    }

    return error;
};
