import { computed, reactive, defineComponent, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, useSSRContext, useSlots, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, resolveDynamicComponent, createSlots, toRef } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { l as defu } from '../nitro/nitro.mjs';
import { Primitive, useForwardPropsEmits, DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuArrow } from 'reka-ui';
import { W as createSharedComposable, t as tv, j as _appConfig, c as useAppConfig, s as reactiveOmit, X as omit, U as UIcon, i as UAvatar, g as get, R as ULink, S as pickLinkProps, T as ULinkBase, r as reactivePick } from './server.mjs';
import { DropdownMenu } from 'reka-ui/namespaced';
import { c as createReusableTemplate } from './index.mjs';

const kbdKeysMap = {
  meta: "",
  ctrl: "",
  alt: "",
  win: "⊞",
  command: "⌘",
  shift: "⇧",
  option: "⌥",
  enter: "↵",
  delete: "⌦",
  backspace: "⌫",
  escape: "⎋",
  tab: "⇥",
  capslock: "⇪",
  arrowup: "↑",
  arrowright: "→",
  arrowdown: "↓",
  arrowleft: "←",
  pageup: "⇞",
  pagedown: "⇟",
  home: "↖",
  end: "↘"
};
const _useKbd = () => {
  const macOS = computed(() => false);
  const kbdKeysSpecificMap = reactive({
    meta: " ",
    alt: " ",
    ctrl: " "
  });
  function getKbdKey(value) {
    if (!value) {
      return;
    }
    if (["meta", "alt", "ctrl"].includes(value)) {
      return kbdKeysSpecificMap[value];
    }
    return kbdKeysMap[value] || value.toUpperCase();
  }
  return {
    macOS,
    getKbdKey
  };
};
const useKbd = /* @__PURE__ */ createSharedComposable(_useKbd);

const theme$1 = {
  "base": "inline-flex items-center justify-center px-1 rounded-(--ui-radius) font-medium font-sans",
  "variants": {
    "variant": {
      "solid": "bg-(--ui-bg-inverted) text-(--ui-bg)",
      "outline": "bg-(--ui-bg) text-(--ui-text-highlighted) ring ring-inset ring-(--ui-border-accented)",
      "subtle": "bg-(--ui-bg-elevated) text-(--ui-text) ring ring-inset ring-(--ui-border-accented)"
    },
    "size": {
      "sm": "h-4 min-w-[16px] text-[10px]",
      "md": "h-5 min-w-[20px] text-[11px]",
      "lg": "h-6 min-w-[24px] text-[12px]"
    }
  },
  "defaultVariants": {
    "variant": "outline",
    "size": "md"
  }
};

