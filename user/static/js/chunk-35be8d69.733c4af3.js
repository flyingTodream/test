(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35be8d69"],{"0e44":function(t,e,a){var n=a("88dd"),r=a("a013"),i=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("01f5")(Function.call,a("acb9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:i}},"44de":function(t,e,a){var n=a("88dd"),r=a("0e44").set;t.exports=function(t,e,a){var i,o=e.constructor;return o!==a&&"function"==typeof o&&(i=o.prototype)!==a.prototype&&n(i)&&r&&r(t,i),t}},"539d":function(t,e,a){var n=a("b2f5"),r=a("f01a"),i=a("b6f1"),o=a("c9ea"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(t,e,a){var r={},s=i((function(){return!!o[t]()||c[t]()!=c})),l=r[t]=s?e(f):o[t];a&&(r[a]=l),n(n.P+n.F*s,"String",r)},f=d.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},5758:function(t,e,a){var n=a("eb1f"),r=a("9ead")("iterator"),i=a("5b25");t.exports=a("ae18").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||i.hasOwnProperty(n(e))}},"646f":function(t,e,a){a("addd"),t.exports=a("ae18").Array.isArray},"6b23":function(t,e,a){a("e5b4"),a("e479"),t.exports=a("5758")},"75fc":function(t,e,a){"use strict";var n=a("a745"),r=a.n(n);function i(t){if(r()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var o=a("774e"),s=a.n(o),c=a("c8bb"),l=a.n(c);function u(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return i(t)||u(t)||d()}a.d(e,"a",(function(){return f}))},"774e":function(t,e,a){t.exports=a("87b8")},"7f4c":function(t,e,a){"use strict";var n=a("2f6d"),r=a("a2f9"),i=a("a245"),o=a("6b37"),s=a("db4e"),c=a("61d1"),l=a("7bc3"),u=a("c5f8");r(r.S+r.F*!a("2c6c")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,r,d,f=i(t),p="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,h=void 0!==g,b=0,v=u(f);if(h&&(g=n(g,m>2?arguments[2]:void 0,2)),void 0==v||p==Array&&s(v))for(e=c(f.length),a=new p(e);e>b;b++)l(a,b,h?g(f[b],b):f[b]);else for(d=v.call(f),a=new p;!(r=d.next()).done;b++)l(a,b,h?o(d,g,[r.value,b],!0):r.value);return a.length=b,a}})},"87b8":function(t,e,a){a("e479"),a("7f4c"),t.exports=a("ae18").Array.from},a745:function(t,e,a){t.exports=a("646f")},a891:function(t,e,a){var n=a("fb6d"),r=a("b4e0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},acb9:function(t,e,a){var n=a("d217"),r=a("7dea"),i=a("3a68"),o=a("5325"),s=a("03b3"),c=a("568a"),l=Object.getOwnPropertyDescriptor;e.f=a("dad2")?l:function(t,e){if(t=i(t),e=o(e,!0),c)try{return l(t,e)}catch(a){}if(s(t,e))return r(!n.f.call(t,e),t[e])}},addd:function(t,e,a){var n=a("a2f9");n(n.S,"Array",{isArray:a("44c1")})},afee:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ghouse_manage"},[a("div",{staticClass:"header"},[a("h4",{staticClass:"title"},[t._v("企业名称:  "+t._s(t.businame))]),t._v(" "),a("el-input",{staticClass:"search",attrs:{placeholder:"请输入要搜索的大棚名称"},model:{value:t.search_txt,callback:function(e){t.search_txt=e},expression:"search_txt"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.showAdd}},[t._v("新增大棚")])],1),t._v(" "),a("div",{staticClass:"content"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.ghouseData,"header-cell-class-name":t.tableheaderClassName}},[a("el-table-column",{attrs:{prop:"id",label:"编号",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"displayName",label:"大棚名称"}}),t._v(" "),a("el-table-column",{attrs:{label:"下属主控ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{},[t._v("\n            下属主控ID\n            "),a("a",{staticClass:"link",on:{click:function(a){return t.linkControlAdmin(e.row,1)}}},[t._v(t._s(e.row.number))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{width:"220",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.menuCopy(e.row)}}},[t._v("复制")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.menuEdit(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.menuDel(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"新增大棚",visible:t.dialogAddVis,width:"30%"},on:{"update:visible":function(e){t.dialogAddVis=e}}},[a("el-form",{ref:"AddForm",attrs:{rules:t.rulesAddForm,model:t.addForm,"label-width":"80px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"大棚名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入大棚名称"},model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name",e)},expression:"addForm.name"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogAddVis=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addSaveBusi}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"复制大棚",visible:t.dialogCopyVis,width:"30%"},on:{"update:visible":function(e){t.dialogCopyVis=e}}},[a("el-form",{ref:"form",attrs:{model:t.CopyForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"大棚名称"}},[a("el-input",{attrs:{placeholder:"请输入大棚名称"},model:{value:t.CopyForm.name,callback:function(e){t.$set(t.CopyForm,"name",e)},expression:"CopyForm.name"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogCopyVis=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t._copyArea}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改大棚",visible:t.dialogEditVis,width:"30%"},on:{"update:visible":function(e){t.dialogEditVis=e}}},[a("el-form",{ref:"form",attrs:{model:t.EditForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"大棚名称"}},[a("el-input",{attrs:{placeholder:"请输入大棚名称"},model:{value:t.EditForm.name,callback:function(e){t.$set(t.EditForm,"name",e)},expression:"EditForm.name"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogEditVis=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t._updateArea}},[t._v("确 定")])],1)],1)],1)},r=[],i=a("db72"),o=a("75fc"),s=(a("d4d5"),a("2f62")),c=a("b775"),l=a("4328"),u=a.n(l);function d(t){return Object(c["a"])({url:"/areaManage/getAreaList",method:"post",data:u.a.stringify(t)})}function f(t){return Object(c["a"])({url:"/areaManage/getAreaCount",method:"post",data:u.a.stringify(t)})}function p(t){return Object(c["a"])({url:"/areaManage/addArea",method:"post",data:u.a.stringify(t)})}function m(t){return Object(c["a"])({url:"/areaManage/copyArea",method:"post",data:u.a.stringify(t)})}function g(t){return Object(c["a"])({url:"/areaManage/deleteArea",method:"post",data:u.a.stringify(t)})}function h(t){return Object(c["a"])({url:"/areaManage/updateArea",method:"post",data:u.a.stringify(t)})}var b={data:function(){return{loading:!1,search_txt:"",currentPage:1,pageSize:10,total:1,ghouseData:[],dialogAddVis:!1,addForm:{name:""},rulesAddForm:{name:[{required:!0,message:"请输入大棚名称",trigger:"blur"}]},dialogCopyVis:!1,CopyForm:{name:""},dialogEditVis:!1,EditForm:{name:""}}},methods:{search:function(){this.currentPage=1,this._getAreaCount(),this._getAreaList()},showAdd:function(){this.addForm.name="",this.dialogAddVis=!0},menuCopy:function(t){isNaN(t.displayName.slice(-1))?this.CopyForm.name=t.displayName+"1":this.CopyForm.name=t.displayName.substr(0,t.displayName.length-1)+(Number(t.displayName.slice(-1))+1),this.CopyForm.fromAreaId=t.id,this.dialogCopyVis=!0},menuEdit:function(t){this.EditForm.name=t.displayName,this.EditForm.areaId=t.id,this.dialogEditVis=!0},linkTo:function(t){this.$router.push({path:t})},linkControlAdmin:function(t,e){var a=this,n={index:e,id:t.id,name:t.displayName};this.$store.dispatch("info/saveControlInfo",n).then((function(){a.linkTo("/business_management/ghouse_manage_index/control_admin")}))},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this._getAreaList(),this._getAreaCount()},handleCurrentChange:function(t){this.currentPage=t,this._getAreaList(),this._getAreaCount()},menuDel:function(t){var e=this;this.$confirm("确定删除该大棚吗?","删除该大棚",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e._deleteArea(t.id)}))},tableheaderClassName:function(t){t.row,t.rowIndex;return"table-head-th"},addSaveBusi:function(){var t=this;this.$refs.AddForm.validate((function(e){e&&t._addArea()}))},_getAreaList:function(){var t=this;this.loading=!0;var e={companyId:this.busiid,name:this.search_txt,page:this.currentPage,pageSize:this.pageSize};d(e).then((function(e){t.loading=!1,1===e.statusCode?(t.ghouseData.length=0,t.ghouseData=Object(o["a"])(e.result)):t.$message({message:e.message,type:"warning"})}))},_getAreaCount:function(){var t=this,e={companyId:this.busiid,name:this.search_txt};f(e).then((function(e){1===e.statusCode?t.total=e.result:t.$message({message:e.message,type:"warning"})}))},_addArea:function(){var t=this;this.addForm.companyId=this.busiid,p(this.addForm).then((function(e){1===e.statusCode?(t.dialogAddVis=!1,t.$message({message:"大棚添加成功",type:"success"}),t.search_txt="",t.currentPage=1,t._getAreaCount(),t._getAreaList()):t.$message({message:e.message,type:"warning"})}))},_copyArea:function(){var t=this;this.CopyForm.companyId=this.busiid,m(this.CopyForm).then((function(e){1===e.statusCode?(t.dialogCopyVis=!1,t.$message({message:"大棚复制添加成功",type:"success"}),t._getAreaCount(),t._getAreaList()):t.$message({message:e.message,type:"warning"})}))},_deleteArea:function(t){var e=this,a={areaId:t};g(a).then((function(t){1===t.statusCode?(e.$message({message:"大棚删除成功",type:"success"}),e.search_txt="",e.currentPage=1,e._getAreaCount(),e._getAreaList()):e.$message({message:t.message,type:"warning"})}))},_updateArea:function(){var t=this;h(this.EditForm).then((function(e){1===e.statusCode?(t.dialogEditVis=!1,t.$message({message:"大棚修改成功",type:"success"}),t._getAreaCount(),t._getAreaList()):t.$message({message:e.message,type:"warning"})}))}},mounted:function(){this._getAreaList(),this._getAreaCount()},computed:Object(i["a"])({},Object(s["b"])(["busiid","businame"]))},v=b,y=(a("ddec"),a("2877")),_=Object(y["a"])(v,n,r,!1,null,null,null);e["default"]=_.exports},c8bb:function(t,e,a){t.exports=a("6b23")},c9ea:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},d4d5:function(t,e,a){"use strict";var n=a("3754"),r=a("03b3"),i=a("94ac"),o=a("44de"),s=a("5325"),c=a("b6f1"),l=a("a891").f,u=a("acb9").f,d=a("ddf7").f,f=a("539d").trim,p="Number",m=n[p],g=m,h=m.prototype,b=i(a("a7b8")(h))==p,v="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():f(e,3);var a,n,r,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>r)return NaN;return parseInt(c,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(b?c((function(){h.valueOf.call(a)})):i(a)!=p)?o(new g(y(e)),a,m):y(e)};for(var _,A=a("dad2")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;A.length>C;C++)r(g,_=A[C])&&!r(m,_)&&d(m,_,u(g,_));m.prototype=h,h.constructor=m,a("e5ef")(n,p,m)}},dc87:function(t,e,a){},ddec:function(t,e,a){"use strict";var n=a("dc87"),r=a.n(n);r.a}}]);