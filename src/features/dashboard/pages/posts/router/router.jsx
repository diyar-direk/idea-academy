import { pagesRouters } from "./../../../../../constants/pagesRouters";
import PageFallback from "./../../../../../components/PageFallBack";
import { lazy } from "react";
const AllPosts = lazy(() => import("../pages/AllPosts"));
const AddPost = lazy(() => import("../pages/AddPost"));
const UpdatePost = lazy(() => import("../pages/UpdatePost"));
const ViewPost = lazy(() => import("../pages/ViewPost"));

export const dashboardPostsRouter = [
  {
    path: pagesRouters.dashboard.posts.page,
    element: (
      <PageFallback>
        <AllPosts />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.dashboard.posts.add,
    element: (
      <PageFallback>
        <AddPost />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.dashboard.posts.view(),
    element: (
      <PageFallback>
        <ViewPost />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.dashboard.posts.update(),
    element: (
      <PageFallback>
        <UpdatePost />
      </PageFallback>
    ),
  },
];
