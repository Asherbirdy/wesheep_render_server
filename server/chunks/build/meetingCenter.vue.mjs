import { U as UserRequestUrl, b as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_0 } from './Tabs.vue.mjs';
import { U as UBadge } from './Badge.vue.mjs';
import { defineComponent, withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const useMeetingCenterApi = {
  getAll: async () => await useRequestApi(UserRequestUrl.MeetingCenter, {
    method: "GET",
    server: false
  }),
  create: async () => await useRequestApi(UserRequestUrl.MeetingCenter, {
    method: "POST",
    server: false,
    lazy: true,
    immediate: false
  })
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "meetingCenter",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: MeetingCenterResponse,
      refresh: MeetingCenterRequest
    } = ([__temp, __restore] = withAsyncContext(() => useMeetingCenterApi.getAll()), __temp = await __temp, __restore(), __temp);
    const {
      execute: MeetingCenterCreateRequest,
      status: MeetingCenterCreateStatus
    } = ([__temp, __restore] = withAsyncContext(() => useMeetingCenterApi.create()), __temp = await __temp, __restore(), __temp);
    const data = computed(() => {
      var _a;
      return (_a = MeetingCenterResponse.value) == null ? void 0 : _a.data;
    });
    const kidData = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.filter((item) => item.identity === "兒童");
    });
    const adultData = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.filter((item) => item.identity !== "兒童");
    });
    const districtOne = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.filter(
        (item) => item.districtName === "一區"
      );
    });
    const districtTwo = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.filter(
        (item) => item.districtName === "二區"
      );
    });
    const districtThree = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.filter(
        (item) => item.districtName === "三區"
      );
    });
    const districtFour = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.filter(
        (item) => item.districtName === "四區"
      );
    });
    const tabs = [
      { label: "報名名單", slot: "join" },
      { label: "搭乘遊覽車", slot: "departure" },
      { label: "自行前往", slot: "selfGo" }
    ];
    const updateData = async () => {
      await MeetingCenterCreateRequest();
      await MeetingCenterRequest();
    };
    const GOSPEL_FRIEND_IDENTITIES = [
      "男介朋友",
      "女介朋友",
      "兒童"
      /* child */
    ];
    const isGospelFriend = (identity) => GOSPEL_FRIEND_IDENTITIES.includes(
      identity
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UTabs = __nuxt_component_0;
      const _component_UBadge = UBadge;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "sm",
        variant: "soft",
        loading: unref(MeetingCenterCreateStatus) === "pending",
        onClick: updateData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 更新數據 `);
          } else {
            return [
              createTextVNode(" 更新數據 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UTabs, {
        items: tabs,
        variant: "link",
        class: "gap-4 w-full",
        ui: { trigger: "flex-1" }
      }, {
        join: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div${_scopeId}>6/8 港湖集中主日 報名：${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.length)}位</div><div${_scopeId}>成人${ssrInterpolate((_b = unref(adultData)) == null ? void 0 : _b.length)}位,兒童${ssrInterpolate((_c = unref(kidData)) == null ? void 0 : _c.length)}位</div><p class="text-sm text-red-600"${_scopeId}> 請於5/27日前<br${_scopeId}>協助調查是否搭乘遊覽車～謝謝 </p><p${_scopeId}>一區</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(districtOne), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: isGospelFriend(item.identity) ? "success" : "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}${ssrInterpolate(isGospelFriend(item.identity) ? "(福音朋友)" : "")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriend(item.identity) ? "(福音朋友)" : ""), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>二區</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(districtTwo), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: isGospelFriend(item.identity) ? "success" : "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}${ssrInterpolate(isGospelFriend(item.identity) ? "(福音朋友)" : "")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriend(item.identity) ? "(福音朋友)" : ""), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>三區</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(districtThree), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: isGospelFriend(item.identity) ? "success" : "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}${ssrInterpolate(isGospelFriend(item.identity) ? "(福音朋友)" : "")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriend(item.identity) ? "(福音朋友)" : ""), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>四區</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(districtFour), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: isGospelFriend(item.identity) ? "success" : "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}${ssrInterpolate(isGospelFriend(item.identity) ? "(福音朋友)" : "")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriend(item.identity) ? "(福音朋友)" : ""), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", null, "6/8 港湖集中主日 報名：" + toDisplayString((_d = unref(data)) == null ? void 0 : _d.length) + "位", 1),
              createVNode("div", null, "成人" + toDisplayString((_e = unref(adultData)) == null ? void 0 : _e.length) + "位,兒童" + toDisplayString((_f = unref(kidData)) == null ? void 0 : _f.length) + "位", 1),
              createVNode("p", { class: "text-sm text-red-600" }, [
                createTextVNode(" 請於5/27日前"),
                createVNode("br"),
                createTextVNode("協助調查是否搭乘遊覽車～謝謝 ")
              ]),
              createVNode("p", null, "一區"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(districtOne), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: isGospelFriend(item.identity) ? "success" : "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriend(item.identity) ? "(福音朋友)" : ""), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128))
              ]),
              createVNode("p", null, "二區"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(districtTwo), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: isGospelFriend(item.identity) ? "success" : "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriend(item.identity) ? "(福音朋友)" : ""), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128))
              ]),
              createVNode("p", null, "三區"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(districtThree), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: isGospelFriend(item.identity) ? "success" : "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriend(item.identity) ? "(福音朋友)" : ""), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128))
              ]),
              createVNode("p", null, "四區"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(districtFour), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: isGospelFriend(item.identity) ? "success" : "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriend(item.identity) ? "(福音朋友)" : ""), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128))
              ])
            ];
          }
        }),
        departure: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div${_scopeId}><p${_scopeId}>6/8 港湖集中主日 要搭遊覽車人位</p><p class="font-bold"${_scopeId}> 搭乘去程遊覽車(東湖-&gt;信基) </p><p${_scopeId}>一區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_a = unref(districtOne)) == null ? void 0 : _a.filter((item) => item.departure === "搭乘去程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>二區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_b = unref(districtTwo)) == null ? void 0 : _b.filter((item) => item.departure === "搭乘去程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>三區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_c = unref(districtThree)) == null ? void 0 : _c.filter((item) => item.departure === "搭乘去程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>四區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_d = unref(districtFour)) == null ? void 0 : _d.filter((item) => item.departure === "搭乘去程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><p class="font-bold"${_scopeId}> 搭乘回程遊覽車(信基-&gt;東湖) </p><p${_scopeId}>一區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_e = unref(districtOne)) == null ? void 0 : _e.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>二區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_f = unref(districtTwo)) == null ? void 0 : _f.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>三區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_g = unref(districtThree)) == null ? void 0 : _g.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>四區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_h = unref(districtFour)) == null ? void 0 : _h.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", null, "6/8 港湖集中主日 要搭遊覽車人位"),
                createVNode("p", { class: "font-bold" }, " 搭乘去程遊覽車(東湖->信基) "),
                createVNode("p", null, "一區:"),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_i = unref(districtOne)) == null ? void 0 : _i.filter((item) => item.departure === "搭乘去程"), (item, index) => {
                    return openBlock(), createBlock(_component_UBadge, {
                      key: index,
                      color: "info",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                createVNode("p", null, "二區:"),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_j = unref(districtTwo)) == null ? void 0 : _j.filter((item) => item.departure === "搭乘去程"), (item, index) => {
                    return openBlock(), createBlock(_component_UBadge, {
                      key: index,
                      color: "info",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                createVNode("p", null, "三區:"),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_k = unref(districtThree)) == null ? void 0 : _k.filter((item) => item.departure === "搭乘去程"), (item, index) => {
                    return openBlock(), createBlock(_component_UBadge, {
                      key: index,
                      color: "info",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                createVNode("p", null, "四區:"),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_l = unref(districtFour)) == null ? void 0 : _l.filter((item) => item.departure === "搭乘去程"), (item, index) => {
                    return openBlock(), createBlock(_component_UBadge, {
                      key: index,
                      color: "info",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ])
              ]),
              createVNode("p", { class: "font-bold" }, " 搭乘回程遊覽車(信基->東湖) "),
              createVNode("p", null, "一區:"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_m = unref(districtOne)) == null ? void 0 : _m.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createVNode("p", null, "二區:"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_n = unref(districtTwo)) == null ? void 0 : _n.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createVNode("p", null, "三區:"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_o = unref(districtThree)) == null ? void 0 : _o.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createVNode("p", null, "四區:"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_p = unref(districtFour)) == null ? void 0 : _p.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        selfGo: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<p${_scopeId}>自行前往(早):</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_a = unref(data)) == null ? void 0 : _a.filter((item) => item.departure === "自行前往"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p${_scopeId}>不搭回程(午):</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_b = unref(data)) == null ? void 0 : _b.filter((item) => item.returnRide === "不搭回程"), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("p", null, "自行前往(早):"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_c = unref(data)) == null ? void 0 : _c.filter((item) => item.departure === "自行前往"), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createVNode("p", null, "不搭回程(午):"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_d = unref(data)) == null ? void 0 : _d.filter((item) => item.returnRide === "不搭回程"), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/meetingCenter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=meetingCenter.vue.mjs.map
