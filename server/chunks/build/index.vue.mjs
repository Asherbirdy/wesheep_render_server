import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, renderSlot, useSSRContext, toRef, toHandlers, createTextVNode, toDisplayString, createVNode, ref, withAsyncContext, watch } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, VisuallyHidden, DialogTitle, DialogDescription, DialogClose } from 'reka-ui';
import { t as tv, b as _appConfig, c as useLocale, d as useAppConfig, r as reactivePick, e as __nuxt_component_2, U as UserRequestUrl } from './server.mjs';
import { u as useAuthApi, _ as __nuxt_component_0$1, a as __nuxt_component_1$1, b as __nuxt_component_2$1 } from './useAuthApi.mjs';
import { u as useRequestApi } from './useRequestApi.mjs';
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

const theme$1 = {
  "slots": {
    "root": "rounded-[calc(var(--ui-radius)*2)]",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-(--ui-bg-inverted) text-(--ui-bg)"
      },
      "outline": {
        "root": "bg-(--ui-bg) ring ring-(--ui-border) divide-y divide-(--ui-border)"
      },
      "soft": {
        "root": "bg-(--ui-bg-elevated)/50 divide-y divide-(--ui-border)"
      },
      "subtle": {
        "root": "bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) divide-y divide-(--ui-border)"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};

var _a$1;
const appConfigCard = _appConfig;
const card = tv({ extend: tv(theme$1), ...((_a$1 = appConfigCard.ui) == null ? void 0 : _a$1.card) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    as: {},
    variant: {},
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ui = computed(() => card({ variant: props.variant }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.body({ class: (_e = props.ui) == null ? void 0 : _e.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                class: ui.value.footer({ class: (_f = props.ui) == null ? void 0 : _f.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_change-case@5.4.4_db0@0.3.1_embla-carousel@8.5.2_i_ef4954551e9ae83c6fa0c5b36063b32e/node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "UCard" });

const theme = {
  "slots": {
    "overlay": "fixed inset-0 bg-(--ui-bg-elevated)/75",
    "content": "fixed bg-(--ui-bg) divide-y divide-(--ui-border) flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-(--ui-text-highlighted) font-semibold",
    "description": "mt-1 text-(--ui-text-muted) text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-[calc(var(--ui-radius)*2)] shadow-lg ring ring-(--ui-border)"
      }
    }
  }
};

var _a;
const appConfigModal = _appConfig;
const modal = tv({ extend: tv(theme), ...((_a = appConfigModal.ui) == null ? void 0 : _a.modal) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    content: {},
    overlay: { type: Boolean, default: true },
    transition: { type: Boolean, default: true },
    fullscreen: { type: Boolean },
    portal: { type: Boolean, default: true },
    close: { type: [Boolean, Object], default: true },
    closeIcon: {},
    dismissible: { type: Boolean, default: true },
    class: {},
    ui: {},
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean, default: true }
  },
  emits: ["after:leave", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      const events = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      if (!props.dismissible) {
        return {
          pointerDownOutside: (e) => e.preventDefault(),
          interactOutside: (e) => e.preventDefault(),
          escapeKeyDown: (e) => e.preventDefault(),
          ...events
        };
      }
      return events;
    });
    const ui = computed(() => modal({
      transition: props.transition,
      fullscreen: props.fullscreen
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
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
            _push2(ssrRenderComponent(unref(DialogPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d;
                if (_push3) {
                  if (_ctx.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: (_a2 = props.ui) == null ? void 0 : _a2.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, {
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (_ctx.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(_ctx.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (_ctx.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(_ctx.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c2;
                          if (!!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              var _a4, _b3, _c3;
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper }))}"${_scopeId3}>`);
                              if (_ctx.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(_ctx.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (_ctx.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(_ctx.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              if (_ctx.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        if (_ctx.close) {
                                          _push5(ssrRenderComponent(__nuxt_component_2, mergeProps({
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a5;
                                          return [
                                            _ctx.close ? (openBlock(), createBlock(__nuxt_component_2, mergeProps({
                                              key: 0,
                                              icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                              class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(_ctx.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(_ctx.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b2, _c2;
                            return [
                              !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => {
                                  var _a4, _b3, _c3;
                                  return [
                                    createVNode("div", {
                                      class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                    }, [
                                      _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ], 2),
                                    _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a5;
                                          return [
                                            _ctx.close ? (openBlock(), createBlock(__nuxt_component_2, mergeProps({
                                              key: 0,
                                              icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                              class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 3
                                    })) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    _ctx.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c2;
                          return [
                            !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a4, _b3, _c3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                  }, [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        return [
                                          _ctx.close ? (openBlock(), createBlock(__nuxt_component_2, mergeProps({
                                            key: 0,
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2, _b;
                  return [
                    _ctx.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a2 = props.ui) == null ? void 0 : _a2.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c;
                          return [
                            !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a4, _b3, _c2;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                  }, [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        return [
                                          _ctx.close ? (openBlock(), createBlock(__nuxt_component_2, mergeProps({
                                            key: 0,
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onAfterLeave"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_change-case@5.4.4_db0@0.3.1_embla-carousel@8.5.2_i_ef4954551e9ae83c6fa0c5b36063b32e/node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UModal" });

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
      },
      api: null,
      query: null
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
      const _component_UCard = __nuxt_component_0;
      const _component_UModal = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2;
      const _component_UForm = __nuxt_component_0$1;
      const _component_UFormField = __nuxt_component_1$1;
      const _component_UInput = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between gap-4 h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<h2${_scopeId}>姓名：${ssrInterpolate((_a = unref(UserInfoResponse)) == null ? void 0 : _a.user.name)}</h2><h2${_scopeId}>電子信箱：${ssrInterpolate((_b = unref(UserInfoResponse)) == null ? void 0 : _b.user.email)}</h2><h2${_scopeId}>區域：${ssrInterpolate((_c = unref(UserInfoResponse)) == null ? void 0 : _c.user.district.name)}</h2><h2${_scopeId}>Email驗證：${ssrInterpolate((_d = unref(UserInfoResponse)) == null ? void 0 : _d.user.emailVerified)}</h2><h2${_scopeId}>權限：${ssrInterpolate((_e = unref(UserInfoResponse)) == null ? void 0 : _e.user.role)}</h2><h2${_scopeId}>網頁權限：${ssrInterpolate((_f = unref(UserInfoResponse)) == null ? void 0 : _f.user.landingPageAccess)}</h2>`);
          } else {
            return [
              createVNode("h2", null, "姓名：" + toDisplayString((_g = unref(UserInfoResponse)) == null ? void 0 : _g.user.name), 1),
              createVNode("h2", null, "電子信箱：" + toDisplayString((_h = unref(UserInfoResponse)) == null ? void 0 : _h.user.email), 1),
              createVNode("h2", null, "區域：" + toDisplayString((_i = unref(UserInfoResponse)) == null ? void 0 : _i.user.district.name), 1),
              createVNode("h2", null, "Email驗證：" + toDisplayString((_j = unref(UserInfoResponse)) == null ? void 0 : _j.user.emailVerified), 1),
              createVNode("h2", null, "權限：" + toDisplayString((_k = unref(UserInfoResponse)) == null ? void 0 : _k.user.role), 1),
              createVNode("h2", null, "網頁權限：" + toDisplayString((_l = unref(UserInfoResponse)) == null ? void 0 : _l.user.landingPageAccess), 1)
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
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Email 驗證",
              block: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Email 驗證",
                block: ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
