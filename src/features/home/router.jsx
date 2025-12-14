import { lazy } from "react";
import PageFallback from "../../components/PageFallBack";
import { pagesRouters } from "../../constants/pagesRouters";
const Home = lazy(() => import("../home/Home"));
export const homeRouter = [
  {
    path: pagesRouters.home,
    element: (
      <PageFallback>
        <Home />
      </PageFallback>
    ),
  },
];
