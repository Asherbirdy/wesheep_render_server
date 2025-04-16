import { defineComponent, withAsyncContext, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useRequestApi } from './useRequestApi.mjs';
import { U as UserRequestUrl } from './server.mjs';
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>2025blem</h1><pre>${ssrInterpolate(unref(data))}</pre></div>`);
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
