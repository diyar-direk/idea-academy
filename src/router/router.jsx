import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./../components/navbar/Navbar";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
