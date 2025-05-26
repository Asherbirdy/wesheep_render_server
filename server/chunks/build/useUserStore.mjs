import { R as Role } from './RoleEnum.mjs';
import { V as useState } from './server.mjs';
import { computed } from 'vue';

function useUserStore() {
  const user = useState("user", () => ({
    _id: "",
    name: "",
    email: "",
    emailVerified: false,
    role: Role.user,
    district: {
      _id: "",
      name: "",
      active: false,
      __v: 0
    },
    leaderOfGroupIds: [],
    groups: [],
    landingPageAccess: []
  }));
  const userInfo = computed(() => user.value);
  const setUserInfo = (data) => user.value = data;
  return {
    userInfo,
    setUserInfo
  };
}

export { useUserStore as u };
//# sourceMappingURL=useUserStore.mjs.map
