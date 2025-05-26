var Role = /* @__PURE__ */ ((Role2) => {
  Role2["dev"] = "dev";
  Role2["admin"] = "admin";
  Role2["districtLeader"] = "districtLeader";
  Role2["user"] = "user";
  return Role2;
})(Role || {});
const roleOptions = [
  {
    label: "管理者",
    value: "admin"
    /* admin */
  },
  {
    label: "區負責",
    value: "districtLeader"
    /* districtLeader */
  },
  {
    label: "使用者",
    value: "user"
    /* user */
  }
];

export { Role as R, roleOptions as r };
//# sourceMappingURL=RoleEnum.mjs.map
