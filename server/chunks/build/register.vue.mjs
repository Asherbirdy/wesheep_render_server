import { a as __nuxt_component_0, b as __nuxt_component_1, _ as __nuxt_component_2 } from './Input.vue.mjs';
import { l as useToast, k as __nuxt_component_2$1 } from './server.mjs';
import { ref, defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useAttendanceAccountApi } from './useAttendanceAccountApi.mjs';
import './index.mjs';
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

const useLiff = (payload) => {
  const LIFF = ref(null);
  const LineProfile = ref(null);
  return { LIFF, LineProfile };
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const { LineProfile } = useLiff();
    const state = ref({
      data: {
        form: {
          [
            "serialNumber"
            /* SerialNumber */
          ]: ""
        }
      },
      feature: {
        submit: {
          isLoading: false
        }
      }
    });
    const validate = (state2) => {
      const errors = [];
      if (!state2[
        "serialNumber"
        /* SerialNumber */
      ]) {
        errors.push({
          name: "serialNumber",
          message: "請輸入序號"
        });
      }
      return errors;
    };
    const handleBindAccount = async () => {
      var _a, _b, _c, _d;
      const { feature, data } = state.value;
      const { execute, error, status } = await useAttendanceAccountApi.activate({
        lineProfileId: ((_a = LineProfile == null ? void 0 : LineProfile.value) == null ? void 0 : _a.userId) || "",
        serialNumber: data.form[
          "serialNumber"
          /* SerialNumber */
        ]
      });
      feature.submit.isLoading = true;
      execute();
      feature.submit.isLoading = false;
      if (((_c = (_b = error.value) == null ? void 0 : _b.data) == null ? void 0 : _c.error) === "LINE_PROFILE_ID_ALREADY_EXISTS") {
        toast.add({
          title: "已綁定過",
          color: "error"
        });
        data.form[
          "serialNumber"
          /* SerialNumber */
        ] = "";
        return;
      }
      if (((_d = error.value) == null ? void 0 : _d.data.error) === "ATTENDANCE_ACCOUNT_NOT_FOUND") {
        toast.add({
          title: "序號錯誤",
          color: "error"
        });
        data.form[
          "serialNumber"
          /* SerialNumber */
        ] = "";
        return;
      }
      if (status.value === "success") {
        toast.add({
          title: "綁定成功",
          color: "success"
        });
        data.form[
          "serialNumber"
          /* SerialNumber */
        ] = "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UForm = __nuxt_component_0;
      const _component_UFormField = __nuxt_component_1;
      const _component_UInput = __nuxt_component_2;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center" }, _attrs))}><h2 class="text-2xl font-extrabol mb-4"> 點名者帳號綁定 </h2><img${ssrRenderAttr("src", (_a = unref(LineProfile)) == null ? void 0 : _a.pictureUrl)} alt="Line Profile" class="w-24 h-24 rounded-full border-4 border-white shadow-md"><p class="text-lg mt-2">${ssrInterpolate((_b = unref(LineProfile)) == null ? void 0 : _b.displayName)}</p><p class="text-sm text-gray-500"> Id: ${ssrInterpolate((_c = unref(LineProfile)) == null ? void 0 : _c.userId)}</p>`);
      _push(ssrRenderComponent(_component_UForm, {
        validate,
        ui: { root: "space-y-4" },
        state: unref(state).data.form
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "序號",
              name: "serialNumber"
              /* SerialNumber */
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).data.form.serialNumber,
                    "onUpdate:modelValue": ($event) => unref(state).data.form.serialNumber = $event,
                    label: "序號",
                    ui: { root: "w-full" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).data.form.serialNumber,
                      "onUpdate:modelValue": ($event) => unref(state).data.form.serialNumber = $event,
                      label: "序號",
                      ui: { root: "w-full" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormField, {
                label: "序號",
                name: "serialNumber"
                /* SerialNumber */
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).data.form.serialNumber,
                    "onUpdate:modelValue": ($event) => unref(state).data.form.serialNumber = $event,
                    label: "序號",
                    ui: { root: "w-full" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "註冊",
        loading: unref(state).feature.submit.isLoading,
        onClick: handleBindAccount
      }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lineoa/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register.vue.mjs.map
