import { P as PublicRoutes, _ as __nuxt_component_0, k as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_1 } from './DropdownMenu.vue.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { L as Logo } from './Logo.vue.mjs';
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
import 'reka-ui/namespaced';
import './index.mjs';
import './_plugin-vue_export-helper.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const routes = [
      // {
      //   label: '表單教學',
      //   to: PublicRoutes.News,
      // },
      {
        label: "登入",
        to: PublicRoutes.Login
      }
    ];
    const items = ref([
      [
        {
          label: "Benjamin",
          avatar: {
            src: "https://github.com/benjamincanac.png"
          },
          type: "label"
        }
      ],
      [
        {
          label: "Profile",
          icon: "i-lucide-user",
          to: PublicRoutes.Login
        },
        {
          label: "Billing",
          icon: "i-lucide-credit-card",
          to: PublicRoutes.Login
        },
        {
          label: "Settings",
          icon: "i-lucide-cog",
          kbds: [","],
          to: PublicRoutes.Login
        },
        {
          label: "Keyboard shortcuts",
          icon: "i-lucide-monitor",
          to: PublicRoutes.Login
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UDropdownMenu = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}><header class="flex justify-between items-center">`);
      _push(ssrRenderComponent(unref(Logo), null, null, _parent));
      _push(`<div class="hidden md:block"><nav class="flex space-x-4"><!--[-->`);
      ssrRenderList(routes, (route) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: route.to,
          to: route.to,
          class: "text-gray-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(route.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(route.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div class="md:hidden">`);
      _push(ssrRenderComponent(_component_UDropdownMenu, {
        items: unref(items),
        ui: {
          content: "w-48"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-menu",
              variant: "ghost"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-lucide-menu",
                variant: "ghost"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><main class="flex-grow mx-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-gray-100 p-4 mt-16"><div class="text-center"> Footer </div></footer></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
