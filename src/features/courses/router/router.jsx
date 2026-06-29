import { lazy } from "react";
import { pagesRouters } from "../../../constants/pagesRouters";
import PageFallback from "./../../../components/PageFallBack";
const AllCourses = lazy(() => import("../pages/AllCourses"));
const ViewCourse = lazy(() => import("../pages/ViewCourse"));

export const coursesRouter = [
  {
    path: pagesRouters.courses.page,
    element: (
      <PageFallback>
        <AllCourses />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.courses.view(),
    element: (
      <PageFallback>
        <ViewCourse />
      </PageFallback>
    ),
  },
];
