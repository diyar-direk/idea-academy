import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../features/home/Home";
import HomeLayout from "../components/HomeLayout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
