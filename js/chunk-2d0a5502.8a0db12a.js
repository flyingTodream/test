(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a5502"],{"09be":function(e,n,s){"use strict";s.r(n);var a=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"panel"},[s("vx-design-template",{directives:[{name:"show",rawName:"v-show",value:0===e.show,expression:"show === 0"}],on:{select:e.SelectHandler}}),s("vx-design-text",{directives:[{name:"show",rawName:"v-show",value:1===e.show,expression:"show === 1"}],on:{add:e.addHandler,select:e.SelectHandler}}),s("vx-design-element",{directives:[{name:"show",rawName:"v-show",value:2===e.show,expression:"show === 2"}],on:{add:e.addHandler,select:e.SelectHandler}}),s("vx-design-background",{directives:[{name:"show",rawName:"v-show",value:3===e.show,expression:"show === 3"}],on:{select:e.SelectHandler}}),s("vx-upload",{directives:[{name:"show",rawName:"v-show",value:4===e.show,expression:"show === 4"}]}),s("VxKeybord",{directives:[{name:"show",rawName:"v-show",value:5===e.show,expression:"show === 5"}],on:{close:e.closeHandler}})],1)},o=[],t=(s("163d"),function(){return s.e("chunk-f16a7156").then(s.bind(null,"dc77"))}),l=function(){return s.e("chunk-34138bd4").then(s.bind(null,"fd38"))},d=function(){return s.e("chunk-52700eac").then(s.bind(null,"d751"))},r=function(){return Promise.all([s.e("chunk-2d0e183e"),s.e("chunk-3d32fc82")]).then(s.bind(null,"38e3"))},c=function(){return s.e("chunk-2d0c0a63").then(s.bind(null,"434b"))},i=function(){return s.e("chunk-2d0a3e9a").then(s.bind(null,"03cd"))},u={name:"vx-panel",props:{show:Number},components:{VxDesignTemplate:t,VxDesignText:l,VxDesignElement:d,VxDesignBackground:r,VxUpload:c,VxKeybord:i},methods:{SelectHandler:function(){this.$parent.selectHandler()},addHandler:function(e){this.$parent.addHandler(e)},closeHandler:function(){this.$emit("close")}}},h=u,w=s("5511"),v=Object(w["a"])(h,a,o,!1,null,null,null);n["default"]=v.exports}}]);