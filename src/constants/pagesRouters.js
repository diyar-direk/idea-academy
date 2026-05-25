export const pagesRouters = {
  home: "/",
  about: "/about",
  contact: "/contact",
  events: {
    page: "/events",
  },
  courses: {
    page: "/courses",
  },
  login: "/login",
  dashboard: {
    statistics: "/dashboard",
    users: {
      page: "/dashboard/users",
      add: "/dashboard/users/add",
      updatePassword: (id = ":id") => `/dashboard/users/${id}`,
    },
    events: {
      page: "/dashboard/events",
      add: "/dashboard/events/add",
    },
    courses: {
      page: "/dashboard/courses",
      add: "/dashboard/courses/add",
    },
  },
};
