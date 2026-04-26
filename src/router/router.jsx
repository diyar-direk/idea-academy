import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../components/HomeLayout";
import { homeRouter } from "../features/home/router";
import { aboutRouter } from "./../features/about/router";
import { contactRouter } from "../features/contact/router";
import { loginRouter } from "../features/login/router";
import { dashboardRouter } from "../features/dashboard/router/router";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        ...homeRouter,
        ...aboutRouter,
        ...contactRouter,
        ...loginRouter,
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: dashboardRouter,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
