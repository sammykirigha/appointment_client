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

export interface IRestPasswordInputValues {
    query: string;
    variables: {
        input: {
            token: string;
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

export interface IAppointments {
    id: string;
    patientId: string;
    patient_email: string;
    patient_phone: string;
    department: string;
    doctorId: string;
    patient_firstname: string;
    patient_lastname: string;
    date: string;
    time: string;
    fees: string;
    status: string;
    description: string;
  }

export interface IDoctorsReturned {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: number;
    address: string;
    department: string;
    token: string;
    rating: number;
    specialization: string;
    experience: string;
    image: string;
    facebooklLink: string;
    linkedinlLink: string;
    instagramlLink: string;
    twitterlLink: string;
    appointments: IAppointments
}


export interface ICreatePatientReturnedData{
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: string;
    address: string;
    token?: string;
    image: string;
    dateOfBirth: string;
    disability: boolean;
    county: string;
    bloodGroup: string;
    nationality: string;
    maritalStatus: string;
}


export interface ICreatePatientInputData{
    query: string;
    variables: {
        input: ICreatePatientReturnedData;
    };
}


