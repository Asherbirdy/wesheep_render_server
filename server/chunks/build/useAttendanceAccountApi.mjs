import { m as UserRequestUrl, y as PublicRequestUrl, n as useNuxtApp } from './server.mjs';
import { u as useRequestApi } from './useRequestApi.mjs';

const useAttendanceAccountApi = {
  getAll: async () => {
    const nuxtApp = useNuxtApp();
    return await useRequestApi(UserRequestUrl.AttendanceAccount, {
      method: "GET",
      server: false,
      key: UserRequestUrl.AttendanceAccount,
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    });
  },
  create: async (payload) => await useRequestApi(UserRequestUrl.AttendanceAccountCreate, {
    method: "POST",
    body: payload,
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  }),
  edit: async (payload) => await useRequestApi(UserRequestUrl.AttendanceAccountEdit, {
    method: "PUT",
    body: payload,
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  }),
  activate: async (payload) => await useRequestApi(PublicRequestUrl.AttendanceAccountActivate, {
    method: "POST",
    body: payload,
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  }),
  delete: async (payload) => await useRequestApi(`${UserRequestUrl.AttendanceAccountDelete}?attendanceAccountId=${payload.attendanceAccountId}`, {
    method: "DELETE",
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  })
};

export { useAttendanceAccountApi as u };
//# sourceMappingURL=useAttendanceAccountApi.mjs.map
