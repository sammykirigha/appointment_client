import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../../pages/layout";
import { useEffect } from "react";
import { useAppSelector } from "../app-hooks";

const DashboardRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("auth-token");
    console.log("====================================");
    console.log("user", user?.user_id);
    console.log("====================================");
    if (!authToken && !user?.user_id) {
      navigate("/login");
    }
  }, [user?.user_id, navigate]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default DashboardRoutes;
