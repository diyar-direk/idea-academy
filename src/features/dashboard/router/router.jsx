import { dashboardCourseRouter } from "../pages/courses/router/router";
import { dashboardPostsRouter } from "../pages/posts/router/router";
import { userRouter } from "../pages/users/router/router";

export const dashboardRouter = [
  ...userRouter,
  ...dashboardPostsRouter,
  ...dashboardCourseRouter,
];
