(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df258"],{8956:function(o,n,t){"use strict";t.r(n);var e=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"vx-panel-color"},[t("ul",o._l(o.colorList,(function(n,e){return t("li",{key:e,style:{backgroundColor:n},on:{click:function(t){o.fontColor!==n&&o.setFontColorHandler(n)}}},[o.fontColor.toUpperCase()===n.toUpperCase()?t("i"):o._e()])})),0)])},r=[],l=(t("a9e3"),t("4360")),F={name:"vx-fontColor",data:function(){return{colorList:["#ffffff","#DBDBDB","#CCCCCC","#999999","#666666","#010101","#F08080","#CD5C5C","#FF0000","#A52A2A","#B22222","#8B0000","#87CEFA","#ADD8E6","#1E90FF","#6495ED","#4169E1","#0000FF","#7FFFAA","#00FF7F","#326601","#3CB371","#2E8B57","#228B22","#F5DEB3","#DEB887","#F4A460","#D2691E","#A0522D","#8B4513","#FFC0CB","#DB7093","#FF69B4","#DA70D6","#FF00FF","#8B008B"]}},computed:{fontColor:function(){return l["a"].layout().elements[this.index].color}},props:{index:{type:Number}},methods:{setFontColorHandler:function(o){l["b"].setFontColor(this.index,o)}}},s=F,C=t("2877"),c=Object(C["a"])(s,e,r,!1,null,null,null);n["default"]=c.exports}}]);