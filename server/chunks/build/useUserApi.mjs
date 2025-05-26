import { u as useRequestApi } from './useRequestApi.mjs';
import { l as UserRequestUrl, m as useNuxtApp } from './server.mjs';

const useUserApi = {
  showMe: async () => {
    const nuxtApp = useNuxtApp();
    return useRequestApi(UserRequestUrl.UserShowMe, {
      method: "GET",
      server: false,
      lazy: true,
      key: UserRequestUrl.UserShowMe,
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    });
  },
  getUserList: async () => {
    return useRequestApi(UserRequestUrl.UserGetUserList, {
      method: "GET",
      server: false,
      lazy: true
    });
  },
  changeUserAccess: async (payload) => {
    return useRequestApi(UserRequestUrl.UserChangeUserAccess, {
      method: "PATCH",
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload
    });
  }
};

export { useUserApi as u };
//# sourceMappingURL=useUserApi.mjs.map
