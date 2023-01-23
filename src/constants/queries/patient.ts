export const CREATE_PATIENT_QUERY = `
 mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
    id
    firstname
    lastname
    email
    phone
    gender
    address
    age
    token
    image
    dateOfBirth
    disability
    county
    bloodGroup
    nationality
    maritalStatus
  }
}
`

export const GET_ONE_PATIENT_QUERY = `
query FetchSinglePatient($input: HandleSinglePatientInput!) {
  fetchSinglePatient(input: $input) {
    id
    firstname
    lastname
    email
    phone
    gender
    address
    token
    image
    dateOfBirth
    disability
    county
    bloodGroup
    nationality
    maritalStatus
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
`

export const UPDATE_PATIENT = `
mutation UpdatePatientInfo($input: UpdatePatientInput!) {
  updatePatientInfo(input: $input)
}
`

export const CHANGE_PATIENT_PASSWORD = `
mutation ChangePatientPassword($input: ChangePatientPasswordInput!) {
  changePatientPassword(input: $input)
}
`