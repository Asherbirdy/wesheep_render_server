import { _ as __nuxt_component_4 } from './Card.vue.mjs';
import { U as UBadge } from './Badge.vue.mjs';
import { defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toRefs, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { m as UserRequestUrl, n as useNuxtApp, o as useNuxtData, k as __nuxt_component_2, U as UIcon, p as refreshNuxtData } from './server.mjs';
import { u as useRequestApi } from './useRequestApi.mjs';
import { _ as __nuxt_component_5 } from './Modal.vue.mjs';
import { a as __nuxt_component_0, b as __nuxt_component_1, _ as __nuxt_component_2$1 } from './Input.vue.mjs';
import { _ as __nuxt_component_5$1 } from './Select.vue.mjs';
import { R as Role, r as roleOptions } from './RoleEnum.mjs';
import 'reka-ui';
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
      const _component_UModal = __nuxt_component_5;
      const _component_UForm = __nuxt_component_0;
      const _component_UFormField = __nuxt_component_1;
      const _component_USelect = __nuxt_component_5$1;
      const _component_UInput = __nuxt_component_2$1;
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
      const _component_UModal = __nuxt_component_5;
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
