import { m as UserRequestUrl, y as PublicRequestUrl, n as useNuxtApp } from './server.mjs';
import { u as useRequestApi } from './useRequestApi.mjs';

const useLandingPageApi = {
  /*
    * CREATE
  */
  create: async (payload) => await useRequestApi(UserRequestUrl.LandingPageCreate, {
    method: "POST",
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
    body: payload
  }),
  /*
    * GET
  */
  getAll: async () => {
    const nuxtApp = useNuxtApp();
    return await useRequestApi(UserRequestUrl.LandingPageGetALL, {
      method: "GET",
      server: false,
      key: UserRequestUrl.LandingPageGetALL,
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    });
  },
  /*
    * GET
  */
  getInfoById: async (payload) => await useRequestApi(
    `${PublicRequestUrl.LandingPageGetInfoById}/?landingPageId=${payload.query.landingPageId}`,
    {
      method: "GET",
      server: payload.ssr,
      lazy: payload.ssr
    }
  ),
  /*
    * EDIT
  */
  editInfoById: async (payload) => await useRequestApi(
    `${UserRequestUrl.LandingPageEditInfoById}/?landingPageId=${payload.query.landingPageId}`,
    {
      method: "PUT",
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload.body
    }
  ),
  /*
    * EDIT
  */
  editHtmlById: async (payload) => await useRequestApi(
    `${UserRequestUrl.LandingPageEditHtmlById}`,
    {
      method: "PUT",
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload
    }
  ),
  /*
    * DELETE
  */
  deleteById: async (payload) => await useRequestApi(
    `${UserRequestUrl.LandingPage}/?landingPageId=${payload.query.landingPageId}`
  )
};

export { useLandingPageApi as u };
//# sourceMappingURL=useLandingPageApi.mjs.map
