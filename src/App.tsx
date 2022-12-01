import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Notifications from "./common/Notification";
import { shared_routes } from "./setup/routes_manager/SharedRoutes";
import { useDispatch } from "react-redux";
import { type } from "os";
// import { getCurrentUserAction } from "./store/actions/auth.action";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //     const getUser = async () => {
  //         const { payload } = await dispatch(getCurrentUserAction());
  //         if (!payload.success) navigate("/login", { replace: true });
  //     };

  //     if (!!localStorage.getItem("auth-token")) {
  //         getUser();
  //     }
  // }, [dispatch, navigate]);

  type Routes = {
    path: string;
    component: React.ElementType;
    children: {
      path: string;
      component: React.ElementType;
    }[];
  };

  const renderRoute = ({ path, component: Component, children }: Routes) => {
    return (
      <Route path={path} element={<Component />}>
        {children?.length > 0 &&
          children?.map((route) => {
            return renderRoute(route);
          })}
      </Route>
    );
  };

  return (
    <div>
      <Notifications />
      <div>
        <Routes>{shared_routes?.map((route) => renderRoute(route))}</Routes>
      </div>
    </div>
  );
};

export default App;
