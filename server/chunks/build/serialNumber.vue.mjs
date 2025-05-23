import { a as __nuxt_component_5$1, _ as __nuxt_component_4 } from './Modal.vue.mjs';
import { U as UBadge } from './Badge.vue.mjs';
import { defineComponent, mergeModels, useModel, computed, unref, mergeProps, withCtx, renderSlot, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, useSSRContext, useSlots, toRef, Fragment, renderList, ref, withAsyncContext, toRefs } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useRequestApi } from './useRequestApi.mjs';
import { U as UserRequestUrl, c as useNuxtApp, d as useAvatarGroup, t as tv, e as _appConfig, f as useAppConfig, r as reactivePick, g as useFormField, h as useButtonGroup, i as useComponentIcons, j as UIcon, k as UAvatar, l as get, m as compare, n as useNuxtData, b as __nuxt_component_2, o as refreshNuxtData } from './server.mjs';
import { _ as __nuxt_component_6, a as __nuxt_component_7, b as __nuxt_component_8 } from './Input.vue.mjs';
import { Primitive, Slot, useForwardPropsEmits, SelectRoot, SelectTrigger, SelectPortal, SelectContent, SelectViewport, SelectGroup, SelectLabel, SelectSeparator, SelectItem, SelectItemText, SelectItemIndicator, SelectArrow } from 'reka-ui';
import { l as defu } from '../nitro/nitro.mjs';
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

const useDistrictApi = {
  /*
    * GET
  */
  getAll: async () => {
    const nuxtApp = useNuxtApp();
    return await useRequestApi(UserRequestUrl.District, {
      method: "GET",
      server: false,
      lazy: true,
      key: UserRequestUrl.District,
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    });
  },
  /*
    * CREATE
  */
  create: async (payload) => await useRequestApi(UserRequestUrl.District, {
    method: "POST",
    server: false,
    lazy: true,
    body: payload
  }),
  /*
    * EDIT
  */
  edit: async (payload) => await useRequestApi(UserRequestUrl.District, {
    method: "PUT",
    server: false,
    lazy: true,
    body: payload
  })
};

const useSerialNumberApi = {
  getAll: async () => {
    const nuxtApp = useNuxtApp();
    return await useRequestApi(UserRequestUrl.SerialNumberGetAll, {
      method: "GET",
      server: false,
      key: UserRequestUrl.SerialNumberGetAll,
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    });
  },
  create: async (payload) => {
    return await useRequestApi(UserRequestUrl.SerialNumberCreate, {
      method: "POST",
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload
    });
  },
  delete: async (payload) => await useRequestApi(UserRequestUrl.SerialNumberDelete, {
    method: "DELETE",
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
    body: payload
  })
};

