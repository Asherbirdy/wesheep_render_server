import { _ as __nuxt_component_0 } from './Tabs.vue.mjs';
import { y as useToast, b as __nuxt_component_2, z as useCookie, s as navigateTo, C as ClientRoutes, A as CookieEnums } from './server.mjs';
import { defineComponent, useModel, mergeProps, withCtx, createVNode, ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useAuthApi } from './useAuthApi.mjs';
import { _ as __nuxt_component_6, a as __nuxt_component_7, b as __nuxt_component_8 } from './Input.vue.mjs';
import 'reka-ui';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import './useRequestApi.mjs';
import './index.mjs';

const regex = {
  email: /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LoginFormComponent",
  __ssrInlineRender: true,
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = useModel(__props, "modelValue");
    const validate = (state) => {
      const errors = [];
      if (!state.email) {
        errors.push({
          name: "email",
          message: "Required"
        });
      }
      if (!regex.email.test(String(state.email))) {
        errors.push({
          name: "email",
          message: "Invalid email format"
        });
      }
      if (!state.password) {
        errors.push({
          name: "password",
          message: "Required"
        });
      }
      return errors;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_6;
      const _component_UFormField = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        state: modelValue.value,
        validate,
        class: "flex flex-col gap-4"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Email",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: modelValue.value.email,
                    "onUpdate:modelValue": ($event) => modelValue.value.email = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: modelValue.value.email,
                      "onUpdate:modelValue": ($event) => modelValue.value.email = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Password",
              name: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: modelValue.value.password,
                    "onUpdate:modelValue": ($event) => modelValue.value.password = $event,
                    type: "password",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: modelValue.value.password,
                      "onUpdate:modelValue": ($event) => modelValue.value.password = $event,
                      type: "password",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormField, {
                label: "Email",
                name: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: modelValue.value.email,
                    "onUpdate:modelValue": ($event) => modelValue.value.email = $event,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "Password",
                name: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: modelValue.value.password,
                    "onUpdate:modelValue": ($event) => modelValue.value.password = $event,
                    type: "password",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RegisterFormComponent",
  __ssrInlineRender: true,
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = useModel(__props, "modelValue");
    const validate = (state) => {
      var _a;
      const errors = [];
      if (!state.name) {
        errors.push({
          name: "name",
          message: "Required"
        });
      }
      if (!regex.email.test(String(state.email))) {
        errors.push({
          name: "email",
          message: "Invalid email format"
        });
      }
      if (!state.password) {
        errors.push({
          name: "password",
          message: "Required"
        });
      }
      if (((_a = state == null ? void 0 : state.password) == null ? void 0 : _a.length) && state.password.length < 8) {
        errors.push({
          name: "password",
          message: "密碼長度至少8個字"
        });
      }
      if (!state.confirmPassword) {
        errors.push({
          name: "confirmPassword",
          message: "Required"
        });
      }
      if (state.password !== state.confirmPassword) {
        errors.push({
          name: "confirmPassword",
          message: "Password does not match"
        });
      }
      if (!state.serialNumber) {
        errors.push({
          name: "serialNumber",
          message: "Required"
        });
      }
      return errors;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_6;
      const _component_UFormField = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        state: modelValue.value,
        validate,
        class: "flex flex-col gap-4"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "姓名",
              name: "name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: modelValue.value.name,
                    "onUpdate:modelValue": ($event) => modelValue.value.name = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: modelValue.value.name,
                      "onUpdate:modelValue": ($event) => modelValue.value.name = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Email",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: modelValue.value.email,
                    "onUpdate:modelValue": ($event) => modelValue.value.email = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: modelValue.value.email,
                      "onUpdate:modelValue": ($event) => modelValue.value.email = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "密碼",
              name: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: modelValue.value.password,
                    "onUpdate:modelValue": ($event) => modelValue.value.password = $event,
                    type: "password",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: modelValue.value.password,
                      "onUpdate:modelValue": ($event) => modelValue.value.password = $event,
                      type: "password",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "確認密碼",
              name: "confirmPassword"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: modelValue.value.confirmPassword,
                    "onUpdate:modelValue": ($event) => modelValue.value.confirmPassword = $event,
                    type: "password",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: modelValue.value.confirmPassword,
                      "onUpdate:modelValue": ($event) => modelValue.value.confirmPassword = $event,
                      type: "password",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "序號",
              name: "serialNumber"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: modelValue.value.serialNumber,
                    "onUpdate:modelValue": ($event) => modelValue.value.serialNumber = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: modelValue.value.serialNumber,
                      "onUpdate:modelValue": ($event) => modelValue.value.serialNumber = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormField, {
                label: "姓名",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: modelValue.value.name,
                    "onUpdate:modelValue": ($event) => modelValue.value.name = $event,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "Email",
                name: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: modelValue.value.email,
                    "onUpdate:modelValue": ($event) => modelValue.value.email = $event,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "密碼",
                name: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: modelValue.value.password,
                    "onUpdate:modelValue": ($event) => modelValue.value.password = $event,
                    type: "password",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "確認密碼",
                name: "confirmPassword"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: modelValue.value.confirmPassword,
                    "onUpdate:modelValue": ($event) => modelValue.value.confirmPassword = $event,
                    type: "password",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "序號",
                name: "serialNumber"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: modelValue.value.serialNumber,
                    "onUpdate:modelValue": ($event) => modelValue.value.serialNumber = $event,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const state = ref({
      data: {
        login: {
          email: "",
          password: ""
        },
        register: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          serialNumber: ""
        }
      }
    });
    const {
      data: LoginResponse,
      execute: LoginRequest,
      error: LoginError,
      status: LoginStatus
    } = ([__temp, __restore] = withAsyncContext(() => useAuthApi.login(state.value.data.login)), __temp = await __temp, __restore(), __temp);
    const {
      data: RegisterResponse,
      execute: RegisterRequest,
      status: RegisterStatus,
      error: RegisterError
    } = ([__temp, __restore] = withAsyncContext(() => useAuthApi.register(state.value.data.register)), __temp = await __temp, __restore(), __temp);
    const {
      data: CheckValidTokenResponse,
      refresh: CheckValidTokenRefresh
    } = ([__temp, __restore] = withAsyncContext(() => useAuthApi.checkValidToken()), __temp = await __temp, __restore(), __temp);
    const tabs = [
      {
        label: "登入",
        icon: "i-lucide-user",
        slot: "login"
      },
      {
        label: "註冊",
        icon: "i-lucide-lock",
        slot: "register"
      }
    ];
    const onLogin = async () => {
      var _a, _b;
      const { login } = state.value.data;
      await LoginRequest();
      if (LoginError.value) {
        toast.add({
          title: "錯誤帳號或密碼",
          color: "error"
        });
        console.error(LoginError.value);
        login.password = "";
        return;
      }
      const accessToken = useCookie(CookieEnums.AccessToken);
      const refreshToken = useCookie(CookieEnums.RefreshToken);
      accessToken.value = ((_a = LoginResponse.value) == null ? void 0 : _a.token.accessTokenJWT) || "";
      refreshToken.value = ((_b = LoginResponse.value) == null ? void 0 : _b.token.refreshTokenJWT) || "";
      navigateTo(ClientRoutes.Home);
    };
    const onRegister = async () => {
      var _a, _b;
      const { register } = state.value.data;
      await RegisterRequest();
      if (RegisterError.value) {
        toast.add({
          title: "錯誤序號或重複註冊",
          color: "error"
        });
        register.serialNumber = "";
        register.password = "";
        register.confirmPassword = "";
        return;
      }
      toast.add({
        title: "註冊成功 請登入",
        color: "success"
      });
      register.name = "";
      register.email = "";
      register.password = "";
      register.confirmPassword = "";
      register.serialNumber = "";
      useCookie(CookieEnums.AccessToken).value = (_a = RegisterResponse.value) == null ? void 0 : _a.token.accessTokenJWT;
      useCookie(CookieEnums.RefreshToken).value = (_b = RegisterResponse.value) == null ? void 0 : _b.token.refreshTokenJWT;
      navigateTo(ClientRoutes.Home);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = __nuxt_component_0;
      const _component_UButton = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UTabs, mergeProps({
        items: tabs,
        class: "gap-4 w-full",
        ui: { trigger: "flex-1" }
      }, _attrs), {
        login: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              modelValue: unref(state).data.login,
              "onUpdate:modelValue": ($event) => unref(state).data.login = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "登入",
              type: "submit",
              variant: "soft",
              class: "self-end",
              loading: unref(LoginStatus) === "pending",
              disabled: !unref(state).data.login.email || !unref(state).data.login.password || !unref(state).data.login.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
              onClick: onLogin
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2), {
                modelValue: unref(state).data.login,
                "onUpdate:modelValue": ($event) => unref(state).data.login = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_UButton, {
                label: "登入",
                type: "submit",
                variant: "soft",
                class: "self-end",
                loading: unref(LoginStatus) === "pending",
                disabled: !unref(state).data.login.email || !unref(state).data.login.password || !unref(state).data.login.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
                onClick: onLogin
              }, null, 8, ["loading", "disabled"])
            ];
          }
        }),
        register: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              modelValue: unref(state).data.register,
              "onUpdate:modelValue": ($event) => unref(state).data.register = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "註冊",
              type: "submit",
              variant: "soft",
              class: "self-end",
              loading: unref(RegisterStatus) === "pending",
              disabled: !unref(state).data.register.name || !unref(state).data.register.email || !unref(state).data.register.password || !unref(state).data.register.confirmPassword || !unref(state).data.register.serialNumber || !unref(state).data.register.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || unref(state).data.register.password !== unref(state).data.register.confirmPassword,
              onClick: onRegister
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), {
                modelValue: unref(state).data.register,
                "onUpdate:modelValue": ($event) => unref(state).data.register = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_UButton, {
                label: "註冊",
                type: "submit",
                variant: "soft",
                class: "self-end",
                loading: unref(RegisterStatus) === "pending",
                disabled: !unref(state).data.register.name || !unref(state).data.register.email || !unref(state).data.register.password || !unref(state).data.register.confirmPassword || !unref(state).data.register.serialNumber || !unref(state).data.register.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || unref(state).data.register.password !== unref(state).data.register.confirmPassword,
                onClick: onRegister
              }, null, 8, ["loading", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.vue.mjs.map
