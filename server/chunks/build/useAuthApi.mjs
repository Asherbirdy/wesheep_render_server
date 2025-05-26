import { u as useRequestApi } from './useRequestApi.mjs';
import { l as UserRequestUrl, x as PublicRequestUrl } from './server.mjs';

const useAuthApi = {
  /*
    * 登入
  */
  login: async (payload) => await useRequestApi(PublicRequestUrl.Login, {
    method: "POST",
    body: payload,
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  }),
  /*
    * 註冊
  */
  register: async (state) => await useRequestApi(PublicRequestUrl.UserRegister, {
    method: "POST",
    body: state,
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  }),
  /*
    * 檢查 token 是否有效
  */
  checkValidToken: async () => await useRequestApi(UserRequestUrl.CheckValidToken, {
    method: "GET",
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  }),
  /*
    * 發送 OTP 給 Email
  */
  sendOTP: async () => await useRequestApi(UserRequestUrl.SendOTP, {
    method: "GET",
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  }),
  /*
    * 綁定 OTP Email
  */
  bindOTPEmail: async (payload) => await useRequestApi(UserRequestUrl.BindOTPEmail, {
    method: "POST",
    body: payload,
    server: false,
    lazy: true,
    immediate: false,
    watch: false
  })
};

export { useAuthApi as u };
//# sourceMappingURL=useAuthApi.mjs.map
