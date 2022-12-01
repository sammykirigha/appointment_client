import SignupForm from "../../pages/auth/components/sign-up";

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
];