var _a$1;
const appConfigKbd = _appConfig;
const kbd = tv({ extend: tv(theme$1), ...((_a$1 = appConfigKbd.ui) == null ? void 0 : _a$1.kbd) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Kbd",
  __ssrInlineRender: true,
  props: {
    as: { default: "kbd" },
    value: {},
    variant: {},
    size: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { getKbdKey } = useKbd();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(kbd)({ variant: _ctx.variant, size: _ctx.size, class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(unref(getKbdKey)(_ctx.value))}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(unref(getKbdKey)(_ctx.value)), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_axios@1.9.0_change-case@5.4.4_db0@0.3.1_embla-caro_cd16108f3abcb555fd1f591dadf3f3ab/node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UKbd = Object.assign(_sfc_main$2, { __name: "UKbd" });

const theme = {
  "slots": {
    "content": "min-w-32 bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) divide-y divide-(--ui-border) overflow-y-auto scroll-py-1 data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in]",
    "arrow": "fill-(--ui-border)",
    "group": "p-1 isolate",
    "label": "w-full flex items-center font-semibold text-(--ui-text-highlighted)",
    "separator": "-mx-1 my-1 h-px bg-(--ui-border)",
    "item": "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-[calc(var(--ui-radius)*1.5)] data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "itemLeadingIcon": "shrink-0",
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
    "itemTrailingKbdsSize": "",
    "itemLabel": "truncate",
    "itemLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)"
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
    "active": {
      "true": {
        "item": "text-(--ui-text-highlighted) before:bg-(--ui-bg-elevated)",
        "itemLeadingIcon": "text-(--ui-text)"
      },
      "false": {
        "item": [
          "text-(--ui-text) data-highlighted:text-(--ui-text-highlighted) data-[state=open]:text-(--ui-text-highlighted) data-highlighted:before:bg-(--ui-bg-elevated)/50 data-[state=open]:before:bg-(--ui-bg-elevated)/50",
          "transition-colors before:transition-colors"
        ],
        "itemLeadingIcon": [
          "text-(--ui-text-dimmed) group-data-highlighted:text-(--ui-text) group-data-[state=open]:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    "loading": {
      "true": {
        "itemLeadingIcon": "animate-spin"
      }
    },
    "size": {
      "xs": {
        "label": "p-1 text-xs gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemTrailingIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "sm": {
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemTrailingIcon": "size-4",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "sm"
      },
      "md": {
        "label": "p-1.5 text-sm gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemTrailingIcon": "size-5",
        "itemTrailingKbds": "gap-0.5",
        "itemTrailingKbdsSize": "md"
      },
      "lg": {
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemTrailingIcon": "size-5",
        "itemTrailingKbds": "gap-1",
        "itemTrailingKbdsSize": "md"
      },
      "xl": {
        "label": "p-2 text-base gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemTrailingIcon": "size-6",
        "itemTrailingKbds": "gap-1",
        "itemTrailingKbdsSize": "lg"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "active": false,
      "class": {
        "item": "text-(--ui-primary) data-highlighted:text-(--ui-primary) data-highlighted:before:bg-(--ui-primary)/10 data-[state=open]:before:bg-(--ui-primary)/10",
        "itemLeadingIcon": "text-(--ui-primary)/75 group-data-highlighted:text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "active": false,
      "class": {
        "item": "text-(--ui-secondary) data-highlighted:text-(--ui-secondary) data-highlighted:before:bg-(--ui-secondary)/10 data-[state=open]:before:bg-(--ui-secondary)/10",
        "itemLeadingIcon": "text-(--ui-secondary)/75 group-data-highlighted:text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "active": false,
      "class": {
        "item": "text-(--ui-success) data-highlighted:text-(--ui-success) data-highlighted:before:bg-(--ui-success)/10 data-[state=open]:before:bg-(--ui-success)/10",
        "itemLeadingIcon": "text-(--ui-success)/75 group-data-highlighted:text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "active": false,
      "class": {
        "item": "text-(--ui-info) data-highlighted:text-(--ui-info) data-highlighted:before:bg-(--ui-info)/10 data-[state=open]:before:bg-(--ui-info)/10",
        "itemLeadingIcon": "text-(--ui-info)/75 group-data-highlighted:text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "active": false,
      "class": {
        "item": "text-(--ui-warning) data-highlighted:text-(--ui-warning) data-highlighted:before:bg-(--ui-warning)/10 data-[state=open]:before:bg-(--ui-warning)/10",
        "itemLeadingIcon": "text-(--ui-warning)/75 group-data-highlighted:text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "active": false,
      "class": {
        "item": "text-(--ui-error) data-highlighted:text-(--ui-error) data-highlighted:before:bg-(--ui-error)/10 data-[state=open]:before:bg-(--ui-error)/10",
        "itemLeadingIcon": "text-(--ui-error)/75 group-data-highlighted:text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
      }
    },
    {
      "color": "primary",
      "active": true,
      "class": {
        "item": "text-(--ui-primary) before:bg-(--ui-primary)/10",
        "itemLeadingIcon": "text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "active": true,
      "class": {
        "item": "text-(--ui-secondary) before:bg-(--ui-secondary)/10",
        "itemLeadingIcon": "text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "active": true,
      "class": {
        "item": "text-(--ui-success) before:bg-(--ui-success)/10",
        "itemLeadingIcon": "text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "active": true,
      "class": {
        "item": "text-(--ui-info) before:bg-(--ui-info)/10",
        "itemLeadingIcon": "text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "active": true,
      "class": {
        "item": "text-(--ui-warning) before:bg-(--ui-warning)/10",
        "itemLeadingIcon": "text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "active": true,
      "class": {
        "item": "text-(--ui-error) before:bg-(--ui-error)/10",
        "itemLeadingIcon": "text-(--ui-error)"
      }
    }
  ],
  "defaultVariants": {
    "size": "md"
  }
};

tv(theme)();
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    items: {},
    portal: { type: Boolean },
    sub: { type: Boolean },
    labelKey: {},
    checkedIcon: {},
    loadingIcon: {},
    externalIcon: { type: [Boolean, String] },
    class: {},
    ui: {},
    uiOverride: {},
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const contentProps = useForwardPropsEmits(reactiveOmit(props, "sub", "items", "portal", "labelKey", "checkedIcon", "loadingIcon", "externalIcon", "class", "ui", "uiOverride"), emits);
    const proxySlots = omit(slots, ["default"]);
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate();
    const groups = computed(() => {
      var _a;
      return ((_a = props.items) == null ? void 0 : _a.length) ? Array.isArray(props.items[0]) ? props.items : [props.items] : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index
            }, () => {
              var _a, _b, _c;
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index
              }, () => {
                var _a2, _b2, _c2, _d;
                if (item.loading) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                    class: _ctx.ui.itemLeadingIcon({ class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.itemLeadingIcon, color: item == null ? void 0 : item.color, loading: true })
                  }, null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: item.icon,
                    class: _ctx.ui.itemLeadingIcon({ class: (_b2 = _ctx.uiOverride) == null ? void 0 : _b2.itemLeadingIcon, color: item == null ? void 0 : item.color, active })
                  }, null, _parent2, _scopeId));
                } else if (item.avatar) {
                  _push2(ssrRenderComponent(UAvatar, mergeProps({
                    size: ((_c2 = props.uiOverride) == null ? void 0 : _c2.itemLeadingAvatarSize) || _ctx.ui.itemLeadingAvatarSize()
                  }, item.avatar, {
                    class: _ctx.ui.itemLeadingAvatar({ class: (_d = _ctx.uiOverride) == null ? void 0 : _d.itemLeadingAvatar, active })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.itemLabel({ class: (_a = _ctx.uiOverride) == null ? void 0 : _a.itemLabel, active }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && _ctx.externalIcon !== false) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                    class: _ctx.ui.itemLabelExternalIcon({ class: (_b = _ctx.uiOverride) == null ? void 0 : _b.itemLabelExternalIcon, color: item == null ? void 0 : item.color, active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass(_ctx.ui.itemTrailing({ class: (_c = _ctx.uiOverride) == null ? void 0 : _c.itemTrailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                item,
                active,
                index
              }, () => {
                var _a2, _b2, _c2, _d;
                if ((_a2 = item.children) == null ? void 0 : _a2.length) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: unref(appConfig).ui.icons.chevronRight,
                    class: _ctx.ui.itemTrailingIcon({ class: (_b2 = _ctx.uiOverride) == null ? void 0 : _b2.itemTrailingIcon, color: item == null ? void 0 : item.color, active })
                  }, null, _parent2, _scopeId));
                } else if ((_c2 = item.kbds) == null ? void 0 : _c2.length) {
                  _push2(`<span class="${ssrRenderClass(_ctx.ui.itemTrailingKbds({ class: (_d = _ctx.uiOverride) == null ? void 0 : _d.itemTrailingKbds }))}"${_scopeId}><!--[-->`);
                  ssrRenderList(item.kbds, (kbd, kbdIndex) => {
                    var _a3;
                    _push2(ssrRenderComponent(UKbd, mergeProps({
                      key: kbdIndex,
                      size: ((_a3 = props.uiOverride) == null ? void 0 : _a3.itemTrailingKbdsSize) || _ctx.ui.itemTrailingKbdsSize(),
                      ref_for: true
                    }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></span>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(ssrRenderComponent(unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(UIcon, {
                      name: _ctx.checkedIcon || unref(appConfig).ui.icons.check,
                      class: _ctx.ui.itemTrailingIcon({ class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.itemTrailingIcon, color: item == null ? void 0 : item.color })
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(UIcon, {
                        name: _ctx.checkedIcon || unref(appConfig).ui.icons.check,
                        class: _ctx.ui.itemTrailingIcon({ class: (_b2 = _ctx.uiOverride) == null ? void 0 : _b2.itemTrailingIcon, color: item == null ? void 0 : item.color })
                      }, null, 8, ["name", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index
              }, () => {
                var _a, _b, _c;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index
                  }, () => {
                    var _a2, _b2, _c2, _d;
                    return [
                      item.loading ? (openBlock(), createBlock(UIcon, {
                        key: 0,
                        name: _ctx.loadingIcon || unref(appConfig).ui.icons.loading,
                        class: _ctx.ui.itemLeadingIcon({ class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.itemLeadingIcon, color: item == null ? void 0 : item.color, loading: true })
                      }, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                        key: 1,
                        name: item.icon,
                        class: _ctx.ui.itemLeadingIcon({ class: (_b2 = _ctx.uiOverride) == null ? void 0 : _b2.itemLeadingIcon, color: item == null ? void 0 : item.color, active })
                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                        key: 2,
                        size: ((_c2 = props.uiOverride) == null ? void 0 : _c2.itemLeadingAvatarSize) || _ctx.ui.itemLeadingAvatarSize()
                      }, item.avatar, {
                        class: _ctx.ui.itemLeadingAvatar({ class: (_d = _ctx.uiOverride) == null ? void 0 : _d.itemLeadingAvatar, active })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.ui.itemLabel({ class: (_a = _ctx.uiOverride) == null ? void 0 : _a.itemLabel, active })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                      key: 0,
                      name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                      class: _ctx.ui.itemLabelExternalIcon({ class: (_b = _ctx.uiOverride) == null ? void 0 : _b.itemLabelExternalIcon, color: item == null ? void 0 : item.color, active })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  createVNode("span", {
                    class: _ctx.ui.itemTrailing({ class: (_c = _ctx.uiOverride) == null ? void 0 : _c.itemTrailing })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index
                    }, () => {
                      var _a2, _b2, _c2, _d;
                      return [
                        ((_a2 = item.children) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(UIcon, {
                          key: 0,
                          name: unref(appConfig).ui.icons.chevronRight,
                          class: _ctx.ui.itemTrailingIcon({ class: (_b2 = _ctx.uiOverride) == null ? void 0 : _b2.itemTrailingIcon, color: item == null ? void 0 : item.color, active })
                        }, null, 8, ["name", "class"])) : ((_c2 = item.kbds) == null ? void 0 : _c2.length) ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: _ctx.ui.itemTrailingKbds({ class: (_d = _ctx.uiOverride) == null ? void 0 : _d.itemTrailingKbds })
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                            var _a3;
                            return openBlock(), createBlock(UKbd, mergeProps({
                              key: kbdIndex,
                              size: ((_a3 = props.uiOverride) == null ? void 0 : _a3.itemTrailingKbdsSize) || _ctx.ui.itemTrailingKbdsSize(),
                              ref_for: true
                            }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                          }), 128))
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    createVNode(unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(UIcon, {
                            name: _ctx.checkedIcon || unref(appConfig).ui.icons.check,
                            class: _ctx.ui.itemTrailingIcon({ class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.itemTrailingIcon, color: item == null ? void 0 : item.color })
                          }, null, 8, ["name", "class"])
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ], 2)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DropdownMenu).Portal, {
        disabled: !_ctx.portal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.sub ? unref(DropdownMenu).SubContent : unref(DropdownMenu).Content), mergeProps({
              class: props.class
            }, unref(contentProps)), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(groups.value, (group, groupIndex) => {
                    var _a;
                    _push3(ssrRenderComponent(unref(DropdownMenu).Group, {
                      key: `group-${groupIndex}`,
                      class: _ctx.ui.group({ class: (_a = _ctx.uiOverride) == null ? void 0 : _a.group })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(group, (item, index) => {
                            var _a2, _b, _c, _d;
                            _push4(`<!--[-->`);
                            if (item.type === "label") {
                              _push4(ssrRenderComponent(unref(DropdownMenu).Label, {
                                class: _ctx.ui.label({ class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.label })
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                      item,
                                      index
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, 8, ["item", "index"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (item.type === "separator") {
                              _push4(ssrRenderComponent(unref(DropdownMenu).Separator, {
                                class: _ctx.ui.separator({ class: (_b = _ctx.uiOverride) == null ? void 0 : _b.separator })
                              }, null, _parent4, _scopeId3));
                            } else if ((_c = item == null ? void 0 : item.children) == null ? void 0 : _c.length) {
                              _push4(ssrRenderComponent(unref(DropdownMenu).Sub, {
                                open: item.open,
                                "default-open": item.defaultOpen
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  var _a3, _b2;
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(DropdownMenu).SubTrigger, {
                                      as: "button",
                                      type: "button",
                                      disabled: item.disabled,
                                      "text-value": unref(get)(item, props.labelKey),
                                      class: _ctx.ui.item({ class: (_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, color: item == null ? void 0 : item.color })
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(ReuseItemTemplate), {
                                            item,
                                            index
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(ReuseItemTemplate), {
                                              item,
                                              index
                                            }, null, 8, ["item", "index"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(UDropdownMenuContent, mergeProps({
                                      sub: "",
                                      class: props.class,
                                      ui: _ctx.ui,
                                      "ui-override": _ctx.uiOverride,
                                      portal: _ctx.portal,
                                      items: item.children,
                                      side: "right",
                                      align: "start",
                                      "align-offset": -4,
                                      "side-offset": 3,
                                      "label-key": _ctx.labelKey,
                                      "checked-icon": _ctx.checkedIcon,
                                      "loading-icon": _ctx.loadingIcon,
                                      "external-icon": _ctx.externalIcon,
                                      ref_for: true
                                    }, item.content), createSlots({ _: 2 }, [
                                      renderList(unref(proxySlots), (_5, name) => {
                                        return {
                                          name,
                                          fn: withCtx((slotData, _push6, _parent6, _scopeId5) => {
                                            if (_push6) {
                                              ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push6, _parent6, _scopeId5);
                                            } else {
                                              return [
                                                renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                              ];
                                            }
                                          })
                                        };
                                      })
                                    ]), _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(DropdownMenu).SubTrigger, {
                                        as: "button",
                                        type: "button",
                                        disabled: item.disabled,
                                        "text-value": unref(get)(item, props.labelKey),
                                        class: _ctx.ui.item({ class: (_b2 = _ctx.uiOverride) == null ? void 0 : _b2.item, color: item == null ? void 0 : item.color })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseItemTemplate), {
                                            item,
                                            index
                                          }, null, 8, ["item", "index"])
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "text-value", "class"]),
                                      createVNode(UDropdownMenuContent, mergeProps({
                                        sub: "",
                                        class: props.class,
                                        ui: _ctx.ui,
                                        "ui-override": _ctx.uiOverride,
                                        portal: _ctx.portal,
                                        items: item.children,
                                        side: "right",
                                        align: "start",
                                        "align-offset": -4,
                                        "side-offset": 3,
                                        "label-key": _ctx.labelKey,
                                        "checked-icon": _ctx.checkedIcon,
                                        "loading-icon": _ctx.loadingIcon,
                                        "external-icon": _ctx.externalIcon,
                                        ref_for: true
                                      }, item.content), createSlots({ _: 2 }, [
                                        renderList(unref(proxySlots), (_5, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "checked-icon", "loading-icon", "external-icon"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (item.type === "checkbox") {
                              _push4(ssrRenderComponent(unref(DropdownMenu).CheckboxItem, {
                                "model-value": item.checked,
                                disabled: item.disabled,
                                "text-value": unref(get)(item, props.labelKey),
                                class: _ctx.ui.item({ class: [(_d = _ctx.uiOverride) == null ? void 0 : _d.item, item.class], color: item == null ? void 0 : item.color }),
                                "onUpdate:modelValue": item.onUpdateChecked,
                                onSelect: item.onSelect
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                      item,
                                      index
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, 8, ["item", "index"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(unref(DropdownMenu).Item, {
                                "as-child": "",
                                disabled: item.disabled,
                                "text-value": unref(get)(item, props.labelKey),
                                onSelect: item.onSelect
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }, _push6, _parent6, _scopeId5) => {
                                        var _a3, _b2;
                                        if (_push6) {
                                          _push6(ssrRenderComponent(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                            class: _ctx.ui.item({ class: [(_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, item.class], color: item == null ? void 0 : item.color, active })
                                          }), {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(ReuseItemTemplate), {
                                                  item,
                                                  active,
                                                  index
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(ReuseItemTemplate), {
                                                    item,
                                                    active,
                                                    index
                                                  }, null, 8, ["item", "active", "index"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                              class: _ctx.ui.item({ class: [(_b2 = _ctx.uiOverride) == null ? void 0 : _b2.item, item.class], color: item == null ? void 0 : item.color, active })
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(unref(ReuseItemTemplate), {
                                                  item,
                                                  active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                        default: withCtx(({ active, ...slotProps }) => {
                                          var _a3;
                                          return [
                                            createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                              class: _ctx.ui.item({ class: [(_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, item.class], color: item == null ? void 0 : item.color, active })
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(unref(ReuseItemTemplate), {
                                                  item,
                                                  active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                              var _a2, _b, _c, _d;
                              return openBlock(), createBlock(Fragment, {
                                key: `group-${groupIndex}-${index}`
                              }, [
                                item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
                                  key: 0,
                                  class: _ctx.ui.label({ class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.label })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseItemTemplate), {
                                      item,
                                      index
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
                                  key: 1,
                                  class: _ctx.ui.separator({ class: (_b = _ctx.uiOverride) == null ? void 0 : _b.separator })
                                }, null, 8, ["class"])) : ((_c = item == null ? void 0 : item.children) == null ? void 0 : _c.length) ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
                                  key: 2,
                                  open: item.open,
                                  "default-open": item.defaultOpen
                                }, {
                                  default: withCtx(() => {
                                    var _a3;
                                    return [
                                      createVNode(unref(DropdownMenu).SubTrigger, {
                                        as: "button",
                                        type: "button",
                                        disabled: item.disabled,
                                        "text-value": unref(get)(item, props.labelKey),
                                        class: _ctx.ui.item({ class: (_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, color: item == null ? void 0 : item.color })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseItemTemplate), {
                                            item,
                                            index
                                          }, null, 8, ["item", "index"])
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "text-value", "class"]),
                                      createVNode(UDropdownMenuContent, mergeProps({
                                        sub: "",
                                        class: props.class,
                                        ui: _ctx.ui,
                                        "ui-override": _ctx.uiOverride,
                                        portal: _ctx.portal,
                                        items: item.children,
                                        side: "right",
                                        align: "start",
                                        "align-offset": -4,
                                        "side-offset": 3,
                                        "label-key": _ctx.labelKey,
                                        "checked-icon": _ctx.checkedIcon,
                                        "loading-icon": _ctx.loadingIcon,
                                        "external-icon": _ctx.externalIcon,
                                        ref_for: true
                                      }, item.content), createSlots({ _: 2 }, [
                                        renderList(unref(proxySlots), (_4, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "checked-icon", "loading-icon", "external-icon"])
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
                                  key: 3,
                                  "model-value": item.checked,
                                  disabled: item.disabled,
                                  "text-value": unref(get)(item, props.labelKey),
                                  class: _ctx.ui.item({ class: [(_d = _ctx.uiOverride) == null ? void 0 : _d.item, item.class], color: item == null ? void 0 : item.color }),
                                  "onUpdate:modelValue": item.onUpdateChecked,
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseItemTemplate), {
                                      item,
                                      index
                                    }, null, 8, ["item", "index"])
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (openBlock(), createBlock(unref(DropdownMenu).Item, {
                                  key: 4,
                                  "as-child": "",
                                  disabled: item.disabled,
                                  "text-value": unref(get)(item, props.labelKey),
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                      default: withCtx(({ active, ...slotProps }) => {
                                        var _a3;
                                        return [
                                          createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                            class: _ctx.ui.item({ class: [(_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, item.class], color: item == null ? void 0 : item.color, active })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseItemTemplate), {
                                                item,
                                                active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, ["disabled", "text-value", "onSelect"]))
                              ], 64);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                      var _a;
                      return openBlock(), createBlock(unref(DropdownMenu).Group, {
                        key: `group-${groupIndex}`,
                        class: _ctx.ui.group({ class: (_a = _ctx.uiOverride) == null ? void 0 : _a.group })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                            var _a2, _b, _c, _d;
                            return openBlock(), createBlock(Fragment, {
                              key: `group-${groupIndex}-${index}`
                            }, [
                              item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
                                key: 0,
                                class: _ctx.ui.label({ class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.label })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseItemTemplate), {
                                    item,
                                    index
                                  }, null, 8, ["item", "index"])
                                ]),
                                _: 2
                              }, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
                                key: 1,
                                class: _ctx.ui.separator({ class: (_b = _ctx.uiOverride) == null ? void 0 : _b.separator })
                              }, null, 8, ["class"])) : ((_c = item == null ? void 0 : item.children) == null ? void 0 : _c.length) ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
                                key: 2,
                                open: item.open,
                                "default-open": item.defaultOpen
                              }, {
                                default: withCtx(() => {
                                  var _a3;
                                  return [
                                    createVNode(unref(DropdownMenu).SubTrigger, {
                                      as: "button",
                                      type: "button",
                                      disabled: item.disabled,
                                      "text-value": unref(get)(item, props.labelKey),
                                      class: _ctx.ui.item({ class: (_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, color: item == null ? void 0 : item.color })
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ReuseItemTemplate), {
                                          item,
                                          index
                                        }, null, 8, ["item", "index"])
                                      ]),
                                      _: 2
                                    }, 1032, ["disabled", "text-value", "class"]),
                                    createVNode(UDropdownMenuContent, mergeProps({
                                      sub: "",
                                      class: props.class,
                                      ui: _ctx.ui,
                                      "ui-override": _ctx.uiOverride,
                                      portal: _ctx.portal,
                                      items: item.children,
                                      side: "right",
                                      align: "start",
                                      "align-offset": -4,
                                      "side-offset": 3,
                                      "label-key": _ctx.labelKey,
                                      "checked-icon": _ctx.checkedIcon,
                                      "loading-icon": _ctx.loadingIcon,
                                      "external-icon": _ctx.externalIcon,
                                      ref_for: true
                                    }, item.content), createSlots({ _: 2 }, [
                                      renderList(unref(proxySlots), (_3, name) => {
                                        return {
                                          name,
                                          fn: withCtx((slotData) => [
                                            renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                          ])
                                        };
                                      })
                                    ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "checked-icon", "loading-icon", "external-icon"])
                                  ];
                                }),
                                _: 2
                              }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
                                key: 3,
                                "model-value": item.checked,
                                disabled: item.disabled,
                                "text-value": unref(get)(item, props.labelKey),
                                class: _ctx.ui.item({ class: [(_d = _ctx.uiOverride) == null ? void 0 : _d.item, item.class], color: item == null ? void 0 : item.color }),
                                "onUpdate:modelValue": item.onUpdateChecked,
                                onSelect: item.onSelect
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseItemTemplate), {
                                    item,
                                    index
                                  }, null, 8, ["item", "index"])
                                ]),
                                _: 2
                              }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (openBlock(), createBlock(unref(DropdownMenu).Item, {
                                key: 4,
                                "as-child": "",
                                disabled: item.disabled,
                                "text-value": unref(get)(item, props.labelKey),
                                onSelect: item.onSelect
                              }, {
                                default: withCtx(() => [
                                  createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                    default: withCtx(({ active, ...slotProps }) => {
                                      var _a3;
                                      return [
                                        createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                          class: _ctx.ui.item({ class: [(_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, item.class], color: item == null ? void 0 : item.color, active })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseItemTemplate), {
                                              item,
                                              active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 2
                              }, 1032, ["disabled", "text-value", "onSelect"]))
                            ], 64);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128)),
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.sub ? unref(DropdownMenu).SubContent : unref(DropdownMenu).Content), mergeProps({
                class: props.class
              }, unref(contentProps)), {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                    var _a;
                    return openBlock(), createBlock(unref(DropdownMenu).Group, {
                      key: `group-${groupIndex}`,
                      class: _ctx.ui.group({ class: (_a = _ctx.uiOverride) == null ? void 0 : _a.group })
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                          var _a2, _b, _c, _d;
                          return openBlock(), createBlock(Fragment, {
                            key: `group-${groupIndex}-${index}`
                          }, [
                            item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
                              key: 0,
                              class: _ctx.ui.label({ class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.label })
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseItemTemplate), {
                                  item,
                                  index
                                }, null, 8, ["item", "index"])
                              ]),
                              _: 2
                            }, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
                              key: 1,
                              class: _ctx.ui.separator({ class: (_b = _ctx.uiOverride) == null ? void 0 : _b.separator })
                            }, null, 8, ["class"])) : ((_c = item == null ? void 0 : item.children) == null ? void 0 : _c.length) ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
                              key: 2,
                              open: item.open,
                              "default-open": item.defaultOpen
                            }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createVNode(unref(DropdownMenu).SubTrigger, {
                                    as: "button",
                                    type: "button",
                                    disabled: item.disabled,
                                    "text-value": unref(get)(item, props.labelKey),
                                    class: _ctx.ui.item({ class: (_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, color: item == null ? void 0 : item.color })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, 8, ["item", "index"])
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "text-value", "class"]),
                                  createVNode(UDropdownMenuContent, mergeProps({
                                    sub: "",
                                    class: props.class,
                                    ui: _ctx.ui,
                                    "ui-override": _ctx.uiOverride,
                                    portal: _ctx.portal,
                                    items: item.children,
                                    side: "right",
                                    align: "start",
                                    "align-offset": -4,
                                    "side-offset": 3,
                                    "label-key": _ctx.labelKey,
                                    "checked-icon": _ctx.checkedIcon,
                                    "loading-icon": _ctx.loadingIcon,
                                    "external-icon": _ctx.externalIcon,
                                    ref_for: true
                                  }, item.content), createSlots({ _: 2 }, [
                                    renderList(unref(proxySlots), (_2, name) => {
                                      return {
                                        name,
                                        fn: withCtx((slotData) => [
                                          renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                        ])
                                      };
                                    })
                                  ]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "checked-icon", "loading-icon", "external-icon"])
                                ];
                              }),
                              _: 2
                            }, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
                              key: 3,
                              "model-value": item.checked,
                              disabled: item.disabled,
                              "text-value": unref(get)(item, props.labelKey),
                              class: _ctx.ui.item({ class: [(_d = _ctx.uiOverride) == null ? void 0 : _d.item, item.class], color: item == null ? void 0 : item.color }),
                              "onUpdate:modelValue": item.onUpdateChecked,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseItemTemplate), {
                                  item,
                                  index
                                }, null, 8, ["item", "index"])
                              ]),
                              _: 2
                            }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (openBlock(), createBlock(unref(DropdownMenu).Item, {
                              key: 4,
                              "as-child": "",
                              disabled: item.disabled,
                              "text-value": unref(get)(item, props.labelKey),
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => [
                                createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                                  default: withCtx(({ active, ...slotProps }) => {
                                    var _a3;
                                    return [
                                      createVNode(ULinkBase, mergeProps({ ref_for: true }, slotProps, {
                                        class: _ctx.ui.item({ class: [(_a3 = _ctx.uiOverride) == null ? void 0 : _a3.item, item.class], color: item == null ? void 0 : item.color, active })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseItemTemplate), {
                                            item,
                                            active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040)
                              ]),
                              _: 2
                            }, 1032, ["disabled", "text-value", "onSelect"]))
                          ], 64);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["class"]);
                  }), 128)),
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_axios@1.9.0_change-case@5.4.4_db0@0.3.1_embla-caro_cd16108f3abcb555fd1f591dadf3f3ab/node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UDropdownMenuContent = Object.assign(_sfc_main$1, { __name: "UDropdownMenuContent" });

var _a;
const appConfigDropdownMenu = _appConfig;
const dropdownMenu = tv({ extend: tv(theme), ...((_a = appConfigDropdownMenu.ui) == null ? void 0 : _a.dropdownMenu) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    size: {},
    items: {},
    checkedIcon: {},
    loadingIcon: {},
    externalIcon: { type: [Boolean, String], default: true },
    content: {},
    arrow: { type: [Boolean, Object] },
    portal: { type: Boolean, default: true },
    labelKey: { default: "label" },
    disabled: { type: Boolean },
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "modal"), emits);
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = toRef(() => props.arrow);
    const proxySlots = omit(slots, ["default"]);
    const ui = computed(() => dropdownMenu({
      size: props.size
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DropdownMenuTrigger), {
                "as-child": "",
                class: props.class,
                disabled: _ctx.disabled
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
            _push2(ssrRenderComponent(UDropdownMenuContent, mergeProps({
              class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] }),
              ui: ui.value,
              "ui-override": props.ui
            }, contentProps.value, {
              items: _ctx.items,
              portal: _ctx.portal,
              "label-key": _ctx.labelKey,
              "checked-icon": _ctx.checkedIcon,
              "loading-icon": _ctx.loadingIcon,
              "external-icon": _ctx.externalIcon
            }), createSlots({
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  if (!!_ctx.arrow) {
                    _push3(ssrRenderComponent(unref(DropdownMenuArrow), mergeProps(arrowProps.value, {
                      class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                    }), null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !!_ctx.arrow ? (openBlock(), createBlock(unref(DropdownMenuArrow), mergeProps({ key: 0 }, arrowProps.value, {
                      class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                    }), null, 16, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              renderList(unref(proxySlots), (_, name) => {
                return {
                  name,
                  fn: withCtx((slotData, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, name, slotData)
                      ];
                    }
                  })
                };
              })
            ]), _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DropdownMenuTrigger), {
                key: 0,
                "as-child": "",
                class: props.class,
                disabled: _ctx.disabled
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class", "disabled"])) : createCommentVNode("", true),
              createVNode(UDropdownMenuContent, mergeProps({
                class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] }),
                ui: ui.value,
                "ui-override": props.ui
              }, contentProps.value, {
                items: _ctx.items,
                portal: _ctx.portal,
                "label-key": _ctx.labelKey,
                "checked-icon": _ctx.checkedIcon,
                "loading-icon": _ctx.loadingIcon,
                "external-icon": _ctx.externalIcon
              }), createSlots({
                default: withCtx(() => {
                  var _a3;
                  return [
                    !!_ctx.arrow ? (openBlock(), createBlock(unref(DropdownMenuArrow), mergeProps({ key: 0 }, arrowProps.value, {
                      class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                    }), null, 16, ["class"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, [
                renderList(unref(proxySlots), (_, name) => {
                  return {
                    name,
                    fn: withCtx((slotData) => [
                      renderSlot(_ctx.$slots, name, slotData)
                    ])
                  };
                })
              ]), 1040, ["class", "ui", "ui-override", "items", "portal", "label-key", "checked-icon", "loading-icon", "external-icon"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_axios@1.9.0_change-case@5.4.4_db0@0.3.1_embla-caro_cd16108f3abcb555fd1f591dadf3f3ab/node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "UDropdownMenu" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=DropdownMenu.vue.mjs.map
