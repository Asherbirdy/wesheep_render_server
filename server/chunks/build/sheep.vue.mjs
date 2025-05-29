import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { m as UserRequestUrl } from './server.mjs';
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

const useSheepApi = {
  list: async () => {
    return await useRequestApi(UserRequestUrl.SheepList, {
      method: "GET",
      server: false
    });
  },
  create: async (payload) => {
    return await useRequestApi(UserRequestUrl.SheepCreate, {
      method: "POST",
      server: false,
      body: payload,
      immediate: false,
      watch: false,
      lazy: true
    });
  },
  edit: async (payload) => {
    return await useRequestApi(UserRequestUrl.SheepEdit, {
      method: "POST",
      server: false,
      body: payload,
      immediate: false,
      watch: false,
      lazy: true
    });
  },
  delete: async (payload) => {
    return await useRequestApi(UserRequestUrl.SheepDelete, {
      method: "DELETE",
      server: false,
      body: payload,
      immediate: false,
      watch: false,
      lazy: true
    });
  }
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sheep",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useSheepApi.list()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><pre>${ssrInterpolate(unref(data))}</pre></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/homeMeeting/sheep.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sheep.vue.mjs.map
