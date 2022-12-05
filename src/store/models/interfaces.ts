export interface IAuthenticatedUserReturnedData {
    id: string,
    username: string,
    email: string,
    role: string
    token: string,
    confirmed: boolean
}



export interface IAuthenticatedUserInputValues {
    query: string;
    variables: {
        input: {
            username?: string;
            email: string;
            password: string;
        };
    };
}

export interface IConfirmEmailInputValues {
    query: string;
    variables: {
        input: {
            token: string | undefined;
        };
    };
}