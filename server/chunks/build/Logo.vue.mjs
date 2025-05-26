import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _imports_0 = publicAssetsURL("/maskable-icon.png");

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: _imports_0,
    alt: "logo",
    class: "w-7 h-7 m-3 rounded"
  }, _attrs))}>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Logo as L };
//# sourceMappingURL=Logo.vue.mjs.map
