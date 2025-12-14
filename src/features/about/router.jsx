import { lazy } from "react";
import PageFallback from "../../components/PageFallBack";
import { pagesRouters } from "../../constants/pagesRouters";
const About = lazy(() => import("./About"));

export const aboutRouter = [
  {
    path: pagesRouters.about,
    element: (
      <PageFallback>
        <About />
      </PageFallback>
    ),
  },
];
