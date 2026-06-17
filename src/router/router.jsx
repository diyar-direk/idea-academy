import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import HomeLayout from "../components/HomeLayout";
import { dashboardRouter } from "../features/dashboard/router/router";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import { AuthProvider } from "../context/AuthContext";
import { homePagesRouter } from "./../features/router";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <AuthProvider />,
      children: [
        {
          path: "/",
          element: <HomeLayout />,
          children: homePagesRouter,
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          children: dashboardRouter,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
