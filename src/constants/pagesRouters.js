export const pagesRouters = {
  home: "/",
  about: "/about",
  contact: "/contact",
  posts: {
    page: "/posts",
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
    posts: {
      page: "/dashboard/posts",
      add: "/dashboard/posts/add",
      update: (id = ":id") => `/dashboard/posts/${id}`,
    },
    courses: {
      page: "/dashboard/courses",
      add: "/dashboard/courses/add",
    },
  },
};
