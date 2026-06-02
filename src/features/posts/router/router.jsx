import { lazy } from "react";
import { pagesRouters } from "../../../constants/pagesRouters";
const AllPosts = lazy(() => import("../pages/AllPosts"));
import PageFallback from "./../../../components/PageFallBack";

export const postsRouter = [
  {
    path: pagesRouters.posts.page,
    element: (
      <PageFallback>
        <AllPosts />
      </PageFallback>
    ),
  },
];
