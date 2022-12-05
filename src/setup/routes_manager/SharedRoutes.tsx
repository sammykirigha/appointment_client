import { LoginForm, SignupForm } from "../../pages/auth";

interface RouteType {
  path: string;
  component: React.ElementType;
  children?: {
    path: string;
    component: React.ElementType;
  }[];
}

export const shared_routes: Array<RouteType> = [
  { path: "/", component: SignupForm },
  { path: "/login", component: LoginForm },
];
