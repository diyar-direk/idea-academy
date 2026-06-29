export const pagesRouters = {
  home: "/",
  about: "/about",
  contact: "/contact",
  posts: {
    page: "/posts",
    view: (id = ":id") => `/posts/${id}`,
  },
  courses: {
    page: "/courses",
    view: (id = ":id") => `/courses/${id}`,
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
      view: (id = ":id") => `/dashboard/posts/${id}`,
      update: (id = ":id") => `/dashboard/posts/${id}/update`,
    },
    courses: {
      page: "/dashboard/courses",
      add: "/dashboard/courses/add",
      view: (id = ":id") => `/dashboard/courses/${id}`,
      update: (id = ":id") => `/dashboard/courses/${id}/update`,
    },
  },
};
