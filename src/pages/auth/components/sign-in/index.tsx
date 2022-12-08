import React from "react";
import { LoginForm } from "./sign-in";
import LandingPage from "../../../landing_page";

type Props = {};

export const LoginPage = (props: Props) => {
  return (
    <div>
      <LandingPage>
        <LoginForm />
      </LandingPage>
    </div>
  );
};
