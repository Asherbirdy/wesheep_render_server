import { m as UserRequestUrl, o as useNuxtData, k as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_0 } from './Tabs.vue.mjs';
import { U as UBadge } from './Badge.vue.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { R as Role } from './RoleEnum.mjs';
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
      data: UserInfoResponse
    } = useNuxtData(UserRequestUrl.UserShowMe);
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
    const isGospelFriendString = (identity) => {
      if (identity === "兒童") {
        return "(兒童)";
      }
      if (identity === "男介朋友" || identity === "女介朋友") {
        return "(福音朋友)";
      }
      return "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UButton = __nuxt_component_2;
      const _component_UTabs = __nuxt_component_0;
      const _component_UBadge = UBadge;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "sm",
        variant: "soft",
        loading: unref(MeetingCenterCreateStatus) === "pending",
        disabled: !(((_a = unref(UserInfoResponse)) == null ? void 0 : _a.user.role) === unref(Role).admin || ((_b = unref(UserInfoResponse)) == null ? void 0 : _b.user.role) === unref(Role).dev),
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
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(`<div${_scopeId}>6/8 港湖集中主日 報名：${ssrInterpolate((_a2 = unref(data)) == null ? void 0 : _a2.length)}位，其中兒童有${ssrInterpolate((_b2 = unref(kidData)) == null ? void 0 : _b2.length)}位</div><p${_scopeId}>一區</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(districtOne), (item, index) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: index,
                color: isGospelFriend(item.identity) ? "success" : "info",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}${ssrInterpolate(isGospelFriendString(item.identity))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriendString(item.identity)), 1)
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
                    _push3(`${ssrInterpolate(item.name)}${ssrInterpolate(isGospelFriendString(item.identity))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriendString(item.identity)), 1)
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
                    _push3(`${ssrInterpolate(item.name)}${ssrInterpolate(isGospelFriendString(item.identity))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriendString(item.identity)), 1)
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
                    _push3(`${ssrInterpolate(item.name)}${ssrInterpolate(isGospelFriendString(item.identity))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriendString(item.identity)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", null, "6/8 港湖集中主日 報名：" + toDisplayString((_c = unref(data)) == null ? void 0 : _c.length) + "位，其中兒童有" + toDisplayString((_d = unref(kidData)) == null ? void 0 : _d.length) + "位", 1),
              createVNode("p", null, "一區"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(districtOne), (item, index) => {
                  return openBlock(), createBlock(_component_UBadge, {
                    key: index,
                    color: isGospelFriend(item.identity) ? "success" : "info",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriendString(item.identity)), 1)
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
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriendString(item.identity)), 1)
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
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriendString(item.identity)), 1)
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
                      createTextVNode(toDisplayString(item.name) + toDisplayString(isGospelFriendString(item.identity)), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 128))
              ])
            ];
          }
        }),
        departure: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
          if (_push2) {
            _push2(`<div${_scopeId}><p${_scopeId}>6/8 港湖集中主日 要搭遊覽車人位</p><p class="font-bold"${_scopeId}> 搭乘去程遊覽車(東湖-&gt;信基)(${ssrInterpolate((_a2 = unref(data)) == null ? void 0 : _a2.filter((item) => item.departure === "搭乘去程").length)}人) </p><p${_scopeId}>一區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_b2 = unref(districtOne)) == null ? void 0 : _b2.filter((item) => item.departure === "搭乘去程"), (item, index) => {
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
            ssrRenderList((_c = unref(districtTwo)) == null ? void 0 : _c.filter((item) => item.departure === "搭乘去程"), (item, index) => {
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
            ssrRenderList((_d = unref(districtThree)) == null ? void 0 : _d.filter((item) => item.departure === "搭乘去程"), (item, index) => {
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
            ssrRenderList((_e = unref(districtFour)) == null ? void 0 : _e.filter((item) => item.departure === "搭乘去程"), (item, index) => {
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
            _push2(`<!--]--></div></div><p class="font-bold"${_scopeId}> 搭乘回程遊覽車(信基-&gt;東湖)(${ssrInterpolate((_f = unref(data)) == null ? void 0 : _f.filter((item) => item.returnRide === "搭乘回程").length)}人) </p><p${_scopeId}>一區:</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_g = unref(districtOne)) == null ? void 0 : _g.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
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
            ssrRenderList((_h = unref(districtTwo)) == null ? void 0 : _h.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
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
            ssrRenderList((_i = unref(districtThree)) == null ? void 0 : _i.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
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
            ssrRenderList((_j = unref(districtFour)) == null ? void 0 : _j.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
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
                createVNode("p", { class: "font-bold" }, " 搭乘去程遊覽車(東湖->信基)(" + toDisplayString((_k = unref(data)) == null ? void 0 : _k.filter((item) => item.departure === "搭乘去程").length) + "人) ", 1),
                createVNode("p", null, "一區:"),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_l = unref(districtOne)) == null ? void 0 : _l.filter((item) => item.departure === "搭乘去程"), (item, index) => {
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
                  (openBlock(true), createBlock(Fragment, null, renderList((_m = unref(districtTwo)) == null ? void 0 : _m.filter((item) => item.departure === "搭乘去程"), (item, index) => {
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
                  (openBlock(true), createBlock(Fragment, null, renderList((_n = unref(districtThree)) == null ? void 0 : _n.filter((item) => item.departure === "搭乘去程"), (item, index) => {
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
                  (openBlock(true), createBlock(Fragment, null, renderList((_o = unref(districtFour)) == null ? void 0 : _o.filter((item) => item.departure === "搭乘去程"), (item, index) => {
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
              createVNode("p", { class: "font-bold" }, " 搭乘回程遊覽車(信基->東湖)(" + toDisplayString((_p = unref(data)) == null ? void 0 : _p.filter((item) => item.returnRide === "搭乘回程").length) + "人) ", 1),
              createVNode("p", null, "一區:"),
              createVNode("div", { class: "flex flex-wrap gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_q = unref(districtOne)) == null ? void 0 : _q.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
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
                (openBlock(true), createBlock(Fragment, null, renderList((_r = unref(districtTwo)) == null ? void 0 : _r.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
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
                (openBlock(true), createBlock(Fragment, null, renderList((_s = unref(districtThree)) == null ? void 0 : _s.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
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
                (openBlock(true), createBlock(Fragment, null, renderList((_t = unref(districtFour)) == null ? void 0 : _t.filter((item) => item.returnRide === "搭乘回程"), (item, index) => {
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
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(`<p${_scopeId}>自行前往(早):</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList((_a2 = unref(data)) == null ? void 0 : _a2.filter((item) => item.departure === "自行前往"), (item, index) => {
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
            ssrRenderList((_b2 = unref(data)) == null ? void 0 : _b2.filter((item) => item.returnRide === "不搭回程"), (item, index) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/googleSheet/meetingCenter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=meetingCenter.vue.mjs.map
