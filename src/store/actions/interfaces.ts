export interface ISignUpData {
    id: string,
    username: string,
    email: string,
    role: string
    token: string,
    confirmed: boolean
}

export interface ISignupInputValues {
    query: string;
    variables: {
        input: {
            username: string;
            email: string;
            password: string;
        };
    };
}