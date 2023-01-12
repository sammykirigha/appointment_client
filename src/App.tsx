import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Notifications from "./common/Notification";
import { ConfirmEmail } from "./pages/auth/components/confirm-email";
import { LoginPage, SignUpPage } from "./pages/auth";
import HomePage from "./pages/home";
import ResetPassword from "./pages/auth/components/resetpassword";
import ForgotPassword from "./pages/auth/components/forgot-password";
import { getCurrentUserAction } from "./store/actions/auth.action";
import { useAppDispatch } from "./setup/app-hooks";
import AddPatient from "./pages/patients/components/add_patient";
// import { getCurrentUserAction } from "./store/actions/auth.action";

const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const res: any = await dispatch(getCurrentUserAction());
      if (!res.payload.success) navigate("/", { replace: true });
    };

    if (!!localStorage.getItem("auth-token")) {
      getUser();
    }
  }, [dispatch, navigate]);

  type Routes = {
    path: string;
    component: React.ElementType;
    children?: {
      path: string;
      component: React.ElementType;
    }[];
  };

  const renderRoute = ({ path, component: Component, children }: Routes) => {
    return (
      <Route path={path} element={<Component />}>
        {children!.length > 0 &&
          children?.map((route) => {
            return renderRoute({ path, component: Component, children });
          })}
      </Route>
    );
  };

  return (
    <div>
      <Notifications />
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/confirm-email/:authToken" element={<ConfirmEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="reset-password/:resetToken"
            element={<ResetPassword />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="add-patient" element={<AddPatient />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
