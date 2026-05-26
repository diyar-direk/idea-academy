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
    title: "posts",
    to: pagesRouters.posts.page,
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
    title: "posts",
    to: pagesRouters.dashboard.posts.page,
    icon: icons.posts,
    children: [
      {
        title: "posts",
        to: pagesRouters.dashboard.posts.page,
        icon: icons.posts,
      },
      {
        title: "add post",
        to: pagesRouters.dashboard.posts.add,
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
