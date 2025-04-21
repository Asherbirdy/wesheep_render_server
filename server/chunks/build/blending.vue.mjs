import { U as UBadge } from './Badge.vue.mjs';
import { defineComponent, withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRequestApi } from './useRequestApi.mjs';
import { U as UserRequestUrl } from './server.mjs';
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
      lazy: true
    });
  }
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blending",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: blendingData } = ([__temp, __restore] = withAsyncContext(() => useBlendingApi.get()), __temp = await __temp, __restore(), __temp);
    const data = computed(() => {
      var _a;
      return (_a = blendingData.value) == null ? void 0 : _a.response.filter((item) => item.name !== "");
    });
    const filterAgeRange = (ageRange) => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.filter((item) => item.ageRange === ageRange).map((item) => item.name)) || [];
    };
    const filterList = computed(() => [
      {
        title: "年長報名",
        data: filterAgeRange(
          "年長"
          /* Elder */
        )
      },
      {
        title: "壯年報名",
        data: filterAgeRange(
          "壯年"
          /* Middle */
        )
      },
      {
        title: "青職報名",
        data: filterAgeRange(
          "青職"
          /* Young */
        )
      },
      {
        title: "大學報名",
        data: filterAgeRange(
          "大學"
          /* College */
        )
      },
      {
        title: "青少年報名",
        data: filterAgeRange(
          "青少年"
          /* Teen */
        )
      },
      {
        title: "兒童報名",
        data: filterAgeRange(
          "兒童"
          /* Child */
        )
      },
      {
        title: "六歲以下報名",
        data: filterAgeRange(
          "六歲以下"
          /* SixYearOld */
        )
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UBadge = UBadge;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>2025年 全會所戶外相調</h1><p class="mb-4"> 報名人數${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.length)}</p><!--[-->`);
      ssrRenderList(unref(filterList), (item) => {
        _push(`<div class="mb-4"><p>${ssrInterpolate(item.title)} (${ssrInterpolate(item.data.length)}位):</p><div class="flex gap-2"><!--[-->`);
        ssrRenderList(item.data, (name) => {
          _push(ssrRenderComponent(_component_UBadge, {
            key: name,
            color: "info",
            variant: "soft"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
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
