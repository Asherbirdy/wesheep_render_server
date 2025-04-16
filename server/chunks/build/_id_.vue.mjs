import { defineComponent, ref, withAsyncContext, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { EditorContent } from '@tiptap/vue-3';
import { TextHeader124Filled, TextHeader220Filled, TextHeader324Filled, TextParagraph16Filled, TextBold24Filled, TextItalic24Filled, TextStrikethrough24Filled, Code24Filled, TextQuote20Filled, TextBulletListLtr16Filled, TextNumberListLtr16Filled, TextAlignLeft16Filled, TextAlignJustify20Filled, TextAlignRight16Filled, ArrowUndo16Filled, ArrowRedo16Filled } from '@vicons/fluent';
import { u as useLandingPageApi } from './useLandingPageApi.mjs';
import { g as useRoute } from './server.mjs';
import './useRequestApi.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const editor = ref();
    const state = ref({
      data: {
        title: "",
        description: "",
        isCustom: false,
        isCustomId: "",
        isActive: false,
        updatedBy: "",
        lastEditVisited: "",
        html: ""
      }
    });
    const {
      data: landingPageResponse,
      refresh: landingPageRequset
    } = ([__temp, __restore] = withAsyncContext(() => useLandingPageApi.getInfoById({
      query: {
        landingPageId: route.params.id
      },
      ssr: false
    })), __temp = await __temp, __restore(), __temp);
    const {
      execute: EditRequest,
      status: EditStatus
    } = ([__temp, __restore] = withAsyncContext(() => useLandingPageApi.editInfoById({
      query: {
        landingPageId: route.params.id
      },
      body: state.value.data
    })), __temp = await __temp, __restore(), __temp);
    const feature = [
      {
        type: "feature",
        icon: TextHeader124Filled,
        title: "H1",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleHeading({ level: 1 }).run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("heading", { level: 1 });
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextHeader220Filled,
        title: "H2",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleHeading({ level: 2 }).run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("heading", { level: 2 });
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextHeader324Filled,
        title: "H3",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleHeading({ level: 3 }).run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("heading", { level: 3 });
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextParagraph16Filled,
        title: "paragraph",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().setParagraph().run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("paragraph");
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextBold24Filled,
        title: "Bold",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleBold().run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("bold");
        },
        isDisabled: () => {
          var _a;
          return !((_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.can().chain().focus().toggleBold().run());
        }
      },
      {
        type: "feature",
        icon: TextItalic24Filled,
        title: "Italic",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleItalic().run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("italic");
        },
        isDisabled: () => {
          var _a;
          return !((_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.can().chain().focus().toggleItalic().run());
        }
      },
      {
        type: "feature",
        icon: TextStrikethrough24Filled,
        title: "Strike",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleStrike().run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("strike");
        },
        isDisabled: () => {
          var _a;
          return !((_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.can().chain().focus().toggleStrike().run());
        }
      },
      {
        type: "feature",
        icon: Code24Filled,
        title: "Code",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleCode().run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("code");
        },
        isDisabled: () => {
          var _a;
          return !((_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.can().chain().focus().toggleCode().run());
        }
      },
      {
        type: "feature",
        icon: TextQuote20Filled,
        title: "Blockquote",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleBlockquote().run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("blockquote");
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextBulletListLtr16Filled,
        title: "Bullet List",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleBulletList().run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("bulletList");
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextNumberListLtr16Filled,
        title: "orderedList",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().toggleOrderedList().run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive("orderedList");
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextAlignLeft16Filled,
        title: "setTextAlignLeft",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().setTextAlign("left").run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive({ textAlign: "left" });
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextAlignJustify20Filled,
        title: "setTextAlignCenter",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().setTextAlign("center").run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive({ textAlign: "center" });
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: TextAlignRight16Filled,
        title: "setTextAlignRight",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().setTextAlign("right").run();
        },
        isActive: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.isActive({ textAlign: "right" });
        },
        isDisabled: () => false
      },
      {
        type: "feature",
        icon: ArrowUndo16Filled,
        title: "undo",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().undo().run();
        },
        isActive: () => false,
        isDisabled: () => {
          var _a;
          return !((_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.can().chain().focus().undo().run());
        }
      },
      {
        type: "feature",
        icon: ArrowRedo16Filled,
        title: "redo",
        action: () => {
          var _a;
          return (_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.chain().focus().redo().run();
        },
        isActive: () => false,
        isDisabled: () => {
          var _a;
          return !((_a = editor == null ? void 0 : editor.value) == null ? void 0 : _a.can().chain().focus().redo().run());
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)}><p>Title: ${ssrInterpolate((_b = (_a = unref(landingPageResponse)) == null ? void 0 : _a.landingPage) == null ? void 0 : _b.title)}</p><div class="flex flex-wrap gap-[5px] p-[10px] bg-black rounded-t-md"><!--[-->`);
      ssrRenderList(feature, (button) => {
        _push(`<button${ssrIncludeBooleanAttr(button.isDisabled()) ? " disabled" : ""}${ssrRenderAttr("title", button.title)} class="${ssrRenderClass([[
          button.isActive() && "bg-[rgba(103,103,103,0.899)]",
          button.isDisabled() && "cursor-not-allowed opacity-50"
        ], "bg-black text-white flex items-center justify-center cursor-pointer"])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(button.icon), { class: "w-4 h-4" }, null), _parent);
        _push(`</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent));
      _push(`<button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"${ssrRenderAttr("loading", unref(EditStatus) === "pending")}> 保存 </button><div class="mt-2 text-sm text-gray-300 whitespace-pre-wrap">${ssrInterpolate(unref(state).data.html)}</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/landingPage/editor/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.vue.mjs.map
