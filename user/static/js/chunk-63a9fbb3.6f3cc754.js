(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a9fbb3"],{"2fcb":function(e,t,a){"use strict";var l=a("d1d0"),s=a.n(l);s.a},"61bc":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wement_manage"},[a("h4",{staticClass:"ement-title"},[e._v("企业名称AAAAAAAAAAA——仓库名称XXXXXXXX——主控ID名称")]),e._v(" "),a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"传感器",name:"sensor"}},[a("div",{staticClass:"sensor"},[a("div",{staticClass:"sensor-head"},[a("el-input",{staticClass:"search",attrs:{placeholder:"请输入要搜索的传感器名称"},model:{value:e.sensor_txt,callback:function(t){e.sensor_txt=t},expression:"sensor_txt"}}),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("搜索")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.sensorData,"header-cell-class-name":e.tableheaderClassName}},[a("el-table-column",{attrs:{label:"使用中",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{},[a("el-checkbox",{on:{change:function(a){return e.selec(t.row)}},model:{value:t.row.use,callback:function(a){e.$set(t.row,"use",a)},expression:"scope.row.use"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"index",width:"80",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"传感器名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.sensorEdit(t.row)}}},[e._v("修改")])]}}])})],1)],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"控制器",name:"controller"}},[a("div",{staticClass:"controller"},[a("div",{staticClass:"controller-head"},[a("el-input",{staticClass:"search",attrs:{placeholder:"请输入要搜索的控制器名称"},model:{value:e.controller_txt,callback:function(t){e.controller_txt=t},expression:"controller_txt"}}),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("搜索")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.controllerData,"header-cell-class-name":e.tableheaderClassName}},[a("el-table-column",{attrs:{label:"使用中",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{},[a("el-checkbox",{model:{value:t.row.use,callback:function(a){e.$set(t.row,"use",a)},expression:"scope.row.use"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"index",width:"80",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"控制器名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.sensorDel(t.row)}}},[e._v("删除")])]}}])})],1)],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"摄像头",name:"camera"}},[a("div",{staticClass:"camera"},[a("div",{staticClass:"camera-head"},[a("el-input",{staticClass:"search",attrs:{placeholder:"请输入要搜索的摄像头名称"},model:{value:e.camera_txt,callback:function(t){e.camera_txt=t},expression:"camera_txt"}}),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("搜索")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.cameraData,"header-cell-class-name":e.tableheaderClassName}},[a("el-table-column",{attrs:{label:"使用中",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{},[a("el-checkbox",{model:{value:t.row.use,callback:function(a){e.$set(t.row,"use",a)},expression:"scope.row.use"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"index",width:"80",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"摄像头名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"key1",label:"摄像头Ip"}}),e._v(" "),a("el-table-column",{attrs:{prop:"key2",label:"摄像头端口号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"key3",label:"手机访问端口"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.sensorDel(t.row)}}},[e._v("删除")])]}}])})],1)],1)])],1),e._v(" "),a("el-dialog",{attrs:{title:"修改传感器",visible:e.dialogEditVisSensor,width:"30%"},on:{"update:visible":function(t){e.dialogEditVisSensor=t}}},[a("el-form",{ref:"form",attrs:{model:e.sensorEditForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"传感器名称"}},[a("el-input",{attrs:{placeholder:"请输入传感器名称"},model:{value:e.sensorEditForm.name,callback:function(t){e.$set(e.sensorEditForm,"name",t)},expression:"sensorEditForm.name"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogEditVisSensor=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogEditVisSensor=!1}}},[e._v("确 定")])],1)],1)],1)},s=[],r={data:function(){return{activeName:"sensor",sensor_txt:"",sensorData:[{use:!0,index:1,name:"传感器001",report:"1",controlId:"6",ware:10,createTime:"2019-08-20 10:10"},{use:!0,index:2,name:"传感器001",report:"1",controlId:"6",ware:10,createTime:"2019-08-20 10:10"}],dialogEditVisSensor:!1,sensorEditForm:{name:"",icon:""},controller_txt:"",controllerData:[{use:!0,index:1,name:"传感器001",controlId:"6",ware:10,createTime:"2019-08-20 10:10"}],camera_txt:"",cameraData:[{use:!0,index:1,name:"传感器001",key1:"1121212",key2:"2323232",key3:"dsdsd",createTime:"2019-08-20 10:10"}]}},methods:{selec:function(e){e.use||this.$confirm("确定取消使用该设备吗?","取消使用该设备",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){}))},handleClick:function(e,t){},sensorEdit:function(e){this.dialogEditVisSensor=!0},sensorDel:function(e){},tableheaderClassName:function(e){e.row,e.rowIndex;return"table-head-th"}}},n=r,o=(a("2fcb"),a("2877")),c=Object(o["a"])(n,l,s,!1,null,null,null);t["default"]=c.exports},d1d0:function(e,t,a){}}]);