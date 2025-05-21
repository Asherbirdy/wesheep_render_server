import { U as UserRequestUrl, b as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_0 } from './Tabs.vue.mjs';
import { U as UBadge } from './Badge.vue.mjs';
import { defineComponent, withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import 'reka-ui';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const useBlendingApi = {
  get: async () => {
    return await useRequestApi(UserRequestUrl.BlendingGetAll, {
      method: "GET",
      server: false,
      lazy: true
    });
  },
  createFromSheet: async () => {
    return await useRequestApi(UserRequestUrl.BlendingCreateFromSheet, {
      method: "GET",
      server: false,
      lazy: true,
      immediate: false,
      watch: false
    });
  }
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blending",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: BlendingResponse,
      execute: BlendingRequest
    } = ([__temp, __restore] = withAsyncContext(() => useBlendingApi.get()), __temp = await __temp, __restore(), __temp);
    const {
      execute: CreateFromSheetRequest,
      status: CreateFromSheetStatus
    } = ([__temp, __restore] = withAsyncContext(() => useBlendingApi.createFromSheet()), __temp = await __temp, __restore(), __temp);
    const handleUpdateData = async () => {
      await CreateFromSheetRequest();
      await BlendingRequest();
    };
    const data = computed(() => {
      var _a;
      return (_a = BlendingResponse.value) == null ? void 0 : _a.response.filter((item) => item.name !== "");
    });
    const gospelFriends = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.filter(
        (item) => item.identity === "女介朋友" || item.identity === "男介朋友"
      );
    });
    const filterAgeRange = (ageRange) => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.filter((item) => item.ageRange === ageRange).map((item) => item)) || [];
    };
    const filterOneDay = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.filter((item) => item.selectSchedule === "週六_單日行程").map((item) => item)) || [];
    });
    const filterSunday = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.filter((item) => item.selectSchedule === "只前往主日").map((item) => item)) || [];
    });
    const filterList = computed(() => [
      { title: "年長報名", data: filterAgeRange(
        "年長"
        /* Elder */
      ) },
      { title: "壯年報名", data: filterAgeRange(
        "壯年"
        /* Middle */
      ) },
      { title: "青職報名", data: filterAgeRange(
        "青職"
        /* Young */
      ) },
      { title: "大學報名", data: filterAgeRange(
        "大學"
        /* College */
      ) },
      { title: "青少年報名", data: filterAgeRange(
        "青少年"
        /* Teen */
      ) },
      { title: "兒童報名", data: filterAgeRange(
        "兒童"
        /* Child */
      ) },
      { title: "六歲以下報名", data: filterAgeRange(
        "六歲以下"
        /* SixYearOld */
      ) }
    ]);
    const tabs = [
      { label: "報名名單", slot: "join" },
      { label: "福音朋友", slot: "gospel" },
      { label: "單日報名", slot: "oneDay" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UTabs = __nuxt_component_0;
      const _component_UBadge = UBadge;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><h1>2025年 全會所戶外相調</h1>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "info",
        variant: "soft",
        size: "sm",
        loading: unref(CreateFromSheetStatus) === "pending",
        onClick: handleUpdateData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 更新 `);
          } else {
            return [
              createTextVNode(" 更新 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTabs, {
        items: tabs,
        variant: "link",
        class: "gap-4 w-full",
        ui: { trigger: "flex-1" }
      }, {
        join: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<p class="mb-4"${_scopeId}> 報名人數${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.length)}</p><!--[-->`);
            ssrRenderList(unref(filterList), (nameSet) => {
              _push2(`<div class="mb-4"${_scopeId}><p${_scopeId}>${ssrInterpolate(nameSet.title)} (${ssrInterpolate(nameSet.data.length)}位):</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(nameSet.data, (name) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: name._id,
                  color: "info",
                  variant: "soft"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(name.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(name.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("p", { class: "mb-4" }, " 報名人數" + toDisplayString((_b = unref(data)) == null ? void 0 : _b.length), 1),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(filterList), (nameSet) => {
                return openBlock(), createBlock("div", {
                  key: nameSet.title,
                  class: "mb-4"
                }, [
                  createVNode("p", null, toDisplayString(nameSet.title) + " (" + toDisplayString(nameSet.data.length) + "位):", 1),
                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(nameSet.data, (name) => {
                      return openBlock(), createBlock(_component_UBadge, {
                        key: name._id,
                        color: "info",
                        variant: "soft"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(name.name), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])
                ]);
              }), 128))
            ];
          }
        }),
        gospel: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<p${_scopeId}>福音朋友${ssrInterpolate((_a = unref(gospelFriends)) == null ? void 0 : _a.length)}位</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(gospelFriends), (nameData) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: nameData._id,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(nameData.name)} (${ssrInterpolate(nameData.ageRange)}) `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(nameData.name) + " (" + toDisplayString(nameData.ageRange) + ") ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("p", null, "福音朋友" + toDisplayString((_b = unref(gospelFriends)) == null ? void 0 : _b.length) + "位", 1),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(gospelFriends), (nameData) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: nameData._id,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(nameData.name) + " (" + toDisplayString(nameData.ageRange) + ") ", 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        oneDay: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<p${_scopeId}>週六單日報名${ssrInterpolate((_a = unref(filterOneDay)) == null ? void 0 : _a.length)}位</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(filterOneDay), (nameData) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: nameData._id,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(nameData.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(nameData.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>只前往主日${ssrInterpolate((_b = unref(filterSunday)) == null ? void 0 : _b.length)}位</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(filterSunday), (nameData) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: nameData._id,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(nameData.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(nameData.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("p", null, "週六單日報名" + toDisplayString((_c = unref(filterOneDay)) == null ? void 0 : _c.length) + "位", 1),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(filterOneDay), (nameData) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: nameData._id,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(nameData.name), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createVNode("p", null, "只前往主日" + toDisplayString((_d = unref(filterSunday)) == null ? void 0 : _d.length) + "位", 1),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(filterSunday), (nameData) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: nameData._id,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(nameData.name), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/blending.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blending.vue.mjs.map
