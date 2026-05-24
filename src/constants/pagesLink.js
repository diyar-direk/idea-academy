import { icons } from "./icons";
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

export const dashboardLinks = [
  {
    title: "statistics",
    to: pagesRouters.dashboard.statistics,
    icon: icons.dashboard,
  },
  {
    title: "users",
    to: pagesRouters.dashboard.users.page,
    icon: icons.users,
    children: [
      {
        title: "users",
        to: pagesRouters.dashboard.users.page,
        icon: icons.users,
      },
      {
        title: "add user",
        to: pagesRouters.dashboard.users.add,
        icon: icons.addUser,
      },
    ],
  },
  {
    title: "events",
    to: pagesRouters.dashboard.events.page,
    icon: icons.events,
    children: [
      {
        title: "events",
        to: pagesRouters.dashboard.events.page,
        icon: icons.events,
      },
      {
        title: "add event",
        to: pagesRouters.dashboard.events.add,
        icon: icons.add,
      },
    ],
  },
  {
    title: "courses",
    to: pagesRouters.dashboard.courses.page,
    icon: icons.courses,
    children: [
      {
        title: "courses",
        to: pagesRouters.dashboard.courses.page,
        icon: icons.courses,
      },
      {
        title: "add course",
        to: pagesRouters.dashboard.courses.add,
        icon: icons.add,
      },
    ],
  },
];
