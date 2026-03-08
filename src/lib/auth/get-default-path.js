export const getDefaultPathForUser = (user) => {
  if (!user?.role) {
    return "/";
  }

  if (user.role === "worker") {
    return "/worker-home";
  }

  if (user.role === "customer") {
    return "/myjobs";
  }

  return "/";
};
