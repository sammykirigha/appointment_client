import { LoginPage, SignUpPage } from "../../pages/auth";

interface RouteType {
  path: string;
  component: React.ElementType;
  children?: {
    path: string;
    component: React.ElementType;
  }[];
}

export const shared_routes: Array<RouteType> = [
  { path: "/", component: SignUpPage },
  { path: "/login", component: LoginPage },
];
