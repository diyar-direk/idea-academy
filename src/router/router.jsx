import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../components/HomeLayout";
import { homeRouter } from "../features/home/router";
import { aboutRouter } from "./../features/about/router";
import { contactRouter } from "../features/contact/router";
import { loginRouter } from "../features/login/router";

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
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
