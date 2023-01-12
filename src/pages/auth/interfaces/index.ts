export interface InputValues {
    email: string,
    password: string
}

export interface IResetPasswordInputValues {
    token: string,
    newPassword: string
}

export interface ISignUpInputValues extends InputValues{
    username: string
}

export interface ISignInInputValues extends InputValues {}


export interface ISignUpQueryString {
    query: string,
    variables: {
        input : {
            username: string,
            email: string,
            password: string 
        }
       
    }
}

export interface ISignInQueryString {
    query: string,
    variables: {
        input : {
            email: string,
            password: string 
        }
       
    }
}

export interface IResetPasswordQueryString {
    query: string,
    variables: {
        input : {
            token?: string
            newPassword: string,
        }
       
    }
}