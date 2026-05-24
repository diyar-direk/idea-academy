export const extarctErrorMessage = (error) => {
  const { response, data } = error || {};

  const { status } = response || error || {};
  const { message } = response?.data || data || error || {};

  return `${status || ""} ${message || "Something went wrong"}`;
};
