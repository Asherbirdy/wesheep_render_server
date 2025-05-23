import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './Modal.vue.mjs';
import { U as UserRequestUrl, b as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_6, a as __nuxt_component_7, b as __nuxt_component_8 } from './Input.vue.mjs';
import { defineComponent, ref, withAsyncContext, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthApi } from './useAuthApi.mjs';
import { u as useRequestApi } from './useRequestApi.mjs';
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
import './index.mjs';

const useUserApi = {
  showMe: async () => {
    return useRequestApi(UserRequestUrl.UserShowMe, {
      method: "GET",
      server: false,
      lazy: true
    });
  }
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const state = ref({
      data: {
        emailVerifiedModal: {
          otp: ""
        }
      },
      feature: {
        emailCountdown: {
          status: false,
          time: 60,
          countdown: 0
        }
      }
    });
    const { data: UserInfoResponse } = ([__temp, __restore] = withAsyncContext(() => useUserApi.showMe()), __temp = await __temp, __restore(), __temp);
    const { execute: executeEmailRequest } = ([__temp, __restore] = withAsyncContext(() => useAuthApi.sendOTP()), __temp = await __temp, __restore(), __temp);
    const { execute: emailVerifyRequest } = ([__temp, __restore] = withAsyncContext(() => useAuthApi.bindOTPEmail({
      OTP: state.value.data.emailVerifiedModal.otp
    })), __temp = await __temp, __restore(), __temp);
    const onEmailRequest = async () => {
      const { emailCountdown } = state.value.feature;
      await executeEmailRequest();
      emailCountdown.status = true;
      emailCountdown.countdown = emailCountdown.time;
    };
    const onEmailVerify = async () => {
      await emailVerifyRequest();
    };
    watch(state.value.feature.emailCountdown, (value) => {
      if (value.countdown > 0) {
        setTimeout(() => {
          state.value.feature.emailCountdown.countdown--;
        }, 1e3);
        return;
      }
      state.value.feature.emailCountdown.status = false;
      state.value.feature.emailCountdown.countdown = state.value.feature.emailCountdown.time;
    });
    const validate = (state2) => {
      const errors = [];
      if (!state2.otp) {
        errors.push({
          name: "otp",
          message: "驗證碼不能為空"
        });
      }
      return errors;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_4;
      const _component_UModal = __nuxt_component_5;
      const _component_UButton = __nuxt_component_2;
      const _component_UForm = __nuxt_component_6;
      const _component_UFormField = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between gap-4 h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<h2${_scopeId}>姓名：${ssrInterpolate((_a = unref(UserInfoResponse)) == null ? void 0 : _a.user.name)}</h2><h2${_scopeId}>電子信箱：${ssrInterpolate((_b = unref(UserInfoResponse)) == null ? void 0 : _b.user.email)}</h2><h2${_scopeId}>區域：${ssrInterpolate((_c = unref(UserInfoResponse)) == null ? void 0 : _c.user.district.name)}</h2><h2${_scopeId}>Email驗證：${ssrInterpolate(((_d = unref(UserInfoResponse)) == null ? void 0 : _d.user.emailVerified) ? "已驗證" : "未驗證")}</h2><h2${_scopeId}>權限：${ssrInterpolate((_e = unref(UserInfoResponse)) == null ? void 0 : _e.user.role)}</h2><h2${_scopeId}>部落格權限：${ssrInterpolate((_f = unref(UserInfoResponse)) == null ? void 0 : _f.user.landingPageAccess)}</h2>`);
          } else {
            return [
              createVNode("h2", null, "姓名：" + toDisplayString((_g = unref(UserInfoResponse)) == null ? void 0 : _g.user.name), 1),
              createVNode("h2", null, "電子信箱：" + toDisplayString((_h = unref(UserInfoResponse)) == null ? void 0 : _h.user.email), 1),
              createVNode("h2", null, "區域：" + toDisplayString((_i = unref(UserInfoResponse)) == null ? void 0 : _i.user.district.name), 1),
              createVNode("h2", null, "Email驗證：" + toDisplayString(((_j = unref(UserInfoResponse)) == null ? void 0 : _j.user.emailVerified) ? "已驗證" : "未驗證"), 1),
              createVNode("h2", null, "權限：" + toDisplayString((_k = unref(UserInfoResponse)) == null ? void 0 : _k.user.role), 1),
              createVNode("h2", null, "部落格權限：" + toDisplayString((_l = unref(UserInfoResponse)) == null ? void 0 : _l.user.landingPageAccess), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        dismissible: false,
        title: "Email驗證"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: (_a = unref(state).data) == null ? void 0 : _a.emailVerifiedModal,
              validate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class=""${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "驗證碼",
                    name: "otp",
                    class: "flex-1 justify-between w-full gap-4 mb-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).data.emailVerifiedModal.otp,
                          "onUpdate:modelValue": ($event) => unref(state).data.emailVerifiedModal.otp = $event,
                          label: "驗證碼",
                          class: "flex-1 w-[calc(100%-124px)] mr-1",
                          placeholder: "請輸入驗證碼"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          disabled: unref(state).feature.emailCountdown.status,
                          label: unref(state).feature.emailCountdown.status ? `${unref(state).feature.emailCountdown.countdown}秒` : "寄送 Email 驗證",
                          variant: "soft",
                          class: "inline-block",
                          onClick: onEmailRequest
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).data.emailVerifiedModal.otp,
                            "onUpdate:modelValue": ($event) => unref(state).data.emailVerifiedModal.otp = $event,
                            label: "驗證碼",
                            class: "flex-1 w-[calc(100%-124px)] mr-1",
                            placeholder: "請輸入驗證碼"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_UButton, {
                            disabled: unref(state).feature.emailCountdown.status,
                            label: unref(state).feature.emailCountdown.status ? `${unref(state).feature.emailCountdown.countdown}秒` : "寄送 Email 驗證",
                            variant: "soft",
                            class: "inline-block",
                            onClick: onEmailRequest
                          }, null, 8, ["disabled", "label"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "" }, [
                      createVNode(_component_UFormField, {
                        label: "驗證碼",
                        name: "otp",
                        class: "flex-1 justify-between w-full gap-4 mb-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).data.emailVerifiedModal.otp,
                            "onUpdate:modelValue": ($event) => unref(state).data.emailVerifiedModal.otp = $event,
                            label: "驗證碼",
                            class: "flex-1 w-[calc(100%-124px)] mr-1",
                            placeholder: "請輸入驗證碼"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_UButton, {
                            disabled: unref(state).feature.emailCountdown.status,
                            label: unref(state).feature.emailCountdown.status ? `${unref(state).feature.emailCountdown.countdown}秒` : "寄送 Email 驗證",
                            variant: "soft",
                            class: "inline-block",
                            onClick: onEmailRequest
                          }, null, 8, ["disabled", "label"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "驗證 Email",
              block: "",
              onClick: onEmailVerify
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UForm, {
                state: (_b = unref(state).data) == null ? void 0 : _b.emailVerifiedModal,
                validate
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "" }, [
                    createVNode(_component_UFormField, {
                      label: "驗證碼",
                      name: "otp",
                      class: "flex-1 justify-between w-full gap-4 mb-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).data.emailVerifiedModal.otp,
                          "onUpdate:modelValue": ($event) => unref(state).data.emailVerifiedModal.otp = $event,
                          label: "驗證碼",
                          class: "flex-1 w-[calc(100%-124px)] mr-1",
                          placeholder: "請輸入驗證碼"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_UButton, {
                          disabled: unref(state).feature.emailCountdown.status,
                          label: unref(state).feature.emailCountdown.status ? `${unref(state).feature.emailCountdown.countdown}秒` : "寄送 Email 驗證",
                          variant: "soft",
                          class: "inline-block",
                          onClick: onEmailRequest
                        }, null, 8, ["disabled", "label"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["state"]),
              createVNode(_component_UButton, {
                label: "驗證 Email",
                block: "",
                onClick: onEmailVerify
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (!((_a = unref(UserInfoResponse)) == null ? void 0 : _a.user.emailVerified)) {
              _push2(ssrRenderComponent(_component_UButton, {
                label: "Email 驗證",
                block: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !((_b = unref(UserInfoResponse)) == null ? void 0 : _b.user.emailVerified) ? (openBlock(), createBlock(_component_UButton, {
                key: 0,
                label: "Email 驗證",
                block: ""
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
