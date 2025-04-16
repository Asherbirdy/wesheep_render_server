import { u as useRequestApi } from './useRequestApi.mjs';
import { U as UserRequestUrl, P as PublicRequestUrl } from './server.mjs';

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
  getAll: async () => await useRequestApi(UserRequestUrl.LandingPageGetALL, {
    method: "GET",
    server: false
  }),
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
  )
};

export { useLandingPageApi as u };
//# sourceMappingURL=useLandingPageApi.mjs.map
