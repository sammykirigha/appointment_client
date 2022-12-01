export interface IInputValues {
    username: string,
    email: string,
    password: string
}

export interface IDetails {
    query: string,
    variables: {
        input : {
            username: string,
            email: string,
            password: string 
        }
       
    }
}