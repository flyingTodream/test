(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de1cd"],{"83ea":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vx-login"},[i("el-dialog",{attrs:{visible:e.showLogin,"modal-append-to-body":!1,center:"","close-on-click-modal":!1},on:{"update:visible":function(t){e.showLogin=t},closed:e.closedHandler}},["login"==e.type?i("div",{staticClass:"vx-login-form"},[e.weChatLogin?i("VxWxLogin"):e._e(),e.weChatLogin?e._e():i("VxPhoneLogin",{on:{forgetPassword:e.forgetPasswordHandler}}),i("div",{staticClass:"vx-login-form-others"},[e.weChatLogin?i("div",{staticClass:"vx-login-phone"},[i("div",{staticClass:"vx-login-phone-icon",on:{click:function(t){e.weChatLogin=!e.weChatLogin}}},[i("img",{attrs:{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU1MjA5Njc1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc3NC4xNDQgMTAyLjRIMjQ5Ljg1NmMtMzkuMzIxNiAwLTY1LjUzNiAyNi4yMTQ0LTY1LjUzNiA2NS41MzZ2NzIwLjg5NmMwIDM5LjMyMTYgMjYuMjE0NCA2NS41MzYgNjUuNTM2IDY1LjUzNmg1MjQuMjg4YzM5LjMyMTYgMCA2NS41MzYtMjYuMjE0NCA2NS41MzYtNjUuNTM2VjE2Ny45MzZjMC0zOS4zMjE2LTI2LjIxNDQtNjUuNTM2LTY1LjUzNi02NS41MzZ6IG0tMTk2LjYwOCA3ODYuNDMyaC0xMzEuMDcydi02NS41MzZoMTMxLjA3MnY2NS41MzZ6IG0xOTYuNjA4LTEzMS4wNzJIMjQ5Ljg1NnYtNjUuNTM2aDUyNC4yODh2NjUuNTM2eiIgcC1pZD0iMjQ3OCIgZmlsbD0iI0Y4OUY1MCI+PC9wYXRoPjwvc3ZnPg==",alt:"phone"}})]),i("div",{staticClass:"vx-login-phone-text"},[e._v("手机号登录")])]):e._e(),e.weChatLogin?e._e():i("div",{staticClass:"vx-login-phone"},[i("div",{staticClass:"vx-login-phone-icon",on:{click:function(t){e.weChatLogin=!e.weChatLogin}}},[i("img",{attrs:{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU1MTg1NTE1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzMDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5NC42NjY2NjcgMTA2LjY2NjY2N2MxNzEuNzc2IDAgMzE0LjYyNCAxMDIuNjEzMzMzIDM0NS42IDIzOC4yNTA2NjZBNDI1Ljc3MDY2NyA0MjUuNzcwNjY3IDAgMCAwIDY4OCAzNDEuMzMzMzMzYy0xOTQuMTMzMzMzIDAtMzUyIDEzMS41ODQtMzUyIDI5My4zMzMzMzQgMCAxOC44MTYgMi4zNDY2NjcgMzcuMjA1MzMzIDYuNDQyNjY3IDU1LjA4MjY2NmEzOTkuNjE2IDM5OS42MTYgMCAwIDEtODUuMzMzMzM0LTIxLjI0OGwtMTI2LjQyMTMzMyA1NC4xODY2NjcgNDYuMzc4NjY3LTkyLjg0MjY2N0M5NS4zNiA1NzYuMjEzMzMzIDQyLjY2NjY2NyA0OTMuMzk3MzMzIDQyLjY2NjY2NyA0MDAgNDIuNjY2NjY3IDIzOC4wMzczMzMgMjAwLjIzNDY2NyAxMDYuNjY2NjY3IDM5NC42NjY2NjcgMTA2LjY2NjY2N3pNMjc3LjMzMzMzMyAzMjYuNjU2YTQ0LjAzMiA0NC4wMzIgMCAxIDAgMC04OC4wMjEzMzMgNDQuMDMyIDQ0LjAzMiAwIDAgMCAwIDg4LjAyMTMzM3ogbTIzNC42NjY2NjcgMGE0NC4wMzIgNDQuMDMyIDAgMSAwIDAtODguMDIxMzMzIDQ0LjAzMiA0NC4wMzIgMCAwIDAgMCA4OC4wMjEzMzN6IG00NjkuMzMzMzMzIDMwOC4wMTA2NjdjMCA3NS4wNTA2NjctNDQuOCAxNDEuMDk4NjY3LTExMy4zNjUzMzMgMTg0LjAyMTMzM2w1NC42OTg2NjcgMTA5LjMxMi0xNTguMTIyNjY3LTY3Ljc1NDY2N2EzNTguNCAzNTguNCAwIDAgMS03Ni41NDQgOS4wODhjLTE2MS45NjI2NjcgMC0yOTMuMzMzMzMzLTEwNS4wODgtMjkzLjMzMzMzMy0yMzQuNjY2NjY2czEzMS4zNzA2NjctMjM0LjY2NjY2NyAyOTMuMzMzMzMzLTIzNC42NjY2NjdTOTgxLjMzMzMzMyA1MDUuMDg4IDk4MS4zMzMzMzMgNjM0LjY2NjY2N3ogbS0zODEuMzU0NjY2LTE0LjY3NzMzNGE0NC4wMzIgNDQuMDMyIDAgMSAwIDAtODguMDIxMzMzIDQ0LjAzMiA0NC4wMzIgMCAwIDAgMCA4OC4wMjEzMzN6IG0xNzYuMDQyNjY2IDBhNDQuMDMyIDQ0LjAzMiAwIDEgMC0wLjA0MjY2Ni04OC4wMjEzMzMgNDQuMDMyIDQ0LjAzMiAwIDAgMCAwIDg4LjAyMTMzM3oiIHAtaWQ9IjIzMDgiIGZpbGw9IiM1OUNDMEQiPjwvcGF0aD48L3N2Zz4=",alt:"wx"}})]),i("div",{staticClass:"vx-login-phone-text"},[e._v("微信登录")])])]),i("div",{staticClass:"vx-login-bottom"},[i("div",{staticClass:"vx-login-bottom-text"},[e._v("\n          登录即同意\n          "),i("a",[e._v("用户协议")]),e._v("和\n          "),i("a",[e._v("隐私政策")])]),i("div",{staticClass:"vx-login-bottom-phone",on:{click:e.registerHandler}},[e._v("\n          手机号注册\n          "),i("i",{staticClass:"el-icon-arrow-right"})])])],1):e._e(),"findPassword"==e.type?i("VxForget",{on:{login:e.loginHandler}}):e._e(),"register"==e.type?i("VxRegister",{on:{login:e.loginHandler}}):e._e()],1)],1)},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vx-login-form"},[e._m(0),i("div",{staticClass:"vx-login-form-tips"},[e._v("登录后模板免费下载")]),i("div",{staticClass:"vx-login-form-code"},[i("el-image",{attrs:{src:e.url}},[i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-loading"}),e._v("生成二维码中...\n      ")])])],1),i("div",{staticClass:"vx-login-form-code-tips"},[e._v('关注"海报设计设计官方服务号"进行注册')])])},M=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vx-login-form-top"},[i("img",{staticClass:"vx-login-form-wechat",attrs:{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTYwMTU1MTg1NTE1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzMDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5NC42NjY2NjcgMTA2LjY2NjY2N2MxNzEuNzc2IDAgMzE0LjYyNCAxMDIuNjEzMzMzIDM0NS42IDIzOC4yNTA2NjZBNDI1Ljc3MDY2NyA0MjUuNzcwNjY3IDAgMCAwIDY4OCAzNDEuMzMzMzMzYy0xOTQuMTMzMzMzIDAtMzUyIDEzMS41ODQtMzUyIDI5My4zMzMzMzQgMCAxOC44MTYgMi4zNDY2NjcgMzcuMjA1MzMzIDYuNDQyNjY3IDU1LjA4MjY2NmEzOTkuNjE2IDM5OS42MTYgMCAwIDEtODUuMzMzMzM0LTIxLjI0OGwtMTI2LjQyMTMzMyA1NC4xODY2NjcgNDYuMzc4NjY3LTkyLjg0MjY2N0M5NS4zNiA1NzYuMjEzMzMzIDQyLjY2NjY2NyA0OTMuMzk3MzMzIDQyLjY2NjY2NyA0MDAgNDIuNjY2NjY3IDIzOC4wMzczMzMgMjAwLjIzNDY2NyAxMDYuNjY2NjY3IDM5NC42NjY2NjcgMTA2LjY2NjY2N3pNMjc3LjMzMzMzMyAzMjYuNjU2YTQ0LjAzMiA0NC4wMzIgMCAxIDAgMC04OC4wMjEzMzMgNDQuMDMyIDQ0LjAzMiAwIDAgMCAwIDg4LjAyMTMzM3ogbTIzNC42NjY2NjcgMGE0NC4wMzIgNDQuMDMyIDAgMSAwIDAtODguMDIxMzMzIDQ0LjAzMiA0NC4wMzIgMCAwIDAgMCA4OC4wMjEzMzN6IG00NjkuMzMzMzMzIDMwOC4wMTA2NjdjMCA3NS4wNTA2NjctNDQuOCAxNDEuMDk4NjY3LTExMy4zNjUzMzMgMTg0LjAyMTMzM2w1NC42OTg2NjcgMTA5LjMxMi0xNTguMTIyNjY3LTY3Ljc1NDY2N2EzNTguNCAzNTguNCAwIDAgMS03Ni41NDQgOS4wODhjLTE2MS45NjI2NjcgMC0yOTMuMzMzMzMzLTEwNS4wODgtMjkzLjMzMzMzMy0yMzQuNjY2NjY2czEzMS4zNzA2NjctMjM0LjY2NjY2NyAyOTMuMzMzMzMzLTIzNC42NjY2NjdTOTgxLjMzMzMzMyA1MDUuMDg4IDk4MS4zMzMzMzMgNjM0LjY2NjY2N3ogbS0zODEuMzU0NjY2LTE0LjY3NzMzNGE0NC4wMzIgNDQuMDMyIDAgMSAwIDAtODguMDIxMzMzIDQ0LjAzMiA0NC4wMzIgMCAwIDAgMCA4OC4wMjEzMzN6IG0xNzYuMDQyNjY2IDBhNDQuMDMyIDQ0LjAzMiAwIDEgMC0wLjA0MjY2Ni04OC4wMjEzMzMgNDQuMDMyIDQ0LjAzMiAwIDAgMCAwIDg4LjAyMTMzM3oiIHAtaWQ9IjIzMDgiIGZpbGw9IiM1OUNDMEQiPjwvcGF0aD48L3N2Zz4=",alt:"wechat"}}),e._v("\n    微信扫码登录/注册\n  ")])}],o={name:"vx-WxLogin",data:function(){return{url:""}},created:function(){var e=this;setTimeout((function(){e.url="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGM8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyOG1GaU1xelZjbTAxOE45bTF1MVoAAgSxTg1eAwSAOgkA"}),3e3)}},l=o,r=i("5511"),g=Object(r["a"])(l,a,M,!1,null,null,null),c=g.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vx-login-phone-password"},[i("div",{staticClass:"vx-login-form-top"},[e._v("账户密码登录")]),i("div",{staticClass:"vx-login-form-phone"},[i("el-input",{staticClass:"input-with-select",attrs:{autocomplete:"off",placeholder:"请输入手机号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}},[i("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.number,callback:function(t){e.number=t},expression:"number"}},[i("el-option",{attrs:{label:"+86",value:"中国 +86"}}),i("el-option",{attrs:{label:"+852",value:"中国香港 +852"}}),i("el-option",{attrs:{label:"+853",value:"中国澳门 +853"}})],1)],1)],1),e.messageLogin?i("div",{staticClass:"vx-login-form-pass"},[i("el-input",{attrs:{autocomplete:"off",type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginHandler(t)}},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}},[i("template",{slot:"prepend"},[e._v("密码")])],2)],1):e._e(),e.messageLogin?e._e():i("div",{staticClass:"vx-login-form-msg"},[i("el-input",{attrs:{autocomplete:"off",type:"text",placeholder:"请输入短信中的验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginHandler(t)}}}),i("div",{staticClass:"vx-login-form-getVeriy",class:{"image-disable":e.isDisable},on:{click:function(t){return t.stopPropagation(),e.getVeriyCodehandler(t)}}},[e._v(e._s(e.text))])],1),i("div",{staticClass:"vx-login-phone-content"},[i("div",{staticClass:"vx-login-phone-message",on:{click:function(t){e.messageLogin=!e.messageLogin}}},[e.messageLogin?i("span",[e._v("短信密码登录")]):e._e(),e.messageLogin?e._e():i("span",[e._v("账号密码登录")])]),i("div",{on:{click:e.forgetPasswordHandler}},[e._v("忘记密码")])]),i("div",{staticClass:"vx-login-phone-login",on:{click:e.loginHandler}},[e._v("登录")])])},N=[],d=i("4ec3"),u=i("6b43"),j={name:"vx-phoneLogin",data:function(){return{username:"",number:"+86",passWord:"",messageLogin:!0,text:"获取验证码",isDisable:!1}},computed:{},methods:{forgetPasswordHandler:function(){this.$emit("forgetPassword")},loginHandler:function(){var e=this,t={username:this.username,password:this.passWord};Object(d["b"])(t).then((function(t){0===t.errno?(u["a"].setItem("Token",t.data.token),u["a"].setItem("userName",t.data.userInfo.nickName),e.$store.commit("updateLoginState",!0)):e.$message({message:t.errmsg,type:"error"})}))},getVeriyCodehandler:function(){var e=this;this.isDisable=!0;var t=60;this.text=t+"s后获取";var i=setInterval((function(){t--,e.text=t+"s后获取",t<0&&(e.isDisable=!1,e.text="获取验证码",clearInterval(i))}),1e3)}}},v=j,I=Object(r["a"])(v,z,N,!1,null,null,null),D=I.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vx-login-form"},[i("div",{staticClass:"vx-login-forget"},[i("div",{staticClass:"vx-login-form-top"},[e._v("更改密码")]),i("div",{staticClass:"vx-login-forget-phone"},[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}},[i("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.number,callback:function(t){e.number=t},expression:"number"}},[i("el-option",{attrs:{label:"+86",value:"中国 +86"}}),i("el-option",{attrs:{label:"+852",value:"中国香港 +852"}}),i("el-option",{attrs:{label:"+853",value:"中国澳门 +853"}})],1)],1)],1),i("div",{staticClass:"vx-login-form-msg"},[i("el-input",{attrs:{placeholder:"请输入短信中的验证码"}}),i("div",{staticClass:"vx-login-form-getVeriy",class:{"image-disable":e.isDisable},on:{click:function(t){return t.stopPropagation(),e.getVeriyCodehandler(t)}}},[e._v(e._s(e.text))])],1),i("div",{staticClass:"vx-login-form-newpassword"},[i("el-input",{attrs:{type:"password",placeholder:"请输入6-30位新密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changePasswordHandler(t)}},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}})],1),i("div",{staticClass:"vx-login-forget-change"},[i("div",{staticClass:"vx-login-phone-login",on:{click:e.changePasswordHandler}},[e._v("更改密码")])])]),i("div",{staticClass:"vx-login-bottom forget-text"},[i("div",{staticClass:"vx-login-bottom-text"}),i("div",{staticClass:"vx-login-bottom-phone"},[e._v("\n      想起密码？\n      "),i("a",{on:{click:e.loginHandler}},[e._v("去登录")])])])])},x=[],A={name:"vx-forget",data:function(){return{phone:"",number:"+86",passWord:"",text:"获取验证码",isDisable:!1}},methods:{loginHandler:function(){this.$emit("login")},getVeriyCodehandler:function(){var e=this;this.isDisable=!0;var t=60;this.text=t+"s后获取";var i=setInterval((function(){t--,e.text=t+"s后获取",t<0&&(e.isDisable=!1,e.text="获取验证码",clearInterval(i))}),1e3)},changePasswordHandler:function(){}}},p=A,L=Object(r["a"])(p,C,x,!1,null,null,null),y=L.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vx-login-form"},[i("div",{staticClass:"vx-login-forget"},[i("div",{staticClass:"vx-login-form-top"},[e._v("注册账号")]),i("div",{staticClass:"vx-login-register-phone"},[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}},[i("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.number,callback:function(t){e.number=t},expression:"number"}},[i("el-option",{attrs:{label:"+86",value:"中国 +86"}}),i("el-option",{attrs:{label:"+852",value:"中国香港 +852"}}),i("el-option",{attrs:{label:"+853",value:"中国澳门 +853"}})],1)],1)],1),i("div",{staticClass:"vx-login-form-msg"},[i("el-input",{attrs:{placeholder:"请输入短信中的验证码"}}),i("div",{staticClass:"vx-login-form-getVeriy",class:{"image-disable":e.isDisable},on:{click:function(t){return t.stopPropagation(),e.getVeriyCodehandler(t)}}},[e._v(e._s(e.text))])],1),i("div",{staticClass:"vx-login-register-password"},[i("el-input",{attrs:{type:"password",placeholder:"请输入6-30位密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.registerHandler(t)}},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}})],1),i("div",{staticClass:"vx-login-forget-change"},[i("div",{staticClass:"vx-login-phone-login",on:{click:e.registerHandler}},[e._v("注册账号")])])]),i("div",{staticClass:"vx-login-bottom forget-text"},[e._m(0),i("div",{staticClass:"vx-login-bottom-phone"},[e._v("\n      已有账号？\n      "),i("a",{on:{click:e.loginHandler}},[e._v("去登录")])])])])},w=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vx-login-bottom-text"},[e._v("\n      注册即同意\n      "),i("a",[e._v("用户协议")]),e._v("和\n      "),i("a",[e._v("隐私政策")])])}],h={name:"vx-register",data:function(){return{phone:"",number:"+86",passWord:"",text:"获取验证码",isDisable:!1}},methods:{loginHandler:function(){this.$emit("login")},getVeriyCodehandler:function(){var e=this;this.isDisable=!0;var t=10;this.text=t+"s后获取";var i=setInterval((function(){t--,e.text=t+"s后获取",t<0&&(e.isDisable=!1,e.text="获取验证码",clearInterval(i))}),1e3)},registerHandler:function(){}}},T=h,Y=Object(r["a"])(T,m,w,!1,null,null,null),b=Y.exports,f={name:"vx-login",components:{VxWxLogin:c,VxPhoneLogin:D,VxForget:y,VxRegister:b},data:function(){return{weChatLogin:!0,type:"login",showLogin:!0,isShowmask:!0}},props:{},methods:{forgetPasswordHandler:function(){this.type="findPassword"},loginHandler:function(){this.type="login"},registerHandler:function(){this.type="register"},closedHandler:function(){this.$emit("hideLogin")}}},O=f,E=Object(r["a"])(O,s,n,!1,null,null,null),k=E.exports;t["default"]=k}}]);