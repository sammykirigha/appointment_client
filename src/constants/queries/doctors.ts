export const CREATE_DOCTOR = `
mutation CreateDoctor($input: CreateDoctorInput!) {
  createDoctor(input: $input) {
    id
    firstname
    lastname
    email
    phone
    gender
    address
    department
    token
    rating
    specialization
    experience
    image
    facebooklLink
    linkedinlLink
    instagramlLink
    twitterlLink
    appointments {
          patientId
          patient_email
          patient_phone
          age
          department
          doctorId
          date
          time
          patient_firstname
          patient_lastname
          fees
          status
          description
          appointment_type
          other_type
    }
  }
}
`;

export const GET_DOCTOR_QUERY = `
 query GetOneDoctor($input: GetSingleDoctorInputByEmail!) {
  getOneDoctor(input: $input) {
    id
    firstname
    lastname
    email
    phone
    gender
    address
    department
    rating
    specialization
    experience
    image
    facebooklLink
    linkedinlLink
    instagramlLink
    twitterlLink
    appointments {
      id
      patientId
      patient_email
      patient_phone
      department
      patient_firstname
      patient_lastname
      doctorId
      date
      time
      fees
      status
      description
    }
  }
}
`;

export const UPDATE_DOCTOR = `
mutation UpdateDoctor($input: UpdateDoctorInput!) {
  updateDoctor(input: $input)
}
`;

export const CHANGE_DOCTOR_PASSWORD_QUERY = `
 mutation ChangeDoctorsPassword($input: ChangePasswordInput!) {
  changeDoctorsPassword(input: $input)
}
`;

export const FETCH_ALL_DOCTORS_QUERY = `
query GetDoctors {
  getDoctors {
    id
    firstname
    lastname
    email
    phone
    gender
    address
    department
    token
    rating
    specialization
    experience
    image
    facebooklLink
    linkedinlLink
    instagramlLink
    twitterlLink
    appointments {
      id
      patientId
      patient_email
      patient_phone
      department
      doctorId
      patient_firstname
      patient_lastname
      date
      time
      fees
      status
      description
    }
  }
}
`;
