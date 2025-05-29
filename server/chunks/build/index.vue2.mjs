import { U as UBadge } from './Badge.vue.mjs';
import { _ as __nuxt_component_5 } from './Modal.vue.mjs';
import { defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, useSlots, toRef, computed, mergeProps, renderSlot, toHandlers, createBlock, createCommentVNode, openBlock, useSSRContext, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { l as defu } from '../nitro/nitro.mjs';
import { useForwardPropsEmits } from 'reka-ui';
import { HoverCard, Popover } from 'reka-ui/namespaced';
import { l as useToast, k as __nuxt_component_2$1, p as refreshNuxtData, m as UserRequestUrl, r as reactivePick, t as tv, j as _appConfig } from './server.mjs';
import { u as useAttendanceAccountApi } from './useAttendanceAccountApi.mjs';
import { a as __nuxt_component_0, b as __nuxt_component_1, _ as __nuxt_component_2$2 } from './Input.vue.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CreateAttendanceAccountComponent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const state = ref({
      data: {
        form: {
          name: "",
          serialNumber: ""
        }
      },
      feature: {
        modal: {
          open: false
        }
      }
    });
    const {
      execute: CreateAttendanceAccountRequest,
      status: CreateAttendanceAccountStatus
    } = ([__temp, __restore] = withAsyncContext(() => useAttendanceAccountApi.create(state.value.data.form)), __temp = await __temp, __restore(), __temp);
    const handleSubmit = async () => {
      const { feature } = state.value;
      await CreateAttendanceAccountRequest();
      feature.modal.open = false;
      toast.add({
        title: "新增成功",
        color: "success"
      });
      await refreshNuxtData(UserRequestUrl.AttendanceAccount);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2$1;
      const _component_UModal = __nuxt_component_5;
      const _component_UForm = __nuxt_component_0;
      const _component_UFormField = __nuxt_component_1;
      const _component_UInput = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "新增",
        color: "primary",
        onClick: ($event) => unref(state).feature.modal.open = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(state).feature.modal.open,
        "onUpdate:open": ($event) => unref(state).feature.modal.open = $event,
        title: "帳號資訊",
        ui: { footer: "justify-end" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, { ui: { root: "space-y-4" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "名稱",
                    name: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).data.form.name,
                          "onUpdate:modelValue": ($event) => unref(state).data.form.name = $event,
                          label: "標題",
                          ui: { root: "w-full" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).data.form.name,
                            "onUpdate:modelValue": ($event) => unref(state).data.form.name = $event,
                            label: "標題",
                            ui: { root: "w-full" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "序號",
                    name: "serialNumber"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).data.form.serialNumber,
                          "onUpdate:modelValue": ($event) => unref(state).data.form.serialNumber = $event,
                          label: "序號",
                          ui: { root: "w-full" }
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormField, {
                      label: "名稱",
                      name: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).data.form.name,
                          "onUpdate:modelValue": ($event) => unref(state).data.form.name = $event,
                          label: "標題",
                          ui: { root: "w-full" }
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
                          modelValue: unref(state).data.form.serialNumber,
                          "onUpdate:modelValue": ($event) => unref(state).data.form.serialNumber = $event,
                          label: "序號",
                          ui: { root: "w-full" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UForm, { ui: { root: "space-y-4" } }, {
                default: withCtx(() => [
                  createVNode(_component_UFormField, {
                    label: "名稱",
                    name: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).data.form.name,
                        "onUpdate:modelValue": ($event) => unref(state).data.form.name = $event,
                        label: "標題",
                        ui: { root: "w-full" }
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
                        modelValue: unref(state).data.form.serialNumber,
                        "onUpdate:modelValue": ($event) => unref(state).data.form.serialNumber = $event,
                        label: "序號",
                        ui: { root: "w-full" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "取消",
              color: "neutral",
              variant: "outline",
              onClick: ($event) => unref(state).feature.modal.open = false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "確認",
              variant: "outline",
              disabled: !unref(state).data.form.name || !unref(state).data.form.serialNumber,
              loading: unref(CreateAttendanceAccountStatus) === "pending",
              onClick: handleSubmit
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "取消",
                color: "neutral",
                variant: "outline",
                onClick: ($event) => unref(state).feature.modal.open = false
              }, null, 8, ["onClick"]),
              createVNode(_component_UButton, {
                label: "確認",
                variant: "outline",
                disabled: !unref(state).data.form.name || !unref(state).data.form.serialNumber,
                loading: unref(CreateAttendanceAccountStatus) === "pending",
                onClick: handleSubmit
              }, null, 8, ["disabled", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const theme = {
  "slots": {
    "content": "bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] focus:outline-none pointer-events-auto",
    "arrow": "fill-(--ui-border)"
  }
};

var _a;
const appConfigPopover = _appConfig;
const popover = tv({ extend: tv(theme), ...((_a = appConfigPopover.ui) == null ? void 0 : _a.popover) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    mode: { default: "click" },
    content: {},
    arrow: { type: [Boolean, Object] },
    portal: { type: Boolean, default: true },
    dismissible: { type: Boolean, default: true },
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean },
    openDelay: { default: 0 },
    closeDelay: { default: 0 }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay") : reactivePick(props, "defaultOpen", "open", "modal");
    const rootProps = useForwardPropsEmits(pick, emits);
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        return {
          pointerDownOutside: (e) => e.preventDefault(),
          interactOutside: (e) => e.preventDefault(),
          escapeKeyDown: (e) => e.preventDefault()
        };
      }
      return {};
    });
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => popover({
      side: contentProps.value.side
    }));
    const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(Component).Trigger, {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Component).Portal, {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                    class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push4, _parent4, _scopeId3);
                        if (!!_ctx.arrow) {
                          _push4(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(Component).Trigger, {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(Component).Portal, {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_axios@1.9.0_change-case@5.4.4_db0@0.3.1_embla-caro_cd16108f3abcb555fd1f591dadf3f3ab/node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "UPopover" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const state = ref({
      data: {
        form: {
          _id: "",
          name: "",
          serialNumber: "",
          serialNumberExpiredDate: "",
          active: false,
          createdAt: "",
          updatedAt: "",
          __v: 0
        }
      },
      feature: {
        modal: {
          open: false
        },
        delete: {
          isLoading: false
        },
        create: {
          isLoading: false
        }
      }
    });
    const {
      data: AttendanceAccountResponse
    } = ([__temp, __restore] = withAsyncContext(() => useAttendanceAccountApi.getAll()), __temp = await __temp, __restore(), __temp);
    const handleDeleteAttendanceAccount = async () => {
      const { data, feature } = state.value;
      const { execute } = await useAttendanceAccountApi.delete({
        attendanceAccountId: data.form._id
      });
      feature.delete.isLoading = true;
      await execute();
      feature.delete.isLoading = false;
      await refreshNuxtData(UserRequestUrl.AttendanceAccount);
      feature.modal.open = false;
    };
    const handleOpenInfoModal = (form) => {
      const { feature, data } = state.value;
      feature.modal.open = true;
      data.form = form;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UBadge = UBadge;
      const _component_UModal = __nuxt_component_5;
      const _component_UPopover = __nuxt_component_2;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><h1>Attendance Account</h1>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList((_a = unref(AttendanceAccountResponse)) == null ? void 0 : _a.data, (item) => {
        _push(ssrRenderComponent(_component_UBadge, {
          key: item._id,
          label: `${item.name} ${item.active ? "" : "(未啟動)"}`,
          color: item.active ? "primary" : "warning",
          onClick: ($event) => handleOpenInfoModal(item)
        }, null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(state).feature.modal.open,
        "onUpdate:open": ($event) => unref(state).feature.modal.open = $event,
        title: "帳號資訊",
        ui: { footer: "justify-end" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p${_scopeId}>名字： ${ssrInterpolate(unref(state).data.form.name)}</p><p${_scopeId}>序號： ${ssrInterpolate(unref(state).data.form.serialNumber)}</p><p${_scopeId}>序號到期日： ${ssrInterpolate(unref(state).data.form.serialNumberExpiredDate)}</p><p${_scopeId}>啟用： ${ssrInterpolate(unref(state).data.form.active ? "是" : "否")}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", null, "名字： " + toDisplayString(unref(state).data.form.name), 1),
                createVNode("p", null, "序號： " + toDisplayString(unref(state).data.form.serialNumber), 1),
                createVNode("p", null, "序號到期日： " + toDisplayString(unref(state).data.form.serialNumberExpiredDate), 1),
                createVNode("p", null, "啟用： " + toDisplayString(unref(state).data.form.active ? "是" : "否"), 1)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPopover, null, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: "確認刪除",
                    color: "error",
                    onClick: handleDeleteAttendanceAccount
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      label: "確認刪除",
                      color: "error",
                      onClick: handleDeleteAttendanceAccount
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: "刪除",
                    color: "neutral",
                    variant: "subtle"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      label: "刪除",
                      color: "neutral",
                      variant: "subtle"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "確認",
              variant: "outline",
              onClick: ($event) => unref(state).feature.modal.open = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPopover, null, {
                content: withCtx(() => [
                  createVNode(_component_UButton, {
                    label: "確認刪除",
                    color: "error",
                    onClick: handleDeleteAttendanceAccount
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    label: "刪除",
                    color: "neutral",
                    variant: "subtle"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                label: "確認",
                variant: "outline",
                onClick: ($event) => unref(state).feature.modal.open = false
              }, null, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/homeMeeting/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
