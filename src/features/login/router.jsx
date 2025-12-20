import { lazy } from "react";
import { pagesRouters } from "../../constants/pagesRouters";
import PageFallback from "./../../components/PageFallBack";
const Login = lazy(() => import("./Login"));

export const loginRouter = [
  {
    path: pagesRouters.login,
    element: (
      <PageFallback>
        <Login />
      </PageFallback>
    ),
  },
];
