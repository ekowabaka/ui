(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fzui"] = factory();
	else
		root["fzui"] = factory();
})(Object(typeof self !== "undefined" ? self : this), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 703
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host{display:inline-block;vertical-align:middle;box-sizing:border-box}.avatar,.fz-avatar{box-sizing:border-box;height:auto;padding:7px 15px;display:inline-grid;grid-template-columns:64px auto;grid-template-rows:38px 26px;justify-items:start;text-align:left;row-gap:0;width:max-content}.avatar slot[name=image],.avatar .avatar__image,.fz-avatar slot[name=image],.fz-avatar .avatar__image{display:block;width:64px;height:64px;min-width:64px;max-width:64px;min-height:64px;max-height:64px;border-radius:50%;grid-row:1/3;grid-column:1;margin-bottom:0;overflow:hidden}.avatar slot[name=image]::slotted(*),.avatar .avatar__image::slotted(*),.fz-avatar slot[name=image]::slotted(*),.fz-avatar .avatar__image::slotted(*){display:block;width:64px !important;height:64px !important;min-width:64px !important;max-width:64px !important;min-height:64px !important;max-height:64px !important;object-fit:cover;border-radius:50%;grid-row:1/3;grid-column:1}.avatar slot[name=name],.avatar .avatar__name,.fz-avatar slot[name=name],.fz-avatar .avatar__name{grid-row:1;grid-column:2;align-self:end;font-size:1.2em;font-weight:bold}.avatar slot[name=name]::slotted(*),.avatar .avatar__name::slotted(*),.fz-avatar slot[name=name]::slotted(*),.fz-avatar .avatar__name::slotted(*){margin-left:10px;margin-top:10px;display:block;vertical-align:bottom;text-align:left}.avatar slot[name=subname],.avatar .avatar__subname,.fz-avatar slot[name=subname],.fz-avatar .avatar__subname{display:block;grid-row:2;grid-column:2;align-self:start;font-size:.9em;color:#666}.avatar slot[name=subname]::slotted(*),.avatar .avatar__subname::slotted(*),.fz-avatar slot[name=subname]::slotted(*),.fz-avatar .avatar__subname::slotted(*){display:block;margin-left:10px;line-height:24px;text-align:left}.avatar--mini,.avatar.mini,.avatar[mini],.avatar[size=mini],.fz-avatar--mini,.fz-avatar.mini,.fz-avatar[mini],.fz-avatar[size=mini]{height:auto;padding:3px 6px;display:inline-grid;grid-template-columns:24px auto;grid-template-rows:24px;align-items:center;justify-items:start;text-align:left;row-gap:0;width:max-content}.avatar--mini slot[name=image],.avatar--mini .avatar__image,.avatar.mini slot[name=image],.avatar.mini .avatar__image,.avatar[mini] slot[name=image],.avatar[mini] .avatar__image,.avatar[size=mini] slot[name=image],.avatar[size=mini] .avatar__image,.fz-avatar--mini slot[name=image],.fz-avatar--mini .avatar__image,.fz-avatar.mini slot[name=image],.fz-avatar.mini .avatar__image,.fz-avatar[mini] slot[name=image],.fz-avatar[mini] .avatar__image,.fz-avatar[size=mini] slot[name=image],.fz-avatar[size=mini] .avatar__image{display:block;width:24px;height:24px;min-width:24px;max-width:24px;min-height:24px;max-height:24px;border-radius:50%;grid-row:1;grid-column:1;margin-bottom:0;overflow:hidden}.avatar--mini slot[name=image]::slotted(*),.avatar--mini .avatar__image::slotted(*),.avatar.mini slot[name=image]::slotted(*),.avatar.mini .avatar__image::slotted(*),.avatar[mini] slot[name=image]::slotted(*),.avatar[mini] .avatar__image::slotted(*),.avatar[size=mini] slot[name=image]::slotted(*),.avatar[size=mini] .avatar__image::slotted(*),.fz-avatar--mini slot[name=image]::slotted(*),.fz-avatar--mini .avatar__image::slotted(*),.fz-avatar.mini slot[name=image]::slotted(*),.fz-avatar.mini .avatar__image::slotted(*),.fz-avatar[mini] slot[name=image]::slotted(*),.fz-avatar[mini] .avatar__image::slotted(*),.fz-avatar[size=mini] slot[name=image]::slotted(*),.fz-avatar[size=mini] .avatar__image::slotted(*){display:block;width:24px !important;height:24px !important;min-width:24px !important;max-width:24px !important;min-height:24px !important;max-height:24px !important;object-fit:cover;border-radius:50%;grid-row:1;grid-column:1}.avatar--mini slot[name=name],.avatar--mini .avatar__name,.avatar.mini slot[name=name],.avatar.mini .avatar__name,.avatar[mini] slot[name=name],.avatar[mini] .avatar__name,.avatar[size=mini] slot[name=name],.avatar[size=mini] .avatar__name,.fz-avatar--mini slot[name=name],.fz-avatar--mini .avatar__name,.fz-avatar.mini slot[name=name],.fz-avatar.mini .avatar__name,.fz-avatar[mini] slot[name=name],.fz-avatar[mini] .avatar__name,.fz-avatar[size=mini] slot[name=name],.fz-avatar[size=mini] .avatar__name{display:flex;align-items:center;grid-row:1;grid-column:2;align-self:center;height:100%;font-size:.85em;font-weight:bold;line-height:1}.avatar--mini slot[name=name]::slotted(*),.avatar--mini .avatar__name::slotted(*),.avatar.mini slot[name=name]::slotted(*),.avatar.mini .avatar__name::slotted(*),.avatar[mini] slot[name=name]::slotted(*),.avatar[mini] .avatar__name::slotted(*),.avatar[size=mini] slot[name=name]::slotted(*),.avatar[size=mini] .avatar__name::slotted(*),.fz-avatar--mini slot[name=name]::slotted(*),.fz-avatar--mini .avatar__name::slotted(*),.fz-avatar.mini slot[name=name]::slotted(*),.fz-avatar.mini .avatar__name::slotted(*),.fz-avatar[mini] slot[name=name]::slotted(*),.fz-avatar[mini] .avatar__name::slotted(*),.fz-avatar[size=mini] slot[name=name]::slotted(*),.fz-avatar[size=mini] .avatar__name::slotted(*){margin:0 0 0 8px;display:inline-flex;align-items:center;vertical-align:middle;text-align:left;line-height:normal}.avatar--mini slot[name=subname],.avatar--mini .avatar__subname,.avatar.mini slot[name=subname],.avatar.mini .avatar__subname,.avatar[mini] slot[name=subname],.avatar[mini] .avatar__subname,.avatar[size=mini] slot[name=subname],.avatar[size=mini] .avatar__subname,.fz-avatar--mini slot[name=subname],.fz-avatar--mini .avatar__subname,.fz-avatar.mini slot[name=subname],.fz-avatar.mini .avatar__subname,.fz-avatar[mini] slot[name=subname],.fz-avatar[mini] .avatar__subname,.fz-avatar[size=mini] slot[name=subname],.fz-avatar[size=mini] .avatar__subname{display:none !important}.avatar--mini slot[name=subname]::slotted(*),.avatar--mini .avatar__subname::slotted(*),.avatar.mini slot[name=subname]::slotted(*),.avatar.mini .avatar__subname::slotted(*),.avatar[mini] slot[name=subname]::slotted(*),.avatar[mini] .avatar__subname::slotted(*),.avatar[size=mini] slot[name=subname]::slotted(*),.avatar[size=mini] .avatar__subname::slotted(*),.fz-avatar--mini slot[name=subname]::slotted(*),.fz-avatar--mini .avatar__subname::slotted(*),.fz-avatar.mini slot[name=subname]::slotted(*),.fz-avatar.mini .avatar__subname::slotted(*),.fz-avatar[mini] slot[name=subname]::slotted(*),.fz-avatar[mini] .avatar__subname::slotted(*),.fz-avatar[size=mini] slot[name=subname]::slotted(*),.fz-avatar[size=mini] .avatar__subname::slotted(*){display:none !important}.avatar--small,.avatar.small,.avatar[small],.avatar[size=small],.fz-avatar--small,.fz-avatar.small,.fz-avatar[small],.fz-avatar[size=small]{height:auto;padding:5px 12px;display:inline-grid;grid-template-columns:40px auto;grid-template-rows:40px;align-items:center;justify-items:start;text-align:left;row-gap:0;width:max-content}.avatar--small slot[name=image],.avatar--small .avatar__image,.avatar.small slot[name=image],.avatar.small .avatar__image,.avatar[small] slot[name=image],.avatar[small] .avatar__image,.avatar[size=small] slot[name=image],.avatar[size=small] .avatar__image,.fz-avatar--small slot[name=image],.fz-avatar--small .avatar__image,.fz-avatar.small slot[name=image],.fz-avatar.small .avatar__image,.fz-avatar[small] slot[name=image],.fz-avatar[small] .avatar__image,.fz-avatar[size=small] slot[name=image],.fz-avatar[size=small] .avatar__image{display:block;width:40px;height:40px;min-width:40px;max-width:40px;min-height:40px;max-height:40px;border-radius:50%;grid-row:1;grid-column:1;margin-bottom:0;overflow:hidden}.avatar--small slot[name=image]::slotted(*),.avatar--small .avatar__image::slotted(*),.avatar.small slot[name=image]::slotted(*),.avatar.small .avatar__image::slotted(*),.avatar[small] slot[name=image]::slotted(*),.avatar[small] .avatar__image::slotted(*),.avatar[size=small] slot[name=image]::slotted(*),.avatar[size=small] .avatar__image::slotted(*),.fz-avatar--small slot[name=image]::slotted(*),.fz-avatar--small .avatar__image::slotted(*),.fz-avatar.small slot[name=image]::slotted(*),.fz-avatar.small .avatar__image::slotted(*),.fz-avatar[small] slot[name=image]::slotted(*),.fz-avatar[small] .avatar__image::slotted(*),.fz-avatar[size=small] slot[name=image]::slotted(*),.fz-avatar[size=small] .avatar__image::slotted(*){display:block;width:40px !important;height:40px !important;min-width:40px !important;max-width:40px !important;min-height:40px !important;max-height:40px !important;object-fit:cover;border-radius:50%;grid-row:1;grid-column:1}.avatar--small slot[name=name],.avatar--small .avatar__name,.avatar.small slot[name=name],.avatar.small .avatar__name,.avatar[small] slot[name=name],.avatar[small] .avatar__name,.avatar[size=small] slot[name=name],.avatar[size=small] .avatar__name,.fz-avatar--small slot[name=name],.fz-avatar--small .avatar__name,.fz-avatar.small slot[name=name],.fz-avatar.small .avatar__name,.fz-avatar[small] slot[name=name],.fz-avatar[small] .avatar__name,.fz-avatar[size=small] slot[name=name],.fz-avatar[size=small] .avatar__name{display:flex;align-items:center;grid-row:1;grid-column:2;align-self:center;height:100%;font-size:1em;font-weight:bold;line-height:1}.avatar--small slot[name=name]::slotted(*),.avatar--small .avatar__name::slotted(*),.avatar.small slot[name=name]::slotted(*),.avatar.small .avatar__name::slotted(*),.avatar[small] slot[name=name]::slotted(*),.avatar[small] .avatar__name::slotted(*),.avatar[size=small] slot[name=name]::slotted(*),.avatar[size=small] .avatar__name::slotted(*),.fz-avatar--small slot[name=name]::slotted(*),.fz-avatar--small .avatar__name::slotted(*),.fz-avatar.small slot[name=name]::slotted(*),.fz-avatar.small .avatar__name::slotted(*),.fz-avatar[small] slot[name=name]::slotted(*),.fz-avatar[small] .avatar__name::slotted(*),.fz-avatar[size=small] slot[name=name]::slotted(*),.fz-avatar[size=small] .avatar__name::slotted(*){margin:0 0 0 10px;display:inline-flex;align-items:center;vertical-align:middle;text-align:left;line-height:normal}.avatar--small slot[name=subname],.avatar--small .avatar__subname,.avatar.small slot[name=subname],.avatar.small .avatar__subname,.avatar[small] slot[name=subname],.avatar[small] .avatar__subname,.avatar[size=small] slot[name=subname],.avatar[size=small] .avatar__subname,.fz-avatar--small slot[name=subname],.fz-avatar--small .avatar__subname,.fz-avatar.small slot[name=subname],.fz-avatar.small .avatar__subname,.fz-avatar[small] slot[name=subname],.fz-avatar[small] .avatar__subname,.fz-avatar[size=small] slot[name=subname],.fz-avatar[size=small] .avatar__subname{display:none !important}.avatar--small slot[name=subname]::slotted(*),.avatar--small .avatar__subname::slotted(*),.avatar.small slot[name=subname]::slotted(*),.avatar.small .avatar__subname::slotted(*),.avatar[small] slot[name=subname]::slotted(*),.avatar[small] .avatar__subname::slotted(*),.avatar[size=small] slot[name=subname]::slotted(*),.avatar[size=small] .avatar__subname::slotted(*),.fz-avatar--small slot[name=subname]::slotted(*),.fz-avatar--small .avatar__subname::slotted(*),.fz-avatar.small slot[name=subname]::slotted(*),.fz-avatar.small .avatar__subname::slotted(*),.fz-avatar[small] slot[name=subname]::slotted(*),.fz-avatar[small] .avatar__subname::slotted(*),.fz-avatar[size=small] slot[name=subname]::slotted(*),.fz-avatar[size=small] .avatar__subname::slotted(*){display:none !important}.avatar--default,.avatar.default,.avatar[default],.avatar[size=default],.avatar--normal,.avatar.normal,.avatar[normal],.avatar[size=normal],.fz-avatar--default,.fz-avatar.default,.fz-avatar[default],.fz-avatar[size=default],.fz-avatar--normal,.fz-avatar.normal,.fz-avatar[normal],.fz-avatar[size=normal]{height:auto;padding:7px 15px;display:inline-grid;grid-template-columns:64px auto;grid-template-rows:38px 26px;justify-items:start;text-align:left;row-gap:0;width:max-content}.avatar--default slot[name=image],.avatar--default .avatar__image,.avatar.default slot[name=image],.avatar.default .avatar__image,.avatar[default] slot[name=image],.avatar[default] .avatar__image,.avatar[size=default] slot[name=image],.avatar[size=default] .avatar__image,.avatar--normal slot[name=image],.avatar--normal .avatar__image,.avatar.normal slot[name=image],.avatar.normal .avatar__image,.avatar[normal] slot[name=image],.avatar[normal] .avatar__image,.avatar[size=normal] slot[name=image],.avatar[size=normal] .avatar__image,.fz-avatar--default slot[name=image],.fz-avatar--default .avatar__image,.fz-avatar.default slot[name=image],.fz-avatar.default .avatar__image,.fz-avatar[default] slot[name=image],.fz-avatar[default] .avatar__image,.fz-avatar[size=default] slot[name=image],.fz-avatar[size=default] .avatar__image,.fz-avatar--normal slot[name=image],.fz-avatar--normal .avatar__image,.fz-avatar.normal slot[name=image],.fz-avatar.normal .avatar__image,.fz-avatar[normal] slot[name=image],.fz-avatar[normal] .avatar__image,.fz-avatar[size=normal] slot[name=image],.fz-avatar[size=normal] .avatar__image{display:block;width:64px;height:64px;min-width:64px;max-width:64px;min-height:64px;max-height:64px;border-radius:50%;grid-row:1/3;grid-column:1;margin-bottom:0;overflow:hidden}.avatar--default slot[name=image]::slotted(*),.avatar--default .avatar__image::slotted(*),.avatar.default slot[name=image]::slotted(*),.avatar.default .avatar__image::slotted(*),.avatar[default] slot[name=image]::slotted(*),.avatar[default] .avatar__image::slotted(*),.avatar[size=default] slot[name=image]::slotted(*),.avatar[size=default] .avatar__image::slotted(*),.avatar--normal slot[name=image]::slotted(*),.avatar--normal .avatar__image::slotted(*),.avatar.normal slot[name=image]::slotted(*),.avatar.normal .avatar__image::slotted(*),.avatar[normal] slot[name=image]::slotted(*),.avatar[normal] .avatar__image::slotted(*),.avatar[size=normal] slot[name=image]::slotted(*),.avatar[size=normal] .avatar__image::slotted(*),.fz-avatar--default slot[name=image]::slotted(*),.fz-avatar--default .avatar__image::slotted(*),.fz-avatar.default slot[name=image]::slotted(*),.fz-avatar.default .avatar__image::slotted(*),.fz-avatar[default] slot[name=image]::slotted(*),.fz-avatar[default] .avatar__image::slotted(*),.fz-avatar[size=default] slot[name=image]::slotted(*),.fz-avatar[size=default] .avatar__image::slotted(*),.fz-avatar--normal slot[name=image]::slotted(*),.fz-avatar--normal .avatar__image::slotted(*),.fz-avatar.normal slot[name=image]::slotted(*),.fz-avatar.normal .avatar__image::slotted(*),.fz-avatar[normal] slot[name=image]::slotted(*),.fz-avatar[normal] .avatar__image::slotted(*),.fz-avatar[size=normal] slot[name=image]::slotted(*),.fz-avatar[size=normal] .avatar__image::slotted(*){display:block;width:64px !important;height:64px !important;min-width:64px !important;max-width:64px !important;min-height:64px !important;max-height:64px !important;object-fit:cover;border-radius:50%;grid-row:1/3;grid-column:1}.avatar--default slot[name=name],.avatar--default .avatar__name,.avatar.default slot[name=name],.avatar.default .avatar__name,.avatar[default] slot[name=name],.avatar[default] .avatar__name,.avatar[size=default] slot[name=name],.avatar[size=default] .avatar__name,.avatar--normal slot[name=name],.avatar--normal .avatar__name,.avatar.normal slot[name=name],.avatar.normal .avatar__name,.avatar[normal] slot[name=name],.avatar[normal] .avatar__name,.avatar[size=normal] slot[name=name],.avatar[size=normal] .avatar__name,.fz-avatar--default slot[name=name],.fz-avatar--default .avatar__name,.fz-avatar.default slot[name=name],.fz-avatar.default .avatar__name,.fz-avatar[default] slot[name=name],.fz-avatar[default] .avatar__name,.fz-avatar[size=default] slot[name=name],.fz-avatar[size=default] .avatar__name,.fz-avatar--normal slot[name=name],.fz-avatar--normal .avatar__name,.fz-avatar.normal slot[name=name],.fz-avatar.normal .avatar__name,.fz-avatar[normal] slot[name=name],.fz-avatar[normal] .avatar__name,.fz-avatar[size=normal] slot[name=name],.fz-avatar[size=normal] .avatar__name{grid-row:1;grid-column:2;align-self:end;font-size:1.2em;font-weight:bold}.avatar--default slot[name=name]::slotted(*),.avatar--default .avatar__name::slotted(*),.avatar.default slot[name=name]::slotted(*),.avatar.default .avatar__name::slotted(*),.avatar[default] slot[name=name]::slotted(*),.avatar[default] .avatar__name::slotted(*),.avatar[size=default] slot[name=name]::slotted(*),.avatar[size=default] .avatar__name::slotted(*),.avatar--normal slot[name=name]::slotted(*),.avatar--normal .avatar__name::slotted(*),.avatar.normal slot[name=name]::slotted(*),.avatar.normal .avatar__name::slotted(*),.avatar[normal] slot[name=name]::slotted(*),.avatar[normal] .avatar__name::slotted(*),.avatar[size=normal] slot[name=name]::slotted(*),.avatar[size=normal] .avatar__name::slotted(*),.fz-avatar--default slot[name=name]::slotted(*),.fz-avatar--default .avatar__name::slotted(*),.fz-avatar.default slot[name=name]::slotted(*),.fz-avatar.default .avatar__name::slotted(*),.fz-avatar[default] slot[name=name]::slotted(*),.fz-avatar[default] .avatar__name::slotted(*),.fz-avatar[size=default] slot[name=name]::slotted(*),.fz-avatar[size=default] .avatar__name::slotted(*),.fz-avatar--normal slot[name=name]::slotted(*),.fz-avatar--normal .avatar__name::slotted(*),.fz-avatar.normal slot[name=name]::slotted(*),.fz-avatar.normal .avatar__name::slotted(*),.fz-avatar[normal] slot[name=name]::slotted(*),.fz-avatar[normal] .avatar__name::slotted(*),.fz-avatar[size=normal] slot[name=name]::slotted(*),.fz-avatar[size=normal] .avatar__name::slotted(*){margin-left:10px;margin-top:10px;display:block;vertical-align:bottom;text-align:left}.avatar--default slot[name=subname],.avatar--default .avatar__subname,.avatar.default slot[name=subname],.avatar.default .avatar__subname,.avatar[default] slot[name=subname],.avatar[default] .avatar__subname,.avatar[size=default] slot[name=subname],.avatar[size=default] .avatar__subname,.avatar--normal slot[name=subname],.avatar--normal .avatar__subname,.avatar.normal slot[name=subname],.avatar.normal .avatar__subname,.avatar[normal] slot[name=subname],.avatar[normal] .avatar__subname,.avatar[size=normal] slot[name=subname],.avatar[size=normal] .avatar__subname,.fz-avatar--default slot[name=subname],.fz-avatar--default .avatar__subname,.fz-avatar.default slot[name=subname],.fz-avatar.default .avatar__subname,.fz-avatar[default] slot[name=subname],.fz-avatar[default] .avatar__subname,.fz-avatar[size=default] slot[name=subname],.fz-avatar[size=default] .avatar__subname,.fz-avatar--normal slot[name=subname],.fz-avatar--normal .avatar__subname,.fz-avatar.normal slot[name=subname],.fz-avatar.normal .avatar__subname,.fz-avatar[normal] slot[name=subname],.fz-avatar[normal] .avatar__subname,.fz-avatar[size=normal] slot[name=subname],.fz-avatar[size=normal] .avatar__subname{display:block;grid-row:2;grid-column:2;align-self:start;font-size:.9em;color:#666}.avatar--default slot[name=subname]::slotted(*),.avatar--default .avatar__subname::slotted(*),.avatar.default slot[name=subname]::slotted(*),.avatar.default .avatar__subname::slotted(*),.avatar[default] slot[name=subname]::slotted(*),.avatar[default] .avatar__subname::slotted(*),.avatar[size=default] slot[name=subname]::slotted(*),.avatar[size=default] .avatar__subname::slotted(*),.avatar--normal slot[name=subname]::slotted(*),.avatar--normal .avatar__subname::slotted(*),.avatar.normal slot[name=subname]::slotted(*),.avatar.normal .avatar__subname::slotted(*),.avatar[normal] slot[name=subname]::slotted(*),.avatar[normal] .avatar__subname::slotted(*),.avatar[size=normal] slot[name=subname]::slotted(*),.avatar[size=normal] .avatar__subname::slotted(*),.fz-avatar--default slot[name=subname]::slotted(*),.fz-avatar--default .avatar__subname::slotted(*),.fz-avatar.default slot[name=subname]::slotted(*),.fz-avatar.default .avatar__subname::slotted(*),.fz-avatar[default] slot[name=subname]::slotted(*),.fz-avatar[default] .avatar__subname::slotted(*),.fz-avatar[size=default] slot[name=subname]::slotted(*),.fz-avatar[size=default] .avatar__subname::slotted(*),.fz-avatar--normal slot[name=subname]::slotted(*),.fz-avatar--normal .avatar__subname::slotted(*),.fz-avatar.normal slot[name=subname]::slotted(*),.fz-avatar.normal .avatar__subname::slotted(*),.fz-avatar[normal] slot[name=subname]::slotted(*),.fz-avatar[normal] .avatar__subname::slotted(*),.fz-avatar[size=normal] slot[name=subname]::slotted(*),.fz-avatar[size=normal] .avatar__subname::slotted(*){display:block;margin-left:10px;line-height:24px;text-align:left}.avatar--large,.avatar.large,.avatar[large],.avatar[size=large],.fz-avatar--large,.fz-avatar.large,.fz-avatar[large],.fz-avatar[size=large]{height:auto;padding:10px 18px;display:inline-grid;grid-template-columns:minmax(96px, auto);grid-template-rows:auto auto auto;justify-items:center;align-items:center;text-align:center;row-gap:4px;width:max-content;max-width:100%}.avatar--large slot[name=image],.avatar--large .avatar__image,.avatar.large slot[name=image],.avatar.large .avatar__image,.avatar[large] slot[name=image],.avatar[large] .avatar__image,.avatar[size=large] slot[name=image],.avatar[size=large] .avatar__image,.fz-avatar--large slot[name=image],.fz-avatar--large .avatar__image,.fz-avatar.large slot[name=image],.fz-avatar.large .avatar__image,.fz-avatar[large] slot[name=image],.fz-avatar[large] .avatar__image,.fz-avatar[size=large] slot[name=image],.fz-avatar[size=large] .avatar__image{display:block;width:96px;height:96px;min-width:96px;max-width:96px;min-height:96px;max-height:96px;border-radius:50%;grid-row:1;grid-column:1;justify-self:center;margin-bottom:6px;overflow:hidden}.avatar--large slot[name=image]::slotted(*),.avatar--large .avatar__image::slotted(*),.avatar.large slot[name=image]::slotted(*),.avatar.large .avatar__image::slotted(*),.avatar[large] slot[name=image]::slotted(*),.avatar[large] .avatar__image::slotted(*),.avatar[size=large] slot[name=image]::slotted(*),.avatar[size=large] .avatar__image::slotted(*),.fz-avatar--large slot[name=image]::slotted(*),.fz-avatar--large .avatar__image::slotted(*),.fz-avatar.large slot[name=image]::slotted(*),.fz-avatar.large .avatar__image::slotted(*),.fz-avatar[large] slot[name=image]::slotted(*),.fz-avatar[large] .avatar__image::slotted(*),.fz-avatar[size=large] slot[name=image]::slotted(*),.fz-avatar[size=large] .avatar__image::slotted(*){display:block;width:96px !important;height:96px !important;min-width:96px !important;max-width:96px !important;min-height:96px !important;max-height:96px !important;object-fit:cover;border-radius:50%;grid-row:1;grid-column:1;margin:0 auto}.avatar--large slot[name=name],.avatar--large .avatar__name,.avatar.large slot[name=name],.avatar.large .avatar__name,.avatar[large] slot[name=name],.avatar[large] .avatar__name,.avatar[size=large] slot[name=name],.avatar[size=large] .avatar__name,.fz-avatar--large slot[name=name],.fz-avatar--large .avatar__name,.fz-avatar.large slot[name=name],.fz-avatar.large .avatar__name,.fz-avatar[large] slot[name=name],.fz-avatar[large] .avatar__name,.fz-avatar[size=large] slot[name=name],.fz-avatar[size=large] .avatar__name{display:block;grid-row:2;grid-column:1;align-self:center;justify-self:center;font-size:1.3em;font-weight:bold;text-align:center}.avatar--large slot[name=name]::slotted(*),.avatar--large .avatar__name::slotted(*),.avatar.large slot[name=name]::slotted(*),.avatar.large .avatar__name::slotted(*),.avatar[large] slot[name=name]::slotted(*),.avatar[large] .avatar__name::slotted(*),.avatar[size=large] slot[name=name]::slotted(*),.avatar[size=large] .avatar__name::slotted(*),.fz-avatar--large slot[name=name]::slotted(*),.fz-avatar--large .avatar__name::slotted(*),.fz-avatar.large slot[name=name]::slotted(*),.fz-avatar.large .avatar__name::slotted(*),.fz-avatar[large] slot[name=name]::slotted(*),.fz-avatar[large] .avatar__name::slotted(*),.fz-avatar[size=large] slot[name=name]::slotted(*),.fz-avatar[size=large] .avatar__name::slotted(*){margin:0;display:block;text-align:center;vertical-align:baseline}.avatar--large slot[name=subname],.avatar--large .avatar__subname,.avatar.large slot[name=subname],.avatar.large .avatar__subname,.avatar[large] slot[name=subname],.avatar[large] .avatar__subname,.avatar[size=large] slot[name=subname],.avatar[size=large] .avatar__subname,.fz-avatar--large slot[name=subname],.fz-avatar--large .avatar__subname,.fz-avatar.large slot[name=subname],.fz-avatar.large .avatar__subname,.fz-avatar[large] slot[name=subname],.fz-avatar[large] .avatar__subname,.fz-avatar[size=large] slot[name=subname],.fz-avatar[size=large] .avatar__subname{display:block;grid-row:3;grid-column:1;align-self:center;justify-self:center;font-size:.95em;color:#666;text-align:center}.avatar--large slot[name=subname]::slotted(*),.avatar--large .avatar__subname::slotted(*),.avatar.large slot[name=subname]::slotted(*),.avatar.large .avatar__subname::slotted(*),.avatar[large] slot[name=subname]::slotted(*),.avatar[large] .avatar__subname::slotted(*),.avatar[size=large] slot[name=subname]::slotted(*),.avatar[size=large] .avatar__subname::slotted(*),.fz-avatar--large slot[name=subname]::slotted(*),.fz-avatar--large .avatar__subname::slotted(*),.fz-avatar.large slot[name=subname]::slotted(*),.fz-avatar.large .avatar__subname::slotted(*),.fz-avatar[large] slot[name=subname]::slotted(*),.fz-avatar[large] .avatar__subname::slotted(*),.fz-avatar[size=large] slot[name=subname]::slotted(*),.fz-avatar[size=large] .avatar__subname::slotted(*){display:block;margin:0;line-height:1.4;text-align:center}.avatar--mega,.avatar.mega,.avatar[mega],.avatar[size=mega],.fz-avatar--mega,.fz-avatar.mega,.fz-avatar[mega],.fz-avatar[size=mega]{height:auto;padding:12px 24px;display:inline-grid;grid-template-columns:minmax(128px, auto);grid-template-rows:auto auto auto;justify-items:center;align-items:center;text-align:center;row-gap:6px;width:max-content;max-width:100%}.avatar--mega slot[name=image],.avatar--mega .avatar__image,.avatar.mega slot[name=image],.avatar.mega .avatar__image,.avatar[mega] slot[name=image],.avatar[mega] .avatar__image,.avatar[size=mega] slot[name=image],.avatar[size=mega] .avatar__image,.fz-avatar--mega slot[name=image],.fz-avatar--mega .avatar__image,.fz-avatar.mega slot[name=image],.fz-avatar.mega .avatar__image,.fz-avatar[mega] slot[name=image],.fz-avatar[mega] .avatar__image,.fz-avatar[size=mega] slot[name=image],.fz-avatar[size=mega] .avatar__image{display:block;width:128px;height:128px;min-width:128px;max-width:128px;min-height:128px;max-height:128px;border-radius:50%;grid-row:1;grid-column:1;justify-self:center;margin-bottom:8px;overflow:hidden}.avatar--mega slot[name=image]::slotted(*),.avatar--mega .avatar__image::slotted(*),.avatar.mega slot[name=image]::slotted(*),.avatar.mega .avatar__image::slotted(*),.avatar[mega] slot[name=image]::slotted(*),.avatar[mega] .avatar__image::slotted(*),.avatar[size=mega] slot[name=image]::slotted(*),.avatar[size=mega] .avatar__image::slotted(*),.fz-avatar--mega slot[name=image]::slotted(*),.fz-avatar--mega .avatar__image::slotted(*),.fz-avatar.mega slot[name=image]::slotted(*),.fz-avatar.mega .avatar__image::slotted(*),.fz-avatar[mega] slot[name=image]::slotted(*),.fz-avatar[mega] .avatar__image::slotted(*),.fz-avatar[size=mega] slot[name=image]::slotted(*),.fz-avatar[size=mega] .avatar__image::slotted(*){display:block;width:128px !important;height:128px !important;min-width:128px !important;max-width:128px !important;min-height:128px !important;max-height:128px !important;object-fit:cover;border-radius:50%;grid-row:1;grid-column:1;margin:0 auto}.avatar--mega slot[name=name],.avatar--mega .avatar__name,.avatar.mega slot[name=name],.avatar.mega .avatar__name,.avatar[mega] slot[name=name],.avatar[mega] .avatar__name,.avatar[size=mega] slot[name=name],.avatar[size=mega] .avatar__name,.fz-avatar--mega slot[name=name],.fz-avatar--mega .avatar__name,.fz-avatar.mega slot[name=name],.fz-avatar.mega .avatar__name,.fz-avatar[mega] slot[name=name],.fz-avatar[mega] .avatar__name,.fz-avatar[size=mega] slot[name=name],.fz-avatar[size=mega] .avatar__name{display:block;grid-row:2;grid-column:1;align-self:center;justify-self:center;font-size:1.6em;font-weight:bold;text-align:center}.avatar--mega slot[name=name]::slotted(*),.avatar--mega .avatar__name::slotted(*),.avatar.mega slot[name=name]::slotted(*),.avatar.mega .avatar__name::slotted(*),.avatar[mega] slot[name=name]::slotted(*),.avatar[mega] .avatar__name::slotted(*),.avatar[size=mega] slot[name=name]::slotted(*),.avatar[size=mega] .avatar__name::slotted(*),.fz-avatar--mega slot[name=name]::slotted(*),.fz-avatar--mega .avatar__name::slotted(*),.fz-avatar.mega slot[name=name]::slotted(*),.fz-avatar.mega .avatar__name::slotted(*),.fz-avatar[mega] slot[name=name]::slotted(*),.fz-avatar[mega] .avatar__name::slotted(*),.fz-avatar[size=mega] slot[name=name]::slotted(*),.fz-avatar[size=mega] .avatar__name::slotted(*){margin:0;display:block;text-align:center;vertical-align:baseline}.avatar--mega slot[name=subname],.avatar--mega .avatar__subname,.avatar.mega slot[name=subname],.avatar.mega .avatar__subname,.avatar[mega] slot[name=subname],.avatar[mega] .avatar__subname,.avatar[size=mega] slot[name=subname],.avatar[size=mega] .avatar__subname,.fz-avatar--mega slot[name=subname],.fz-avatar--mega .avatar__subname,.fz-avatar.mega slot[name=subname],.fz-avatar.mega .avatar__subname,.fz-avatar[mega] slot[name=subname],.fz-avatar[mega] .avatar__subname,.fz-avatar[size=mega] slot[name=subname],.fz-avatar[size=mega] .avatar__subname{display:block;grid-row:3;grid-column:1;align-self:center;justify-self:center;font-size:1.1em;color:#666;text-align:center}.avatar--mega slot[name=subname]::slotted(*),.avatar--mega .avatar__subname::slotted(*),.avatar.mega slot[name=subname]::slotted(*),.avatar.mega .avatar__subname::slotted(*),.avatar[mega] slot[name=subname]::slotted(*),.avatar[mega] .avatar__subname::slotted(*),.avatar[size=mega] slot[name=subname]::slotted(*),.avatar[size=mega] .avatar__subname::slotted(*),.fz-avatar--mega slot[name=subname]::slotted(*),.fz-avatar--mega .avatar__subname::slotted(*),.fz-avatar.mega slot[name=subname]::slotted(*),.fz-avatar.mega .avatar__subname::slotted(*),.fz-avatar[mega] slot[name=subname]::slotted(*),.fz-avatar[mega] .avatar__subname::slotted(*),.fz-avatar[size=mega] slot[name=subname]::slotted(*),.fz-avatar[size=mega] .avatar__subname::slotted(*){display:block;margin:0;line-height:1.4;text-align:center}:host(.avatar--mini) .avatar,:host(.fz-avatar--mini) .avatar,:host(.mini) .avatar,:host([mini]) .avatar,:host([size=mini]) .avatar{height:auto;padding:3px 6px;display:inline-grid;grid-template-columns:24px auto;grid-template-rows:24px;align-items:center;justify-items:start;text-align:left;row-gap:0;width:max-content}:host(.avatar--mini) .avatar slot[name=image],:host(.avatar--mini) .avatar .avatar__image,:host(.fz-avatar--mini) .avatar slot[name=image],:host(.fz-avatar--mini) .avatar .avatar__image,:host(.mini) .avatar slot[name=image],:host(.mini) .avatar .avatar__image,:host([mini]) .avatar slot[name=image],:host([mini]) .avatar .avatar__image,:host([size=mini]) .avatar slot[name=image],:host([size=mini]) .avatar .avatar__image{display:block;width:24px;height:24px;min-width:24px;max-width:24px;min-height:24px;max-height:24px;border-radius:50%;grid-row:1;grid-column:1;margin-bottom:0;overflow:hidden}:host(.avatar--mini) .avatar slot[name=image]::slotted(*),:host(.avatar--mini) .avatar .avatar__image::slotted(*),:host(.fz-avatar--mini) .avatar slot[name=image]::slotted(*),:host(.fz-avatar--mini) .avatar .avatar__image::slotted(*),:host(.mini) .avatar slot[name=image]::slotted(*),:host(.mini) .avatar .avatar__image::slotted(*),:host([mini]) .avatar slot[name=image]::slotted(*),:host([mini]) .avatar .avatar__image::slotted(*),:host([size=mini]) .avatar slot[name=image]::slotted(*),:host([size=mini]) .avatar .avatar__image::slotted(*){display:block;width:24px !important;height:24px !important;min-width:24px !important;max-width:24px !important;min-height:24px !important;max-height:24px !important;object-fit:cover;border-radius:50%;grid-row:1;grid-column:1}:host(.avatar--mini) .avatar slot[name=name],:host(.avatar--mini) .avatar .avatar__name,:host(.fz-avatar--mini) .avatar slot[name=name],:host(.fz-avatar--mini) .avatar .avatar__name,:host(.mini) .avatar slot[name=name],:host(.mini) .avatar .avatar__name,:host([mini]) .avatar slot[name=name],:host([mini]) .avatar .avatar__name,:host([size=mini]) .avatar slot[name=name],:host([size=mini]) .avatar .avatar__name{display:flex;align-items:center;grid-row:1;grid-column:2;align-self:center;height:100%;font-size:.85em;font-weight:bold;line-height:1}:host(.avatar--mini) .avatar slot[name=name]::slotted(*),:host(.avatar--mini) .avatar .avatar__name::slotted(*),:host(.fz-avatar--mini) .avatar slot[name=name]::slotted(*),:host(.fz-avatar--mini) .avatar .avatar__name::slotted(*),:host(.mini) .avatar slot[name=name]::slotted(*),:host(.mini) .avatar .avatar__name::slotted(*),:host([mini]) .avatar slot[name=name]::slotted(*),:host([mini]) .avatar .avatar__name::slotted(*),:host([size=mini]) .avatar slot[name=name]::slotted(*),:host([size=mini]) .avatar .avatar__name::slotted(*){margin:0 0 0 8px;display:inline-flex;align-items:center;vertical-align:middle;text-align:left;line-height:normal}:host(.avatar--mini) .avatar slot[name=subname],:host(.avatar--mini) .avatar .avatar__subname,:host(.fz-avatar--mini) .avatar slot[name=subname],:host(.fz-avatar--mini) .avatar .avatar__subname,:host(.mini) .avatar slot[name=subname],:host(.mini) .avatar .avatar__subname,:host([mini]) .avatar slot[name=subname],:host([mini]) .avatar .avatar__subname,:host([size=mini]) .avatar slot[name=subname],:host([size=mini]) .avatar .avatar__subname{display:none !important}:host(.avatar--mini) .avatar slot[name=subname]::slotted(*),:host(.avatar--mini) .avatar .avatar__subname::slotted(*),:host(.fz-avatar--mini) .avatar slot[name=subname]::slotted(*),:host(.fz-avatar--mini) .avatar .avatar__subname::slotted(*),:host(.mini) .avatar slot[name=subname]::slotted(*),:host(.mini) .avatar .avatar__subname::slotted(*),:host([mini]) .avatar slot[name=subname]::slotted(*),:host([mini]) .avatar .avatar__subname::slotted(*),:host([size=mini]) .avatar slot[name=subname]::slotted(*),:host([size=mini]) .avatar .avatar__subname::slotted(*){display:none !important}:host(.avatar--small) .avatar,:host(.fz-avatar--small) .avatar,:host(.small) .avatar,:host([small]) .avatar,:host([size=small]) .avatar{height:auto;padding:5px 12px;display:inline-grid;grid-template-columns:40px auto;grid-template-rows:40px;align-items:center;justify-items:start;text-align:left;row-gap:0;width:max-content}:host(.avatar--small) .avatar slot[name=image],:host(.avatar--small) .avatar .avatar__image,:host(.fz-avatar--small) .avatar slot[name=image],:host(.fz-avatar--small) .avatar .avatar__image,:host(.small) .avatar slot[name=image],:host(.small) .avatar .avatar__image,:host([small]) .avatar slot[name=image],:host([small]) .avatar .avatar__image,:host([size=small]) .avatar slot[name=image],:host([size=small]) .avatar .avatar__image{display:block;width:40px;height:40px;min-width:40px;max-width:40px;min-height:40px;max-height:40px;border-radius:50%;grid-row:1;grid-column:1;margin-bottom:0;overflow:hidden}:host(.avatar--small) .avatar slot[name=image]::slotted(*),:host(.avatar--small) .avatar .avatar__image::slotted(*),:host(.fz-avatar--small) .avatar slot[name=image]::slotted(*),:host(.fz-avatar--small) .avatar .avatar__image::slotted(*),:host(.small) .avatar slot[name=image]::slotted(*),:host(.small) .avatar .avatar__image::slotted(*),:host([small]) .avatar slot[name=image]::slotted(*),:host([small]) .avatar .avatar__image::slotted(*),:host([size=small]) .avatar slot[name=image]::slotted(*),:host([size=small]) .avatar .avatar__image::slotted(*){display:block;width:40px !important;height:40px !important;min-width:40px !important;max-width:40px !important;min-height:40px !important;max-height:40px !important;object-fit:cover;border-radius:50%;grid-row:1;grid-column:1}:host(.avatar--small) .avatar slot[name=name],:host(.avatar--small) .avatar .avatar__name,:host(.fz-avatar--small) .avatar slot[name=name],:host(.fz-avatar--small) .avatar .avatar__name,:host(.small) .avatar slot[name=name],:host(.small) .avatar .avatar__name,:host([small]) .avatar slot[name=name],:host([small]) .avatar .avatar__name,:host([size=small]) .avatar slot[name=name],:host([size=small]) .avatar .avatar__name{display:flex;align-items:center;grid-row:1;grid-column:2;align-self:center;height:100%;font-size:1em;font-weight:bold;line-height:1}:host(.avatar--small) .avatar slot[name=name]::slotted(*),:host(.avatar--small) .avatar .avatar__name::slotted(*),:host(.fz-avatar--small) .avatar slot[name=name]::slotted(*),:host(.fz-avatar--small) .avatar .avatar__name::slotted(*),:host(.small) .avatar slot[name=name]::slotted(*),:host(.small) .avatar .avatar__name::slotted(*),:host([small]) .avatar slot[name=name]::slotted(*),:host([small]) .avatar .avatar__name::slotted(*),:host([size=small]) .avatar slot[name=name]::slotted(*),:host([size=small]) .avatar .avatar__name::slotted(*){margin:0 0 0 10px;display:inline-flex;align-items:center;vertical-align:middle;text-align:left;line-height:normal}:host(.avatar--small) .avatar slot[name=subname],:host(.avatar--small) .avatar .avatar__subname,:host(.fz-avatar--small) .avatar slot[name=subname],:host(.fz-avatar--small) .avatar .avatar__subname,:host(.small) .avatar slot[name=subname],:host(.small) .avatar .avatar__subname,:host([small]) .avatar slot[name=subname],:host([small]) .avatar .avatar__subname,:host([size=small]) .avatar slot[name=subname],:host([size=small]) .avatar .avatar__subname{display:none !important}:host(.avatar--small) .avatar slot[name=subname]::slotted(*),:host(.avatar--small) .avatar .avatar__subname::slotted(*),:host(.fz-avatar--small) .avatar slot[name=subname]::slotted(*),:host(.fz-avatar--small) .avatar .avatar__subname::slotted(*),:host(.small) .avatar slot[name=subname]::slotted(*),:host(.small) .avatar .avatar__subname::slotted(*),:host([small]) .avatar slot[name=subname]::slotted(*),:host([small]) .avatar .avatar__subname::slotted(*),:host([size=small]) .avatar slot[name=subname]::slotted(*),:host([size=small]) .avatar .avatar__subname::slotted(*){display:none !important}:host(.avatar--default) .avatar,:host(.fz-avatar--default) .avatar,:host(.default) .avatar,:host([default]) .avatar,:host([size=default]) .avatar,:host(.avatar--normal) .avatar,:host(.fz-avatar--normal) .avatar,:host(.normal) .avatar,:host([normal]) .avatar,:host([size=normal]) .avatar{height:auto;padding:7px 15px;display:inline-grid;grid-template-columns:64px auto;grid-template-rows:38px 26px;justify-items:start;text-align:left;row-gap:0;width:max-content}:host(.avatar--default) .avatar slot[name=image],:host(.avatar--default) .avatar .avatar__image,:host(.fz-avatar--default) .avatar slot[name=image],:host(.fz-avatar--default) .avatar .avatar__image,:host(.default) .avatar slot[name=image],:host(.default) .avatar .avatar__image,:host([default]) .avatar slot[name=image],:host([default]) .avatar .avatar__image,:host([size=default]) .avatar slot[name=image],:host([size=default]) .avatar .avatar__image,:host(.avatar--normal) .avatar slot[name=image],:host(.avatar--normal) .avatar .avatar__image,:host(.fz-avatar--normal) .avatar slot[name=image],:host(.fz-avatar--normal) .avatar .avatar__image,:host(.normal) .avatar slot[name=image],:host(.normal) .avatar .avatar__image,:host([normal]) .avatar slot[name=image],:host([normal]) .avatar .avatar__image,:host([size=normal]) .avatar slot[name=image],:host([size=normal]) .avatar .avatar__image{display:block;width:64px;height:64px;min-width:64px;max-width:64px;min-height:64px;max-height:64px;border-radius:50%;grid-row:1/3;grid-column:1;margin-bottom:0;overflow:hidden}:host(.avatar--default) .avatar slot[name=image]::slotted(*),:host(.avatar--default) .avatar .avatar__image::slotted(*),:host(.fz-avatar--default) .avatar slot[name=image]::slotted(*),:host(.fz-avatar--default) .avatar .avatar__image::slotted(*),:host(.default) .avatar slot[name=image]::slotted(*),:host(.default) .avatar .avatar__image::slotted(*),:host([default]) .avatar slot[name=image]::slotted(*),:host([default]) .avatar .avatar__image::slotted(*),:host([size=default]) .avatar slot[name=image]::slotted(*),:host([size=default]) .avatar .avatar__image::slotted(*),:host(.avatar--normal) .avatar slot[name=image]::slotted(*),:host(.avatar--normal) .avatar .avatar__image::slotted(*),:host(.fz-avatar--normal) .avatar slot[name=image]::slotted(*),:host(.fz-avatar--normal) .avatar .avatar__image::slotted(*),:host(.normal) .avatar slot[name=image]::slotted(*),:host(.normal) .avatar .avatar__image::slotted(*),:host([normal]) .avatar slot[name=image]::slotted(*),:host([normal]) .avatar .avatar__image::slotted(*),:host([size=normal]) .avatar slot[name=image]::slotted(*),:host([size=normal]) .avatar .avatar__image::slotted(*){display:block;width:64px !important;height:64px !important;min-width:64px !important;max-width:64px !important;min-height:64px !important;max-height:64px !important;object-fit:cover;border-radius:50%;grid-row:1/3;grid-column:1}:host(.avatar--default) .avatar slot[name=name],:host(.avatar--default) .avatar .avatar__name,:host(.fz-avatar--default) .avatar slot[name=name],:host(.fz-avatar--default) .avatar .avatar__name,:host(.default) .avatar slot[name=name],:host(.default) .avatar .avatar__name,:host([default]) .avatar slot[name=name],:host([default]) .avatar .avatar__name,:host([size=default]) .avatar slot[name=name],:host([size=default]) .avatar .avatar__name,:host(.avatar--normal) .avatar slot[name=name],:host(.avatar--normal) .avatar .avatar__name,:host(.fz-avatar--normal) .avatar slot[name=name],:host(.fz-avatar--normal) .avatar .avatar__name,:host(.normal) .avatar slot[name=name],:host(.normal) .avatar .avatar__name,:host([normal]) .avatar slot[name=name],:host([normal]) .avatar .avatar__name,:host([size=normal]) .avatar slot[name=name],:host([size=normal]) .avatar .avatar__name{grid-row:1;grid-column:2;align-self:end;font-size:1.2em;font-weight:bold}:host(.avatar--default) .avatar slot[name=name]::slotted(*),:host(.avatar--default) .avatar .avatar__name::slotted(*),:host(.fz-avatar--default) .avatar slot[name=name]::slotted(*),:host(.fz-avatar--default) .avatar .avatar__name::slotted(*),:host(.default) .avatar slot[name=name]::slotted(*),:host(.default) .avatar .avatar__name::slotted(*),:host([default]) .avatar slot[name=name]::slotted(*),:host([default]) .avatar .avatar__name::slotted(*),:host([size=default]) .avatar slot[name=name]::slotted(*),:host([size=default]) .avatar .avatar__name::slotted(*),:host(.avatar--normal) .avatar slot[name=name]::slotted(*),:host(.avatar--normal) .avatar .avatar__name::slotted(*),:host(.fz-avatar--normal) .avatar slot[name=name]::slotted(*),:host(.fz-avatar--normal) .avatar .avatar__name::slotted(*),:host(.normal) .avatar slot[name=name]::slotted(*),:host(.normal) .avatar .avatar__name::slotted(*),:host([normal]) .avatar slot[name=name]::slotted(*),:host([normal]) .avatar .avatar__name::slotted(*),:host([size=normal]) .avatar slot[name=name]::slotted(*),:host([size=normal]) .avatar .avatar__name::slotted(*){margin-left:10px;margin-top:10px;display:block;vertical-align:bottom;text-align:left}:host(.avatar--default) .avatar slot[name=subname],:host(.avatar--default) .avatar .avatar__subname,:host(.fz-avatar--default) .avatar slot[name=subname],:host(.fz-avatar--default) .avatar .avatar__subname,:host(.default) .avatar slot[name=subname],:host(.default) .avatar .avatar__subname,:host([default]) .avatar slot[name=subname],:host([default]) .avatar .avatar__subname,:host([size=default]) .avatar slot[name=subname],:host([size=default]) .avatar .avatar__subname,:host(.avatar--normal) .avatar slot[name=subname],:host(.avatar--normal) .avatar .avatar__subname,:host(.fz-avatar--normal) .avatar slot[name=subname],:host(.fz-avatar--normal) .avatar .avatar__subname,:host(.normal) .avatar slot[name=subname],:host(.normal) .avatar .avatar__subname,:host([normal]) .avatar slot[name=subname],:host([normal]) .avatar .avatar__subname,:host([size=normal]) .avatar slot[name=subname],:host([size=normal]) .avatar .avatar__subname{display:block;grid-row:2;grid-column:2;align-self:start;font-size:.9em;color:#666}:host(.avatar--default) .avatar slot[name=subname]::slotted(*),:host(.avatar--default) .avatar .avatar__subname::slotted(*),:host(.fz-avatar--default) .avatar slot[name=subname]::slotted(*),:host(.fz-avatar--default) .avatar .avatar__subname::slotted(*),:host(.default) .avatar slot[name=subname]::slotted(*),:host(.default) .avatar .avatar__subname::slotted(*),:host([default]) .avatar slot[name=subname]::slotted(*),:host([default]) .avatar .avatar__subname::slotted(*),:host([size=default]) .avatar slot[name=subname]::slotted(*),:host([size=default]) .avatar .avatar__subname::slotted(*),:host(.avatar--normal) .avatar slot[name=subname]::slotted(*),:host(.avatar--normal) .avatar .avatar__subname::slotted(*),:host(.fz-avatar--normal) .avatar slot[name=subname]::slotted(*),:host(.fz-avatar--normal) .avatar .avatar__subname::slotted(*),:host(.normal) .avatar slot[name=subname]::slotted(*),:host(.normal) .avatar .avatar__subname::slotted(*),:host([normal]) .avatar slot[name=subname]::slotted(*),:host([normal]) .avatar .avatar__subname::slotted(*),:host([size=normal]) .avatar slot[name=subname]::slotted(*),:host([size=normal]) .avatar .avatar__subname::slotted(*){display:block;margin-left:10px;line-height:24px;text-align:left}:host(.avatar--large) .avatar,:host(.fz-avatar--large) .avatar,:host(.large) .avatar,:host([large]) .avatar,:host([size=large]) .avatar{height:auto;padding:10px 18px;display:inline-grid;grid-template-columns:minmax(96px, auto);grid-template-rows:auto auto auto;justify-items:center;align-items:center;text-align:center;row-gap:4px;width:max-content;max-width:100%}:host(.avatar--large) .avatar slot[name=image],:host(.avatar--large) .avatar .avatar__image,:host(.fz-avatar--large) .avatar slot[name=image],:host(.fz-avatar--large) .avatar .avatar__image,:host(.large) .avatar slot[name=image],:host(.large) .avatar .avatar__image,:host([large]) .avatar slot[name=image],:host([large]) .avatar .avatar__image,:host([size=large]) .avatar slot[name=image],:host([size=large]) .avatar .avatar__image{display:block;width:96px;height:96px;min-width:96px;max-width:96px;min-height:96px;max-height:96px;border-radius:50%;grid-row:1;grid-column:1;justify-self:center;margin-bottom:6px;overflow:hidden}:host(.avatar--large) .avatar slot[name=image]::slotted(*),:host(.avatar--large) .avatar .avatar__image::slotted(*),:host(.fz-avatar--large) .avatar slot[name=image]::slotted(*),:host(.fz-avatar--large) .avatar .avatar__image::slotted(*),:host(.large) .avatar slot[name=image]::slotted(*),:host(.large) .avatar .avatar__image::slotted(*),:host([large]) .avatar slot[name=image]::slotted(*),:host([large]) .avatar .avatar__image::slotted(*),:host([size=large]) .avatar slot[name=image]::slotted(*),:host([size=large]) .avatar .avatar__image::slotted(*){display:block;width:96px !important;height:96px !important;min-width:96px !important;max-width:96px !important;min-height:96px !important;max-height:96px !important;object-fit:cover;border-radius:50%;grid-row:1;grid-column:1;margin:0 auto}:host(.avatar--large) .avatar slot[name=name],:host(.avatar--large) .avatar .avatar__name,:host(.fz-avatar--large) .avatar slot[name=name],:host(.fz-avatar--large) .avatar .avatar__name,:host(.large) .avatar slot[name=name],:host(.large) .avatar .avatar__name,:host([large]) .avatar slot[name=name],:host([large]) .avatar .avatar__name,:host([size=large]) .avatar slot[name=name],:host([size=large]) .avatar .avatar__name{display:block;grid-row:2;grid-column:1;align-self:center;justify-self:center;font-size:1.3em;font-weight:bold;text-align:center}:host(.avatar--large) .avatar slot[name=name]::slotted(*),:host(.avatar--large) .avatar .avatar__name::slotted(*),:host(.fz-avatar--large) .avatar slot[name=name]::slotted(*),:host(.fz-avatar--large) .avatar .avatar__name::slotted(*),:host(.large) .avatar slot[name=name]::slotted(*),:host(.large) .avatar .avatar__name::slotted(*),:host([large]) .avatar slot[name=name]::slotted(*),:host([large]) .avatar .avatar__name::slotted(*),:host([size=large]) .avatar slot[name=name]::slotted(*),:host([size=large]) .avatar .avatar__name::slotted(*){margin:0;display:block;text-align:center;vertical-align:baseline}:host(.avatar--large) .avatar slot[name=subname],:host(.avatar--large) .avatar .avatar__subname,:host(.fz-avatar--large) .avatar slot[name=subname],:host(.fz-avatar--large) .avatar .avatar__subname,:host(.large) .avatar slot[name=subname],:host(.large) .avatar .avatar__subname,:host([large]) .avatar slot[name=subname],:host([large]) .avatar .avatar__subname,:host([size=large]) .avatar slot[name=subname],:host([size=large]) .avatar .avatar__subname{display:block;grid-row:3;grid-column:1;align-self:center;justify-self:center;font-size:.95em;color:#666;text-align:center}:host(.avatar--large) .avatar slot[name=subname]::slotted(*),:host(.avatar--large) .avatar .avatar__subname::slotted(*),:host(.fz-avatar--large) .avatar slot[name=subname]::slotted(*),:host(.fz-avatar--large) .avatar .avatar__subname::slotted(*),:host(.large) .avatar slot[name=subname]::slotted(*),:host(.large) .avatar .avatar__subname::slotted(*),:host([large]) .avatar slot[name=subname]::slotted(*),:host([large]) .avatar .avatar__subname::slotted(*),:host([size=large]) .avatar slot[name=subname]::slotted(*),:host([size=large]) .avatar .avatar__subname::slotted(*){display:block;margin:0;line-height:1.4;text-align:center}:host(.avatar--mega) .avatar,:host(.fz-avatar--mega) .avatar,:host(.mega) .avatar,:host([mega]) .avatar,:host([size=mega]) .avatar{height:auto;padding:12px 24px;display:inline-grid;grid-template-columns:minmax(128px, auto);grid-template-rows:auto auto auto;justify-items:center;align-items:center;text-align:center;row-gap:6px;width:max-content;max-width:100%}:host(.avatar--mega) .avatar slot[name=image],:host(.avatar--mega) .avatar .avatar__image,:host(.fz-avatar--mega) .avatar slot[name=image],:host(.fz-avatar--mega) .avatar .avatar__image,:host(.mega) .avatar slot[name=image],:host(.mega) .avatar .avatar__image,:host([mega]) .avatar slot[name=image],:host([mega]) .avatar .avatar__image,:host([size=mega]) .avatar slot[name=image],:host([size=mega]) .avatar .avatar__image{display:block;width:128px;height:128px;min-width:128px;max-width:128px;min-height:128px;max-height:128px;border-radius:50%;grid-row:1;grid-column:1;justify-self:center;margin-bottom:8px;overflow:hidden}:host(.avatar--mega) .avatar slot[name=image]::slotted(*),:host(.avatar--mega) .avatar .avatar__image::slotted(*),:host(.fz-avatar--mega) .avatar slot[name=image]::slotted(*),:host(.fz-avatar--mega) .avatar .avatar__image::slotted(*),:host(.mega) .avatar slot[name=image]::slotted(*),:host(.mega) .avatar .avatar__image::slotted(*),:host([mega]) .avatar slot[name=image]::slotted(*),:host([mega]) .avatar .avatar__image::slotted(*),:host([size=mega]) .avatar slot[name=image]::slotted(*),:host([size=mega]) .avatar .avatar__image::slotted(*){display:block;width:128px !important;height:128px !important;min-width:128px !important;max-width:128px !important;min-height:128px !important;max-height:128px !important;object-fit:cover;border-radius:50%;grid-row:1;grid-column:1;margin:0 auto}:host(.avatar--mega) .avatar slot[name=name],:host(.avatar--mega) .avatar .avatar__name,:host(.fz-avatar--mega) .avatar slot[name=name],:host(.fz-avatar--mega) .avatar .avatar__name,:host(.mega) .avatar slot[name=name],:host(.mega) .avatar .avatar__name,:host([mega]) .avatar slot[name=name],:host([mega]) .avatar .avatar__name,:host([size=mega]) .avatar slot[name=name],:host([size=mega]) .avatar .avatar__name{display:block;grid-row:2;grid-column:1;align-self:center;justify-self:center;font-size:1.6em;font-weight:bold;text-align:center}:host(.avatar--mega) .avatar slot[name=name]::slotted(*),:host(.avatar--mega) .avatar .avatar__name::slotted(*),:host(.fz-avatar--mega) .avatar slot[name=name]::slotted(*),:host(.fz-avatar--mega) .avatar .avatar__name::slotted(*),:host(.mega) .avatar slot[name=name]::slotted(*),:host(.mega) .avatar .avatar__name::slotted(*),:host([mega]) .avatar slot[name=name]::slotted(*),:host([mega]) .avatar .avatar__name::slotted(*),:host([size=mega]) .avatar slot[name=name]::slotted(*),:host([size=mega]) .avatar .avatar__name::slotted(*){margin:0;display:block;text-align:center;vertical-align:baseline}:host(.avatar--mega) .avatar slot[name=subname],:host(.avatar--mega) .avatar .avatar__subname,:host(.fz-avatar--mega) .avatar slot[name=subname],:host(.fz-avatar--mega) .avatar .avatar__subname,:host(.mega) .avatar slot[name=subname],:host(.mega) .avatar .avatar__subname,:host([mega]) .avatar slot[name=subname],:host([mega]) .avatar .avatar__subname,:host([size=mega]) .avatar slot[name=subname],:host([size=mega]) .avatar .avatar__subname{display:block;grid-row:3;grid-column:1;align-self:center;justify-self:center;font-size:1.1em;color:#666;text-align:center}:host(.avatar--mega) .avatar slot[name=subname]::slotted(*),:host(.avatar--mega) .avatar .avatar__subname::slotted(*),:host(.fz-avatar--mega) .avatar slot[name=subname]::slotted(*),:host(.fz-avatar--mega) .avatar .avatar__subname::slotted(*),:host(.mega) .avatar slot[name=subname]::slotted(*),:host(.mega) .avatar .avatar__subname::slotted(*),:host([mega]) .avatar slot[name=subname]::slotted(*),:host([mega]) .avatar .avatar__subname::slotted(*),:host([size=mega]) .avatar slot[name=subname]::slotted(*),:host([size=mega]) .avatar .avatar__subname::slotted(*){display:block;margin:0;line-height:1.4;text-align:center}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 568
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host{display:block}.card{display:flex;flex-direction:var(--card-flex-direction, column);border:var(--card-border, 1px solid #ccc);border-color:var(--card-border-color, #ccc);box-shadow:var(--card-box-shadow, 2px 2px 4px rgba(0, 0, 0, 0.1));border-radius:var(--card-border-radius, 4px);background-color:var(--card-background-color, #fff);color:var(--card-body-color, #4a4a4a);line-height:1.1em;font-family:inherit;overflow:hidden;height:100%;slot[name=image]{display:block;width:var(--card-image-width, 100%);height:var(--card-image-height, auto);order:var(--card-image-order, 0);padding:var(--card-image-calculated-padding, 0);box-sizing:border-box;flex-shrink:0}slot[name=title]{display:block}slot:not([name]){display:block}[slot=title]:empty{display:none}.card__body{display:flex;flex-direction:column;flex:1 1 auto;padding:var(--card-body-calculated-padding, var(--card-padding, 1.25em));order:1}}::slotted([slot=image]),::slotted(.fz-card__image){display:block;width:100%;height:100%;object-fit:var(--card-image-object-fit, cover);border-radius:var(--card-image-border-radius, var(--card-border-radius, 4px));box-sizing:border-box}::slotted([slot=title]){display:block;color:var(--card-title-color, #1a1a1a);font-size:var(--card-title-font-size, 1em);font-weight:var(--card-title-font-weight, 700);letter-spacing:-0.01em;margin-bottom:var(--card-title-margin-bottom, 0.3em)}::slotted(:not([slot=title]):not([slot=image])){color:var(--card-body-color, #4a4a4a);font-size:var(--card-body-font-size, 1em);font-weight:var(--card-body-font-weight, 400);line-height:1.5}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 299
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bg-red{background-color:#fc4e4e}.fg-red{color:#fc4e4e}.bg-light-red{background-color:hsl(0,96.6666666667%,84.7058823529%)}.fg-light-red{color:hsl(0,96.6666666667%,84.7058823529%)}.bg-dark-red{background-color:hsl(0,96.6666666667%,44.7058823529%)}.fg-dark-red{color:hsl(0,96.6666666667%,44.7058823529%)}.bg-blue{background-color:#21add3}.fg-blue{color:#21add3}.bg-light-blue{background-color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.fg-light-blue{color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.bg-dark-blue{background-color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.fg-dark-blue{color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.bg-yellow{background-color:#ffb724}.fg-yellow{color:#ffb724}.bg-light-yellow{background-color:rgb(100%,84.9153908139%,54.1176470588%)}.fg-light-yellow{color:rgb(100%,84.9153908139%,54.1176470588%)}.bg-dark-yellow{background-color:rgb(74.1176470588%,49.7502014504%,0%)}.fg-dark-yellow{color:rgb(74.1176470588%,49.7502014504%,0%)}.bg-green{background-color:#3bbf7e}.fg-green{color:#3bbf7e}.bg-light-green{background-color:hsl(150.4545454545,52.8%,69.0196078431%)}.fg-light-green{color:hsl(150.4545454545,52.8%,69.0196078431%)}.bg-dark-green{background-color:hsl(150.4545454545,52.8%,29.0196078431%)}.fg-dark-green{color:hsl(150.4545454545,52.8%,29.0196078431%)}.bg-purple{background-color:#c36ad1}.fg-purple{color:#c36ad1}.bg-light-purple{background-color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.fg-light-purple{color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.bg-dark-purple{background-color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.fg-dark-purple{color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.bg-brown{background-color:#d06f06}.fg-brown{color:#d06f06}.bg-light-brown{background-color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.fg-light-brown{color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.bg-dark-brown{background-color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.fg-dark-brown{color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.bg-black{background-color:#000}.fg-black{color:#000}.bg-gray-0{background-color:#242424}.fg-gray-0{color:#242424}.bg-gray-1{background-color:#494949}.fg-gray-1{color:#494949}.bg-gray-2{background-color:#6d6d6d}.fg-gray-2{color:#6d6d6d}.bg-gray-3{background-color:#929292}.fg-gray-3{color:#929292}.bg-gray-4{background-color:#b6b6b6}.fg-gray-4{color:#b6b6b6}.bg-gray-5{background-color:#dbdbdb}.fg-gray-5{color:#dbdbdb}.bg-white{background-color:#fff}.fg-white{color:#fff}:host{display:inline-block;position:relative}::slotted([slot=button]){cursor:pointer}::slotted([slot=button]):after{content:"▼";padding-left:10px}div.contents{display:none;position:absolute;top:var(--dropdown-contents-top, 100%);bottom:var(--dropdown-contents-bottom, auto);left:var(--dropdown-contents-left, 0);right:var(--dropdown-contents-right, auto);box-shadow:var(--dropdown-contents-box-shadow, 1.2px 1.2px 4px rgba(0, 0, 0, 0.2));margin:var(--dropdown-contents-margin, 5px 0);background-color:var(--dropdown-contents-background-color, #ffffff);color:var(--dropdown-contents-color, #494949);border-radius:var(--dropdown-contents-border-radius, 3px);border:var(--dropdown-contents-border, 1px solid #dbdbdb);z-index:1000;padding:.5em}div.contents.active{display:block}:host(.fz-dropdown--sharp),:host(.dropdown--sharp),:host(.sharp),:host([sharp]),:host([corner=sharp]),:host([radius=sharp]){--dropdown-contents-border-radius: 0px}:host(.fz-dropdown--subtle),:host(.dropdown--subtle),:host(.subtle),:host([subtle]),:host([corner=subtle]),:host([radius=subtle]){--dropdown-contents-border-radius: 3px}:host(.fz-dropdown--curved),:host(.dropdown--curved),:host(.curved),:host([curved]),:host([corner=curved]),:host([radius=curved]){--dropdown-contents-border-radius: 10px}:host(.fz-dropdown--circle),:host(.dropdown--circle),:host(.circle),:host([circle]),:host([corner=circle]),:host([radius=circle]){--dropdown-contents-border-radius: 50%}:host(.fz-dropdown--layer-0),:host(.dropdown--layer-0),:host(.layer-0),:host([layer="0"]),:host([layer-0]){--dropdown-contents-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2)}:host(.fz-dropdown--layer-1),:host(.dropdown--layer-1),:host(.layer-1),:host([layer="1"]),:host([layer-1]){--dropdown-contents-box-shadow: 1.2px 1.2px 4px rgba(0, 0, 0, 0.2)}:host(.fz-dropdown--layer-2),:host(.dropdown--layer-2),:host(.layer-2),:host([layer="2"]),:host([layer-2]){--dropdown-contents-box-shadow: 3.6px 3.6px 12px rgba(0, 0, 0, 0.2)}:host(.fz-dropdown--layer-3),:host(.dropdown--layer-3),:host(.layer-3),:host([layer="3"]),:host([layer-3]){--dropdown-contents-box-shadow: 10.8px 10.8px 36px rgba(0, 0, 0, 0.2)}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 356
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host{display:block;height:100%}#wrapper{box-sizing:border-box;width:100%;height:100%;display:grid;grid-template-columns:var(--fz-app-frame-sidebar-width, 280px) minmax(0, 1fr);grid-template-rows:auto minmax(0, 1fr) auto;grid-template-areas:"header header" "sidebar main" "footer footer";position:relative;transition:grid-template-columns .25s ease}@media(max-width: 1024px){#wrapper{grid-template-columns:var(--fz-app-frame-sidebar-collapsed-width, 64px) minmax(0, 1fr)}}@media(max-width: 600px){#wrapper{grid-template-columns:minmax(0, 1fr);grid-template-areas:"header" "main" "footer"}}.menu-toggle{display:none;align-items:center;justify-content:center;margin:5px 0;padding:4px;border:0;border-radius:5px;background:rgba(0,0,0,0);color:inherit;cursor:pointer}.menu-toggle:hover{background:rgba(0,0,0,.08)}@media(max-width: 600px){.menu-toggle{display:inline-flex}}.backdrop{display:none}header{grid-area:header;box-sizing:border-box;display:flex;align-items:center;gap:5px;width:100%;padding-left:10px;padding-right:10px}header slot[name=search]::slotted(*){flex-grow:1}header ::slotted(*){margin:5px}aside{grid-area:sidebar;min-width:0;overflow-y:auto;overflow-x:hidden}@media(max-width: 600px){aside{grid-area:main;position:absolute;top:0;bottom:0;left:0;z-index:2;width:var(--fz-app-frame-drawer-width, 280px);max-width:85%;background:var(--fz-app-frame-drawer-bg, #fff);transform:translateX(-100%);visibility:hidden;transition:transform .25s ease,visibility 0s linear .25s,box-shadow .25s ease}}@media(max-width: 600px){:host([open]) aside{transform:translateX(0);visibility:visible;box-shadow:2px 0 8px rgba(0,0,0,.25);transition:transform .25s ease,visibility 0s,box-shadow .25s ease}}@media(max-width: 600px){.backdrop{display:block;grid-area:main;position:absolute;inset:0;z-index:1;background:rgba(0,0,0,.35);opacity:0;pointer-events:none;transition:opacity .25s ease}:host([open]) .backdrop{opacity:1;pointer-events:auto}}@media(prefers-reduced-motion: reduce){#wrapper,aside,.backdrop{transition:none !important}}main{grid-area:main;min-width:0;overflow:auto}footer{grid-area:footer}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 224
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bg-red{background-color:#fc4e4e}.fg-red{color:#fc4e4e}.bg-light-red{background-color:hsl(0,96.6666666667%,84.7058823529%)}.fg-light-red{color:hsl(0,96.6666666667%,84.7058823529%)}.bg-dark-red{background-color:hsl(0,96.6666666667%,44.7058823529%)}.fg-dark-red{color:hsl(0,96.6666666667%,44.7058823529%)}.bg-blue{background-color:#21add3}.fg-blue{color:#21add3}.bg-light-blue{background-color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.fg-light-blue{color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.bg-dark-blue{background-color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.fg-dark-blue{color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.bg-yellow{background-color:#ffb724}.fg-yellow{color:#ffb724}.bg-light-yellow{background-color:rgb(100%,84.9153908139%,54.1176470588%)}.fg-light-yellow{color:rgb(100%,84.9153908139%,54.1176470588%)}.bg-dark-yellow{background-color:rgb(74.1176470588%,49.7502014504%,0%)}.fg-dark-yellow{color:rgb(74.1176470588%,49.7502014504%,0%)}.bg-green{background-color:#3bbf7e}.fg-green{color:#3bbf7e}.bg-light-green{background-color:hsl(150.4545454545,52.8%,69.0196078431%)}.fg-light-green{color:hsl(150.4545454545,52.8%,69.0196078431%)}.bg-dark-green{background-color:hsl(150.4545454545,52.8%,29.0196078431%)}.fg-dark-green{color:hsl(150.4545454545,52.8%,29.0196078431%)}.bg-purple{background-color:#c36ad1}.fg-purple{color:#c36ad1}.bg-light-purple{background-color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.fg-light-purple{color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.bg-dark-purple{background-color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.fg-dark-purple{color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.bg-brown{background-color:#d06f06}.fg-brown{color:#d06f06}.bg-light-brown{background-color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.fg-light-brown{color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.bg-dark-brown{background-color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.fg-dark-brown{color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.bg-black{background-color:#000}.fg-black{color:#000}.bg-gray-0{background-color:#242424}.fg-gray-0{color:#242424}.bg-gray-1{background-color:#494949}.fg-gray-1{color:#494949}.bg-gray-2{background-color:#6d6d6d}.fg-gray-2{color:#6d6d6d}.bg-gray-3{background-color:#929292}.fg-gray-3{color:#929292}.bg-gray-4{background-color:#b6b6b6}.fg-gray-4{color:#b6b6b6}.bg-gray-5{background-color:#dbdbdb}.fg-gray-5{color:#dbdbdb}.bg-white{background-color:#fff}.fg-white{color:#fff}#sidebar{width:100%}:host(.fz-sidebar--red),:host(.red),:host([red]),:host([color=red]){--fz-sidebar-item-selected-bg: rgb(99.7882352941%, 87.5058823529%, 87.5058823529%);--fz-sidebar-item-selected-color: #fc4e4e;--fz-sidebar-item-hover-bg: rgb(99.9058823529%, 94.4470588235%, 94.4470588235%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--light-red),:host(.light-red),:host([light-red]),:host([color=light-red]){--fz-sidebar-item-selected-bg: rgb(99.9082352941%, 94.5858823529%, 94.5858823529%);--fz-sidebar-item-selected-color: rgb(99.4901960784%, 69.9215686275%, 69.9215686275%);--fz-sidebar-item-hover-bg: rgb(99.9592156863%, 97.5937254902%, 97.5937254902%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--dark-red),:host(.dark-red),:host([dark-red]),:host([color=dark-red]){--fz-sidebar-item-selected-bg: rgb(97.8258823529%, 82.2682352941%, 82.2682352941%);--fz-sidebar-item-selected-color: rgb(87.9215686275%, 1.4901960784%, 1.4901960784%);--fz-sidebar-item-hover-bg: rgb(99.0337254902%, 92.1192156863%, 92.1192156863%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--blue),:host(.blue),:host([blue]),:host([color=blue]){--fz-sidebar-item-selected-bg: rgb(84.3294117647%, 94.2117647059%, 96.8941176471%);--fz-sidebar-item-selected-color: #21add3;--fz-sidebar-item-hover-bg: rgb(93.0352941176%, 97.4274509804%, 98.6196078431%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--light-blue),:host(.light-blue),:host([light-blue]),:host([color=light-blue]){--fz-sidebar-item-selected-bg: rgb(89.9891996143%, 96.631436837%, 98.4343297975%);--fz-sidebar-item-selected-color: rgb(44.3844423015%, 81.2857602057%, 91.3018322083%);--fz-sidebar-item-hover-bg: rgb(95.5507553841%, 98.5028608165%, 99.3041465767%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--dark-blue),:host(.dark-blue),:host([dark-blue]),:host([color=dark-blue]){--fz-sidebar-item-selected-bg: rgb(83.3556412729%, 89.1068466731%, 90.6678881389%);--fz-sidebar-item-selected-color: rgb(7.531340405%, 39.4824815172%, 48.1549341048%);--fz-sidebar-item-hover-bg: rgb(92.6025072324%, 95.1585985214%, 95.8523947284%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--yellow),:host(.yellow),:host([yellow]),:host([color=yellow]){--fz-sidebar-item-selected-bg: rgb(100%, 94.9176470588%, 84.5411764706%);--fz-sidebar-item-selected-color: #ffb724;--fz-sidebar-item-hover-bg: rgb(100%, 97.7411764706%, 93.1294117647%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--light-yellow),:host(.light-yellow),:host([light-yellow]),:host([color=light-yellow]){--fz-sidebar-item-selected-bg: rgb(100%, 97.2847703465%, 91.7411764706%);--fz-sidebar-item-selected-color: rgb(100%, 84.9153908139%, 54.1176470588%);--fz-sidebar-item-hover-bg: rgb(100%, 98.7932312651%, 96.3294117647%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--dark-yellow),:host(.dark-yellow),:host([dark-yellow]),:host([color=dark-yellow]){--fz-sidebar-item-selected-bg: rgb(95.3411764706%, 90.9550362611%, 82%);--fz-sidebar-item-selected-color: rgb(74.1176470588%, 49.7502014504%, 0%);--fz-sidebar-item-hover-bg: rgb(97.9294117647%, 95.980016116%, 92%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--green),:host(.green),:host([green]),:host([color=green]){--fz-sidebar-item-selected-bg: rgb(86.1647058824%, 95.4823529412%, 90.8941176471%);--fz-sidebar-item-selected-color: #3bbf7e;--fz-sidebar-item-hover-bg: rgb(93.8509803922%, 97.9921568627%, 95.9529411765%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--light-green),:host(.light-green),:host([light-green]),:host([color=light-green]){--fz-sidebar-item-selected-bg: rgb(91.4791529412%, 97.3679058824%, 94.4681411765%);--fz-sidebar-item-selected-color: rgb(52.6619607843%, 85.377254902%, 69.2674509804%);--fz-sidebar-item-hover-bg: rgb(96.2129568627%, 98.8301803922%, 97.5413960784%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--dark-green),:host(.dark-green),:host([dark-green]),:host([color=dark-green]){--fz-sidebar-item-selected-bg: rgb(84.4655058824%, 89.9815529412%, 87.2653176471%);--fz-sidebar-item-selected-color: rgb(13.697254902%, 44.3419607843%, 29.2517647059%);--fz-sidebar-item-hover-bg: rgb(93.0957803922%, 95.5473568627%, 94.3401411765%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--purple),:host(.purple),:host([purple]),:host([color=purple]){--fz-sidebar-item-selected-bg: rgb(95.7647058824%, 89.4823529412%, 96.7529411765%);--fz-sidebar-item-selected-color: #c36ad1;--fz-sidebar-item-hover-bg: rgb(98.1176470588%, 95.3254901961%, 98.5568627451%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--light-purple),:host(.light-purple),:host([light-purple]),:host([color=light-purple]){--fz-sidebar-item-selected-bg: rgb(97.9800904977%, 94.9838914027%, 98.4514027149%);--fz-sidebar-item-selected-color: rgb(88.778280543%, 72.1327300151%, 91.3966817496%);--fz-sidebar-item-hover-bg: rgb(99.1022624434%, 97.7706184012%, 99.31173454%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--dark-purple),:host(.dark-purple),:host([dark-purple]),:host([color=dark-purple]){--fz-sidebar-item-selected-bg: rgb(92.4090497738%, 85.5467873303%, 93.4885067873%);--fz-sidebar-item-selected-color: rgb(57.8280542986%, 19.7043740573%, 63.8250377074%);--fz-sidebar-item-hover-bg: rgb(96.6262443439%, 93.5763499246%, 97.1060030166%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--brown),:host(.brown),:host([brown]),:host([color=brown]){--fz-sidebar-item-selected-bg: rgb(96.6823529412%, 89.8352941176%, 82.4235294118%);--fz-sidebar-item-selected-color: #d06f06;--fz-sidebar-item-hover-bg: rgb(98.5254901961%, 95.4823529412%, 92.1882352941%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--light-brown),:host(.light-brown),:host([light-brown]),:host([color=light-brown]){--fz-sidebar-item-selected-bg: rgb(99.6160527763%, 93.4089059923%, 86.6898295767%);--fz-sidebar-item-selected-color: rgb(97.8669598681%, 63.3828110684%, 26.0546087594%);--fz-sidebar-item-hover-bg: rgb(99.8293567894%, 97.0706248855%, 94.0843687008%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--dark-brown),:host(.dark-brown),:host([dark-brown]),:host([color=dark-brown]){--fz-sidebar-item-selected-bg: rgb(89.6842221001%, 86.1007146784%, 82.2216602529%);--fz-sidebar-item-selected-color: rgb(42.6901227781%, 22.7817482133%, 1.2314458494%);--fz-sidebar-item-hover-bg: rgb(95.4152098222%, 93.8225398571%, 92.0985156679%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--black),:host(.black),:host([black]),:host([color=black]){--fz-sidebar-item-selected-bg: rgb(82%, 82%, 82%);--fz-sidebar-item-selected-color: black;--fz-sidebar-item-hover-bg: rgb(92%, 92%, 92%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--gray-0),:host(.gray-0),:host([gray-0]),:host([color=gray-0]){--fz-sidebar-item-selected-bg: rgb(84.5411764706%, 84.5411764706%, 84.5411764706%);--fz-sidebar-item-selected-color: #242424;--fz-sidebar-item-hover-bg: rgb(93.1294117647%, 93.1294117647%, 93.1294117647%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--gray-1),:host(.gray-1),:host([gray-1]),:host([color=gray-1]){--fz-sidebar-item-selected-bg: rgb(87.1529411765%, 87.1529411765%, 87.1529411765%);--fz-sidebar-item-selected-color: #494949;--fz-sidebar-item-hover-bg: rgb(94.2901960784%, 94.2901960784%, 94.2901960784%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--gray-2),:host(.gray-2),:host([gray-2]),:host([color=gray-2]){--fz-sidebar-item-selected-bg: rgb(89.6941176471%, 89.6941176471%, 89.6941176471%);--fz-sidebar-item-selected-color: #6d6d6d;--fz-sidebar-item-hover-bg: rgb(95.4196078431%, 95.4196078431%, 95.4196078431%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--gray-3),:host(.gray-3),:host([gray-3]),:host([color=gray-3]){--fz-sidebar-item-selected-bg: rgb(92.3058823529%, 92.3058823529%, 92.3058823529%);--fz-sidebar-item-selected-color: #929292;--fz-sidebar-item-hover-bg: rgb(96.5803921569%, 96.5803921569%, 96.5803921569%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--gray-4),:host(.gray-4),:host([gray-4]),:host([color=gray-4]){--fz-sidebar-item-selected-bg: rgb(94.8470588235%, 94.8470588235%, 94.8470588235%);--fz-sidebar-item-selected-color: #b6b6b6;--fz-sidebar-item-hover-bg: rgb(97.7098039216%, 97.7098039216%, 97.7098039216%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--gray-5),:host(.gray-5),:host([gray-5]),:host([color=gray-5]){--fz-sidebar-item-selected-bg: rgb(97.4588235294%, 97.4588235294%, 97.4588235294%);--fz-sidebar-item-selected-color: #dbdbdb;--fz-sidebar-item-hover-bg: rgb(98.8705882353%, 98.8705882353%, 98.8705882353%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar--white),:host(.white),:host([white]),:host([color=white]){--fz-sidebar-item-selected-bg: white;--fz-sidebar-item-selected-color: white;--fz-sidebar-item-hover-bg: white;--fz-sidebar-item-hover-color: black}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 680
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bg-red{background-color:#fc4e4e}.fg-red{color:#fc4e4e}.bg-light-red{background-color:hsl(0,96.6666666667%,84.7058823529%)}.fg-light-red{color:hsl(0,96.6666666667%,84.7058823529%)}.bg-dark-red{background-color:hsl(0,96.6666666667%,44.7058823529%)}.fg-dark-red{color:hsl(0,96.6666666667%,44.7058823529%)}.bg-blue{background-color:#21add3}.fg-blue{color:#21add3}.bg-light-blue{background-color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.fg-light-blue{color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.bg-dark-blue{background-color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.fg-dark-blue{color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.bg-yellow{background-color:#ffb724}.fg-yellow{color:#ffb724}.bg-light-yellow{background-color:rgb(100%,84.9153908139%,54.1176470588%)}.fg-light-yellow{color:rgb(100%,84.9153908139%,54.1176470588%)}.bg-dark-yellow{background-color:rgb(74.1176470588%,49.7502014504%,0%)}.fg-dark-yellow{color:rgb(74.1176470588%,49.7502014504%,0%)}.bg-green{background-color:#3bbf7e}.fg-green{color:#3bbf7e}.bg-light-green{background-color:hsl(150.4545454545,52.8%,69.0196078431%)}.fg-light-green{color:hsl(150.4545454545,52.8%,69.0196078431%)}.bg-dark-green{background-color:hsl(150.4545454545,52.8%,29.0196078431%)}.fg-dark-green{color:hsl(150.4545454545,52.8%,29.0196078431%)}.bg-purple{background-color:#c36ad1}.fg-purple{color:#c36ad1}.bg-light-purple{background-color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.fg-light-purple{color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.bg-dark-purple{background-color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.fg-dark-purple{color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.bg-brown{background-color:#d06f06}.fg-brown{color:#d06f06}.bg-light-brown{background-color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.fg-light-brown{color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.bg-dark-brown{background-color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.fg-dark-brown{color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.bg-black{background-color:#000}.fg-black{color:#000}.bg-gray-0{background-color:#242424}.fg-gray-0{color:#242424}.bg-gray-1{background-color:#494949}.fg-gray-1{color:#494949}.bg-gray-2{background-color:#6d6d6d}.fg-gray-2{color:#6d6d6d}.bg-gray-3{background-color:#929292}.fg-gray-3{color:#929292}.bg-gray-4{background-color:#b6b6b6}.fg-gray-4{color:#b6b6b6}.bg-gray-5{background-color:#dbdbdb}.fg-gray-5{color:#dbdbdb}.bg-white{background-color:#fff}.fg-white{color:#fff}:host{display:block;box-sizing:border-box}.sidebar-item:hover{background-color:var(--fz-sidebar-item-hover-bg, rgb(93.0352941176%, 97.4274509804%, 98.6196078431%));color:var(--fz-sidebar-item-hover-color, black);border-radius:var(--fz-sidebar-item-selected-radius, 5px)}:host([selected]) .sidebar-item{background-color:var(--fz-sidebar-item-selected-bg, rgb(84.3294117647%, 94.2117647059%, 96.8941176471%));color:var(--fz-sidebar-item-selected-color, #21add3);border-radius:var(--fz-sidebar-item-selected-radius, 5px);font-weight:var(--fz-sidebar-item-selected-font-weight, 600)}:host(.fz-sidebar-item--red),:host(.red),:host([red]),:host([color=red]){--fz-sidebar-item-selected-bg: rgb(99.7882352941%, 87.5058823529%, 87.5058823529%);--fz-sidebar-item-selected-color: #fc4e4e;--fz-sidebar-item-hover-bg: rgb(99.9058823529%, 94.4470588235%, 94.4470588235%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--light-red),:host(.light-red),:host([light-red]),:host([color=light-red]){--fz-sidebar-item-selected-bg: rgb(99.9082352941%, 94.5858823529%, 94.5858823529%);--fz-sidebar-item-selected-color: rgb(99.4901960784%, 69.9215686275%, 69.9215686275%);--fz-sidebar-item-hover-bg: rgb(99.9592156863%, 97.5937254902%, 97.5937254902%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--dark-red),:host(.dark-red),:host([dark-red]),:host([color=dark-red]){--fz-sidebar-item-selected-bg: rgb(97.8258823529%, 82.2682352941%, 82.2682352941%);--fz-sidebar-item-selected-color: rgb(87.9215686275%, 1.4901960784%, 1.4901960784%);--fz-sidebar-item-hover-bg: rgb(99.0337254902%, 92.1192156863%, 92.1192156863%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--blue),:host(.blue),:host([blue]),:host([color=blue]){--fz-sidebar-item-selected-bg: rgb(84.3294117647%, 94.2117647059%, 96.8941176471%);--fz-sidebar-item-selected-color: #21add3;--fz-sidebar-item-hover-bg: rgb(93.0352941176%, 97.4274509804%, 98.6196078431%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--light-blue),:host(.light-blue),:host([light-blue]),:host([color=light-blue]){--fz-sidebar-item-selected-bg: rgb(89.9891996143%, 96.631436837%, 98.4343297975%);--fz-sidebar-item-selected-color: rgb(44.3844423015%, 81.2857602057%, 91.3018322083%);--fz-sidebar-item-hover-bg: rgb(95.5507553841%, 98.5028608165%, 99.3041465767%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--dark-blue),:host(.dark-blue),:host([dark-blue]),:host([color=dark-blue]){--fz-sidebar-item-selected-bg: rgb(83.3556412729%, 89.1068466731%, 90.6678881389%);--fz-sidebar-item-selected-color: rgb(7.531340405%, 39.4824815172%, 48.1549341048%);--fz-sidebar-item-hover-bg: rgb(92.6025072324%, 95.1585985214%, 95.8523947284%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--yellow),:host(.yellow),:host([yellow]),:host([color=yellow]){--fz-sidebar-item-selected-bg: rgb(100%, 94.9176470588%, 84.5411764706%);--fz-sidebar-item-selected-color: #ffb724;--fz-sidebar-item-hover-bg: rgb(100%, 97.7411764706%, 93.1294117647%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--light-yellow),:host(.light-yellow),:host([light-yellow]),:host([color=light-yellow]){--fz-sidebar-item-selected-bg: rgb(100%, 97.2847703465%, 91.7411764706%);--fz-sidebar-item-selected-color: rgb(100%, 84.9153908139%, 54.1176470588%);--fz-sidebar-item-hover-bg: rgb(100%, 98.7932312651%, 96.3294117647%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--dark-yellow),:host(.dark-yellow),:host([dark-yellow]),:host([color=dark-yellow]){--fz-sidebar-item-selected-bg: rgb(95.3411764706%, 90.9550362611%, 82%);--fz-sidebar-item-selected-color: rgb(74.1176470588%, 49.7502014504%, 0%);--fz-sidebar-item-hover-bg: rgb(97.9294117647%, 95.980016116%, 92%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--green),:host(.green),:host([green]),:host([color=green]){--fz-sidebar-item-selected-bg: rgb(86.1647058824%, 95.4823529412%, 90.8941176471%);--fz-sidebar-item-selected-color: #3bbf7e;--fz-sidebar-item-hover-bg: rgb(93.8509803922%, 97.9921568627%, 95.9529411765%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--light-green),:host(.light-green),:host([light-green]),:host([color=light-green]){--fz-sidebar-item-selected-bg: rgb(91.4791529412%, 97.3679058824%, 94.4681411765%);--fz-sidebar-item-selected-color: rgb(52.6619607843%, 85.377254902%, 69.2674509804%);--fz-sidebar-item-hover-bg: rgb(96.2129568627%, 98.8301803922%, 97.5413960784%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--dark-green),:host(.dark-green),:host([dark-green]),:host([color=dark-green]){--fz-sidebar-item-selected-bg: rgb(84.4655058824%, 89.9815529412%, 87.2653176471%);--fz-sidebar-item-selected-color: rgb(13.697254902%, 44.3419607843%, 29.2517647059%);--fz-sidebar-item-hover-bg: rgb(93.0957803922%, 95.5473568627%, 94.3401411765%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--purple),:host(.purple),:host([purple]),:host([color=purple]){--fz-sidebar-item-selected-bg: rgb(95.7647058824%, 89.4823529412%, 96.7529411765%);--fz-sidebar-item-selected-color: #c36ad1;--fz-sidebar-item-hover-bg: rgb(98.1176470588%, 95.3254901961%, 98.5568627451%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--light-purple),:host(.light-purple),:host([light-purple]),:host([color=light-purple]){--fz-sidebar-item-selected-bg: rgb(97.9800904977%, 94.9838914027%, 98.4514027149%);--fz-sidebar-item-selected-color: rgb(88.778280543%, 72.1327300151%, 91.3966817496%);--fz-sidebar-item-hover-bg: rgb(99.1022624434%, 97.7706184012%, 99.31173454%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--dark-purple),:host(.dark-purple),:host([dark-purple]),:host([color=dark-purple]){--fz-sidebar-item-selected-bg: rgb(92.4090497738%, 85.5467873303%, 93.4885067873%);--fz-sidebar-item-selected-color: rgb(57.8280542986%, 19.7043740573%, 63.8250377074%);--fz-sidebar-item-hover-bg: rgb(96.6262443439%, 93.5763499246%, 97.1060030166%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--brown),:host(.brown),:host([brown]),:host([color=brown]){--fz-sidebar-item-selected-bg: rgb(96.6823529412%, 89.8352941176%, 82.4235294118%);--fz-sidebar-item-selected-color: #d06f06;--fz-sidebar-item-hover-bg: rgb(98.5254901961%, 95.4823529412%, 92.1882352941%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--light-brown),:host(.light-brown),:host([light-brown]),:host([color=light-brown]){--fz-sidebar-item-selected-bg: rgb(99.6160527763%, 93.4089059923%, 86.6898295767%);--fz-sidebar-item-selected-color: rgb(97.8669598681%, 63.3828110684%, 26.0546087594%);--fz-sidebar-item-hover-bg: rgb(99.8293567894%, 97.0706248855%, 94.0843687008%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--dark-brown),:host(.dark-brown),:host([dark-brown]),:host([color=dark-brown]){--fz-sidebar-item-selected-bg: rgb(89.6842221001%, 86.1007146784%, 82.2216602529%);--fz-sidebar-item-selected-color: rgb(42.6901227781%, 22.7817482133%, 1.2314458494%);--fz-sidebar-item-hover-bg: rgb(95.4152098222%, 93.8225398571%, 92.0985156679%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--black),:host(.black),:host([black]),:host([color=black]){--fz-sidebar-item-selected-bg: rgb(82%, 82%, 82%);--fz-sidebar-item-selected-color: black;--fz-sidebar-item-hover-bg: rgb(92%, 92%, 92%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--gray-0),:host(.gray-0),:host([gray-0]),:host([color=gray-0]){--fz-sidebar-item-selected-bg: rgb(84.5411764706%, 84.5411764706%, 84.5411764706%);--fz-sidebar-item-selected-color: #242424;--fz-sidebar-item-hover-bg: rgb(93.1294117647%, 93.1294117647%, 93.1294117647%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--gray-1),:host(.gray-1),:host([gray-1]),:host([color=gray-1]){--fz-sidebar-item-selected-bg: rgb(87.1529411765%, 87.1529411765%, 87.1529411765%);--fz-sidebar-item-selected-color: #494949;--fz-sidebar-item-hover-bg: rgb(94.2901960784%, 94.2901960784%, 94.2901960784%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--gray-2),:host(.gray-2),:host([gray-2]),:host([color=gray-2]){--fz-sidebar-item-selected-bg: rgb(89.6941176471%, 89.6941176471%, 89.6941176471%);--fz-sidebar-item-selected-color: #6d6d6d;--fz-sidebar-item-hover-bg: rgb(95.4196078431%, 95.4196078431%, 95.4196078431%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--gray-3),:host(.gray-3),:host([gray-3]),:host([color=gray-3]){--fz-sidebar-item-selected-bg: rgb(92.3058823529%, 92.3058823529%, 92.3058823529%);--fz-sidebar-item-selected-color: #929292;--fz-sidebar-item-hover-bg: rgb(96.5803921569%, 96.5803921569%, 96.5803921569%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--gray-4),:host(.gray-4),:host([gray-4]),:host([color=gray-4]){--fz-sidebar-item-selected-bg: rgb(94.8470588235%, 94.8470588235%, 94.8470588235%);--fz-sidebar-item-selected-color: #b6b6b6;--fz-sidebar-item-hover-bg: rgb(97.7098039216%, 97.7098039216%, 97.7098039216%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--gray-5),:host(.gray-5),:host([gray-5]),:host([color=gray-5]){--fz-sidebar-item-selected-bg: rgb(97.4588235294%, 97.4588235294%, 97.4588235294%);--fz-sidebar-item-selected-color: #dbdbdb;--fz-sidebar-item-hover-bg: rgb(98.8705882353%, 98.8705882353%, 98.8705882353%);--fz-sidebar-item-hover-color: black}:host(.fz-sidebar-item--white),:host(.white),:host([white]),:host([color=white]){--fz-sidebar-item-selected-bg: white;--fz-sidebar-item-selected-color: white;--fz-sidebar-item-hover-bg: white;--fz-sidebar-item-hover-color: black}.sidebar-item__children{display:none;padding-left:var(--fz-sidebar-item-children-indent, 16px)}:host([expanded]) .sidebar-item__children{display:block}.sidebar-item__caret{display:none;margin-left:auto;width:0;height:0;border-top:4px solid rgba(0,0,0,0);border-bottom:4px solid rgba(0,0,0,0);border-left:5px solid currentColor;transition:transform .15s ease}:host([has-children]) .sidebar-item{cursor:pointer;user-select:none}:host([has-children]) .sidebar-item__caret{display:inline-block}:host([expanded]) .sidebar-item__caret{transform:rotate(90deg)}.sidebar-item{box-sizing:border-box;display:flex;align-items:center;vertical-align:middle;gap:5px;margin:var(--fz-sidebar-item-margin, 2px 6px);padding:var(--fz-sidebar-item-padding, 7px 15px)}.sidebar-item slot[name=icon],.sidebar-item .sidebar-item__icon,.sidebar-item .sidebar-item-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}.sidebar-item slot[name=icon]::slotted(*),.sidebar-item .sidebar-item__icon::slotted(*),.sidebar-item .sidebar-item-icon::slotted(*){display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}.sidebar-item slot:not([name]),.sidebar-item .sidebar-item-label,.sidebar-item .sidebar-item__label,.sidebar-item label{display:inline-flex;align-items:center;vertical-align:middle;padding:var(--fz-sidebar-item-label-padding, 3px 6px)}.sidebar-item slot:not([name])::slotted(*),.sidebar-item .sidebar-item-label::slotted(*),.sidebar-item .sidebar-item__label::slotted(*),.sidebar-item label::slotted(*){display:inline-flex;align-items:center;vertical-align:middle}.sidebar-item ::slotted(span:not([slot=icon])),.sidebar-item ::slotted(label),.sidebar-item ::slotted(.sidebar-item-label),.sidebar-item ::slotted(.label){display:inline-flex;align-items:center;vertical-align:middle;padding:var(--fz-sidebar-item-label-padding, 3px 6px)}.sidebar-item ::slotted(fz-sidebar),.sidebar-item ::slotted(.sidebar){display:none !important}.sidebar-item{transition:gap .25s ease,padding .25s ease}.sidebar-item slot:not([name]){max-width:240px;overflow:hidden;white-space:nowrap;opacity:1;transition:max-width .25s ease,opacity .15s ease,padding .25s ease}.sidebar-item ::slotted([slot=icon]){transition:font-size .25s ease}@media(min-width: 601px)and (max-width: 1024px){.sidebar-item{justify-content:center;gap:0}.sidebar-item slot:not([name]){max-width:0;opacity:0;padding-left:0;padding-right:0}.sidebar-item ::slotted([slot=icon]){font-size:var(--fz-sidebar-item-compact-icon-size, 28px) !important}:host([has-children]) .sidebar-item__caret{display:none}.sidebar-item__children{padding-left:0}}@media(prefers-reduced-motion: reduce){.sidebar-item,.sidebar-item slot:not([name]),.sidebar-item ::slotted([slot=icon]){transition:none}}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 489
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bg-red{background-color:#fc4e4e}.fg-red{color:#fc4e4e}.bg-light-red{background-color:hsl(0,96.6666666667%,84.7058823529%)}.fg-light-red{color:hsl(0,96.6666666667%,84.7058823529%)}.bg-dark-red{background-color:hsl(0,96.6666666667%,44.7058823529%)}.fg-dark-red{color:hsl(0,96.6666666667%,44.7058823529%)}.bg-blue{background-color:#21add3}.fg-blue{color:#21add3}.bg-light-blue{background-color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.fg-light-blue{color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.bg-dark-blue{background-color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.fg-dark-blue{color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.bg-yellow{background-color:#ffb724}.fg-yellow{color:#ffb724}.bg-light-yellow{background-color:rgb(100%,84.9153908139%,54.1176470588%)}.fg-light-yellow{color:rgb(100%,84.9153908139%,54.1176470588%)}.bg-dark-yellow{background-color:rgb(74.1176470588%,49.7502014504%,0%)}.fg-dark-yellow{color:rgb(74.1176470588%,49.7502014504%,0%)}.bg-green{background-color:#3bbf7e}.fg-green{color:#3bbf7e}.bg-light-green{background-color:hsl(150.4545454545,52.8%,69.0196078431%)}.fg-light-green{color:hsl(150.4545454545,52.8%,69.0196078431%)}.bg-dark-green{background-color:hsl(150.4545454545,52.8%,29.0196078431%)}.fg-dark-green{color:hsl(150.4545454545,52.8%,29.0196078431%)}.bg-purple{background-color:#c36ad1}.fg-purple{color:#c36ad1}.bg-light-purple{background-color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.fg-light-purple{color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.bg-dark-purple{background-color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.fg-dark-purple{color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.bg-brown{background-color:#d06f06}.fg-brown{color:#d06f06}.bg-light-brown{background-color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.fg-light-brown{color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.bg-dark-brown{background-color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.fg-dark-brown{color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.bg-black{background-color:#000}.fg-black{color:#000}.bg-gray-0{background-color:#242424}.fg-gray-0{color:#242424}.bg-gray-1{background-color:#494949}.fg-gray-1{color:#494949}.bg-gray-2{background-color:#6d6d6d}.fg-gray-2{color:#6d6d6d}.bg-gray-3{background-color:#929292}.fg-gray-3{color:#929292}.bg-gray-4{background-color:#b6b6b6}.fg-gray-4{color:#b6b6b6}.bg-gray-5{background-color:#dbdbdb}.fg-gray-5{color:#dbdbdb}.bg-white{background-color:#fff}.fg-white{color:#fff}:host{display:block}:host([hidden]){display:none}.menu-item{display:flex;align-items:center;padding:var(--fz-menu-item-padding, 6px 12px);font-size:var(--fz-menu-item-font-size, 14px);color:var(--fz-menu-item-color, #6d6d6d);cursor:pointer;white-space:nowrap;user-select:none;transition:background-color .15s ease,color .15s ease}.menu-item:hover{background-color:var(--fz-menu-item-hover-bg, rgb(93.8823529412%, 93.8823529412%, 93.8823529412%));color:var(--fz-menu-item-hover-color, #242424)}:host([disabled]) .menu-item{color:var(--fz-menu-item-disabled-color, #b6b6b6);cursor:not-allowed;background-color:rgba(0,0,0,0);pointer-events:none}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 305
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bg-red{background-color:#fc4e4e}.fg-red{color:#fc4e4e}.bg-light-red{background-color:hsl(0,96.6666666667%,84.7058823529%)}.fg-light-red{color:hsl(0,96.6666666667%,84.7058823529%)}.bg-dark-red{background-color:hsl(0,96.6666666667%,44.7058823529%)}.fg-dark-red{color:hsl(0,96.6666666667%,44.7058823529%)}.bg-blue{background-color:#21add3}.fg-blue{color:#21add3}.bg-light-blue{background-color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.fg-light-blue{color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.bg-dark-blue{background-color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.fg-dark-blue{color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.bg-yellow{background-color:#ffb724}.fg-yellow{color:#ffb724}.bg-light-yellow{background-color:rgb(100%,84.9153908139%,54.1176470588%)}.fg-light-yellow{color:rgb(100%,84.9153908139%,54.1176470588%)}.bg-dark-yellow{background-color:rgb(74.1176470588%,49.7502014504%,0%)}.fg-dark-yellow{color:rgb(74.1176470588%,49.7502014504%,0%)}.bg-green{background-color:#3bbf7e}.fg-green{color:#3bbf7e}.bg-light-green{background-color:hsl(150.4545454545,52.8%,69.0196078431%)}.fg-light-green{color:hsl(150.4545454545,52.8%,69.0196078431%)}.bg-dark-green{background-color:hsl(150.4545454545,52.8%,29.0196078431%)}.fg-dark-green{color:hsl(150.4545454545,52.8%,29.0196078431%)}.bg-purple{background-color:#c36ad1}.fg-purple{color:#c36ad1}.bg-light-purple{background-color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.fg-light-purple{color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.bg-dark-purple{background-color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.fg-dark-purple{color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.bg-brown{background-color:#d06f06}.fg-brown{color:#d06f06}.bg-light-brown{background-color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.fg-light-brown{color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.bg-dark-brown{background-color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.fg-dark-brown{color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.bg-black{background-color:#000}.fg-black{color:#000}.bg-gray-0{background-color:#242424}.fg-gray-0{color:#242424}.bg-gray-1{background-color:#494949}.fg-gray-1{color:#494949}.bg-gray-2{background-color:#6d6d6d}.fg-gray-2{color:#6d6d6d}.bg-gray-3{background-color:#929292}.fg-gray-3{color:#929292}.bg-gray-4{background-color:#b6b6b6}.fg-gray-4{color:#b6b6b6}.bg-gray-5{background-color:#dbdbdb}.fg-gray-5{color:#dbdbdb}.bg-white{background-color:#fff}.fg-white{color:#fff}:host{display:block;user-select:none;pointer-events:none}.menu-separator{height:1px;margin:var(--fz-menu-separator-margin, 4px 0);background-color:var(--fz-menu-separator-color, #dbdbdb);border:none}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 531
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(601);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(314);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bg-red{background-color:#fc4e4e}.fg-red{color:#fc4e4e}.bg-light-red{background-color:hsl(0,96.6666666667%,84.7058823529%)}.fg-light-red{color:hsl(0,96.6666666667%,84.7058823529%)}.bg-dark-red{background-color:hsl(0,96.6666666667%,44.7058823529%)}.fg-dark-red{color:hsl(0,96.6666666667%,44.7058823529%)}.bg-blue{background-color:#21add3}.fg-blue{color:#21add3}.bg-light-blue{background-color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.fg-light-blue{color:rgb(44.3844423015%,81.2857602057%,91.3018322083%)}.bg-dark-blue{background-color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.fg-dark-blue{color:rgb(7.531340405%,39.4824815172%,48.1549341048%)}.bg-yellow{background-color:#ffb724}.fg-yellow{color:#ffb724}.bg-light-yellow{background-color:rgb(100%,84.9153908139%,54.1176470588%)}.fg-light-yellow{color:rgb(100%,84.9153908139%,54.1176470588%)}.bg-dark-yellow{background-color:rgb(74.1176470588%,49.7502014504%,0%)}.fg-dark-yellow{color:rgb(74.1176470588%,49.7502014504%,0%)}.bg-green{background-color:#3bbf7e}.fg-green{color:#3bbf7e}.bg-light-green{background-color:hsl(150.4545454545,52.8%,69.0196078431%)}.fg-light-green{color:hsl(150.4545454545,52.8%,69.0196078431%)}.bg-dark-green{background-color:hsl(150.4545454545,52.8%,29.0196078431%)}.fg-dark-green{color:hsl(150.4545454545,52.8%,29.0196078431%)}.bg-purple{background-color:#c36ad1}.fg-purple{color:#c36ad1}.bg-light-purple{background-color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.fg-light-purple{color:rgb(88.778280543%,72.1327300151%,91.3966817496%)}.bg-dark-purple{background-color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.fg-dark-purple{color:rgb(57.8280542986%,19.7043740573%,63.8250377074%)}.bg-brown{background-color:#d06f06}.fg-brown{color:#d06f06}.bg-light-brown{background-color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.fg-light-brown{color:rgb(97.8669598681%,63.3828110684%,26.0546087594%)}.bg-dark-brown{background-color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.fg-dark-brown{color:rgb(42.6901227781%,22.7817482133%,1.2314458494%)}.bg-black{background-color:#000}.fg-black{color:#000}.bg-gray-0{background-color:#242424}.fg-gray-0{color:#242424}.bg-gray-1{background-color:#494949}.fg-gray-1{color:#494949}.bg-gray-2{background-color:#6d6d6d}.fg-gray-2{color:#6d6d6d}.bg-gray-3{background-color:#929292}.fg-gray-3{color:#929292}.bg-gray-4{background-color:#b6b6b6}.fg-gray-4{color:#b6b6b6}.bg-gray-5{background-color:#dbdbdb}.fg-gray-5{color:#dbdbdb}.bg-white{background-color:#fff}.fg-white{color:#fff}:host{display:block}.menu{display:flex;flex-direction:column;padding:var(--fz-menu-padding, 0px);margin:0;list-style:none;background-color:var(--fz-menu-bg, transparent);min-width:var(--fz-menu-min-width, 140px)}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ 314
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ 601
(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ 947
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(703);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 732
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(568);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 319
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(299);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 368
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(356);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 780
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(224);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 743
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(680);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 253
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(489);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 797
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(305);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 327
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(531);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  initialize: () => (/* binding */ initialize)
});

// EXTERNAL MODULE: ./js/components/cards/cards.css
var cards = __webpack_require__(732);
;// ./js/components/cards/cards.js


class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}).innerHTML = 
            `<style>
                ${cards}
            </style>
            <div class="card">
                <slot name="image"></slot>
                <div class="card__body">
                    <slot name="title"></slot>
                    <slot></slot>
                </div>
            </div>`
    }
}

// EXTERNAL MODULE: ./js/components/dropdown/dropdown.scss
var dropdown = __webpack_require__(319);
;// ./js/components/dropdown/dropdown.js


class DropdownComponent extends HTMLElement {
    #button
    #contents

    #onDocumentClick = (event) => {
        if (!event.composedPath().includes(this)) {
            this.close()
        }
    }

    constructor() {
        super()
        this.attachShadow({mode: 'open'}).innerHTML =
            `<style>
                ${dropdown}
            </style>
            <div class="dropdown">
                <slot name="button"></slot>
                <div class="contents">
                    <slot></slot>
                </div>
            </div>`

        this.#button = this.shadowRoot.querySelector('slot[name="button"]')
        this.#contents = this.shadowRoot.querySelector('.contents')
    }

    connectedCallback() {
        this.#button.addEventListener('click', this.#onButtonClick)
    }

    disconnectedCallback() {
        this.#button.removeEventListener('click', this.#onButtonClick)
        this.close()
    }

    #onButtonClick = () => {
        this.toggle()
    }

    open() {
        this.#contents.classList.add('active')
        document.addEventListener('click', this.#onDocumentClick)
    }

    close() {
        this.#contents.classList.remove('active')
        document.removeEventListener('click', this.#onDocumentClick)
    }

    toggle() {
        if (this.#contents.classList.contains('active')) {
            this.close()
        } else {
            this.open()
        }
    }
}

// EXTERNAL MODULE: ./js/components/menu/menu.scss
var menu = __webpack_require__(327);
// EXTERNAL MODULE: ./js/components/menu/menu-item.scss
var menu_item = __webpack_require__(253);
// EXTERNAL MODULE: ./js/components/menu/menu-separator.scss
var menu_separator = __webpack_require__(797);
;// ./js/components/menu/menu.js




class MenuComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>
                ${menu}
            </style>
            <div class="menu" role="menu">
                <slot></slot>
            </div>`
    }
}

class MenuItemComponent extends HTMLElement {
    #parentMenu = null

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>
                ${menu_item}
            </style>
            <div class="menu-item" role="menuitem">
                <slot></slot>
            </div>`
    }

    connectedCallback() {
        this.#parentMenu = this.closest('fz-menu')
        if (!this.#parentMenu) {
            console.warn('<fz-menu-item> should be nested inside an <fz-menu>.', this)
        }

        if (this.hasAttribute('disabled')) {
            this.setAttribute('aria-disabled', 'true')
        }
    }
}

class MenuSeparatorComponent extends HTMLElement {
    #parentMenu = null

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>
                ${menu_separator}
            </style>
            <hr class="menu-separator" role="separator" aria-orientation="horizontal" />`
    }

    connectedCallback() {
        this.#parentMenu = this.closest('fz-menu')
        if (!this.#parentMenu) {
            console.warn('<fz-menu-separator> should be nested inside an <fz-menu>.', this)
        }
    }
}

// EXTERNAL MODULE: ./js/components/layouts/appframe.scss
var appframe = __webpack_require__(368);
// EXTERNAL MODULE: ./js/components/layouts/sidebar.scss
var sidebar = __webpack_require__(780);
// EXTERNAL MODULE: ./js/components/layouts/sidebaritem.scss
var sidebaritem = __webpack_require__(743);
;// ./js/components/layouts/layouts.js




class AppFrameComponent extends HTMLElement {
    #toggle
    #backdrop
    #mediaQuery = window.matchMedia('(max-width: 600px)')

    static get observedAttributes() {
        return ['open']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>${appframe}</style>
            <div id="wrapper">
                <header>
                    <button type="button" class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
                        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
                        </svg>
                    </button>
                    <slot name="logo"></slot>
                    <slot name="search"></slot>
                    <slot name="topnav"></slot>
                </header>
                <aside>
                    <slot name="sidebar"></slot>
                </aside>
                <div class="backdrop"></div>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>`

        this.#toggle = this.shadowRoot.querySelector('.menu-toggle')
        this.#backdrop = this.shadowRoot.querySelector('.backdrop')

        this.#toggle.addEventListener('click', () => { this.open = !this.open })
        this.#backdrop.addEventListener('click', () => { this.open = false })
        this.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.open) {
                this.open = false
                this.#toggle.focus()
            }
        })
    }

    // Whether the off-canvas sidebar is open (only meaningful on narrow viewports).
    get open() {
        return this.hasAttribute('open')
    }

    set open(value) {
        this.toggleAttribute('open', Boolean(value))
    }

    connectedCallback() {
        this.#mediaQuery.addEventListener('change', this.#onViewportChange)
    }

    disconnectedCallback() {
        this.#mediaQuery.removeEventListener('change', this.#onViewportChange)
    }

    attributeChangedCallback(name) {
        if (name === 'open') {
            this.#toggle.setAttribute('aria-expanded', String(this.open))
        }
    }

    // Leaving the narrow layout always resets the drawer to closed.
    #onViewportChange = () => {
        this.open = false
    }
}

class SidebarComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>${sidebar}</style>
            <div id="sidebar">
                <slot></slot>
            </div>`
    }
}

class SidebarItemComponent extends HTMLElement {
    #row
    #defaultSlot
    #childrenSlot

    static get observedAttributes() {
        return ['selected', 'expanded']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>${sidebaritem}</style>
            <div class="sidebar-item">
                <slot name="icon"></slot>
                <slot></slot>
                <span class="sidebar-item__caret" aria-hidden="true"></span>
            </div>
            <div class="sidebar-item__children">
                <slot name="subitems"></slot>
            </div>`

        this.#row = this.shadowRoot.querySelector('.sidebar-item')
        this.#defaultSlot = this.shadowRoot.querySelector('slot:not([name])')
        this.#childrenSlot = this.shadowRoot.querySelector('slot[name="subitems"]')

        this.#defaultSlot.addEventListener('slotchange', () => this.#moveNestedSidebars())
        this.#childrenSlot.addEventListener('slotchange', () => this.#updateChildren())
        this.#row.addEventListener('click', () => this.#toggle())
        this.#row.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                this.#toggle()
            }
        })
    }

    get selected() {
        return this.hasAttribute('selected')
    }

    set selected(value) {
        this.toggleAttribute('selected', Boolean(value))
    }

    get expanded() {
        return this.hasAttribute('expanded')
    }

    set expanded(value) {
        this.toggleAttribute('expanded', Boolean(value))
    }

    get hasChildren() {
        return this.#childrenSlot.assignedElements().length > 0
    }

    connectedCallback() {
        this.#moveNestedSidebars()
        this.#updateChildren()
        this.#updateAria()
    }

    attributeChangedCallback(name) {
        if (name === 'selected' || name === 'expanded') {
            this.#updateAria()
        }
    }

    // A nested <fz-sidebar> written as a plain child is reassigned to the
    // "subitems" slot so it renders below the row instead of inline.
    #moveNestedSidebars() {
        for (const child of this.children) {
            if (child.matches('fz-sidebar, .sidebar') && !child.hasAttribute('slot')) {
                child.setAttribute('slot', 'subitems')
            }
        }
    }

    #updateChildren() {
        const hasChildren = this.hasChildren
        this.toggleAttribute('has-children', hasChildren)
        if (hasChildren) {
            this.#row.setAttribute('role', 'button')
            this.#row.setAttribute('tabindex', '0')
        } else {
            this.#row.removeAttribute('role')
            this.#row.removeAttribute('tabindex')
        }
        this.#updateAria()
    }

    #toggle() {
        if (this.hasChildren) {
            this.expanded = !this.expanded
        }
    }

    #updateAria() {
        if (this.selected) {
            this.setAttribute('aria-current', 'page')
        } else {
            this.removeAttribute('aria-current')
        }

        if (this.hasChildren) {
            this.#row.setAttribute('aria-expanded', String(this.expanded))
        } else {
            this.#row.removeAttribute('aria-expanded')
        }
    }
}



// EXTERNAL MODULE: ./js/components/avatars/avatars.scss
var avatars = __webpack_require__(947);
;// ./js/components/avatars/avatars.js


class AvatarComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).innerHTML =
            `<style>
                ${avatars}
            </style>
            <div class="avatar">
                <slot name="image"></slot>
                <slot name="name"></slot>
                <slot name="subname"></slot>
            </div>`
    }
}
;// ./js/fzui.js








function initialize() {
    customElements.define('fz-card', CardComponent)
    customElements.define('fz-dropdown', DropdownComponent)
    customElements.define('fz-menu', MenuComponent)
    customElements.define('fz-menu-item', MenuItemComponent)
    customElements.define('fz-menu-separator', MenuSeparatorComponent)
    customElements.define('fz-app-frame', AppFrameComponent)
    customElements.define('fz-avatar', AvatarComponent)
    customElements.define('fz-sidebar', SidebarComponent)
    customElements.define('fz-sidebar-item', SidebarItemComponent)
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});