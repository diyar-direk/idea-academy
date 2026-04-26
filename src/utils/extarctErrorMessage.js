export const extarctErrorMessage = (error) => {
  const message =
    error?.response?.data?.message || error?.data?.message || error?.message;
  const status = error?.response?.status || error?.status;

  return `${status || ""} ${message || "Something went wrong"}`;
};
