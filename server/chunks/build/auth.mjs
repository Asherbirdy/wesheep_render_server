import { q as executeAsync } from '../nitro/nitro.mjs';
import { J as defineNuxtRouteMiddleware, K as clearNuxtData, L as clearNuxtState, v as navigateTo, P as PublicRoutes } from './server.mjs';
import { u as useUserApi } from './useUserApi.mjs';
import { u as useUserStore } from './useUserStore.mjs';
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
import 'vue';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'vue/server-renderer';
import 'devalue';
import '@iconify/vue';
import 'reka-ui';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import './useRequestApi.mjs';
import './RoleEnum.mjs';

const auth = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const { setUserInfo } = useUserStore();
  const { data, error } = ([__temp, __restore] = executeAsync(() => useUserApi.showMe()), __temp = await __temp, __restore(), __temp);
  if (error.value) {
    clearNuxtData();
    clearNuxtState();
    return navigateTo(PublicRoutes.Login);
  }
  if (data.value && !error.value) {
    setUserInfo(data.value.user);
  }
});

export { auth as default };
//# sourceMappingURL=auth.mjs.map
