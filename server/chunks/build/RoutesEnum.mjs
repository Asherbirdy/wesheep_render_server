var PublicRoutes = /* @__PURE__ */ ((PublicRoutes2) => {
  PublicRoutes2["Home"] = "/";
  PublicRoutes2["Login"] = "/login";
  return PublicRoutes2;
})(PublicRoutes || {});
const ClientBase = "/C";
var ClientRoutes = ((ClientRoutes2) => {
  ClientRoutes2["Home"] = `${ClientBase}/`;
  ClientRoutes2["LandingPage"] = `${ClientBase}/landingPage`;
  ClientRoutes2["LandingPageEditor"] = `${ClientBase}/landingPage/editor`;
  ClientRoutes2["Blending"] = `${ClientBase}/blending`;
  return ClientRoutes2;
})(ClientRoutes || {});

export { ClientRoutes as C, PublicRoutes as P };
//# sourceMappingURL=RoutesEnum.mjs.map
