import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext, useModel, ref, withAsyncContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useForwardPropsEmits, TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from 'reka-ui';
import { r as reactivePick, t as tv, U as UIcon, j as UAvatar, k as get, b as _appConfig, g as useToast, e as __nuxt_component_2$1, l as useCookie, n as navigateTo, C as CookieEnums } from './server.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_2, u as useAuthApi } from './useAuthApi.mjs';
import { C as ClientRoutes } from './RoutesEnum.mjs';
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
import './useRequestApi.mjs';

const theme = {
  "slots": {
    "root": "flex items-center gap-2",
    "list": "relative flex p-1 group",
    "indicator": "absolute transition-[translate,width] duration-200",
    "trigger": [
      "group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-(--ui-text-muted) hover:data-[state=inactive]:not-disabled:text-(--ui-text) font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden",
      "transition-colors"
    ],
    "content": "focus:outline-none w-full",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "label": "truncate"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": {
        "list": "bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*2)]",
        "trigger": "flex-1 w-full",
        "indicator": "rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"
      },
      "link": {
        "list": "border-(--ui-border)",
        "indicator": "rounded-full"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "list": "w-full",
        "indicator": "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        "trigger": "justify-center"
      },
      "vertical": {
        "list": "flex-col",
        "indicator": "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"
      }
    },
    "size": {
      "xs": {
        "trigger": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "sm": {
        "trigger": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "md": {
        "trigger": "px-3 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "lg": {
        "trigger": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "xl": {
        "trigger": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "pill",
      "class": {
        "indicator": "inset-y-1"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "link",
      "class": {
        "list": "border-b -mb-px",
        "indicator": "-bottom-px h-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "pill",
      "class": {
        "indicator": "inset-x-1",
        "list": "items-center"
      }
    },
    {
      "orientation": "vertical",
      "variant": "link",
      "class": {
        "list": "border-s -ms-px",
        "indicator": "-start-px w-px"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-primary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-secondary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-success)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-info)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-warning)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-error)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-bg-inverted)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-primary)",
        "trigger": "data-[state=active]:text-(--ui-primary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-secondary)",
        "trigger": "data-[state=active]:text-(--ui-secondary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-success)",
        "trigger": "data-[state=active]:text-(--ui-success) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-info)",
        "trigger": "data-[state=active]:text-(--ui-info) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-warning)",
        "trigger": "data-[state=active]:text-(--ui-warning) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-error)",
        "trigger": "data-[state=active]:text-(--ui-error) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-bg-inverted)",
        "trigger": "data-[state=active]:text-(--ui-text-highlighted) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "pill",
    "size": "md"
  }
};

var _a;
const appConfigTabs = _appConfig;
const tabs = tv({ extend: tv(theme), ...((_a = appConfigTabs.ui) == null ? void 0 : _a.tabs) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    as: {},
    items: {},
    color: {},
    variant: {},
    size: {},
    orientation: { default: "horizontal" },
    content: { type: Boolean, default: true },
    labelKey: { default: "label" },
    class: {},
    ui: {},
    defaultValue: { default: "0" },
    modelValue: {},
    activationMode: {},
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "orientation", "activationMode", "unmountOnHide"), emits);
    const ui = computed(() => tabs({
      color: props.color,
      variant: props.variant,
      size: props.size,
      orientation: props.orientation
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList), {
              class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator), {
                    class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                  }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.items, (item, index) => {
                    var _a5;
                    _push3(ssrRenderComponent(unref(TabsTrigger), {
                      key: index,
                      value: item.value || String(index),
                      disabled: item.disabled,
                      class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a6, _b3;
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            item,
                            index
                          }, () => {
                            var _a7, _b4, _c;
                            if (item.icon) {
                              _push4(ssrRenderComponent(UIcon, {
                                name: item.icon,
                                class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (item.avatar) {
                              _push4(ssrRenderComponent(UAvatar, mergeProps({
                                size: ((_b4 = props.ui) == null ? void 0 : _b4.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                ref_for: true
                              }, item.avatar, {
                                class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          if (unref(get)(item, props.labelKey) || !!slots.default) {
                            _push4(`<span class="${ssrRenderClass(ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => {
                              _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            item,
                            index
                          }, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b4, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b4 = props.ui) == null ? void 0 : _b4.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_b3 = props.ui) == null ? void 0 : _b3.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      var _a5;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a6;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b3, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b3 = props.ui) == null ? void 0 : _b3.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!_ctx.content) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                var _a4;
                _push2(ssrRenderComponent(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: (_a4 = props.ui) == null ? void 0 : _a4.content })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                        item,
                        index
                      }, () => {
                        _push3(`${ssrInterpolate(item.content)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(TabsList), {
                class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      var _a5;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a6;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b2, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128))
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!_ctx.content ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.items, (item, index) => {
                var _a4;
                return openBlock(), createBlock(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: (_a4 = props.ui) == null ? void 0 : _a4.content })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value", "class"]);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_change-case@5.4.4_db0@0.3.1_embla-carousel@8.5.2_i_ef4954551e9ae83c6fa0c5b36063b32e/node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "UTabs" });

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
      const _component_UForm = __nuxt_component_0$1;
      const _component_UFormField = __nuxt_component_1;
      const _component_UInput = __nuxt_component_2;
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
      const _component_UForm = __nuxt_component_0$1;
      const _component_UFormField = __nuxt_component_1;
      const _component_UInput = __nuxt_component_2;
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
      useCookie(CookieEnums.AccessToken).value = (_a = LoginResponse.value) == null ? void 0 : _a.token.accessTokenJWT;
      useCookie(CookieEnums.RefreshToken).value = (_b = LoginResponse.value) == null ? void 0 : _b.token.refreshTokenJWT;
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
      const _component_UButton = __nuxt_component_2$1;
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
