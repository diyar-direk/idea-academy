import { lazy } from "react";
import { pagesRouters } from "../../../../../constants/pagesRouters";
import PageFallback from "../../../../../components/PageFallBack";
const AllUsers = lazy(() => import("../pages/AllUsers"));
const AddUser = lazy(() => import("../pages/AddUser"));
const UpdatePassword = lazy(() => import("../pages/UpdatePassword"));

export const userRouter = [
  {
    path: pagesRouters.dashboard.users.page,
    element: (
      <PageFallback>
        <AllUsers />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.dashboard.users.add,
    element: (
      <PageFallback>
        <AddUser />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.dashboard.users.updatePassword(),
    element: (
      <PageFallback>
        <UpdatePassword />
      </PageFallback>
    ),
  },
];
