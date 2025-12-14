import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../components/HomeLayout";
import { homeRouter } from "../features/home/router";
import { aboutRouter } from "./../features/about/router";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [...homeRouter, ...aboutRouter],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
