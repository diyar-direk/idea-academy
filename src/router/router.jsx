import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../components/HomeLayout";
import { homeRouter } from "../features/home/router";
import { aboutRouter } from "./../features/about/router";
import { contactRouter } from "../features/contact/router";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [...homeRouter, ...aboutRouter, ...contactRouter],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
