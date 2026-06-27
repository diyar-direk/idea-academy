import { lazy } from "react";
import { pagesRouters } from "../../../constants/pagesRouters";
const AllCourses = lazy(() => import("../pages/AllCourses"));
import PageFallback from "./../../../components/PageFallBack";

export const coursesRouter = [
  {
    path: pagesRouters.courses.page,
    element: (
      <PageFallback>
        <AllCourses />
      </PageFallback>
    ),
  },
];
