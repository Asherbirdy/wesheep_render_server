import { b as __nuxt_component_2, o as refreshNuxtData, U as UserRequestUrl, p as useLocale, t as tv, q as reactiveOmit, e as _appConfig, P as PublicRoutes, s as navigateTo, C as ClientRoutes } from './server.mjs';
import { U as UBadge } from './Badge.vue.mjs';
import { _ as __nuxt_component_1 } from './DropdownMenu.vue.mjs';
import { defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, mergeModels, useSlots, computed, useModel, mergeProps, createBlock, createCommentVNode, openBlock, renderSlot, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext, useTemplateRef, h } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { I as upperFirst } from '../nitro/nitro.mjs';
import { useVueTable, getExpandedRowModel, getSortedRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { a as __nuxt_component_5, _ as __nuxt_component_4 } from './Modal.vue.mjs';
import { _ as __nuxt_component_6, a as __nuxt_component_7, b as __nuxt_component_8 } from './Input.vue.mjs';
import { u as useLandingPageApi } from './useLandingPageApi.mjs';
import { u as useWindowSize } from './useWindowSize.mjs';
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
import 'reka-ui/namespaced';
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
import './useRequestApi.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddLandingPageComponent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const state = ref({
      data: {
        title: ""
      },
      feature: {
        modal: {
          open: false
        }
      }
    });
    const {
      execute: CreateLandingPageRequest,
      status: CreateLandingPageStatus
    } = ([__temp, __restore] = withAsyncContext(() => useLandingPageApi.create({
      title: state.value.data.title
    })), __temp = await __temp, __restore(), __temp);
    const handleSubmit = async () => {
      await CreateLandingPageRequest();
      await refreshNuxtData(UserRequestUrl.LandingPageGetALL);
      state.value.feature.modal.open = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UModal = __nuxt_component_5;
      const _component_UForm = __nuxt_component_6;
      const _component_UFormField = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "新增頁面",
        onClick: ($event) => unref(state).feature.modal.open = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(state).feature.modal.open,
        "onUpdate:open": ($event) => unref(state).feature.modal.open = $event,
        title: "新增頁面",
        ui: { footer: "justify-end" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              ui: { root: "space-y-4" },
              onSubmit: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "名稱",
                    name: "title"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).data.title,
                          "onUpdate:modelValue": ($event) => unref(state).data.title = $event,
                          label: "標題",
                          ui: { root: "w-full" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).data.title,
                            "onUpdate:modelValue": ($event) => unref(state).data.title = $event,
                            label: "標題",
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
                      name: "title"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).data.title,
                          "onUpdate:modelValue": ($event) => unref(state).data.title = $event,
                          label: "標題",
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
                ui: { root: "space-y-4" },
                onSubmit: handleSubmit
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormField, {
                    label: "名稱",
                    name: "title"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).data.title,
                        "onUpdate:modelValue": ($event) => unref(state).data.title = $event,
                        label: "標題",
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
              label: "送出",
              variant: "outline",
              disabled: !unref(state).data.title,
              loading: unref(CreateLandingPageStatus) === "pending",
              onClick: handleSubmit
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "送出",
                variant: "outline",
                disabled: !unref(state).data.title,
                loading: unref(CreateLandingPageStatus) === "pending",
                onClick: handleSubmit
              }, null, 8, ["disabled", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const theme = {
  "slots": {
    "root": "relative overflow-auto",
    "base": "min-w-full overflow-clip",
    "caption": "sr-only",
    "thead": "relative [&>tr]:after:absolute [&>tr]:after:inset-x-0 [&>tr]:after:bottom-0 [&>tr]:after:h-px [&>tr]:after:bg-(--ui-border-accented)",
    "tbody": "divide-y divide-(--ui-border) [&>tr]:data-[selectable=true]:hover:bg-(--ui-bg-elevated)/50 [&>tr]:data-[selectable=true]:focus-visible:outline-(--ui-primary)",
    "tr": "data-[selected=true]:bg-(--ui-bg-elevated)/50",
    "th": "px-4 py-3.5 text-sm text-(--ui-text-highlighted) text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
    "td": "p-4 text-sm text-(--ui-text-muted) whitespace-nowrap [&:has([role=checkbox])]:pe-0",
    "empty": "py-6 text-center text-sm text-(--ui-text-muted)",
    "loading": "py-6 text-center"
  },
  "variants": {
    "pinned": {
      "true": {
        "th": "sticky bg-(--ui-bg)/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0",
        "td": "sticky bg-(--ui-bg)/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0"
      }
    },
    "sticky": {
      "true": {
        "thead": "sticky top-0 inset-x-0 bg-(--ui-bg)/75 z-[1] backdrop-blur"
      }
    },
    "loading": {
      "true": {
        "thead": "after:absolute after:bottom-0 after:inset-x-0 after:h-px"
      }
    },
    "loadingAnimation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "loadingColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "loading": true,
      "loadingColor": "primary",
      "class": {
        "thead": "after:bg-(--ui-primary)"
      }
    },
    {
      "loading": true,
      "loadingColor": "secondary",
      "class": {
        "thead": "after:bg-(--ui-secondary)"
      }
    },
    {
      "loading": true,
      "loadingColor": "success",
      "class": {
        "thead": "after:bg-(--ui-success)"
      }
    },
    {
      "loading": true,
      "loadingColor": "info",
      "class": {
        "thead": "after:bg-(--ui-info)"
      }
    },
    {
      "loading": true,
      "loadingColor": "warning",
      "class": {
        "thead": "after:bg-(--ui-warning)"
      }
    },
    {
      "loading": true,
      "loadingColor": "error",
      "class": {
        "thead": "after:bg-(--ui-error)"
      }
    },
    {
      "loading": true,
      "loadingColor": "neutral",
      "class": {
        "thead": "after:bg-(--ui-bg-inverted)"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel",
      "class": {
        "thead": "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel-inverse",
      "class": {
        "thead": "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "swing",
      "class": {
        "thead": "after:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "elastic",
      "class": {
        "thead": "after:animate-[elastic_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "loadingColor": "primary",
    "loadingAnimation": "carousel"
  }
};

var _a;
const appConfigTable = _appConfig;
const table = tv({ extend: tv(theme), ...((_a = appConfigTable.ui) == null ? void 0 : _a.table) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    data: {},
    columns: {},
    caption: {},
    sticky: { type: Boolean },
    loading: { type: Boolean },
    loadingColor: {},
    loadingAnimation: {},
    globalFilterOptions: {},
    columnFiltersOptions: {},
    columnPinningOptions: {},
    columnSizingOptions: {},
    visibilityOptions: {},
    sortingOptions: {},
    groupingOptions: {},
    expandedOptions: {},
    rowSelectionOptions: {},
    rowPinningOptions: {},
    paginationOptions: {},
    facetedOptions: {},
    onSelect: { type: Function },
    class: {},
    ui: {},
    state: {},
    onStateChange: { type: Function },
    renderFallbackValue: {},
    _features: {},
    autoResetAll: { type: Boolean },
    debugAll: { type: Boolean },
    debugCells: { type: Boolean },
    debugColumns: { type: Boolean },
    debugHeaders: { type: Boolean },
    debugRows: { type: Boolean },
    debugTable: { type: Boolean },
    defaultColumn: {},
    getRowId: { type: Function },
    getSubRows: { type: Function },
    initialState: {},
    mergeOptions: { type: Function },
    meta: {}
  }, {
    "globalFilter": { default: void 0 },
    "globalFilterModifiers": {},
    "columnFilters": { default: [] },
    "columnFiltersModifiers": {},
    "columnOrder": { default: [] },
    "columnOrderModifiers": {},
    "columnVisibility": { default: {} },
    "columnVisibilityModifiers": {},
    "columnPinning": { default: {} },
    "columnPinningModifiers": {},
    "columnSizing": { default: {} },
    "columnSizingModifiers": {},
    "columnSizingInfo": { default: {} },
    "columnSizingInfoModifiers": {},
    "rowSelection": { default: {} },
    "rowSelectionModifiers": {},
    "rowPinning": { default: {} },
    "rowPinningModifiers": {},
    "sorting": { default: [] },
    "sortingModifiers": {},
    "grouping": { default: [] },
    "groupingModifiers": {},
    "expanded": { type: [Boolean, Object], ...{ default: {} } },
    "expandedModifiers": {},
    "pagination": { default: {} },
    "paginationModifiers": {}
  }),
  emits: ["update:globalFilter", "update:columnFilters", "update:columnOrder", "update:columnVisibility", "update:columnPinning", "update:columnSizing", "update:columnSizingInfo", "update:rowSelection", "update:rowPinning", "update:sorting", "update:grouping", "update:expanded", "update:pagination"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    const { t } = useLocale();
    const data = computed(() => props.data ?? []);
    const columns = computed(() => props.columns ?? Object.keys(data.value[0] ?? {}).map((accessorKey) => ({ accessorKey, header: upperFirst(accessorKey) })));
    const ui = computed(() => table({
      sticky: props.sticky,
      loading: props.loading,
      loadingColor: props.loadingColor,
      loadingAnimation: props.loadingAnimation
    }));
    const globalFilterState = useModel(__props, "globalFilter");
    const columnFiltersState = useModel(__props, "columnFilters");
    const columnOrderState = useModel(__props, "columnOrder");
    const columnVisibilityState = useModel(__props, "columnVisibility");
    const columnPinningState = useModel(__props, "columnPinning");
    const columnSizingState = useModel(__props, "columnSizing");
    const columnSizingInfoState = useModel(__props, "columnSizingInfo");
    const rowSelectionState = useModel(__props, "rowSelection");
    const rowPinningState = useModel(__props, "rowPinning");
    const sortingState = useModel(__props, "sorting");
    const groupingState = useModel(__props, "grouping");
    const expandedState = useModel(__props, "expanded");
    const paginationState = useModel(__props, "pagination");
    const tableApi = useVueTable({
      ...reactiveOmit(props, "as", "data", "columns", "caption", "sticky", "loading", "loadingColor", "loadingAnimation", "class", "ui"),
      data,
      columns: columns.value,
      getCoreRowModel: getCoreRowModel(),
      ...props.globalFilterOptions || {},
      onGlobalFilterChange: (updaterOrValue) => valueUpdater(updaterOrValue, globalFilterState),
      ...props.columnFiltersOptions || {},
      getFilteredRowModel: getFilteredRowModel(),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFiltersState),
      onColumnOrderChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnOrderState),
      ...props.visibilityOptions || {},
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibilityState),
      ...props.columnPinningOptions || {},
      onColumnPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnPinningState),
      ...props.columnSizingOptions || {},
      onColumnSizingChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingState),
      onColumnSizingInfoChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingInfoState),
      ...props.rowSelectionOptions || {},
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelectionState),
      ...props.rowPinningOptions || {},
      onRowPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowPinningState),
      ...props.sortingOptions || {},
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sortingState),
      ...props.groupingOptions || {},
      onGroupingChange: (updaterOrValue) => valueUpdater(updaterOrValue, groupingState),
      ...props.expandedOptions || {},
      getExpandedRowModel: getExpandedRowModel(),
      onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expandedState),
      ...props.paginationOptions || {},
      onPaginationChange: (updaterOrValue) => valueUpdater(updaterOrValue, paginationState),
      ...props.facetedOptions || {},
      state: {
        get globalFilter() {
          return globalFilterState.value;
        },
        get columnFilters() {
          return columnFiltersState.value;
        },
        get columnOrder() {
          return columnOrderState.value;
        },
        get columnVisibility() {
          return columnVisibilityState.value;
        },
        get columnPinning() {
          return columnPinningState.value;
        },
        get expanded() {
          return expandedState.value;
        },
        get rowSelection() {
          return rowSelectionState.value;
        },
        get sorting() {
          return sortingState.value;
        },
        get grouping() {
          return groupingState.value;
        },
        get rowPinning() {
          return rowPinningState.value;
        },
        get columnSizing() {
          return columnSizingState.value;
        },
        get columnSizingInfo() {
          return columnSizingInfoState.value;
        },
        get pagination() {
          return paginationState.value;
        }
      }
    });
    function valueUpdater(updaterOrValue, ref) {
      ref.value = typeof updaterOrValue === "function" ? updaterOrValue(ref.value) : updaterOrValue;
    }
    function handleRowSelect(row, e) {
      if (!props.onSelect) {
        return;
      }
      const target = e.target;
      const isInteractive = target.closest("button") || target.closest("a");
      if (isInteractive) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      props.onSelect(row, e);
    }
    __expose({
      tableApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            _push2(`<table class="${ssrRenderClass(ui.value.base({ class: [(_a3 = props.ui) == null ? void 0 : _a3.base] }))}"${_scopeId}>`);
            if (_ctx.caption) {
              _push2(`<caption class="${ssrRenderClass(ui.value.caption({ class: [(_b = props.ui) == null ? void 0 : _b.caption] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
                _push2(`${ssrInterpolate(_ctx.caption)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</caption>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<thead class="${ssrRenderClass(ui.value.thead({ class: [(_c = props.ui) == null ? void 0 : _c.thead] }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
              var _a4;
              _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }))}"${_scopeId}><!--[-->`);
              ssrRenderList(headerGroup.headers, (header) => {
                var _a5, _b2, _c2;
                _push2(`<th${ssrRenderAttr("data-pinned", header.column.getIsPinned())} class="${ssrRenderClass(ui.value.th({ class: [(_a5 = props.ui) == null ? void 0 : _a5.th, (_c2 = (_b2 = header.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th], pinned: !!header.column.getIsPinned() }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => {
                  if (!header.isPlaceholder) {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: header.column.columnDef.header,
                      props: header.getContext()
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</th>`);
              });
              _push2(`<!--]--></tr>`);
            });
            _push2(`<!--]--></thead><tbody class="${ssrRenderClass(ui.value.tbody({ class: [(_d = props.ui) == null ? void 0 : _d.tbody] }))}"${_scopeId}>`);
            if ((_e = unref(tableApi).getRowModel().rows) == null ? void 0 : _e.length) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(tableApi).getRowModel().rows, (row) => {
                var _a4, _b2, _c2;
                _push2(`<!--[--><tr${ssrRenderAttr("data-selected", row.getIsSelected())}${ssrRenderAttr("data-selectable", !!props.onSelect)}${ssrRenderAttr("data-expanded", row.getIsExpanded())}${ssrRenderAttr("role", props.onSelect ? "button" : void 0)}${ssrRenderAttr("tabindex", props.onSelect ? 0 : void 0)} class="${ssrRenderClass(ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }))}"${_scopeId}><!--[-->`);
                ssrRenderList(row.getVisibleCells(), (cell) => {
                  var _a5, _b3, _c3;
                  _push2(`<td${ssrRenderAttr("data-pinned", cell.column.getIsPinned())} class="${ssrRenderClass(ui.value.td({ class: [(_a5 = props.ui) == null ? void 0 : _a5.td, (_c3 = (_b3 = cell.column.columnDef.meta) == null ? void 0 : _b3.class) == null ? void 0 : _c3.td], pinned: !!cell.column.getIsPinned() }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: cell.column.columnDef.cell,
                      props: cell.getContext()
                    }, null, _parent2, _scopeId));
                  }, _push2, _parent2, _scopeId);
                  _push2(`</td>`);
                });
                _push2(`<!--]--></tr>`);
                if (row.getIsExpanded()) {
                  _push2(`<tr class="${ssrRenderClass(ui.value.tr({ class: [(_b2 = props.ui) == null ? void 0 : _b2.tr] }))}"${_scopeId}><td${ssrRenderAttr("colspan", row.getAllCells().length)} class="${ssrRenderClass(ui.value.td({ class: [(_c2 = props.ui) == null ? void 0 : _c2.td] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "expanded", { row }, null, _push2, _parent2, _scopeId);
                  _push2(`</td></tr>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else if (_ctx.loading && !!slots["loading"]) {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", (_f = columns.value) == null ? void 0 : _f.length)} class="${ssrRenderClass(ui.value.loading({ class: (_g = props.ui) == null ? void 0 : _g.loading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "loading", {}, null, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            } else {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", (_h = columns.value) == null ? void 0 : _h.length)} class="${ssrRenderClass(ui.value.empty({ class: (_i = props.ui) == null ? void 0 : _i.empty }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
                _push2(`${ssrInterpolate(unref(t)("table.noData"))}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            }
            _push2(`</tbody></table>`);
          } else {
            return [
              createVNode("table", {
                class: ui.value.base({ class: [(_j = props.ui) == null ? void 0 : _j.base] })
              }, [
                _ctx.caption ? (openBlock(), createBlock("caption", {
                  key: 0,
                  class: ui.value.caption({ class: [(_k = props.ui) == null ? void 0 : _k.caption] })
                }, [
                  renderSlot(_ctx.$slots, "caption", {}, () => [
                    createTextVNode(toDisplayString(_ctx.caption), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                createVNode("thead", {
                  class: ui.value.thead({ class: [(_l = props.ui) == null ? void 0 : _l.thead] })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
                    var _a4;
                    return openBlock(), createBlock("tr", {
                      key: headerGroup.id,
                      class: ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                        var _a5, _b2, _c2;
                        return openBlock(), createBlock("th", {
                          key: header.id,
                          "data-pinned": header.column.getIsPinned(),
                          class: ui.value.th({ class: [(_a5 = props.ui) == null ? void 0 : _a5.th, (_c2 = (_b2 = header.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th], pinned: !!header.column.getIsPinned() })
                        }, [
                          renderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => [
                            !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                              key: 0,
                              render: header.column.columnDef.header,
                              props: header.getContext()
                            }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                          ])
                        ], 10, ["data-pinned"]);
                      }), 128))
                    ], 2);
                  }), 128))
                ], 2),
                createVNode("tbody", {
                  class: ui.value.tbody({ class: [(_m = props.ui) == null ? void 0 : _m.tbody] })
                }, [
                  ((_n = unref(tableApi).getRowModel().rows) == null ? void 0 : _n.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(tableApi).getRowModel().rows, (row) => {
                    var _a4, _b2, _c2;
                    return openBlock(), createBlock(Fragment, {
                      key: row.id
                    }, [
                      createVNode("tr", {
                        "data-selected": row.getIsSelected(),
                        "data-selectable": !!props.onSelect,
                        "data-expanded": row.getIsExpanded(),
                        role: props.onSelect ? "button" : void 0,
                        tabindex: props.onSelect ? 0 : void 0,
                        class: ui.value.tr({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tr] }),
                        onClick: ($event) => handleRowSelect(row, $event)
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                          var _a5, _b3, _c3;
                          return openBlock(), createBlock("td", {
                            key: cell.id,
                            "data-pinned": cell.column.getIsPinned(),
                            class: ui.value.td({ class: [(_a5 = props.ui) == null ? void 0 : _a5.td, (_c3 = (_b3 = cell.column.columnDef.meta) == null ? void 0 : _b3.class) == null ? void 0 : _c3.td], pinned: !!cell.column.getIsPinned() })
                          }, [
                            renderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => [
                              createVNode(unref(FlexRender), {
                                render: cell.column.columnDef.cell,
                                props: cell.getContext()
                              }, null, 8, ["render", "props"])
                            ])
                          ], 10, ["data-pinned"]);
                        }), 128))
                      ], 10, ["data-selected", "data-selectable", "data-expanded", "role", "tabindex", "onClick"]),
                      row.getIsExpanded() ? (openBlock(), createBlock("tr", {
                        key: 0,
                        class: ui.value.tr({ class: [(_b2 = props.ui) == null ? void 0 : _b2.tr] })
                      }, [
                        createVNode("td", {
                          colspan: row.getAllCells().length,
                          class: ui.value.td({ class: [(_c2 = props.ui) == null ? void 0 : _c2.td] })
                        }, [
                          renderSlot(_ctx.$slots, "expanded", { row })
                        ], 10, ["colspan"])
                      ], 2)) : createCommentVNode("", true)
                    ], 64);
                  }), 128)) : _ctx.loading && !!slots["loading"] ? (openBlock(), createBlock("tr", { key: 1 }, [
                    createVNode("td", {
                      colspan: (_o = columns.value) == null ? void 0 : _o.length,
                      class: ui.value.loading({ class: (_p = props.ui) == null ? void 0 : _p.loading })
                    }, [
                      renderSlot(_ctx.$slots, "loading")
                    ], 10, ["colspan"])
                  ])) : (openBlock(), createBlock("tr", { key: 2 }, [
                    createVNode("td", {
                      colspan: (_q = columns.value) == null ? void 0 : _q.length,
                      class: ui.value.empty({ class: (_r = props.ui) == null ? void 0 : _r.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", {}, () => [
                        createTextVNode(toDisplayString(unref(t)("table.noData")), 1)
                      ])
                    ], 10, ["colspan"])
                  ]))
                ], 2)
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@3.0.1_@babel+parser@7.26.10_change-case@5.4.4_db0@0.3.1_embla-carousel@8.5.2_i_ef4954551e9ae83c6fa0c5b36063b32e/node_modules/@nuxt/ui/dist/runtime/components/Table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "UTable" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const table = useTemplateRef("table");
    const UButton = __nuxt_component_2;
    const UBadge$1 = UBadge;
    const UDropdownMenu = __nuxt_component_1;
    const { data: LandingPageResponse } = ([__temp, __restore] = withAsyncContext(() => useLandingPageApi.getAll()), __temp = await __temp, __restore(), __temp);
    const state = ref({
      data: {
        modal: {
          currentData: {
            _id: "",
            title: "",
            isActive: false,
            isCustom: false,
            urlPathId: "",
            updatedAt: "",
            description: "",
            isCustomId: "",
            updatedBy: "",
            lastEditVisited: "",
            createdAt: "",
            lastEditVisitedUser: "",
            __v: 0
          }
        }
      },
      feature: {
        modal: {
          open: false
        }
      }
    });
    const { isMdSize } = useWindowSize();
    const urlBase = computed(() => (void 0).location.origin);
    const openModal = (data) => {
      state.value.data.modal.currentData = data;
      state.value.feature.modal.open = true;
    };
    const columns = [
      {
        accessorKey: "isActive",
        header: "Status",
        cell: ({ row }) => h(UBadge$1, {
          class: "capitalize",
          variant: "subtle",
          color: row.getValue("isActive") ? "success" : "info"
        }, () => row.getValue("isActive") ? "上線" : "未上線")
      },
      {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => row.getValue("title")
      },
      {
        accessorKey: "isCustom",
        header: "Custom",
        cell: ({ row }) => h(UBadge$1, {
          class: "capitalize",
          variant: "subtle",
          color: row.getValue("isCustom") ? "info" : "neutral"
        }, () => row.getValue("isCustom") ? "客製化" : "公版")
      },
      {
        accessorKey: "urlPathId",
        header: "URL Path ID",
        cell: ({ row }) => row.getValue("urlPathId")
      },
      {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({ row }) => row.getValue("updatedAt")
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const items = [
            {
              type: "label",
              label: "Actions"
            },
            {
              label: "文字編輯器",
              onSelect() {
                navigateTo(`${ClientRoutes.LandingPageEditor}/${row.original._id}`);
              }
            },
            {
              label: "編輯標題",
              type: "Actions",
              onSelect: () => {
                openModal(row.original);
              }
            }
          ];
          return h(
            "div",
            { class: "text-right" },
            h(UDropdownMenu, {
              "content": { align: "end" },
              items,
              "aria-label": "Actions dropdown"
            }, () => h(
              UButton,
              {
                "icon": "i-lucide-ellipsis-vertical",
                "color": "neutral",
                "variant": "ghost",
                "class": "ml-auto",
                "aria-label": "Actions dropdown"
              }
            ))
          );
        }
      }
    ];
    const onSubmit = async () => {
      const { execute } = await useLandingPageApi.editInfoById({
        query: {
          landingPageId: state.value.data.modal.currentData._id
        },
        body: state.value.data.modal.currentData
      });
      await execute();
      refreshNuxtData(UserRequestUrl.LandingPageGetALL);
      state.value.feature.modal.open = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UTable = __nuxt_component_3;
      const _component_UCard = __nuxt_component_4;
      const _component_UModal = __nuxt_component_5;
      const _component_UForm = __nuxt_component_6;
      const _component_UFormField = __nuxt_component_7;
      const _component_UInput = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 w-full" }, _attrs))}><div class="flex justify-between mb-3"><p class="text-lg font-bold"> Landing Page </p>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`</div>`);
      if (!unref(isMdSize)) {
        _push(ssrRenderComponent(_component_UTable, {
          ref_key: "table",
          ref: table,
          data: (_a = unref(LandingPageResponse)) == null ? void 0 : _a.data,
          columns,
          sticky: "",
          class: "h-96"
        }, {
          expanded: withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<pre${_scopeId}>${ssrInterpolate(row.original)}</pre>`);
            } else {
              return [
                createVNode("pre", null, toDisplayString(row.original), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="flex flex-col w-full"><!--[-->`);
        ssrRenderList((_b = unref(LandingPageResponse)) == null ? void 0 : _b.data, (row) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: row._id,
            class: "mb-3 w-full"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex flex-wrap gap-2 mb-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(UBadge$1), {
                  color: row.isActive ? "success" : "info",
                  variant: "soft"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(row.isActive ? "上線" : "未上線")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(row.isActive ? "上線" : "未上線"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(UBadge$1), {
                  color: "neutral",
                  variant: "soft"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(row.isCustom ? "客製化" : "公版")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(row.isCustom ? "客製化" : "公版"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><h2 class="text-lg font-bold mb-2"${_scopeId}>${ssrInterpolate(row.title)}</h2><p class="mb-1"${_scopeId}> ID: ${ssrInterpolate(row.urlPathId)}</p><p class="text-sm break-all mb-4"${_scopeId}> 網址: ${ssrInterpolate(`${unref(urlBase)}${unref(PublicRoutes).LandingPage}/${row._id}`)}</p><div class="flex flex-wrap gap-2 justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(UButton), {
                  variant: "soft",
                  size: "sm",
                  class: "sm:flex-none",
                  onClick: ($event) => openModal(row)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` 編輯標題 `);
                    } else {
                      return [
                        createTextVNode(" 編輯標題 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(UButton), {
                  variant: "soft",
                  size: "sm",
                  class: "sm:flex-none",
                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`${unref(ClientRoutes).LandingPageEditor}/${row._id}`)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` 文字編輯器 `);
                    } else {
                      return [
                        createTextVNode(" 文字編輯器 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-wrap gap-2 mb-2" }, [
                    createVNode(unref(UBadge$1), {
                      color: row.isActive ? "success" : "info",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.isActive ? "上線" : "未上線"), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    createVNode(unref(UBadge$1), {
                      color: "neutral",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.isCustom ? "客製化" : "公版"), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("h2", { class: "text-lg font-bold mb-2" }, toDisplayString(row.title), 1),
                  createVNode("p", { class: "mb-1" }, " ID: " + toDisplayString(row.urlPathId), 1),
                  createVNode("p", { class: "text-sm break-all mb-4" }, " 網址: " + toDisplayString(`${unref(urlBase)}${unref(PublicRoutes).LandingPage}/${row._id}`), 1),
                  createVNode("div", { class: "flex flex-wrap gap-2 justify-center" }, [
                    createVNode(unref(UButton), {
                      variant: "soft",
                      size: "sm",
                      class: "sm:flex-none",
                      onClick: ($event) => openModal(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 編輯標題 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(unref(UButton), {
                      variant: "soft",
                      size: "sm",
                      class: "sm:flex-none",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`${unref(ClientRoutes).LandingPageEditor}/${row._id}`)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 文字編輯器 ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(state).feature.modal.open,
        "onUpdate:open": ($event) => unref(state).feature.modal.open = $event,
        title: "編輯頁面資訊",
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
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "標題",
                    name: "title"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).data.modal.currentData.title,
                          "onUpdate:modelValue": ($event) => unref(state).data.modal.currentData.title = $event,
                          label: "標題",
                          name: "title",
                          ui: { root: "w-full" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).data.modal.currentData.title,
                            "onUpdate:modelValue": ($event) => unref(state).data.modal.currentData.title = $event,
                            label: "標題",
                            name: "title",
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
                      label: "標題",
                      name: "title"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).data.modal.currentData.title,
                          "onUpdate:modelValue": ($event) => unref(state).data.modal.currentData.title = $event,
                          label: "標題",
                          name: "title",
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
                  createVNode(_component_UFormField, {
                    label: "標題",
                    name: "title"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).data.modal.currentData.title,
                        "onUpdate:modelValue": ($event) => unref(state).data.modal.currentData.title = $event,
                        label: "標題",
                        name: "title",
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
            _push2(ssrRenderComponent(unref(UButton), {
              label: "取消",
              color: "neutral",
              variant: "outline",
              onClick: ($event) => unref(state).feature.modal.open = false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(UButton), {
              label: "更新",
              onClick: onSubmit
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(UButton), {
                label: "取消",
                color: "neutral",
                variant: "outline",
                onClick: ($event) => unref(state).feature.modal.open = false
              }, null, 8, ["onClick"]),
              createVNode(unref(UButton), {
                label: "更新",
                onClick: onSubmit
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/landingPage/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
