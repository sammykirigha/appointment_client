
export interface ISelectInputs {
    value: string,
    label: string
}

export interface ICreatePatientInputValues {
    firstname:string,
    lastname:string,
    email: string,
    phone: string,
    age: number,
    address: string,
    dateOfBirth: string,
    gender: string,
    bloodGroup: string,
    county: string,
    nationality: string,
    maritalStatus: string,
    image: string,
    disability: boolean
}

export interface ICreatePatientQueryStringValues {
    query: string,
    variables: {
        input: ICreatePatientInputValues
    }
}

