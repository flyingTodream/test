(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5546"],{"3f41":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vx-panel-fontStyle"},[n("div",{staticClass:"vx-panel-fontStyle__tip"},[t._v("尺寸")]),n("div",{staticClass:"vx-panel-fontStyle__size"},[n("div",{staticClass:"vx-panel-fontStyle__size__size"},[n("vx-icon",{attrs:{name:"reduceFontSize"}})],1),n("div",{staticClass:"vx-panel-fontStyle__size__slider"},[n("el-slider",{attrs:{min:12,max:500,"show-tooltip":!1},model:{value:t.fontSize,callback:function(e){t.fontSize=e},expression:"fontSize"}})],1),n("div",{staticClass:"vx-panel-fontStyle__size__size"},[n("vx-icon",{attrs:{name:"addFontSize"}})],1)]),n("div",{staticClass:"vx-panel-fontStyle__tip"},[t._v("对齐")]),n("div",{staticClass:"vx-panel-align"},[n("vx-icon",{class:{active:"left"===t.textAlign},attrs:{name:"left"},nativeOn:{click:function(e){return t.setAlignHandler("left")}}}),n("vx-icon",{class:{active:"center"===t.textAlign},attrs:{name:"mid"},nativeOn:{click:function(e){return t.setAlignHandler("center")}}}),n("vx-icon",{class:{active:"right"===t.textAlign},attrs:{name:"right"},nativeOn:{click:function(e){return t.setAlignHandler("right")}}})],1)])},a=[],l=(n("a9e3"),n("4360")),s={name:"vx-fontStyle",props:{index:{type:Number}},data:function(){return{value3:30}},computed:{fontSize:{get:function(){return l["a"].layout().elements[this.index].fontSize},set:function(t){l["b"].setFontSize(this.index,t)}},textAlign:function(){return l["a"].layout().elements[this.index].textAlign}},methods:{setAlignHandler:function(t){l["b"].setTextalign(this.index,t)}}},c=s,o=n("2877"),r=Object(o["a"])(c,i,a,!1,null,null,null);e["default"]=r.exports}}]);