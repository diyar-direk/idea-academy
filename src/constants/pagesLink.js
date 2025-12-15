import { pagesRouters } from "./pagesRouters";

export const pagesLinks = [
  {
    title: "home",
    to: pagesRouters.home,
  },
  {
    title: "about",
    to: pagesRouters.about,
  },
  {
    title: "contact",
    to: pagesRouters.contact,
  },
  {
    title: "events",
    to: pagesRouters.events.page,
  },
  {
    title: "courses",
    to: pagesRouters.courses.page,
  },
];
