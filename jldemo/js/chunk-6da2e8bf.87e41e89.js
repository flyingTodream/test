(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6da2e8bf"],{"360b":function(t,a,s){"use strict";var e=s("f373"),i=s.n(e);i.a},4579:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vx-other"},[t._m(0),s("div",{staticClass:"other-content"},[s("el-steps",{attrs:{active:t.active,"align-center":"","finish-status":"success"}},[s("el-step",{attrs:{title:"代发信息录入"}}),s("el-step",{attrs:{title:"代发信息确认"}}),s("el-step",{attrs:{title:"代发信息结果"}})],1)],1),s("Step2",{directives:[{name:"show",rawName:"v-show",value:1==t.active,expression:"active == 1"}],on:{confim:function(a){t.active++},back:function(a){t.active--}}}),s("Step3",{directives:[{name:"show",rawName:"v-show",value:2==t.active,expression:"active == 2"}],on:{back:function(a){t.active--}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.active,expression:"active == 0"}],staticClass:"content1"},[s("div",{staticClass:"right"},[s("div",{staticClass:"accountMsg"},[t._v("代发工资信息")]),s("el-form",{attrs:{"label-width":"6.25rem /* 100/16 */\n      "}},[s("el-form-item",{attrs:{label:"账号"}},[s("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入账号"}})],1),s("el-form-item",{attrs:{label:"总金额"}},[t._v("999,999,999")]),s("el-form-item",{attrs:{label:"总笔数"}},[t._v("1000")]),s("el-form-item",{attrs:{label:"文件类型"}},[s("el-radio-group",{model:{value:t.changed,callback:function(a){t.changed=a},expression:"changed"}},[s("el-radio",{attrs:{change:"",label:"txt文件"}}),s("el-radio",{attrs:{label:"csv文件"}}),s("el-radio",{attrs:{label:"excel文件"}})],1)],1),s("el-form-item",{attrs:{label:"代发文件"}},[s("el-upload",{staticClass:"upload-demo",attrs:{multiple:"",action:"https://jsonplaceholder.typicode.com/posts/",limit:3}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传txt/csv/xls文件，且不超过10M")])],1)],1)],1),s("div",{staticClass:"next",on:{click:function(a){t.active++}}},[t._v("下一步")])],1)])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vx-location location-withoutTab"},[s("label",[t._v("当前位置:")]),s("div",[t._v("代理业务 > 代发工资")]),s("div",{staticClass:"caozuoyuan"},[t._v("操作员： 2010009")])])}],c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"step2"},[s("div",{staticClass:"tips"},[t._v("请仔细核对您的代发信息，谨防诈骗！")]),s("div",{staticClass:"step2-bottom"},[t._m(0),t._m(1),s("div",{staticClass:"step2-btn"},[s("div",{staticClass:"confim",on:{click:function(a){return t.$emit("confim")}}},[t._v("确认信息")]),s("div",{staticClass:"back",on:{click:function(a){return t.$emit("back")}}},[t._v("返回")])])])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"left"},[s("div",{staticClass:"msg"},[t._v("代发信息：")]),s("div",{staticClass:"cont"},[s("label",[t._v("账号：")]),s("div",[t._v("6347 5847 5947 3598")])]),s("div",{staticClass:"cont"},[s("label",[t._v("总金额：")]),s("div",[t._v("999,999,999,999")])]),s("div",{staticClass:"cont"},[s("label",[t._v("总笔数：")]),s("div",[t._v("1000")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detailDiv"},[s("div",{staticClass:"cont"},[s("table",{attrs:{border:"1",cellpadding:"2",cellspacing:"0"}},[s("tr",[s("td",[t._v("张三")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("9000.00")]),s("td",[t._v("工资")])]),s("tr",{staticClass:"table-back"},[s("td",[t._v("李四")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("8000.00")]),s("td",[t._v("工资")])]),s("tr",[s("td",[t._v("刘备")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("10000.00")]),s("td",[t._v("工资")])]),s("tr",{staticClass:"table-back"},[s("td",[t._v("关羽")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("11000.00")]),s("td",[t._v("工资")])]),s("tr",[s("td",[t._v("张飞")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("10000.00")]),s("td",[t._v("工资")])]),s("tr",{staticClass:"table-back"},[s("td",[t._v("赵云")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("10000.00")]),s("td",[t._v("工资")])]),s("tr",[s("td",[t._v("黄忠")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("10000.00")]),s("td",[t._v("工资")])]),s("tr",{staticClass:"table-back"},[s("td",[t._v("魏延")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("10000.00")]),s("td",[t._v("工资")])]),s("tr",[s("td",[t._v("孔明")]),s("td",[t._v("1234567890123456")]),s("td",[t._v("90000.00")]),s("td",[t._v("工资")])])])])])}],v=(s("f0c2"),s("2877")),n={},r=Object(v["a"])(n,c,l,!1,null,"cc229f86",null),d=r.exports,o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"step3"},[t._m(0),s("div",{staticClass:"msg"},[t._v("该交易已进入复核队列，交易流水号为：1241312312312")]),t._m(1),s("div",{staticClass:"step3-btn"},[s("div",{staticClass:"save"},[t._v("代发结果查询")]),s("div",{staticClass:"back"},[t._v("打印")]),s("div",{staticClass:"back",on:{click:function(a){return t.$emit("back")}}},[t._v("返回")])])])},_=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"el-icon-check"})]),s("div",{staticClass:"text"},[t._v("交易已提交")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",{attrs:{border:"1",cellpadding:"2",cellspacing:"0"}},[s("tr",[s("td",{staticClass:"table-title",attrs:{rowspan:"3"}},[t._v("代发信息")]),s("td",[t._v("账号")]),s("td",[t._v("6347 5847 5947 3598")])]),s("tr",[s("td",[t._v("总金额")]),s("td",[t._v("999,999,999,999")])]),s("tr",[s("td",[t._v("总笔数")]),s("td",[t._v("10000")])])])}],u=(s("ac60"),{}),b=Object(v["a"])(u,o,_,!1,null,"403875b1",null),f=b.exports,m={data:function(){return{active:0,index:0,name:"天津华兴商贸集团",accountNo:"7374 3474 5938 8374",accountProps:"公司账户"}},components:{Step2:d,Step3:f}},p=m,C=(s("360b"),Object(v["a"])(p,e,i,!1,null,"85754158",null));a["default"]=C.exports},"672b":function(t,a,s){},ac60:function(t,a,s){"use strict";var e=s("672b"),i=s.n(e);i.a},ed1e:function(t,a,s){},f0c2:function(t,a,s){"use strict";var e=s("ed1e"),i=s.n(e);i.a},f373:function(t,a,s){}}]);