const theme$1 = {
  "slots": {
    "root": "relative inline-flex items-center justify-center shrink-0",
    "base": "rounded-full ring ring-(--ui-bg) flex items-center justify-center text-(--ui-bg) font-medium whitespace-nowrap"
  },
  "variants": {
    "color": {
      "primary": "bg-(--ui-primary)",
      "secondary": "bg-(--ui-secondary)",
      "success": "bg-(--ui-success)",
      "info": "bg-(--ui-info)",
      "warning": "bg-(--ui-warning)",
      "error": "bg-(--ui-error)",
      "neutral": "bg-(--ui-text-muted)"
    },
    "size": {
      "3xs": "h-[4px] min-w-[4px] text-[4px]",
      "2xs": "h-[5px] min-w-[5px] text-[5px]",
      "xs": "h-[6px] min-w-[6px] text-[6px]",
      "sm": "h-[7px] min-w-[7px] text-[7px]",
      "md": "h-[8px] min-w-[8px] text-[8px]",
      "lg": "h-[9px] min-w-[9px] text-[9px]",
      "xl": "h-[10px] min-w-[10px] text-[10px]",
      "2xl": "h-[11px] min-w-[11px] text-[11px]",
      "3xl": "h-[12px] min-w-[12px] text-[12px]"
    },
    "position": {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    "inset": {
      "false": ""
    },
    "standalone": {
      "false": "absolute"
    }
  },
  "compoundVariants": [
    {
      "position": "top-right",
      "inset": false,
      "class": "-translate-y-1/2 translate-x-1/2 transform"
    },
    {
      "position": "bottom-right",
      "inset": false,
      "class": "translate-y-1/2 translate-x-1/2 transform"
    },
    {
      "position": "top-left",
      "inset": false,
      "class": "-translate-y-1/2 -translate-x-1/2 transform"
    },
    {
      "position": "bottom-left",
      "inset": false,
      "class": "translate-y-1/2 -translate-x-1/2 transform"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "position": "top-right"
  }
};

var _a$1;
const appConfigChip = _appConfig;
const chip = tv({ extend: tv(theme$1), ...((_a$1 = appConfigChip.ui) == null ? void 0 : _a$1.chip) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Chip",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    text: {},
    color: {},
    size: {},
    position: {},
    inset: { type: Boolean, default: false },
    standalone: { type: Boolean, default: false },
    class: {},
    ui: {}
  }, {
    "show": { type: Boolean, ...{ default: true } },
    "showModifiers": {}
  }),
  emits: ["update:show"],
  setup(__props) {
    const props = __props;
    const show = useModel(__props, "show");
    const { size } = useAvatarGroup(props);
    const ui = computed(() => chip({
      color: props.color,
      size: size.value,
      position: props.position,
      inset: props.inset,
      standalone: props.standalone
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(Slot), _ctx.$attrs, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (show.value) {
              _push2(`<span class="${ssrRenderClass(ui.value.base({ class: (_a3 = props.ui) == null ? void 0 : _a3.base }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                _push2(`${ssrInterpolate(_ctx.text)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Slot), _ctx.$attrs, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16),
              show.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
              }, [
                renderSlot(_ctx.$slots, "content", {}, () => [
                  createTextVNode(toDisplayString(_ctx.text), 1)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$2 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_change-case@5.4.4_db0@0.3.1_embla-carousel@8.5.2_i_ef4954551e9ae83c6fa0c5b36063b32e/node_modules/@nuxt/ui/dist/runtime/components/Chip.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UChip = Object.assign(_sfc_main$4, { __name: "UChip" });

const theme = {
  "slots": {
    "base": [
      "relative group rounded-[calc(var(--ui-radius)*1.5)] inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-(--ui-text-dimmed)",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-(--ui-text-dimmed)",
    "value": "truncate pointer-events-none",
    "placeholder": "truncate text-(--ui-text-dimmed)",
    "arrow": "fill-(--ui-border)",
    "content": "max-h-60 w-(--reka-popper-anchor-width) bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] pointer-events-auto",
    "viewport": "divide-y divide-(--ui-border) scroll-py-1",
    "group": "p-1 isolate",
    "empty": "py-2 text-center text-sm text-(--ui-text-muted)",
    "label": "font-semibold text-(--ui-text-highlighted)",
    "separator": "-mx-1 my-1 h-px bg-(--ui-border)",
    "item": [
      "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-[calc(var(--ui-radius)*1.5)] data-disabled:cursor-not-allowed data-disabled:opacity-75 text-(--ui-text) data-highlighted:text-(--ui-text-highlighted) data-highlighted:before:bg-(--ui-bg-elevated)/50",
      "transition-colors before:transition-colors"
    ],
    "itemLeadingIcon": [
      "shrink-0 text-(--ui-text-dimmed) group-data-highlighted:text-(--ui-text)",
      "transition-colors"
    ],
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemLeadingChip": "shrink-0",
    "itemLeadingChipSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemLabel": "truncate"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1 text-[10px]/3 gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1.5 text-[10px]/3 gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-2 text-xs gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemLeadingChip": "size-6",
        "itemLeadingChipSize": "lg",
        "itemTrailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border-accented)",
      "soft": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50",
      "subtle": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)",
      "ghost": "text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-(--ui-text-highlighted) bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-(--ui-text-muted) file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-success)"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-info)"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-warning)"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-error)"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-border-inverted)"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};

var _a;
const appConfigSelect = _appConfig;
const select = tv({ extend: tv(theme), ...((_a = appConfigSelect.ui) == null ? void 0 : _a.select) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    id: {},
    placeholder: {},
    color: {},
    variant: {},
    size: {},
    trailingIcon: {},
    selectedIcon: {},
    content: {},
    arrow: { type: [Boolean, Object] },
    portal: { type: Boolean, default: true },
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    items: {},
    defaultValue: {},
    modelValue: {},
    multiple: { type: Boolean },
    highlight: { type: Boolean },
    class: {},
    ui: {},
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean },
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    loading: { type: Boolean },
    loadingIcon: {}
  },
  emits: ["update:open", "change", "blur", "focus", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "disabled", "autocomplete", "required", "multiple"), emits);
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = toRef(() => props.arrow);
    const { emitFormChange, emitFormInput, emitFormBlur, emitFormFocus, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const selectSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const ui = computed(() => select({
      color: color.value,
      variant: props.variant,
      size: selectSize == null ? void 0 : selectSize.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      buttonGroup: orientation.value
    }));
    const groups = computed(() => {
      var _a2;
      return ((_a2 = props.items) == null ? void 0 : _a2.length) ? Array.isArray(props.items[0]) ? props.items : [props.items] : [];
    });
    const items = computed(() => groups.value.flatMap((group) => group));
    function displayValue(value) {
      if (props.multiple && Array.isArray(value)) {
        return value.map((v) => displayValue(v)).filter(Boolean).join(", ");
      }
      const item = items.value.find((item2) => compare(typeof item2 === "object" ? get(item2, props.valueKey) : item2, value));
      return item && (typeof item === "object" ? get(item, props.labelKey) : item);
    }
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function onUpdateOpen(value) {
      if (!value) {
        const event = new FocusEvent("blur");
        emits("blur", event);
        emitFormBlur();
      } else {
        const event = new FocusEvent("focus");
        emits("focus", event);
        emitFormFocus();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectRoot), mergeProps({ name: unref(name) }, unref(rootProps), {
        autocomplete: _ctx.autocomplete,
        disabled: unref(disabled),
        "default-value": _ctx.defaultValue,
        "model-value": _ctx.modelValue,
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }, _attrs), {
        default: withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(SelectTrigger), mergeProps({
              id: unref(id),
              class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] })
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d;
                if (_push3) {
                  if (unref(isLeading) || !!_ctx.avatar || !!slots.leading) {
                    _push3(`<span class="${ssrRenderClass(ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "leading", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => {
                      var _a4, _b3, _c2;
                      if (unref(isLeading) && unref(leadingIconName)) {
                        _push3(ssrRenderComponent(UIcon, {
                          name: unref(leadingIconName),
                          class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                        }, null, _parent3, _scopeId2));
                      } else if (!!_ctx.avatar) {
                        _push3(ssrRenderComponent(UAvatar, mergeProps({
                          size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                        }, _ctx.avatar, {
                          class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                        }), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  ssrRenderSlot(_ctx.$slots, "default", {
                    modelValue,
                    open
                  }, () => {
                    _push3(`<!--[-->`);
                    ssrRenderList([displayValue(modelValue)], (displayedModelValue) => {
                      var _a4, _b3;
                      _push3(`<!--[-->`);
                      if (displayedModelValue) {
                        _push3(`<span class="${ssrRenderClass(ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value }))}"${_scopeId2}>${ssrInterpolate(displayedModelValue)}</span>`);
                      } else {
                        _push3(`<span class="${ssrRenderClass(ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder }))}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder ?? " ")}</span>`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]-->`);
                  }, _push3, _parent3, _scopeId2);
                  if (unref(isTrailing) || !!slots.trailing) {
                    _push3(`<span class="${ssrRenderClass(ui.value.trailing({ class: (_b2 = props.ui) == null ? void 0 : _b2.trailing }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "trailing", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => {
                      var _a4;
                      if (unref(trailingIconName)) {
                        _push3(ssrRenderComponent(UIcon, {
                          name: unref(trailingIconName),
                          class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: ui.value.leading({ class: (_c = props.ui) == null ? void 0 : _c.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => {
                        var _a4, _b3, _c2;
                        return [
                          unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(UIcon, {
                            key: 0,
                            name: unref(leadingIconName),
                            class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                          }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                            key: 1,
                            size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                          }, _ctx.avatar, {
                            class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "default", {
                      modelValue,
                      open
                    }, () => [
                      (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                        var _a4, _b3;
                        return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                          displayedModelValue ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value })
                          }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder })
                          }, toDisplayString(_ctx.placeholder ?? " "), 3))
                        ], 64);
                      }), 128))
                    ]),
                    unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: ui.value.trailing({ class: (_d = props.ui) == null ? void 0 : _d.trailing })
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => {
                        var _a4;
                        return [
                          unref(trailingIconName) ? (openBlock(), createBlock(UIcon, {
                            key: 0,
                            name: unref(trailingIconName),
                            class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SelectPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SelectContent), mergeProps({
                    class: ui.value.content({ class: (_a3 = props.ui) == null ? void 0 : _a3.content })
                  }, contentProps.value), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a4, _b3, _c, _d;
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(SelectViewport), {
                          class: ui.value.viewport({ class: (_a4 = props.ui) == null ? void 0 : _a4.viewport })
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(groups.value, (group, groupIndex) => {
                                var _a5;
                                _push5(ssrRenderComponent(unref(SelectGroup), {
                                  key: `group-${groupIndex}`,
                                  class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(group, (item, index) => {
                                        var _a6, _b4, _c2;
                                        _push6(`<!--[-->`);
                                        if ((item == null ? void 0 : item.type) === "label") {
                                          _push6(ssrRenderComponent(unref(SelectLabel), {
                                            class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                          }, {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else if ((item == null ? void 0 : item.type) === "separator") {
                                          _push6(ssrRenderComponent(unref(SelectSeparator), {
                                            class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(ssrRenderComponent(unref(SelectItem), {
                                            class: ui.value.item({ class: (_c2 = props.ui) == null ? void 0 : _c2.item }),
                                            disabled: item.disabled,
                                            value: typeof item === "object" ? unref(get)(item, props.valueKey) : item
                                          }, {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                ssrRenderSlot(_ctx.$slots, "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a7, _b5;
                                                  ssrRenderSlot(_ctx.$slots, "item-leading", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a8, _b6, _c3, _d2, _e;
                                                    if (item.icon) {
                                                      _push7(ssrRenderComponent(UIcon, {
                                                        name: item.icon,
                                                        class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                      }, null, _parent7, _scopeId6));
                                                    } else if (item.avatar) {
                                                      _push7(ssrRenderComponent(UAvatar, mergeProps({
                                                        size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: ui.value.itemLeadingAvatar({ class: (_c3 = props.ui) == null ? void 0 : _c3.itemLeadingAvatar })
                                                      }), null, _parent7, _scopeId6));
                                                    } else if (item.chip) {
                                                      _push7(ssrRenderComponent(UChip, mergeProps({
                                                        size: ((_d2 = props.ui) == null ? void 0 : _d2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                      }), null, _parent7, _scopeId6));
                                                    } else {
                                                      _push7(`<!---->`);
                                                    }
                                                  }, _push7, _parent7, _scopeId6);
                                                  _push7(ssrRenderComponent(unref(SelectItemText), {
                                                    class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                  }, {
                                                    default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        ssrRenderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          _push8(`${ssrInterpolate(typeof item === "object" ? unref(get)(item, props.labelKey) : item)}`);
                                                        }, _push8, _parent8, _scopeId7);
                                                      } else {
                                                        return [
                                                          renderSlot(_ctx.$slots, "item-label", {
                                                            item,
                                                            index
                                                          }, () => [
                                                            createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                          ])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                  _push7(`<span class="${ssrRenderClass(ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing }))}"${_scopeId6}>`);
                                                  ssrRenderSlot(_ctx.$slots, "item-trailing", {
                                                    item,
                                                    index
                                                  }, null, _push7, _parent7, _scopeId6);
                                                  _push7(ssrRenderComponent(unref(SelectItemIndicator), { "as-child": "" }, {
                                                    default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                      var _a8, _b6;
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(UIcon, {
                                                          name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                        }, null, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(UIcon, {
                                                            name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: ui.value.itemTrailingIcon({ class: (_b6 = props.ui) == null ? void 0 : _b6.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                  _push7(`</span>`);
                                                }, _push7, _parent7, _scopeId6);
                                              } else {
                                                return [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a7, _b5;
                                                    return [
                                                      renderSlot(_ctx.$slots, "item-leading", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a8, _b6, _c3, _d2, _e;
                                                        return [
                                                          item.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: item.icon,
                                                            class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                            key: 1,
                                                            size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                            ref_for: true
                                                          }, item.avatar, {
                                                            class: ui.value.itemLeadingAvatar({ class: (_c3 = props.ui) == null ? void 0 : _c3.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                            key: 2,
                                                            size: ((_d2 = props.ui) == null ? void 0 : _d2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                            inset: "",
                                                            standalone: "",
                                                            ref_for: true
                                                          }, item.chip, {
                                                            class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode(unref(SelectItemText), {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, {
                                                        default: withCtx(() => [
                                                          renderSlot(_ctx.$slots, "item-label", {
                                                            item,
                                                            index
                                                          }, () => [
                                                            createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class"]),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                          default: withCtx(() => {
                                                            var _a8;
                                                            return [
                                                              createVNode(UIcon, {
                                                                name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                              }, null, 8, ["name", "class"])
                                                            ];
                                                          }),
                                                          _: 1
                                                        })
                                                      ], 2)
                                                    ];
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        }
                                        _push6(`<!--]-->`);
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                          var _a6, _b4, _c2;
                                          return openBlock(), createBlock(Fragment, {
                                            key: `group-${groupIndex}-${index}`
                                          }, [
                                            (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                              key: 0,
                                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                              key: 1,
                                              class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                            }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                              key: 2,
                                              class: ui.value.item({ class: (_c2 = props.ui) == null ? void 0 : _c2.item }),
                                              disabled: item.disabled,
                                              value: typeof item === "object" ? unref(get)(item, props.valueKey) : item
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a7, _b5;
                                                  return [
                                                    renderSlot(_ctx.$slots, "item-leading", {
                                                      item,
                                                      index
                                                    }, () => {
                                                      var _a8, _b6, _c3, _d2, _e;
                                                      return [
                                                        item.icon ? (openBlock(), createBlock(UIcon, {
                                                          key: 0,
                                                          name: item.icon,
                                                          class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                          key: 1,
                                                          size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                          ref_for: true
                                                        }, item.avatar, {
                                                          class: ui.value.itemLeadingAvatar({ class: (_c3 = props.ui) == null ? void 0 : _c3.itemLeadingAvatar })
                                                        }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                          key: 2,
                                                          size: ((_d2 = props.ui) == null ? void 0 : _d2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                          inset: "",
                                                          standalone: "",
                                                          ref_for: true
                                                        }, item.chip, {
                                                          class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    createVNode(unref(SelectItemText), {
                                                      class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                    }, {
                                                      default: withCtx(() => [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"]),
                                                    createVNode("span", {
                                                      class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                    }, [
                                                      renderSlot(_ctx.$slots, "item-trailing", {
                                                        item,
                                                        index
                                                      }),
                                                      createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                        default: withCtx(() => {
                                                          var _a8;
                                                          return [
                                                            createVNode(UIcon, {
                                                              name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                              class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                            }, null, 8, ["name", "class"])
                                                          ];
                                                        }),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ];
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "disabled", "value"]))
                                          ], 64);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                                  var _a5;
                                  return openBlock(), createBlock(unref(SelectGroup), {
                                    key: `group-${groupIndex}`,
                                    class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                        var _a6, _b4, _c2;
                                        return openBlock(), createBlock(Fragment, {
                                          key: `group-${groupIndex}-${index}`
                                        }, [
                                          (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                            key: 0,
                                            class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                            key: 1,
                                            class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                          }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                            key: 2,
                                            class: ui.value.item({ class: (_c2 = props.ui) == null ? void 0 : _c2.item }),
                                            disabled: item.disabled,
                                            value: typeof item === "object" ? unref(get)(item, props.valueKey) : item
                                          }, {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, "item", {
                                                item,
                                                index
                                              }, () => {
                                                var _a7, _b5;
                                                return [
                                                  renderSlot(_ctx.$slots, "item-leading", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    var _a8, _b6, _c3, _d2, _e;
                                                    return [
                                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                                        key: 0,
                                                        name: item.icon,
                                                        class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                        key: 1,
                                                        size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: ui.value.itemLeadingAvatar({ class: (_c3 = props.ui) == null ? void 0 : _c3.itemLeadingAvatar })
                                                      }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                        key: 2,
                                                        size: ((_d2 = props.ui) == null ? void 0 : _d2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                    ];
                                                  }),
                                                  createVNode(unref(SelectItemText), {
                                                    class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                  }, {
                                                    default: withCtx(() => [
                                                      renderSlot(_ctx.$slots, "item-label", {
                                                        item,
                                                        index
                                                      }, () => [
                                                        createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"]),
                                                  createVNode("span", {
                                                    class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                  }, [
                                                    renderSlot(_ctx.$slots, "item-trailing", {
                                                      item,
                                                      index
                                                    }),
                                                    createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => {
                                                        var _a8;
                                                        return [
                                                          createVNode(UIcon, {
                                                            name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ];
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "disabled", "value"]))
                                        ], 64);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (!!_ctx.arrow) {
                          _push4(ssrRenderComponent(unref(SelectArrow), mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_b3 = props.ui) == null ? void 0 : _b3.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(SelectViewport), {
                            class: ui.value.viewport({ class: (_c = props.ui) == null ? void 0 : _c.viewport })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                                var _a5;
                                return openBlock(), createBlock(unref(SelectGroup), {
                                  key: `group-${groupIndex}`,
                                  class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                      var _a6, _b4, _c2;
                                      return openBlock(), createBlock(Fragment, {
                                        key: `group-${groupIndex}-${index}`
                                      }, [
                                        (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                          key: 0,
                                          class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                          key: 1,
                                          class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                        }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                          key: 2,
                                          class: ui.value.item({ class: (_c2 = props.ui) == null ? void 0 : _c2.item }),
                                          disabled: item.disabled,
                                          value: typeof item === "object" ? unref(get)(item, props.valueKey) : item
                                        }, {
                                          default: withCtx(() => [
                                            renderSlot(_ctx.$slots, "item", {
                                              item,
                                              index
                                            }, () => {
                                              var _a7, _b5;
                                              return [
                                                renderSlot(_ctx.$slots, "item-leading", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a8, _b6, _c3, _d2, _e;
                                                  return [
                                                    item.icon ? (openBlock(), createBlock(UIcon, {
                                                      key: 0,
                                                      name: item.icon,
                                                      class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                      key: 1,
                                                      size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                      ref_for: true
                                                    }, item.avatar, {
                                                      class: ui.value.itemLeadingAvatar({ class: (_c3 = props.ui) == null ? void 0 : _c3.itemLeadingAvatar })
                                                    }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                      key: 2,
                                                      size: ((_d2 = props.ui) == null ? void 0 : _d2.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                      inset: "",
                                                      standalone: "",
                                                      ref_for: true
                                                    }, item.chip, {
                                                      class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                  ];
                                                }),
                                                createVNode(unref(SelectItemText), {
                                                  class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                }, {
                                                  default: withCtx(() => [
                                                    renderSlot(_ctx.$slots, "item-label", {
                                                      item,
                                                      index
                                                    }, () => [
                                                      createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"]),
                                                createVNode("span", {
                                                  class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                }, [
                                                  renderSlot(_ctx.$slots, "item-trailing", {
                                                    item,
                                                    index
                                                  }),
                                                  createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                    default: withCtx(() => {
                                                      var _a8;
                                                      return [
                                                        createVNode(UIcon, {
                                                          name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                        }, null, 8, ["name", "class"])
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ], 2)
                                              ];
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "disabled", "value"]))
                                      ], 64);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ]),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(SelectArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_d = props.ui) == null ? void 0 : _d.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SelectContent), mergeProps({
                      class: ui.value.content({ class: (_b2 = props.ui) == null ? void 0 : _b2.content })
                    }, contentProps.value), {
                      default: withCtx(() => {
                        var _a4, _b3;
                        return [
                          createVNode(unref(SelectViewport), {
                            class: ui.value.viewport({ class: (_a4 = props.ui) == null ? void 0 : _a4.viewport })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                                var _a5;
                                return openBlock(), createBlock(unref(SelectGroup), {
                                  key: `group-${groupIndex}`,
                                  class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                      var _a6, _b4, _c;
                                      return openBlock(), createBlock(Fragment, {
                                        key: `group-${groupIndex}-${index}`
                                      }, [
                                        (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                          key: 0,
                                          class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                          key: 1,
                                          class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                        }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                          key: 2,
                                          class: ui.value.item({ class: (_c = props.ui) == null ? void 0 : _c.item }),
                                          disabled: item.disabled,
                                          value: typeof item === "object" ? unref(get)(item, props.valueKey) : item
                                        }, {
                                          default: withCtx(() => [
                                            renderSlot(_ctx.$slots, "item", {
                                              item,
                                              index
                                            }, () => {
                                              var _a7, _b5;
                                              return [
                                                renderSlot(_ctx.$slots, "item-leading", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a8, _b6, _c2, _d, _e;
                                                  return [
                                                    item.icon ? (openBlock(), createBlock(UIcon, {
                                                      key: 0,
                                                      name: item.icon,
                                                      class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                      key: 1,
                                                      size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                      ref_for: true
                                                    }, item.avatar, {
                                                      class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                                                    }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                      key: 2,
                                                      size: ((_d = props.ui) == null ? void 0 : _d.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                      inset: "",
                                                      standalone: "",
                                                      ref_for: true
                                                    }, item.chip, {
                                                      class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                  ];
                                                }),
                                                createVNode(unref(SelectItemText), {
                                                  class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                }, {
                                                  default: withCtx(() => [
                                                    renderSlot(_ctx.$slots, "item-label", {
                                                      item,
                                                      index
                                                    }, () => [
                                                      createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"]),
                                                createVNode("span", {
                                                  class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                }, [
                                                  renderSlot(_ctx.$slots, "item-trailing", {
                                                    item,
                                                    index
                                                  }),
                                                  createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                    default: withCtx(() => {
                                                      var _a8;
                                                      return [
                                                        createVNode(UIcon, {
                                                          name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                        }, null, 8, ["name", "class"])
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ], 2)
                                              ];
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "disabled", "value"]))
                                      ], 64);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ]),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(SelectArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b3 = props.ui) == null ? void 0 : _b3.arrow })
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
              createVNode(unref(SelectTrigger), mergeProps({
                id: unref(id),
                class: ui.value.base({ class: [props.class, (_b = props.ui) == null ? void 0 : _b.base] })
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), {
                default: withCtx(() => {
                  var _a3, _b2;
                  return [
                    unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => {
                        var _a4, _b3, _c;
                        return [
                          unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(UIcon, {
                            key: 0,
                            name: unref(leadingIconName),
                            class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                          }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                            key: 1,
                            size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                          }, _ctx.avatar, {
                            class: ui.value.itemLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.itemLeadingAvatar })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "default", {
                      modelValue,
                      open
                    }, () => [
                      (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                        var _a4, _b3;
                        return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                          displayedModelValue ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value })
                          }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder })
                          }, toDisplayString(_ctx.placeholder ?? " "), 3))
                        ], 64);
                      }), 128))
                    ]),
                    unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: ui.value.trailing({ class: (_b2 = props.ui) == null ? void 0 : _b2.trailing })
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => {
                        var _a4;
                        return [
                          unref(trailingIconName) ? (openBlock(), createBlock(UIcon, {
                            key: 0,
                            name: unref(trailingIconName),
                            class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1040, ["id", "class"]),
              createVNode(unref(SelectPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(SelectContent), mergeProps({
                      class: ui.value.content({ class: (_a3 = props.ui) == null ? void 0 : _a3.content })
                    }, contentProps.value), {
                      default: withCtx(() => {
                        var _a4, _b2;
                        return [
                          createVNode(unref(SelectViewport), {
                            class: ui.value.viewport({ class: (_a4 = props.ui) == null ? void 0 : _a4.viewport })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                                var _a5;
                                return openBlock(), createBlock(unref(SelectGroup), {
                                  key: `group-${groupIndex}`,
                                  class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                      var _a6, _b3, _c;
                                      return openBlock(), createBlock(Fragment, {
                                        key: `group-${groupIndex}-${index}`
                                      }, [
                                        (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                          key: 0,
                                          class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                          key: 1,
                                          class: ui.value.separator({ class: (_b3 = props.ui) == null ? void 0 : _b3.separator })
                                        }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                          key: 2,
                                          class: ui.value.item({ class: (_c = props.ui) == null ? void 0 : _c.item }),
                                          disabled: item.disabled,
                                          value: typeof item === "object" ? unref(get)(item, props.valueKey) : item
                                        }, {
                                          default: withCtx(() => [
                                            renderSlot(_ctx.$slots, "item", {
                                              item,
                                              index
                                            }, () => {
                                              var _a7, _b4;
                                              return [
                                                renderSlot(_ctx.$slots, "item-leading", {
                                                  item,
                                                  index
                                                }, () => {
                                                  var _a8, _b5, _c2, _d, _e;
                                                  return [
                                                    item.icon ? (openBlock(), createBlock(UIcon, {
                                                      key: 0,
                                                      name: item.icon,
                                                      class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                                      key: 1,
                                                      size: ((_b5 = props.ui) == null ? void 0 : _b5.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                      ref_for: true
                                                    }, item.avatar, {
                                                      class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                                                    }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                      key: 2,
                                                      size: ((_d = props.ui) == null ? void 0 : _d.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                      inset: "",
                                                      standalone: "",
                                                      ref_for: true
                                                    }, item.chip, {
                                                      class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                  ];
                                                }),
                                                createVNode(unref(SelectItemText), {
                                                  class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                }, {
                                                  default: withCtx(() => [
                                                    renderSlot(_ctx.$slots, "item-label", {
                                                      item,
                                                      index
                                                    }, () => [
                                                      createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"]),
                                                createVNode("span", {
                                                  class: ui.value.itemTrailing({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailing })
                                                }, [
                                                  renderSlot(_ctx.$slots, "item-trailing", {
                                                    item,
                                                    index
                                                  }),
                                                  createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                    default: withCtx(() => {
                                                      var _a8;
                                                      return [
                                                        createVNode(UIcon, {
                                                          name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                        }, null, 8, ["name", "class"])
                                                      ];
                                                    }),
                                                    _: 1
                                                  })
                                                ], 2)
                                              ];
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "disabled", "value"]))
                                      ], 64);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ]),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(SelectArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
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

const _sfc_setup$1 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_change-case@5.4.4_db0@0.3.1_embla-carousel@8.5.2_i_ef4954551e9ae83c6fa0c5b36063b32e/node_modules/@nuxt/ui/dist/runtime/components/Select.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$3, { __name: "USelect" });

var Role = /* @__PURE__ */ ((Role2) => {
  Role2["dev"] = "dev";
  Role2["admin"] = "admin";
  Role2["districtLeader"] = "districtLeader";
  Role2["user"] = "user";
  return Role2;
})(Role || {});
const roleOptions = [
  {
    label: "開發者",
    value: "dev"
    /* dev */
  },
  {
    label: "管理者",
    value: "admin"
    /* admin */
  },
  {
    label: "區負責",
    value: "districtLeader"
    /* districtLeader */
  },
  {
    label: "使用者",
    value: "user"
    /* user */
  }
];

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddSerialNumberComponent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const state = ref({
      data: {
        role: Role.user,
        districtId: "",
        notes: ""
      },
      feature: {
        modal: {
          open: false
        }
      }
    });
    const {
      execute: CreateSerialNumberRequest,
      status: CreateSerialNumberStatus
    } = ([__temp, __restore] = withAsyncContext(() => useSerialNumberApi.create(state.value.data)), __temp = await __temp, __restore(), __temp);
    const {
      data: CachedDistricts
    } = useNuxtData(UserRequestUrl.District);
    const handleCreateSerialNumber = async () => {
      const { feature, data } = state.value;
      await CreateSerialNumberRequest();
      await refreshNuxtData(UserRequestUrl.SerialNumberGetAll);
      feature.modal.open = false;
      data.role = Role.user;
      data.districtId = "";
      data.notes = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UIcon = UIcon;
      const _component_UModal = __nuxt_component_5$1;
      const _component_UForm = __nuxt_component_6;
      const _component_UFormField = __nuxt_component_7;
      const _component_USelect = __nuxt_component_5;
      const _component_UInput = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => unref(state).feature.modal.open = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-lucide-plus" }, null, _parent2, _scopeId));
            _push2(` 創建序號 `);
          } else {
            return [
              createVNode(_component_UIcon, { name: "i-lucide-plus" }),
              createTextVNode(" 創建序號 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(state).feature.modal.open,
        "onUpdate:open": ($event) => unref(state).feature.modal.open = $event,
        title: "創建序號",
        ui: { footer: "justify-end" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: unref(state).data,
              class: "space-y-4 flex flex-col gap-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "角色",
                    name: "role"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelect, {
                          modelValue: unref(state).data.role,
                          "onUpdate:modelValue": ($event) => unref(state).data.role = $event,
                          items: unref(roleOptions),
                          label: "角色",
                          name: "role"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: unref(state).data.role,
                            "onUpdate:modelValue": ($event) => unref(state).data.role = $event,
                            items: unref(roleOptions),
                            label: "角色",
                            name: "role"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "區域",
                    name: "districtId"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelect, {
                          modelValue: unref(state).data.districtId,
                          "onUpdate:modelValue": ($event) => unref(state).data.districtId = $event,
                          label: "區域",
                          name: "districtId",
                          items: (_a = unref(CachedDistricts)) == null ? void 0 : _a.districts.map((district) => ({
                            label: district.name,
                            value: district._id
                          }))
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: unref(state).data.districtId,
                            "onUpdate:modelValue": ($event) => unref(state).data.districtId = $event,
                            label: "區域",
                            name: "districtId",
                            items: (_b = unref(CachedDistricts)) == null ? void 0 : _b.districts.map((district) => ({
                              label: district.name,
                              value: district._id
                            }))
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "備註",
                    name: "notes"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).data.notes,
                          "onUpdate:modelValue": ($event) => unref(state).data.notes = $event,
                          label: "備註",
                          name: "notes",
                          ui: { root: "w-full" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).data.notes,
                            "onUpdate:modelValue": ($event) => unref(state).data.notes = $event,
                            label: "備註",
                            name: "notes",
                            ui: { root: "w-full" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_UFormField, {
                        label: "角色",
                        name: "role"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: unref(state).data.role,
                            "onUpdate:modelValue": ($event) => unref(state).data.role = $event,
                            items: unref(roleOptions),
                            label: "角色",
                            name: "role"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormField, {
                        label: "區域",
                        name: "districtId"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(_component_USelect, {
                              modelValue: unref(state).data.districtId,
                              "onUpdate:modelValue": ($event) => unref(state).data.districtId = $event,
                              label: "區域",
                              name: "districtId",
                              items: (_a = unref(CachedDistricts)) == null ? void 0 : _a.districts.map((district) => ({
                                label: district.name,
                                value: district._id
                              }))
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UFormField, {
                      label: "備註",
                      name: "notes"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).data.notes,
                          "onUpdate:modelValue": ($event) => unref(state).data.notes = $event,
                          label: "備註",
                          name: "notes",
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
              createVNode(_component_UForm, {
                state: unref(state).data,
                class: "space-y-4 flex flex-col gap-4"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_UFormField, {
                      label: "角色",
                      name: "role"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: unref(state).data.role,
                          "onUpdate:modelValue": ($event) => unref(state).data.role = $event,
                          items: unref(roleOptions),
                          label: "角色",
                          name: "role"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "區域",
                      name: "districtId"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_USelect, {
                            modelValue: unref(state).data.districtId,
                            "onUpdate:modelValue": ($event) => unref(state).data.districtId = $event,
                            label: "區域",
                            name: "districtId",
                            items: (_a = unref(CachedDistricts)) == null ? void 0 : _a.districts.map((district) => ({
                              label: district.name,
                              value: district._id
                            }))
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UFormField, {
                    label: "備註",
                    name: "notes"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).data.notes,
                        "onUpdate:modelValue": ($event) => unref(state).data.notes = $event,
                        label: "備註",
                        name: "notes",
                        ui: { root: "w-full" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["state"])
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
              disabled: !unref(state).data.role || !unref(state).data.districtId || !unref(state).data.notes,
              loading: unref(CreateSerialNumberStatus) === "pending",
              onClick: handleCreateSerialNumber
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
                disabled: !unref(state).data.role || !unref(state).data.districtId || !unref(state).data.notes,
                loading: unref(CreateSerialNumberStatus) === "pending",
                onClick: handleCreateSerialNumber
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DeleteSerialNumberComponent",
  __ssrInlineRender: true,
  props: {
    serialNumberId: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { serialNumberId } = toRefs(props);
    const state = ref({
      feature: {
        modal: {
          open: false
        }
      },
      data: null
    });
    const { execute, status } = ([__temp, __restore] = withAsyncContext(() => useSerialNumberApi.delete({
      id: serialNumberId.value
    })), __temp = await __temp, __restore(), __temp);
    const handleDeleteSerialNumber = async () => {
      await execute();
      await refreshNuxtData(UserRequestUrl.SerialNumberGetAll);
      state.value.feature.modal.open = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = UIcon;
      const _component_UModal = __nuxt_component_5$1;
      const _component_UButton = __nuxt_component_2;
      _push(`<!--[--><div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-trash",
        class: "size-5",
        onClick: ($event) => unref(state).feature.modal.open = true
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(state).feature.modal.open,
        "onUpdate:open": ($event) => unref(state).feature.modal.open = $event,
        title: "刪除序號",
        ui: { footer: "justify-end" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(`是否刪除序號 ${unref(serialNumberId)}`)}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(`是否刪除序號 ${unref(serialNumberId)}`), 1)
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
              loading: unref(status) === "pending",
              onClick: handleDeleteSerialNumber
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
                loading: unref(status) === "pending",
                onClick: handleDeleteSerialNumber
              }, null, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "serialNumber",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: SerialNumbersResponse } = ([__temp, __restore] = withAsyncContext(() => useSerialNumberApi.getAll()), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => useDistrictApi.getAll()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UCard = __nuxt_component_4;
      const _component_UBadge = UBadge;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center gap-2 justify-between mb-4"><p class="text-md font-bold"> 序號列表 </p>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList((_a = unref(SerialNumbersResponse)) == null ? void 0 : _a.userSerialNumber, (serialNumber) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: serialNumber._id,
          class: "mb-4"
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: serialNumber.isUsed ? "success" : "warning",
                variant: "outline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(serialNumber.isUsed ? "已使用" : "未使用")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(serialNumber.isUsed ? "已使用" : "未使用"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p${_scopeId}>${ssrInterpolate(serialNumber.notes || "無備註")}</p></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$1), {
                "serial-number-id": serialNumber._id
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 justify-between" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UBadge, {
                      color: serialNumber.isUsed ? "success" : "warning",
                      variant: "outline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(serialNumber.isUsed ? "已使用" : "未使用"), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    createVNode("p", null, toDisplayString(serialNumber.notes || "無備註"), 1)
                  ]),
                  createVNode(unref(_sfc_main$1), {
                    "serial-number-id": serialNumber._id
                  }, null, 8, ["serial-number-id"])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>序號：${ssrInterpolate(serialNumber.serialNumber)}</p><p${_scopeId}>角色：${ssrInterpolate(serialNumber.role)}</p><p${_scopeId}>區：${ssrInterpolate(serialNumber.districtId.name)}</p><p${_scopeId}>創建時間：${ssrInterpolate(serialNumber.createdAt)}</p>`);
            } else {
              return [
                createVNode("p", null, "序號：" + toDisplayString(serialNumber.serialNumber), 1),
                createVNode("p", null, "角色：" + toDisplayString(serialNumber.role), 1),
                createVNode("p", null, "區：" + toDisplayString(serialNumber.districtId.name), 1),
                createVNode("p", null, "創建時間：" + toDisplayString(serialNumber.createdAt), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/serialNumber.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=serialNumber.vue.mjs.map
