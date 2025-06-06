import { _ as __nuxt_component_1 } from './DropdownMenu.vue.mjs';
import { r as reactivePick, t as tv, j as _appConfig, c as useAppConfig, i as UAvatar, U as UIcon, g as get, R as ULink, S as pickLinkProps, T as ULinkBase, w as useRoute, C as ClientRoutes, V as useState, z as useCookie, A as CookieEnums, L as clearNuxtState, K as clearNuxtData, v as navigateTo, P as PublicRoutes, k as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, useSlots, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, createVNode, openBlock, useSSRContext, computed, toRef, createTextVNode, toDisplayString, resolveDynamicComponent, createSlots, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent, NavigationMenuRoot, NavigationMenuList, NavigationMenuIndicator, NavigationMenuViewport, Primitive } from 'reka-ui';
import { c as createReusableTemplate } from './index.mjs';
import { U as UBadge } from './Badge.vue.mjs';
import { L as Logo } from './Logo.vue.mjs';
import { R as Role } from './RoleEnum.mjs';
import { u as useUserStore } from './useUserStore.mjs';
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
import 'reka-ui/namespaced';
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
import './_plugin-vue_export-helper.mjs';

const theme$2 = {
  "slots": {
    "root": "",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
  }
};

var _a$2;
const appConfigCollapsible = _appConfig;
const collapsible = tv({ extend: tv(theme$2), ...((_a$2 = appConfigCollapsible.ui) == null ? void 0 : _a$2.collapsible) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
    const ui = collapsible();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(rootProps), {
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), { "as-child": "" }, {
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
            _push2(ssrRenderComponent(unref(CollapsibleContent), {
              class: unref(ui).content({ class: (_a3 = props.ui) == null ? void 0 : _a3.content })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "content")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(CollapsibleTrigger), {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(CollapsibleContent), {
                class: unref(ui).content({ class: (_b = props.ui) == null ? void 0 : _b.content })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_axios@1.9.0_change-case@5.4.4_db0@0.3.1_embla-caro_cd16108f3abcb555fd1f591dadf3f3ab/node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const UCollapsible = Object.assign(_sfc_main$3, { __name: "UCollapsible" });

const theme$1 = {
  "slots": {
    "root": "relative flex gap-1.5 [&>div]:min-w-0",
    "list": "isolate min-w-0",
    "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-(--ui-text-highlighted) px-2.5 py-1.5",
    "item": "min-w-0",
    "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)] focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingBadge": "shrink-0",
    "linkTrailingBadgeSize": "sm",
    "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)",
    "childList": "",
    "childItem": "",
    "childLink": "group size-full px-3 py-2 rounded-[calc(var(--ui-radius)*1.5)] flex items-start gap-2 text-start",
    "childLinkWrapper": "flex flex-col items-start",
    "childLinkIcon": "size-5 shrink-0",
    "childLinkLabel": "font-semibold text-sm relative inline-flex",
    "childLinkLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)",
    "childLinkDescription": "text-sm text-(--ui-text-muted)",
    "separator": "px-2 h-px bg-(--ui-border)",
    "viewportWrapper": "absolute top-full left-0 flex w-full",
    "viewport": "relative overflow-hidden bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in]",
    "content": "absolute top-0 left-0 w-full",
    "indicator": "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[1] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
    "arrow": "relative top-[50%] size-2.5 rotate-45 border border-(--ui-border) bg-(--ui-bg) z-[1] rounded-[calc(var(--ui-radius)/2)]"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-(--ui-primary)",
        "childLink": "focus-visible:outline-(--ui-primary)"
      },
      "secondary": {
        "link": "focus-visible:before:ring-(--ui-secondary)",
        "childLink": "focus-visible:outline-(--ui-secondary)"
      },
      "success": {
        "link": "focus-visible:before:ring-(--ui-success)",
        "childLink": "focus-visible:outline-(--ui-success)"
      },
      "info": {
        "link": "focus-visible:before:ring-(--ui-info)",
        "childLink": "focus-visible:outline-(--ui-info)"
      },
      "warning": {
        "link": "focus-visible:before:ring-(--ui-warning)",
        "childLink": "focus-visible:outline-(--ui-warning)"
      },
      "error": {
        "link": "focus-visible:before:ring-(--ui-error)",
        "childLink": "focus-visible:outline-(--ui-error)"
      },
      "neutral": {
        "link": "focus-visible:before:ring-(--ui-border-inverted)",
        "childLink": "focus-visible:outline-(--ui-border-inverted)"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": "",
      "link": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center justify-between",
        "list": "flex items-center",
        "item": "py-2",
        "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        "childList": "grid p-2"
      },
      "vertical": {
        "root": "flex-col",
        "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0"
      }
    },
    "contentOrientation": {
      "horizontal": {
        "viewport": "",
        "viewportWrapper": "justify-center",
        "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]"
      },
      "vertical": {
        "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)",
        "content": ""
      }
    },
    "active": {
      "true": {
        "childLink": "bg-(--ui-bg-elevated) text-(--ui-text-highlighted)",
        "childLinkIcon": "text-(--ui-text)"
      },
      "false": {
        "link": "text-(--ui-text-muted)",
        "linkLeadingIcon": "text-(--ui-text-dimmed)",
        "childLink": [
          "hover:bg-(--ui-bg-elevated)/50 text-(--ui-text) hover:text-(--ui-text-highlighted)",
          "transition-colors"
        ],
        "childLinkIcon": [
          "text-(--ui-text-dimmed) group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "highlight": {
      "true": ""
    },
    "level": {
      "true": ""
    },
    "collapsed": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "contentOrientation": "horizontal",
      "class": {
        "childList": "grid-cols-2 gap-2"
      }
    },
    {
      "orientation": "horizontal",
      "contentOrientation": "vertical",
      "class": {
        "childList": "gap-1",
        "content": "w-60"
      }
    },
    {
      "orientation": "horizontal",
      "highlight": true,
      "class": {
        "link": [
          "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "orientation": "vertical",
      "highlight": true,
      "level": true,
      "class": {
        "link": [
          "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "class": {
        "link": [
          "hover:text-(--ui-text-highlighted) hover:before:bg-(--ui-bg-elevated)/50",
          "transition-colors before:transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-(--ui-text-highlighted)",
        "linkLeadingIcon": "group-data-[state=open]:text-(--ui-text)"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": true,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": false,
      "active": false,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-primary)",
        "linkLeadingIcon": "text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-secondary)",
        "linkLeadingIcon": "text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-success)",
        "linkLeadingIcon": "text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-info)",
        "linkLeadingIcon": "text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-warning)",
        "linkLeadingIcon": "text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-error)",
        "linkLeadingIcon": "text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-text-highlighted)",
        "linkLeadingIcon": "text-(--ui-text-highlighted) group-data-[state=open]:text-(--ui-text-highlighted)"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": false,
      "class": {
        "link": "before:bg-(--ui-bg-elevated)"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": true,
      "class": {
        "link": [
          "hover:before:bg-(--ui-bg-elevated)/50",
          "before:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "class": {
        "link": [
          "hover:text-(--ui-text-highlighted)",
          "transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-(--ui-text-highlighted)",
        "linkLeadingIcon": "group-data-[state=open]:text-(--ui-text)"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-primary)",
        "linkLeadingIcon": "text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-secondary)",
        "linkLeadingIcon": "text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-success)",
        "linkLeadingIcon": "text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-info)",
        "linkLeadingIcon": "text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-warning)",
        "linkLeadingIcon": "text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-error)",
        "linkLeadingIcon": "text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-text-highlighted)",
        "linkLeadingIcon": "text-(--ui-text-highlighted) group-data-[state=open]:text-(--ui-text-highlighted)"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-primary)"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-secondary)"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-success)"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-info)"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-warning)"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-error)"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-bg-inverted)"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": false,
      "class": {
        "childList": "ms-5 border-s border-(--ui-border)",
        "childItem": "ps-1.5 -ms-px"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": true,
      "class": {
        "link": "px-1.5"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary",
    "variant": "pill"
  }
};

var _a$1;
const appConfigNavigationMenu = _appConfig;
const navigationMenu = tv({ extend: tv(theme$1), ...((_a$1 = appConfigNavigationMenu.ui) == null ? void 0 : _a$1.navigationMenu) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    as: {},
    trailingIcon: {},
    externalIcon: { type: [Boolean, String], default: true },
    items: {},
    color: {},
    variant: {},
    orientation: { default: "horizontal" },
    collapsed: { type: Boolean },
    highlight: { type: Boolean },
    highlightColor: {},
    content: {},
    contentOrientation: { default: "horizontal" },
    arrow: { type: Boolean },
    labelKey: { default: "label" },
    class: {},
    ui: {},
    modelValue: {},
    defaultValue: {},
    delayDuration: { default: 0 },
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    skipDelayDuration: {},
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(computed(() => ({
      as: props.as,
      modelValue: props.modelValue,
      defaultValue: props.defaultValue,
      delayDuration: props.delayDuration,
      skipDelayDuration: props.skipDelayDuration,
      orientation: props.orientation,
      disableClickTrigger: props.disableClickTrigger,
      disableHoverTrigger: props.disableHoverTrigger,
      disablePointerLeaveClose: props.disablePointerLeaveClose,
      unmountOnHide: props.unmountOnHide
    })), emits);
    const contentProps = toRef(() => props.content);
    const appConfig = useAppConfig();
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: Object,
        index: Number,
        level: Number
      }
    });
    const ui = computed(() => navigationMenu({
      orientation: props.orientation,
      contentOrientation: props.contentOrientation,
      collapsed: props.collapsed,
      color: props.color,
      variant: props.variant,
      highlight: props.highlight,
      highlightColor: props.highlightColor || props.color
    }));
    const lists = computed(() => {
      var _a2;
      return ((_a2 = props.items) == null ? void 0 : _a2.length) ? Array.isArray(props.items[0]) ? props.items : [props.items] : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index
            }, () => {
              var _a3, _b, _c, _d, _e;
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index
              }, () => {
                var _a4, _b2, _c2;
                if (item.avatar) {
                  _push2(ssrRenderComponent(UAvatar, mergeProps({
                    size: ((_a4 = props.ui) == null ? void 0 : _a4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                  }, item.avatar, {
                    class: ui.value.linkLeadingAvatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatar, active, disabled: !!item.disabled })
                  }), null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: item.icon,
                    class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon, active, disabled: !!item.disabled })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if ((!_ctx.collapsed || _ctx.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLabel }))}"${_scopeId}>`);
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
                    class: ui.value.linkLabelExternalIcon({ class: (_b = props.ui) == null ? void 0 : _b.linkLabelExternalIcon, active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((!_ctx.collapsed || _ctx.orientation !== "vertical") && (item.badge || _ctx.orientation === "horizontal" && (((_c = item.children) == null ? void 0 : _c.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkTrailing({ class: (_e = props.ui) == null ? void 0 : _e.linkTrailing }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                  item,
                  active,
                  index
                }, () => {
                  var _a4, _b2, _c2, _d2, _e2, _f;
                  if (item.badge) {
                    _push2(ssrRenderComponent(UBadge, mergeProps({
                      color: "neutral",
                      variant: "outline",
                      size: ((_a4 = props.ui) == null ? void 0 : _a4.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                    }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                      class: ui.value.linkTrailingBadge({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadge })
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (_ctx.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length)) {
                    _push2(ssrRenderComponent(UIcon, {
                      name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                      class: ui.value.linkTrailingIcon({ class: (_e2 = props.ui) == null ? void 0 : _e2.linkTrailingIcon, active })
                    }, null, _parent2, _scopeId));
                  } else if (item.trailingIcon) {
                    _push2(ssrRenderComponent(UIcon, {
                      name: item.trailingIcon,
                      class: ui.value.linkTrailingIcon({ class: (_f = props.ui) == null ? void 0 : _f.linkTrailingIcon, active })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index
              }, () => {
                var _a3, _b, _c, _d, _e;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index
                  }, () => {
                    var _a4, _b2, _c2;
                    return [
                      item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                        key: 0,
                        size: ((_a4 = props.ui) == null ? void 0 : _a4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                      }, item.avatar, {
                        class: ui.value.linkLeadingAvatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatar, active, disabled: !!item.disabled })
                      }), null, 16, ["size", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                        key: 1,
                        name: item.icon,
                        class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon, active, disabled: !!item.disabled })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  (!_ctx.collapsed || _ctx.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.linkLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLabel })
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
                      class: ui.value.linkLabelExternalIcon({ class: (_b = props.ui) == null ? void 0 : _b.linkLabelExternalIcon, active })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  (!_ctx.collapsed || _ctx.orientation !== "vertical") && (item.badge || _ctx.orientation === "horizontal" && (((_c = item.children) == null ? void 0 : _c.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: ui.value.linkTrailing({ class: (_e = props.ui) == null ? void 0 : _e.linkTrailing })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index
                    }, () => {
                      var _a4, _b2, _c2, _d2, _e2, _f;
                      return [
                        item.badge ? (openBlock(), createBlock(UBadge, mergeProps({
                          key: 0,
                          color: "neutral",
                          variant: "outline",
                          size: ((_a4 = props.ui) == null ? void 0 : _a4.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                        }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                          class: ui.value.linkTrailingBadge({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadge })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                        _ctx.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) ? (openBlock(), createBlock(UIcon, {
                          key: 1,
                          name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                          class: ui.value.linkTrailingIcon({ class: (_e2 = props.ui) == null ? void 0 : _e2.linkTrailingIcon, active })
                        }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(UIcon, {
                          key: 2,
                          name: item.trailingIcon,
                          class: ui.value.linkTrailingIcon({ class: (_f = props.ui) == null ? void 0 : _f.linkTrailingIcon, active })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, level = 0 }, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.orientation === "vertical" && ((_a3 = item.children) == null ? void 0 : _a3.length) && !_ctx.collapsed ? UCollapsible : unref(NavigationMenuItem)), {
              as: "li",
              value: item.value || String(index),
              "default-open": item.defaultOpen,
              "unmount-on-hide": _ctx.orientation === "vertical" && ((_b = item.children) == null ? void 0 : _b.length) && !_ctx.collapsed ? _ctx.unmountOnHide : void 0,
              open: item.open
            }, createSlots({
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a4, _b2, _c2, _d2;
                if (_push3) {
                  if (_ctx.orientation === "vertical" && item.type === "label") {
                    _push3(`<div class="${ssrRenderClass(ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ReuseLinkTemplate), {
                      item,
                      index
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (item.type !== "label") {
                    _push3(ssrRenderComponent(ULink, mergeProps(_ctx.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                        var _a5, _b3, _c3, _d3, _e2, _f2;
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              var _a6, _b4;
                              if (_push5) {
                                _push5(ssrRenderComponent(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, 8, ["item", "active", "index"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(ULinkBase, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_b4 = props.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          if (_ctx.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"])) {
                            _push4(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(contentProps.value, {
                              class: ui.value.content({ class: (_c3 = props.ui) == null ? void 0 : _c3.content })
                            }), {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                    item,
                                    active,
                                    index
                                  }, () => {
                                    var _a6;
                                    _push5(`<ul class="${ssrRenderClass(ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      _push5(`<li class="${ssrRenderClass(ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem }))}"${_scopeId4}>`);
                                      _push5(ssrRenderComponent(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                        default: withCtx(({ active: childActive, ...childSlotProps }, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                                var _a8, _b4;
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx((_4, _push8, _parent8, _scopeId7) => {
                                                      var _a9, _b5, _c4, _d4, _e3, _f3, _g, _h, _i, _j;
                                                      if (_push8) {
                                                        if (childItem.icon) {
                                                          _push8(ssrRenderComponent(UIcon, {
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`<div class="${ssrRenderClass(ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper }))}"${_scopeId7}><p class="${ssrRenderClass(ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive }))}"${_scopeId7}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                        if (childItem.target === "_blank" && _ctx.externalIcon !== false) {
                                                          _push8(ssrRenderComponent(UIcon, {
                                                            name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                            class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</p>`);
                                                        if (childItem.description) {
                                                          _push8(`<p class="${ssrRenderClass(ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive }))}"${_scopeId7}>${ssrInterpolate(childItem.description)}</p>`);
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</div>`);
                                                      } else {
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_f3 = props.ui) == null ? void 0 : _f3.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_g = props.ui) == null ? void 0 : _g.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_h = props.ui) == null ? void 0 : _h.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_i = props.ui) == null ? void 0 : _i.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_j = props.ui) == null ? void 0 : _j.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_b4 = props.ui) == null ? void 0 : _b4.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b5, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a8;
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b4, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(`</li>`);
                                    });
                                    _push5(`<!--]--></ul>`);
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active,
                                      index
                                    }, () => {
                                      var _a6;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a7;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                            }, [
                                              createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a8;
                                                      return [
                                                        createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a9, _b4, _c4, _d4, _e3;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("div", {
                                                                class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                              }, [
                                                                createVNode("p", {
                                                                  class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                    key: 0,
                                                                    name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2),
                                                                childItem.description ? (openBlock(), createBlock("p", {
                                                                  key: 0,
                                                                  class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                                }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
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
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_d3 = item.children) == null ? void 0 : _d3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                              "as-child": "",
                              active: active || item.active,
                              disabled: item.disabled,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => {
                                var _a6;
                                return [
                                  createVNode(ULinkBase, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ];
                              }),
                              _: 2
                            }, 1064, ["active", "disabled", "onSelect"])),
                            _ctx.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                              class: ui.value.content({ class: (_f2 = props.ui) == null ? void 0 : _f2.content })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active,
                                  index
                                }, () => {
                                  var _a6;
                                  return [
                                    createVNode("ul", {
                                      class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                        var _a7;
                                        return openBlock(), createBlock("li", {
                                          key: childIndex,
                                          class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                        }, [
                                          createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                            default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a8;
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b4, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ], 2);
                                      }), 128))
                                    ], 2)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.orientation === "vertical" && item.type === "label" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: (_c2 = props.ui) == null ? void 0 : _c2.label })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(ULink, mergeProps({ key: 1 }, _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a5, _b3, _c3;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          _ctx.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: (_c3 = props.ui) == null ? void 0 : _c3.content })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active,
                                index
                              }, () => {
                                var _a6;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                      }, [
                                        createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a8;
                                                return [
                                                  createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a9, _b4, _c4, _d3, _e2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                              key: 0,
                                                              name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: (_d3 = props.ui) == null ? void 0 : _d3.childLinkLabelExternalIcon, active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: (_e2 = props.ui) == null ? void 0 : _e2.childLinkDescription, active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              _ctx.orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !_ctx.collapsed ? {
                name: "content",
                fn: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a4, _b2;
                  if (_push3) {
                    _push3(`<ul class="${ssrRenderClass(ui.value.childList({ class: (_a4 = props.ui) == null ? void 0 : _a4.childList }))}"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.children, (childItem, childIndex) => {
                      var _a5;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: childIndex,
                        item: childItem,
                        index: childIndex,
                        level: level + 1,
                        class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", {
                        class: ui.value.childList({ class: (_b2 = props.ui) == null ? void 0 : _b2.childList })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a5;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                          }, null, 8, ["item", "index", "level", "class"]);
                        }), 128))
                      ], 2)
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ])), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !_ctx.collapsed ? UCollapsible : unref(NavigationMenuItem)), {
                as: "li",
                value: item.value || String(index),
                "default-open": item.defaultOpen,
                "unmount-on-hide": _ctx.orientation === "vertical" && ((_e = item.children) == null ? void 0 : _e.length) && !_ctx.collapsed ? _ctx.unmountOnHide : void 0,
                open: item.open
              }, createSlots({
                default: withCtx(() => {
                  var _a4, _b2;
                  return [
                    _ctx.orientation === "vertical" && item.type === "label" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(ULink, mergeProps({ key: 1 }, _ctx.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a5, _b3, _c2;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          _ctx.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: (_c2 = props.ui) == null ? void 0 : _c2.content })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active,
                                index
                              }, () => {
                                var _a6;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                      }, [
                                        createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a8;
                                                return [
                                                  createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a9, _b4, _c3, _d2, _e2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: (_c3 = props.ui) == null ? void 0 : _c3.childLinkLabel, active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                              key: 0,
                                                              name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: (_d2 = props.ui) == null ? void 0 : _d2.childLinkLabelExternalIcon, active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: (_e2 = props.ui) == null ? void 0 : _e2.childLinkDescription, active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, [
                _ctx.orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) && !_ctx.collapsed ? {
                  name: "content",
                  fn: withCtx(() => {
                    var _a4;
                    return [
                      createVNode("ul", {
                        class: ui.value.childList({ class: (_a4 = props.ui) == null ? void 0 : _a4.childList })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a5;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                          }, null, 8, ["item", "index", "level", "class"]);
                        }), 128))
                      ], 2)
                    ];
                  }),
                  key: "0"
                } : void 0
              ]), 1032, ["value", "default-open", "unmount-on-hide", "open"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(rootProps), {
        "data-collapsed": _ctx.collapsed,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (list, listIndex) => {
              var _a4, _b2;
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(NavigationMenuList), {
                class: ui.value.list({ class: (_a4 = props.ui) == null ? void 0 : _a4.list })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(list, (item, index) => {
                      var _a5;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: `list-${listIndex}-${index}`,
                        item,
                        index,
                        class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a5;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (_ctx.orientation === "vertical" && listIndex < lists.value.length - 1) {
                _push2(`<div class="${ssrRenderClass(ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator }))}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            if (_ctx.orientation === "horizontal") {
              _push2(`<div class="${ssrRenderClass(ui.value.viewportWrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.viewportWrapper }))}"${_scopeId}>`);
              if (_ctx.arrow) {
                _push2(ssrRenderComponent(unref(NavigationMenuIndicator), {
                  class: ui.value.indicator({ class: (_b = props.ui) == null ? void 0 : _b.indicator })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b2;
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass(ui.value.arrow({ class: (_a4 = props.ui) == null ? void 0 : _a4.arrow }))}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(NavigationMenuViewport), {
                class: ui.value.viewport({ class: (_c = props.ui) == null ? void 0 : _c.viewport })
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
                var _a4, _b2;
                return openBlock(), createBlock(Fragment, {
                  key: `list-${listIndex}`
                }, [
                  createVNode(unref(NavigationMenuList), {
                    class: ui.value.list({ class: (_a4 = props.ui) == null ? void 0 : _a4.list })
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a5;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  _ctx.orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator })
                  }, null, 2)) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              _ctx.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.viewportWrapper({ class: (_d = props.ui) == null ? void 0 : _d.viewportWrapper })
              }, [
                _ctx.arrow ? (openBlock(), createBlock(unref(NavigationMenuIndicator), {
                  key: 0,
                  class: ui.value.indicator({ class: (_e = props.ui) == null ? void 0 : _e.indicator })
                }, {
                  default: withCtx(() => {
                    var _a4;
                    return [
                      createVNode("div", {
                        class: ui.value.arrow({ class: (_a4 = props.ui) == null ? void 0 : _a4.arrow })
                      }, null, 2)
                    ];
                  }),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true),
                createVNode(unref(NavigationMenuViewport), {
                  class: ui.value.viewport({ class: (_f = props.ui) == null ? void 0 : _f.viewport })
                }, null, 8, ["class"])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_axios@1.9.0_change-case@5.4.4_db0@0.3.1_embla-caro_cd16108f3abcb555fd1f591dadf3f3ab/node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "UNavigationMenu" });

const theme = {
  "base": "max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};

var _a;
const appConfigContainer = _appConfig;
const container = tv({ extend: tv(theme), ...((_a = appConfigContainer.ui) == null ? void 0 : _a.container) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(container)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_axios@1.9.0_change-case@5.4.4_db0@0.3.1_embla-caro_cd16108f3abcb555fd1f591dadf3f3ab/node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "UContainer" });

function useMenuStore() {
  const route = useRoute();
  const userStore = useUserStore();
  const { userInfo } = userStore;
  const userRoute = [
    {
      label: "首頁編輯器",
      icon: "fluent-mdl2:page",
      to: ClientRoutes.LandingPage,
      active: computed(() => route.path.startsWith(ClientRoutes.LandingPage))
    },
    {
      label: "表單分析",
      icon: "i-lucide-file-spreadsheet",
      children: [
        {
          label: "相調",
          icon: "material-symbols-light:blender",
          to: ClientRoutes.Blending,
          active: computed(() => route.path === ClientRoutes.Blending)
        },
        {
          label: "港湖集中主日",
          icon: "i-lucide-video",
          to: ClientRoutes.MeetingCenter,
          active: computed(() => route.path === ClientRoutes.MeetingCenter)
        }
      ]
    }
  ];
  const adminRoute = [
    {
      label: "帳號管理",
      icon: "mingcute:group-3-line",
      to: ClientRoutes.User,
      active: computed(() => route.path === ClientRoutes.User)
    },
    {
      label: "帳號序號申請",
      icon: "i-lucide-barcode",
      to: ClientRoutes.SerialNumber,
      active: computed(() => route.path === ClientRoutes.SerialNumber)
    },
    {
      label: "區",
      icon: "pixelarticons:drop-area",
      to: ClientRoutes.District,
      active: computed(() => route.path === ClientRoutes.District)
    }
  ];
  const devRoute = [
    {
      label: "家聚會點名",
      icon: "solar:pen-line-duotone",
      children: [
        {
          label: "點名者管理",
          icon: "material-symbols-light:blender",
          to: ClientRoutes.HomeMeeting,
          active: computed(() => route.path === ClientRoutes.HomeMeeting)
        },
        {
          label: "人位",
          icon: "material-symbols:person-outline-rounded",
          to: ClientRoutes.HomeMeetingSheep,
          active: computed(() => route.path === ClientRoutes.HomeMeetingSheep)
        }
      ]
    }
  ];
  const menu = useState("menu", () => [
    {
      label: "個人資料",
      icon: "i-lucide-user",
      to: ClientRoutes.Home,
      active: computed(() => route.path === ClientRoutes.Home)
    },
    // 管理者
    ...[Role.admin, Role.dev].includes(userInfo.value.role) ? adminRoute : [],
    // 區負責人
    // ...(
    //   [Role.admin, Role.dev, Role.districtLeader].includes(userInfo.value.role)
    //     ? diistrictLeaderRoute
    //     : []),
    // 開發者
    ...[Role.dev].includes(userInfo.value.role) ? devRoute : [],
    // 使用者
    ...userRoute,
    {
      label: "登出",
      icon: "i-lucide-log-out",
      active: computed(() => route.path === PublicRoutes.Login),
      onSelect: async () => {
        useCookie(CookieEnums.AccessToken, { maxAge: 0 }).value = "";
        useCookie(CookieEnums.RefreshToken, { maxAge: 0 }).value = "";
        clearNuxtState();
        clearNuxtData();
        navigateTo(PublicRoutes.Login);
      }
    }
  ]);
  const getMenu = computed(() => menu.value);
  return { getMenu };
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const menuStore = useMenuStore();
    const { getMenu } = menuStore;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDropdownMenu = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UNavigationMenu = __nuxt_component_2;
      const _component_UContainer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="flex items-center justify-between">`);
      _push(ssrRenderComponent(unref(Logo), null, null, _parent));
      _push(`<div class="md:hidden">`);
      _push(ssrRenderComponent(_component_UDropdownMenu, {
        items: unref(getMenu),
        ui: {
          content: "w-48"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-menu",
              variant: "ghost"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-lucide-menu",
                variant: "ghost"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><div class="flex h-[calc(100vh-64px)]">`);
      _push(ssrRenderComponent(_component_UNavigationMenu, {
        orientation: "vertical",
        items: unref(getMenu),
        class: "data-[orientation=vertical]:w-48 m-3 md:block hidden"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "flex-1 m-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Dashboard.vue.mjs.map
