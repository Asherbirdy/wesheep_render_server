import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './Modal.vue.mjs';
import { b as useLocale, c as useAppConfig, r as reactivePick, d as useFormField, e as useButtonGroup, f as useComponentIcons, t as tv, g as get, h as compare, U as UIcon, i as UAvatar, j as _appConfig, k as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_8, a as __nuxt_component_6$1, b as __nuxt_component_7 } from './Input.vue.mjs';
import { U as UChip, _ as __nuxt_component_5$1 } from './Select.vue.mjs';
import { defineComponent, mergeModels, useSlots, useModel, toRef, computed, unref, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, withModifiers, mergeProps, createBlock, createCommentVNode, openBlock, Fragment, renderList, toRaw, useSSRContext, ref, withAsyncContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { useFilter, useForwardPropsEmits, ComboboxGroup, ComboboxItem, ComboboxRoot, ComboboxAnchor, ComboboxTrigger, ComboboxPortal, ComboboxContent, FocusScope, ComboboxInput, ComboboxEmpty, ComboboxViewport, ComboboxLabel, ComboboxSeparator, ComboboxItemIndicator, ComboboxArrow } from 'reka-ui';
import { l as defu } from '../nitro/nitro.mjs';
import { c as createReusableTemplate } from './index.mjs';
import { l as landingPageAccessOptions } from './LandingPageAccess.mjs';
import { R as Role, r as roleOptions } from './RoleEnum.mjs';
import { u as useUserApi } from './useUserApi.mjs';
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
import './useRequestApi.mjs';

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
    "itemLabel": "truncate",
    "input": "border-b border-(--ui-border)",
    "focusScope": "flex flex-col min-h-0"
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
const appConfigSelectMenu = _appConfig;
const selectMenu = tv({ extend: tv(theme), ...((_a = appConfigSelectMenu.ui) == null ? void 0 : _a.selectMenu) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "SelectMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: {},
    placeholder: {},
    searchInput: { type: [Boolean, Object], default: true },
    color: {},
    variant: {},
    size: {},
    required: { type: Boolean },
    trailingIcon: {},
    selectedIcon: {},
    content: {},
    arrow: { type: [Boolean, Object] },
    portal: { type: Boolean, default: true },
    valueKey: {},
    labelKey: { default: "label" },
    items: {},
    defaultValue: {},
    modelValue: {},
    multiple: { type: Boolean },
    highlight: { type: Boolean },
    createItem: { type: [Boolean, String, Object] },
    filterFields: {},
    ignoreFilter: { type: Boolean },
    class: {},
    ui: {},
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    resetSearchTermOnBlur: { type: Boolean, default: true },
    highlightOnHover: { type: Boolean },
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    loading: { type: Boolean },
    loadingIcon: {}
  }, {
    "searchTerm": { default: "" },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["highlight", "update:open", "change", "blur", "focus", "create", "update:modelValue"], ["update:searchTerm"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm");
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const { contains } = useFilter({ sensitivity: "base" });
    const rootProps = useForwardPropsEmits(reactivePick(props, "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "highlightOnHover"), emits);
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = toRef(() => props.arrow);
    const searchInputProps = toRef(() => defu(props.searchInput, { placeholder: t("selectMenu.search"), variant: "none" }));
    const { emitFormBlur, emitFormFocus, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const selectSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
    const ui = computed(() => selectMenu({
      color: color.value,
      variant: props.variant,
      size: selectSize == null ? void 0 : selectSize.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      buttonGroup: orientation.value
    }));
    function displayValue(value) {
      if (props.multiple && Array.isArray(value)) {
        return value.map((v) => displayValue(v)).filter(Boolean).join(", ");
      }
      if (!props.valueKey) {
        return value && (typeof value === "object" ? get(value, props.labelKey) : value);
      }
      const item = items.value.find((item2) => compare(typeof item2 === "object" ? get(item2, props.valueKey) : item2, value));
      return item && (typeof item === "object" ? get(item, props.labelKey) : item);
    }
    const groups = computed(() => {
      var _a2;
      return ((_a2 = props.items) == null ? void 0 : _a2.length) ? Array.isArray(props.items[0]) ? props.items : [props.items] : [];
    });
    const items = computed(() => groups.value.flatMap((group) => group));
    const filteredGroups = computed(() => {
      if (props.ignoreFilter || !searchTerm.value) {
        return groups.value;
      }
      const fields = Array.isArray(props.filterFields) ? props.filterFields : [props.labelKey];
      return groups.value.map((items2) => items2.filter((item) => {
        if (typeof item !== "object") {
          return contains(item, searchTerm.value);
        }
        if (item.type && ["label", "separator"].includes(item.type)) {
          return true;
        }
        return fields.some((field) => contains(get(item, field), searchTerm.value));
      })).filter((group) => group.filter((item) => !item.type || !["label", "separator"].includes(item.type)).length > 0);
    });
    const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group));
    const createItem = computed(() => {
      if (!props.createItem || !searchTerm.value) {
        return false;
      }
      const newItem = props.valueKey ? { [props.valueKey]: searchTerm.value } : searchTerm.value;
      if (typeof props.createItem === "object" && props.createItem.when === "always" || props.createItem === "always") {
        return !filteredItems.value.find((item) => compare(item, newItem, props.valueKey));
      }
      return !filteredItems.value.length;
    });
    const createItemPosition = computed(() => typeof props.createItem === "object" ? props.createItem.position : "bottom");
    function onUpdate(value) {
      if (toRaw(props.modelValue) === value) {
        return;
      }
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function onUpdateOpen(value) {
      let timeoutId;
      if (!value) {
        const event = new FocusEvent("blur");
        emits("blur", event);
        emitFormBlur();
        if (props.resetSearchTermOnBlur) {
          const STATE_ANIMATION_DELAY_MS = 100;
          timeoutId = setTimeout(() => {
            searchTerm.value = "";
          }, STATE_ANIMATION_DELAY_MS);
        }
      } else {
        const event = new FocusEvent("focus");
        emits("focus", event);
        emitFormFocus();
        clearTimeout(timeoutId);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxGroup), {
              class: ui.value.group({ class: (_a2 = props.ui) == null ? void 0 : _a2.group })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxItem), {
                    class: ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item }),
                    value: searchTerm.value,
                    onSelect: ($event) => emits("create", searchTerm.value)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a4, _b3;
                      if (_push4) {
                        _push4(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: (_a4 = props.ui) == null ? void 0 : _a4.itemLabel }))}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => {
                          _push4(`${ssrInterpolate(unref(t)("selectMenu.create", { label: searchTerm.value }))}`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: (_b3 = props.ui) == null ? void 0 : _b3.itemLabel })
                          }, [
                            renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                              createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                            ])
                          ], 2)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxItem), {
                      class: ui.value.item({ class: (_b2 = props.ui) == null ? void 0 : _b2.item }),
                      value: searchTerm.value,
                      onSelect: withModifiers(($event) => emits("create", searchTerm.value), ["prevent"])
                    }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: (_a4 = props.ui) == null ? void 0 : _a4.itemLabel })
                          }, [
                            renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                              createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                            ])
                          ], 2)
                        ];
                      }),
                      _: 3
                    }, 8, ["class", "value", "onSelect"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ComboboxGroup), {
                class: ui.value.group({ class: (_b = props.ui) == null ? void 0 : _b.group })
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(ComboboxItem), {
                      class: ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item }),
                      value: searchTerm.value,
                      onSelect: withModifiers(($event) => emits("create", searchTerm.value), ["prevent"])
                    }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: (_a4 = props.ui) == null ? void 0 : _a4.itemLabel })
                          }, [
                            renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                              createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                            ])
                          ], 2)
                        ];
                      }),
                      _: 3
                    }, 8, ["class", "value", "onSelect"])
                  ];
                }),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
        "ignore-filter": "",
        "as-child": "",
        name: unref(name),
        disabled: unref(disabled),
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }), {
        default: withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxAnchor), { "as-child": "" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxTrigger), {
                    class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] }),
                    tabindex: "0"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2, _c, _d;
                      if (_push4) {
                        if (unref(isLeading) || !!_ctx.avatar || !!slots.leading) {
                          _push4(`<span class="${ssrRenderClass(ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a4, _b3, _c2;
                            if (unref(isLeading) && unref(leadingIconName)) {
                              _push4(ssrRenderComponent(UIcon, {
                                name: unref(leadingIconName),
                                class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (!!_ctx.avatar) {
                              _push4(ssrRenderComponent(UAvatar, mergeProps({
                                size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                              }, _ctx.avatar, {
                                class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "default", {
                          modelValue,
                          open
                        }, () => {
                          _push4(`<!--[-->`);
                          ssrRenderList([displayValue(modelValue)], (displayedModelValue) => {
                            var _a4, _b3;
                            _push4(`<!--[-->`);
                            if (displayedModelValue) {
                              _push4(`<span class="${ssrRenderClass(ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value }))}"${_scopeId3}>${ssrInterpolate(displayedModelValue)}</span>`);
                            } else {
                              _push4(`<span class="${ssrRenderClass(ui.value.placeholder({ class: (_b3 = props.ui) == null ? void 0 : _b3.placeholder }))}"${_scopeId3}>${ssrInterpolate(_ctx.placeholder ?? " ")}</span>`);
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]-->`);
                        }, _push4, _parent4, _scopeId3);
                        if (unref(isTrailing) || !!slots.trailing) {
                          _push4(`<span class="${ssrRenderClass(ui.value.trailing({ class: (_b2 = props.ui) == null ? void 0 : _b2.trailing }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a4;
                            if (unref(trailingIconName)) {
                              _push4(ssrRenderComponent(UIcon, {
                                name: unref(trailingIconName),
                                class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxTrigger), {
                      class: ui.value.base({ class: [props.class, (_b = props.ui) == null ? void 0 : _b.base] }),
                      tabindex: "0"
                    }, {
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
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ComboboxPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxContent), mergeProps({
                    class: ui.value.content({ class: (_a2 = props.ui) == null ? void 0 : _a2.content })
                  }, contentProps.value), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2, _c, _d;
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(FocusScope), {
                          trapped: "",
                          class: ui.value.focusScope({ class: (_a3 = props.ui) == null ? void 0 : _a3.focusScope })
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            var _a4, _b3, _c2, _d2;
                            if (_push5) {
                              if (!!_ctx.searchInput) {
                                _push5(ssrRenderComponent(unref(ComboboxInput), {
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    var _a5, _b4;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(__nuxt_component_8, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(__nuxt_component_8, mergeProps({
                                          autofocus: "",
                                          autocomplete: "off"
                                        }, searchInputProps.value, {
                                          class: ui.value.input({ class: (_b4 = props.ui) == null ? void 0 : _b4.input })
                                        }), null, 16, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(unref(ComboboxEmpty), {
                                class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                                      _push6(`${ssrInterpolate(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData"))}`);
                                    }, _push6, _parent6, _scopeId5);
                                  } else {
                                    return [
                                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(ComboboxViewport), {
                                class: ui.value.viewport({ class: (_b3 = props.ui) == null ? void 0 : _b3.viewport })
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (createItem.value && createItemPosition.value === "top") {
                                      _push6(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`<!--[-->`);
                                    ssrRenderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      _push6(ssrRenderComponent(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(group, (item, index) => {
                                              var _a6, _b4, _c3;
                                              _push7(`<!--[-->`);
                                              if ((item == null ? void 0 : item.type) === "label") {
                                                _push7(ssrRenderComponent(unref(ComboboxLabel), {
                                                  class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                                }, {
                                                  default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else if ((item == null ? void 0 : item.type) === "separator") {
                                                _push7(ssrRenderComponent(unref(ComboboxSeparator), {
                                                  class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(ssrRenderComponent(unref(ComboboxItem), {
                                                  class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                  disabled: item.disabled,
                                                  value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                  onSelect: item.onSelect
                                                }, {
                                                  default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      ssrRenderSlot(_ctx.$slots, "item", {
                                                        item,
                                                        index
                                                      }, () => {
                                                        var _a7, _b5;
                                                        ssrRenderSlot(_ctx.$slots, "item-leading", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          var _a8, _b6, _c4, _d3, _e;
                                                          if (item.icon) {
                                                            _push8(ssrRenderComponent(UIcon, {
                                                              name: item.icon,
                                                              class: ui.value.itemLeadingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemLeadingIcon })
                                                            }, null, _parent8, _scopeId7));
                                                          } else if (item.avatar) {
                                                            _push8(ssrRenderComponent(UAvatar, mergeProps({
                                                              size: ((_b6 = props.ui) == null ? void 0 : _b6.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize(),
                                                              ref_for: true
                                                            }, item.avatar, {
                                                              class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                            }), null, _parent8, _scopeId7));
                                                          } else if (item.chip) {
                                                            _push8(ssrRenderComponent(UChip, mergeProps({
                                                              size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                              inset: "",
                                                              standalone: "",
                                                              ref_for: true
                                                            }, item.chip, {
                                                              class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                            }), null, _parent8, _scopeId7));
                                                          } else {
                                                            _push8(`<!---->`);
                                                          }
                                                        }, _push8, _parent8, _scopeId7);
                                                        _push8(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel }))}"${_scopeId7}>`);
                                                        ssrRenderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => {
                                                          _push8(`${ssrInterpolate(typeof item === "object" ? unref(get)(item, props.labelKey) : item)}`);
                                                        }, _push8, _parent8, _scopeId7);
                                                        _push8(`</span><span class="${ssrRenderClass(ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing }))}"${_scopeId7}>`);
                                                        ssrRenderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }, null, _push8, _parent8, _scopeId7);
                                                        _push8(ssrRenderComponent(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                          default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                            var _a8, _b6;
                                                            if (_push9) {
                                                              _push9(ssrRenderComponent(UIcon, {
                                                                name: _ctx.selectedIcon || unref(appConfig).ui.icons.check,
                                                                class: ui.value.itemTrailingIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.itemTrailingIcon })
                                                              }, null, _parent9, _scopeId8));
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
                                                        }, _parent8, _scopeId7));
                                                        _push8(`</span>`);
                                                      }, _push8, _parent8, _scopeId7);
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
                                                              var _a8, _b6, _c4, _d3, _e;
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
                                                                  class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                                }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                                  key: 2,
                                                                  size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                                  inset: "",
                                                                  standalone: "",
                                                                  ref_for: true
                                                                }, item.chip, {
                                                                  class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                              ];
                                                            }),
                                                            createVNode("span", {
                                                              class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                            }, [
                                                              renderSlot(_ctx.$slots, "item-label", {
                                                                item,
                                                                index
                                                              }, () => [
                                                                createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                              ])
                                                            ], 2),
                                                            createVNode("span", {
                                                              class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                            }, [
                                                              renderSlot(_ctx.$slots, "item-trailing", {
                                                                item,
                                                                index
                                                              }),
                                                              createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
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
                                                }, _parent7, _scopeId6));
                                              }
                                              _push7(`<!--]-->`);
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                                var _a6, _b4, _c3;
                                                return openBlock(), createBlock(Fragment, {
                                                  key: `group-${groupIndex}-${index}`
                                                }, [
                                                  (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                    key: 0,
                                                    class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                    key: 1,
                                                    class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                  }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                    key: 2,
                                                    class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                    disabled: item.disabled,
                                                    value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                    onSelect: item.onSelect
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
                                                            var _a8, _b6, _c4, _d3, _e;
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
                                                                class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                              }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                                key: 2,
                                                                size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                                inset: "",
                                                                standalone: "",
                                                                ref_for: true
                                                              }, item.chip, {
                                                                class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                            ];
                                                          }),
                                                          createVNode("span", {
                                                            class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                          }, [
                                                            renderSlot(_ctx.$slots, "item-label", {
                                                              item,
                                                              index
                                                            }, () => [
                                                              createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                            ])
                                                          ], 2),
                                                          createVNode("span", {
                                                            class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                          }, [
                                                            renderSlot(_ctx.$slots, "item-trailing", {
                                                              item,
                                                              index
                                                            }),
                                                            createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
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
                                                  }, 1032, ["class", "disabled", "value", "onSelect"]))
                                                ], 64);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    if (createItem.value && createItemPosition.value === "bottom") {
                                      _push6(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                      (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                        var _a5;
                                        return openBlock(), createBlock(unref(ComboboxGroup), {
                                          key: `group-${groupIndex}`,
                                          class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                              var _a6, _b4, _c3;
                                              return openBlock(), createBlock(Fragment, {
                                                key: `group-${groupIndex}-${index}`
                                              }, [
                                                (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                  key: 0,
                                                  class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                  key: 1,
                                                  class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                                }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                  key: 2,
                                                  class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                  disabled: item.disabled,
                                                  value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                  onSelect: item.onSelect
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
                                                          var _a8, _b6, _c4, _d3, _e;
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
                                                              class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                            }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                              key: 2,
                                                              size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                              inset: "",
                                                              standalone: "",
                                                              ref_for: true
                                                            }, item.chip, {
                                                              class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                            }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                          ];
                                                        }),
                                                        createVNode("span", {
                                                          class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                        }, [
                                                          renderSlot(_ctx.$slots, "item-label", {
                                                            item,
                                                            index
                                                          }, () => [
                                                            createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                          ])
                                                        ], 2),
                                                        createVNode("span", {
                                                          class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                        }, [
                                                          renderSlot(_ctx.$slots, "item-trailing", {
                                                            item,
                                                            index
                                                          }),
                                                          createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
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
                                                }, 1032, ["class", "disabled", "value", "onSelect"]))
                                              ], 64);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]);
                                      }), 128)),
                                      createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                !!_ctx.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(__nuxt_component_8, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_c2 = props.ui) == null ? void 0 : _c2.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode(unref(ComboboxViewport), {
                                  class: ui.value.viewport({ class: (_d2 = props.ui) == null ? void 0 : _d2.viewport })
                                }, {
                                  default: withCtx(() => [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a6, _b4, _c3;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c3 = props.ui) == null ? void 0 : _c3.item }),
                                                disabled: item.disabled,
                                                value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                onSelect: item.onSelect
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
                                                        var _a8, _b6, _c4, _d3, _e;
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
                                                            class: ui.value.itemLeadingAvatar({ class: (_c4 = props.ui) == null ? void 0 : _c4.itemLeadingAvatar })
                                                          }), null, 16, ["size", "class"])) : item.chip ? (openBlock(), createBlock(UChip, mergeProps({
                                                            key: 2,
                                                            size: ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                                            inset: "",
                                                            standalone: "",
                                                            ref_for: true
                                                          }, item.chip, {
                                                            class: ui.value.itemLeadingChip({ class: (_e = props.ui) == null ? void 0 : _e.itemLeadingChip })
                                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                        ];
                                                      }),
                                                      createVNode("span", {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ], 2),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
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
                                              }, 1032, ["class", "disabled", "value", "onSelect"]))
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (!!_ctx.arrow) {
                          _push4(ssrRenderComponent(unref(ComboboxArrow), mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: (_c = props.ui) == null ? void 0 : _c.focusScope })
                          }, {
                            default: withCtx(() => {
                              var _a4, _b3;
                              return [
                                !!_ctx.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(__nuxt_component_8, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode(unref(ComboboxViewport), {
                                  class: ui.value.viewport({ class: (_b3 = props.ui) == null ? void 0 : _b3.viewport })
                                }, {
                                  default: withCtx(() => [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a6, _b4, _c2;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c2 = props.ui) == null ? void 0 : _c2.item }),
                                                disabled: item.disabled,
                                                value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                onSelect: item.onSelect
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
                                                      createVNode("span", {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ], 2),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
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
                                              }, 1032, ["class", "disabled", "value", "onSelect"]))
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_d = props.ui) == null ? void 0 : _d.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxContent), mergeProps({
                      class: ui.value.content({ class: (_b = props.ui) == null ? void 0 : _b.content })
                    }, contentProps.value), {
                      default: withCtx(() => {
                        var _a3, _b2;
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: (_a3 = props.ui) == null ? void 0 : _a3.focusScope })
                          }, {
                            default: withCtx(() => {
                              var _a4, _b3;
                              return [
                                !!_ctx.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(__nuxt_component_8, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode(unref(ComboboxViewport), {
                                  class: ui.value.viewport({ class: (_b3 = props.ui) == null ? void 0 : _b3.viewport })
                                }, {
                                  default: withCtx(() => [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a6, _b4, _c;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b4 = props.ui) == null ? void 0 : _b4.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c = props.ui) == null ? void 0 : _c.item }),
                                                disabled: item.disabled,
                                                value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                onSelect: item.onSelect
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
                                                      createVNode("span", {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ], 2),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b5 = props.ui) == null ? void 0 : _b5.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
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
                                              }, 1032, ["class", "disabled", "value", "onSelect"]))
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
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
              createVNode(unref(ComboboxAnchor), { "as-child": "" }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(ComboboxTrigger), {
                      class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] }),
                      tabindex: "0"
                    }, {
                      default: withCtx(() => {
                        var _a3, _b;
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
                              var _a4, _b2, _c;
                              return [
                                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: unref(leadingIconName),
                                  class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                                }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                                  key: 1,
                                  size: ((_b2 = props.ui) == null ? void 0 : _b2.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
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
                              var _a4, _b2;
                              return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                                displayedModelValue ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.value({ class: (_a4 = props.ui) == null ? void 0 : _a4.value })
                                }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: ui.value.placeholder({ class: (_b2 = props.ui) == null ? void 0 : _b2.placeholder })
                                }, toDisplayString(_ctx.placeholder ?? " "), 3))
                              ], 64);
                            }), 128))
                          ]),
                          unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: ui.value.trailing({ class: (_b = props.ui) == null ? void 0 : _b.trailing })
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
                    }, 1032, ["class"])
                  ];
                }),
                _: 2
              }, 1024),
              createVNode(unref(ComboboxPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(ComboboxContent), mergeProps({
                      class: ui.value.content({ class: (_a2 = props.ui) == null ? void 0 : _a2.content })
                    }, contentProps.value), {
                      default: withCtx(() => {
                        var _a3, _b;
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: (_a3 = props.ui) == null ? void 0 : _a3.focusScope })
                          }, {
                            default: withCtx(() => {
                              var _a4, _b2;
                              return [
                                !!_ctx.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(__nuxt_component_8, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off"
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: (_a5 = props.ui) == null ? void 0 : _a5.input })
                                      }), null, 16, ["class"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode(unref(ComboboxViewport), {
                                  class: ui.value.viewport({ class: (_b2 = props.ui) == null ? void 0 : _b2.viewport })
                                }, {
                                  default: withCtx(() => [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      var _a5;
                                      return openBlock(), createBlock(unref(ComboboxGroup), {
                                        key: `group-${groupIndex}`,
                                        class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                            var _a6, _b3, _c;
                                            return openBlock(), createBlock(Fragment, {
                                              key: `group-${groupIndex}-${index}`
                                            }, [
                                              (item == null ? void 0 : item.type) === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                                key: 0,
                                                class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])) : (item == null ? void 0 : item.type) === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                                key: 1,
                                                class: ui.value.separator({ class: (_b3 = props.ui) == null ? void 0 : _b3.separator })
                                              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                                key: 2,
                                                class: ui.value.item({ class: (_c = props.ui) == null ? void 0 : _c.item }),
                                                disabled: item.disabled,
                                                value: _ctx.valueKey && typeof item === "object" ? unref(get)(item, props.valueKey) : item,
                                                onSelect: item.onSelect
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
                                                      createVNode("span", {
                                                        class: ui.value.itemLabel({ class: (_a7 = props.ui) == null ? void 0 : _a7.itemLabel })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-label", {
                                                          item,
                                                          index
                                                        }, () => [
                                                          createTextVNode(toDisplayString(typeof item === "object" ? unref(get)(item, props.labelKey) : item), 1)
                                                        ])
                                                      ], 2),
                                                      createVNode("span", {
                                                        class: ui.value.itemTrailing({ class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailing })
                                                      }, [
                                                        renderSlot(_ctx.$slots, "item-trailing", {
                                                          item,
                                                          index
                                                        }),
                                                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
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
                                              }, 1032, ["class", "disabled", "value", "onSelect"]))
                                            ], 64);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128)),
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }),
                            _: 3
                          }, 8, ["class"]),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b = props.ui) == null ? void 0 : _b.arrow })
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
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_change-case@5.4.4_db0@0.3.1_embla-carousel@8.5.2_i_ef4954551e9ae83c6fa0c5b36063b32e/node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "USelectMenu" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const state = ref({
      data: {
        form: {
          userId: "",
          role: Role.user,
          landingPageAccess: []
        }
      },
      feature: {
        modal: {
          open: false
        }
      }
    });
    const {
      data: UserListResponse,
      refresh: UserListRefresh
    } = ([__temp, __restore] = withAsyncContext(() => useUserApi.getUserList()), __temp = await __temp, __restore(), __temp);
    const {
      execute: ChangeUserAccessRequest,
      status: ChangeUserAccessStatus
    } = ([__temp, __restore] = withAsyncContext(() => useUserApi.changeUserAccess(state.value.data.form)), __temp = await __temp, __restore(), __temp);
    const handleUpdateUserAccess = async () => {
      await ChangeUserAccessRequest();
      await UserListRefresh();
      state.value.feature.modal.open = false;
    };
    const openModal = (row) => {
      const { data, feature } = state.value;
      data.form.userId = row._id;
      data.form.role = row.role;
      data.form.landingPageAccess = row.landingPageAccess;
      feature.modal.open = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UCard = __nuxt_component_4;
      const _component_UButton = __nuxt_component_2;
      const _component_UModal = __nuxt_component_5;
      const _component_UForm = __nuxt_component_6$1;
      const _component_UFormField = __nuxt_component_7;
      const _component_USelect = __nuxt_component_5$1;
      const _component_USelectMenu = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 w-full" }, _attrs))}><div class="flex justify-between mb-3"><p class="text-lg font-bold"> 帳號管理 </p></div><div class="flex flex-col w-full"><!--[-->`);
      ssrRenderList((_a = unref(UserListResponse)) == null ? void 0 : _a.users, (row) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: row._id,
          class: "mb-3 w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2 mb-2"${_scopeId}><div class="flex justify-between"${_scopeId}><p${_scopeId}>${ssrInterpolate(row.name)}</p>`);
              if (row.role !== unref(Role).dev) {
                _push2(ssrRenderComponent(_component_UButton, {
                  variant: "soft",
                  size: "sm",
                  class: "sm:flex-none",
                  onClick: ($event) => openModal(row)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` 編輯 `);
                    } else {
                      return [
                        createTextVNode(" 編輯 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><p${_scopeId}>電子信箱：${ssrInterpolate(row.email)}</p><p${_scopeId}>角色：${ssrInterpolate(row.role)}</p><p${_scopeId}>首頁權限：${ssrInterpolate(row.landingPageAccess)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-2 mb-2" }, [
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("p", null, toDisplayString(row.name), 1),
                    row.role !== unref(Role).dev ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      variant: "soft",
                      size: "sm",
                      class: "sm:flex-none",
                      onClick: ($event) => openModal(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 編輯 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  createVNode("p", null, "電子信箱：" + toDisplayString(row.email), 1),
                  createVNode("p", null, "角色：" + toDisplayString(row.role), 1),
                  createVNode("p", null, "首頁權限：" + toDisplayString(row.landingPageAccess), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(state).feature.modal.open,
        "onUpdate:open": ($event) => unref(state).feature.modal.open = $event,
        title: "編輯帳號",
        ui: { footer: "justify-end" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: unref(state).data
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "角色",
                    name: "role"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelect, {
                          modelValue: unref(state).data.form.role,
                          "onUpdate:modelValue": ($event) => unref(state).data.form.role = $event,
                          label: "角色",
                          name: "role",
                          items: unref(roleOptions)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: unref(state).data.form.role,
                            "onUpdate:modelValue": ($event) => unref(state).data.form.role = $event,
                            label: "角色",
                            name: "role",
                            items: unref(roleOptions)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "首頁權限",
                    name: "landingPageAccess"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelectMenu, {
                          modelValue: unref(state).data.form.landingPageAccess,
                          "onUpdate:modelValue": ($event) => unref(state).data.form.landingPageAccess = $event,
                          "value-key": "value",
                          multiple: "",
                          items: unref(landingPageAccessOptions)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(state).data.form.landingPageAccess,
                            "onUpdate:modelValue": ($event) => unref(state).data.form.landingPageAccess = $event,
                            "value-key": "value",
                            multiple: "",
                            items: unref(landingPageAccessOptions)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormField, {
                      label: "角色",
                      name: "role"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: unref(state).data.form.role,
                          "onUpdate:modelValue": ($event) => unref(state).data.form.role = $event,
                          label: "角色",
                          name: "role",
                          items: unref(roleOptions)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "首頁權限",
                      name: "landingPageAccess"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(state).data.form.landingPageAccess,
                          "onUpdate:modelValue": ($event) => unref(state).data.form.landingPageAccess = $event,
                          "value-key": "value",
                          multiple: "",
                          items: unref(landingPageAccessOptions)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                state: unref(state).data
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormField, {
                    label: "角色",
                    name: "role"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: unref(state).data.form.role,
                        "onUpdate:modelValue": ($event) => unref(state).data.form.role = $event,
                        label: "角色",
                        name: "role",
                        items: unref(roleOptions)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "首頁權限",
                    name: "landingPageAccess"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelectMenu, {
                        modelValue: unref(state).data.form.landingPageAccess,
                        "onUpdate:modelValue": ($event) => unref(state).data.form.landingPageAccess = $event,
                        "value-key": "value",
                        multiple: "",
                        items: unref(landingPageAccessOptions)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
              color: "neutral",
              loading: unref(ChangeUserAccessStatus) === "pending",
              onClick: handleUpdateUserAccess
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
                color: "neutral",
                loading: unref(ChangeUserAccessStatus) === "pending",
                onClick: handleUpdateUserAccess
              }, null, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user.vue.mjs.map
