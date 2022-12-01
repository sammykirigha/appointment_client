export const LOGIN_USER = `
mutation LoginUser($input: LoginUserInput!) {
  loginUser(input: $input) {
    id
    username
    email
    role
    token
    confirmed
  }
}
`;

export const SIGNUP_USER = `
    mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
    id
    username
    email
    role
    token
    confirmed
  }
}
`;

export const FORGET_PASSWORD = `
  mutation ForgotUserPasssword($email: ForgotPasswordInput!) {
  forgotUserPasssword(email: $email)
}
`;

export const RESET_PASSWORD = `
  mutation ResetUsersPassword($input: PasswordResetInput!) {
  resetUsersPassword(input: $input)
}
`

export const ME_QUERY = `
 query CurrentUser {
  currentUser {
    id
    user_id
    username
    email
    role
    token
    confirmed
  }
}
`


export const CONFIRM_TOKEN_QUERY = `
mutation ConfirmPassword($input: ConfirmEmailInput!) {
  confirmPassword(input: $input)
}
`