import { lazy } from "react";
import { pagesRouters } from "../../../constants/pagesRouters";
import PageFallback from "./../../../components/PageFallBack";
const AllPosts = lazy(() => import("../pages/AllPosts"));
const ViewPost = lazy(() => import("../pages/ViewPost"));

export const postsRouter = [
  {
    path: pagesRouters.posts.page,
    element: (
      <PageFallback>
        <AllPosts />
      </PageFallback>
    ),
  },
  {
    path: pagesRouters.posts.view(),
    element: (
      <PageFallback>
        <ViewPost />
      </PageFallback>
    ),
  },
];
