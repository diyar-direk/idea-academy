import { lazy } from "react";
import { pagesRouters } from "../../constants/pagesRouters";
import PageFallback from "./../../components/PageFallBack";
const Contact = lazy(() => import("./Contact"));

export const contactRouter = [
  {
    path: pagesRouters.contact,
    element: (
      <PageFallback>
        <Contact />
      </PageFallback>
    ),
  },
];
