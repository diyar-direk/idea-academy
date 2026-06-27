import { pagesRouters } from "./../../../../../constants/pagesRouters";
import PageFallback from "./../../../../../components/PageFallBack";
import { lazy } from "react";
const AllCourses = lazy(() => import("../pages/AllCourses"));
const AddCourse = lazy(() => import("../pages/AddCourse"));
const UpdateCourse = lazy(() => import("../pages/UpdateCourse"));

export const dashboardCourseRouter = [
  {
    path: pagesRouters.dashboard.courses.page,
    element: (
      <PageFallback>
        <AllCourses />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.dashboard.courses.add,
    element: (
      <PageFallback>
        <AddCourse />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.dashboard.courses.update(),
    element: (
      <PageFallback>
        <UpdateCourse />
      </PageFallback>
    ),
  },
];
