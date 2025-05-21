import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Modal.vue.mjs';
import { U as UserRequestUrl, b as __nuxt_component_2 } from './server.mjs';
import { defineComponent, withAsyncContext, ref, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const useSheetApi = {
  /*
     * CREATE
  */
  create: async (payload) => await useRequestApi(UserRequestUrl.SheetCreate, {
    method: "POST",
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
    body: payload
  }),
  /*
     * GET ALL
  */
  getAll: async () => await useRequestApi(UserRequestUrl.SheetAll, {
    method: "GET",
    server: false
  }),
  /*
    * EDIT
  */
  edit: async (payload) => await useRequestApi(UserRequestUrl.SheetEdit, {
    method: "PUT",
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
    body: payload
  }),
  /*
    * DELETE
  */
  delete: async (payload) => await useRequestApi(UserRequestUrl.SheetDelete, {
    method: "DELETE",
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
    body: payload
  })
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sheet",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: sheets } = ([__temp, __restore] = withAsyncContext(() => useSheetApi.getAll()), __temp = await __temp, __restore(), __temp);
    const state = ref({
      data: {
        modalForm: {
          name: "",
          api: ""
        }
      },
      feature: {
        modal: {
          status: false
        }
      }
    });
    const openModal = (data) => {
      state.value.data.modalForm.name = data.name;
      state.value.data.modalForm.api = data.api;
      state.value.feature.modal.status = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UCard = __nuxt_component_0;
      const _component_UButton = __nuxt_component_2;
      const _component_UModal = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Sheet</h1><!--[-->`);
      ssrRenderList((_a = unref(sheets)) == null ? void 0 : _a.sheets, (sheet) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: sheet._id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p${_scopeId}>id: ${ssrInterpolate(sheet._id)}</p><p${_scopeId}>name: ${ssrInterpolate(sheet.name)}</p><p${_scopeId}>api: ${ssrInterpolate(sheet.api)}</p></div><div class="flex flex-col gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "i-lucide-pencil",
                size: "xs",
                color: "primary",
                variant: "solid",
                onClick: ($event) => openModal(sheet)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "i-lucide-trash",
                size: "xs",
                color: "primary",
                variant: "solid"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("p", null, "id: " + toDisplayString(sheet._id), 1),
                    createVNode("p", null, "name: " + toDisplayString(sheet.name), 1),
                    createVNode("p", null, "api: " + toDisplayString(sheet.api), 1)
                  ]),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode(_component_UButton, {
                      icon: "i-lucide-pencil",
                      size: "xs",
                      color: "primary",
                      variant: "solid",
                      onClick: ($event) => openModal(sheet)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      icon: "i-lucide-trash",
                      size: "xs",
                      color: "primary",
                      variant: "solid"
                    })
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(state).feature.modal.status,
        "onUpdate:open": ($event) => unref(state).feature.modal.status = $event,
        title: "Modal with footer",
        description: "This is useful when you want a form in a Modal.",
        ui: { footer: "justify-end" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ss `);
          } else {
            return [
              createTextVNode(" ss ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Cancel",
              color: "neutral",
              variant: "outline",
              onClick: ($event) => unref(state).feature.modal.status = false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Submit",
              color: "neutral"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Cancel",
                color: "neutral",
                variant: "outline",
                onClick: ($event) => unref(state).feature.modal.status = false
              }, null, 8, ["onClick"]),
              createVNode(_component_UButton, {
                label: "Submit",
                color: "neutral"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Open",
              color: "neutral",
              variant: "subtle"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Open",
                color: "neutral",
                variant: "subtle"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/sheet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sheet.vue.mjs.map
