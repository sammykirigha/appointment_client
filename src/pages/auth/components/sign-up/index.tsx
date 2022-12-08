import React from "react";
import LandingPage from "../../../landing_page";
import { SignupForm } from "./sign-up";

type Props = {};

export const SignUpPage = (props: Props) => {
  return (
    <div>
      <LandingPage>
        <SignupForm />
      </LandingPage>
    </div>
  );
};
