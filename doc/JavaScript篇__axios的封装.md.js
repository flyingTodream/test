(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{Hzzo:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(c);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"axios\u7684\u5c01\u88c5"},l.a.createElement("a",{"aria-hidden":"true",href:"#axios\u7684\u5c01\u88c5"},l.a.createElement("span",{className:"icon icon-link"})),"axios\u7684\u5c01\u88c5"),l.a.createElement("h2",{id:"\u6982\u8ff0"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6982\u8ff0"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u6982\u8ff0")),l.a.createElement("p",null,"\u524d\u7aef\u5f00\u53d1\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230\u53d1\u9001\u5f02\u6b65\u8bf7\u6c42\u7684\u573a\u666f\u3002\u4e00\u4e2a\u529f\u80fd\u9f50\u5168\u7684 HTTP \u8bf7\u6c42\u5e93\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u6211\u4eec\u7684\u5f00\u53d1\u6210\u672c\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"),l.a.createElement("p",null,"axios \u5c31\u662f\u8fd9\u6837\u4e00\u4e2a HTTP \u8bf7\u6c42\u5e93\uff0c\u8fd1\u5e74\u6765\u975e\u5e38\u70ed\u95e8\u3002\u76ee\u524d\uff0c\u5b83\u5728 GitHub \u4e0a\u62e5\u6709\u8d85\u8fc7 40,000 \u7684 Star\uff0c\u8bb8\u591a\u6743\u5a01\u4eba\u58eb\u90fd\u63a8\u8350\u4f7f\u7528\u5b83\u3002"),l.a.createElement("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u6709\u5fc5\u8981\u4e86\u89e3\u4e0b axios \u662f\u5982\u4f55\u8bbe\u8ba1\uff0c\u4ee5\u53ca\u5982\u4f55\u5b9e\u73b0 HTTP \u8bf7\u6c42\u5e93\u5c01\u88c5\u7684\u3002\u64b0\u5199\u672c\u6587\u65f6\uff0caxios \u5f53\u524d\u7248\u672c\u4e3a 0.18.0\uff0c\u6211\u4eec\u4ee5\u8be5\u7248\u672c\u4e3a\u4f8b\uff0c\u6765\u9605\u8bfb\u548c\u5206\u6790\u90e8\u5206\u6838\u5fc3\u6e90\u4ee3\u7801\u3002axios \u7684\u6240\u6709\u6e90\u6587\u4ef6\u90fd\u4f4d\u4e8e ",l.a.createElement("code",null,"lib")," \u6587\u4ef6\u5939\u4e2d\uff0c\u4e0b\u6587\u4e2d\u63d0\u5230\u7684\u8def\u5f84\u90fd\u662f\u76f8\u5bf9\u4e8e ",l.a.createElement("code",null,"lib")," \u6765\u8bf4\u7684\u3002"),l.a.createElement("p",null,"\u672c\u6587\u6211\u4eec\u4e3b\u8981\u8ba8\u8bba\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u600e\u6837\u4f7f\u7528 axios\u3002"),l.a.createElement("li",null,"axios \u7684\u6838\u5fc3\u6a21\u5757\uff08\u8bf7\u6c42\u3001\u62e6\u622a\u5668\u3001\u64a4\u9500\uff09\u662f\u5982\u4f55\u8bbe\u8ba1\u548c\u5b9e\u73b0\u7684\uff1f"),l.a.createElement("li",null,"axios \u7684\u8bbe\u8ba1\u4f18\u70b9\u662f\u4ec0\u4e48\uff1f")),l.a.createElement("h2",{id:"\u5982\u4f55\u4f7f\u7528-axios"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5982\u4f55\u4f7f\u7528-axios"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u5982\u4f55\u4f7f\u7528 axios")),l.a.createElement("p",null,"\u8981\u7406\u89e3 axios \u7684\u8bbe\u8ba1\uff0c\u9996\u5148\u9700\u8981\u770b\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 axios\u3002\u6211\u4eec\u4e3e\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u6765\u8bf4\u660e\u4e0b axios API \u7684\u4f7f\u7528\u3002"),l.a.createElement("h3",{id:"\u53d1\u9001\u8bf7\u6c42"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u53d1\u9001\u8bf7\u6c42"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u53d1\u9001\u8bf7\u6c42")),l.a.createElement(r.a,{code:"axios({\n  method:'get',\n  url:'http://bit.ly/2mTM3nY',\n  responseType:'stream'\n})\n  .then(function(response) {\n  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))\n});\n",lang:"javascript"}),l.a.createElement("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5b98\u65b9\u793a\u4f8b\u3002\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\uff0caxios \u7684\u7528\u6cd5\u4e0e jQuery \u7684 ",l.a.createElement("code",null,"ajax")," \u65b9\u6cd5\u975e\u5e38\u7c7b\u4f3c\uff0c\u4e24\u8005\u90fd\u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\uff08\u5728\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6210\u529f\u56de\u8c03\u51fd\u6570\uff0c\u4f46\u8fd8\u662f\u66f4\u63a8\u8350\u4f7f\u7528 ",l.a.createElement("code",null,"Promise")," \u6216 ",l.a.createElement("code",null,"await"),"\uff09\uff0c\u7136\u540e\u518d\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u3002"),l.a.createElement("p",null,"\u8fd9\u4e2a\u5b9e\u4f8b\u5f88\u7b80\u5355\uff0c\u4e0d\u9700\u8981\u6211\u89e3\u91ca\u4e86\u3002\u6211\u4eec\u518d\u6765\u770b\u770b\u5982\u4f55\u6dfb\u52a0\u4e00\u4e2a\u62e6\u622a\u5668\u51fd\u6570\u3002"),l.a.createElement("h3",{id:"\u6dfb\u52a0\u62e6\u622a\u5668\u51fd\u6570"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6dfb\u52a0\u62e6\u622a\u5668\u51fd\u6570"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u6dfb\u52a0\u62e6\u622a\u5668\u51fd\u6570")),l.a.createElement(r.a,{code:"// \u6dfb\u52a0\u4e00\u4e2a\u8bf7\u6c42\u62e6\u622a\u5668\u3002\u6ce8\u610f\uff0c\u8fd9\u91cc\u9762\u6709 2 \u4e2a\u51fd\u6570\u2014\u2014\u5206\u522b\u662f\u6210\u529f\u548c\u5931\u8d25\u65f6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u6837\u8bbe\u8ba1\u7684\u539f\u56e0\u4f1a\u5728\u4e4b\u540e\u4ecb\u7ecd\naxios.interceptors.request.use(function (config) {\n    // \u53d1\u8d77\u8bf7\u6c42\u524d\u6267\u884c\u4e00\u4e9b\u5904\u7406\u4efb\u52a1\n    return config; // \u8fd4\u56de\u914d\u7f6e\u4fe1\u606f\n  }, function (error) {\n    // \u8bf7\u6c42\u9519\u8bef\u65f6\u7684\u5904\u7406\n    return Promise.reject(error);\n  });\n\n// \u6dfb\u52a0\u4e00\u4e2a\u54cd\u5e94\u62e6\u622a\u5668\naxios.interceptors.response.use(function (response) {\n    // \u5904\u7406\u54cd\u5e94\u6570\u636e\n    return response; // \u8fd4\u56de\u54cd\u5e94\u6570\u636e\n  }, function (error) {\n    // \u54cd\u5e94\u51fa\u9519\u540e\u6240\u505a\u7684\u5904\u7406\u5de5\u4f5c\n    return Promise.reject(error);\n  });\n",lang:"javascript"}),l.a.createElement("p",null,"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\uff1a\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u8bf7\u6c42\u7684\u914d\u7f6e\u53c2\u6570\uff08",l.a.createElement("code",null,"config"),"\uff09\u505a\u5904\u7406\uff1b\u5728\u8bf7\u6c42\u5f97\u5230\u54cd\u5e94\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u8fd4\u56de\u6570\u636e\u505a\u5904\u7406\u3002\u5f53\u8bf7\u6c42\u6216\u54cd\u5e94\u5931\u8d25\u65f6\uff0c\u6211\u4eec\u8fd8\u80fd\u6307\u5b9a\u5bf9\u5e94\u7684\u9519\u8bef\u5904\u7406\u51fd\u6570\u3002"),l.a.createElement("h3",{id:"\u64a4\u9500-http-\u8bf7\u6c42"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u64a4\u9500-http-\u8bf7\u6c42"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u64a4\u9500 HTTP \u8bf7\u6c42")),l.a.createElement("p",null,"\u5728\u5f00\u53d1\u4e0e\u641c\u7d22\u76f8\u5173\u7684\u6a21\u5757\u65f6\uff0c\u6211\u4eec\u7ecf\u5e38\u8981\u9891\u7e41\u5730\u53d1\u9001\u6570\u636e\u67e5\u8be2\u8bf7\u6c42\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u5f53\u6211\u4eec\u53d1\u9001\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u65f6\uff0c\u9700\u8981\u64a4\u9500\u4e0a\u4e2a\u8bf7\u6c42\u3002\u56e0\u6b64\uff0c\u80fd\u64a4\u9500\u76f8\u5173\u8bf7\u6c42\u529f\u80fd\u975e\u5e38\u6709\u7528\u3002axios \u64a4\u9500\u8bf7\u6c42\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),l.a.createElement(r.a,{code:"const CancelToken = axios.CancelToken;\nconst source = CancelToken.source();\n\n// \u4f8b\u5b50\u4e00\naxios.get('/user/12345', {\n  cancelToken: source.token\n}).catch(function(thrown) {\n  if (axios.isCancel(thrown)) {\n    console.log('\u8bf7\u6c42\u64a4\u9500\u4e86', thrown.message);\n  } else {\n    // \u5904\u7406\u9519\u8bef\n  }\n});\n\n// \u4f8b\u5b50\u4e8c\naxios.post('/user/12345', {\n  name: '\u65b0\u540d\u5b57'\n}, {\n  cancelToken: source.token\n}).\n\n// \u64a4\u9500\u8bf7\u6c42 (\u4fe1\u606f\u53c2\u6570\u662f\u53ef\u9009\u7684)\nsource.cancel('\u7528\u6237\u64a4\u9500\u4e86\u8bf7\u6c42');\n",lang:"javascript"}),l.a.createElement("p",null,"\u4ece\u4e0a\u4f8b\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u5728 axios \u4e2d\uff0c\u4f7f\u7528\u57fa\u4e8e ",l.a.createElement("code",null,"CancelToken")," \u7684\u64a4\u9500\u8bf7\u6c42\u65b9\u6848\u3002\u7136\u800c\uff0c\u8be5\u63d0\u6848\u73b0\u5df2\u64a4\u56de\uff0c\u8be6\u60c5\u5982 \u70b9\u8fd9\u91cc\u3002\u5177\u4f53\u7684\u64a4\u9500\u8bf7\u6c42\u7684\u5b9e\u73b0\u65b9\u6cd5\uff0c\u5c06\u5728\u540e\u9762\u7684\u6e90\u4ee3\u7801\u5206\u6790\u7684\u4e2d\u89e3\u91ca\u3002"),l.a.createElement("h2",{id:"axios-\u6838\u5fc3\u6a21\u5757\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0"},l.a.createElement("a",{"aria-hidden":"true",href:"#axios-\u6838\u5fc3\u6a21\u5757\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"axios \u6838\u5fc3\u6a21\u5757\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0")),l.a.createElement("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u76f8\u4fe1\u6bcf\u4e2a\u4eba\u90fd\u5bf9 axios \u7684\u4f7f\u7528\u6709\u4e00\u4e2a\u5927\u81f4\u7684\u4e86\u89e3\u4e86\u3002\u4e0b\u9762\uff0c\u6211\u4eec\u5c06\u6839\u636e\u6a21\u5757\u5206\u6790 axios \u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u3002\u4e0b\u9762\u7684\u56fe\u7247\uff0c\u662f\u6211\u5728\u672c\u6587\u4e2d\u4f1a\u4ecb\u7ecd\u5230\u7684\u6e90\u4ee3\u7801\u6587\u4ef6\u3002\u5982\u679c\u60a8\u611f\u5174\u8da3\uff0c\u6700\u597d\u5728\u9605\u8bfb\u65f6\u514b\u9686\u76f8\u5173\u7684\u4ee3\u7801\uff0c\u8fd9\u80fd\u52a0\u6df1\u4f60\u5bf9\u76f8\u5173\u6a21\u5757\u7684\u7406\u89e3\u3002"),l.a.createElement("p",null,l.a.createElement("img",{src:"http://my.flytodream.cn/docImgage/4353423424243.jpg",alt:"img"})),l.a.createElement("h3",{id:"http-\u8bf7\u6c42\u6a21\u5757"},l.a.createElement("a",{"aria-hidden":"true",href:"#http-\u8bf7\u6c42\u6a21\u5757"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"HTTP \u8bf7\u6c42\u6a21\u5757")),l.a.createElement("p",null,"\u8bf7\u6c42\u6a21\u5757\u7684\u4ee3\u7801\u653e\u5728\u4e86 ",l.a.createElement("code",null,"core/dispatchRequest.js")," \u6587\u4ef6\u4e2d\uff0c\u8fd9\u91cc\u6211\u53ea\u5c55\u793a\u4e86\u4e00\u4e9b\u5173\u952e\u4ee3\u7801\u6765\u7b80\u5355\u8bf4\u660e\uff1a"),l.a.createElement(r.a,{code:"module.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n  // \u5176\u4ed6\u6e90\u7801\n  // \u9ed8\u8ba4\u9002\u914d\u5668\u662f\u4e00\u4e2a\u6a21\u5757\uff0c\u53ef\u4ee5\u6839\u636e\u5f53\u524d\u73af\u5883\u9009\u62e9\u4f7f\u7528 Node \u6216\u8005 XHR \u53d1\u9001\u8bf7\u6c42\u3002\n  var adapter = config.adapter || defaults.adapter;\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n    // \u5176\u4ed6\u6e90\u7801\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n      // \u5176\u4ed6\u6e90\u7801\n      return Promise.reject(reason);\n    });\n  };\n}\n",lang:"javascript"}),l.a.createElement("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u80fd\u591f\u77e5\u9053 ",l.a.createElement("code",null,"dispatchRequest")," \u65b9\u6cd5\u662f\u901a\u8fc7 ",l.a.createElement("code",null,"config.adapter")," \uff0c\u83b7\u5f97\u53d1\u9001\u8bf7\u6c42\u6a21\u5757\u7684\u3002\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012\uff0c\u7b26\u5408\u89c4\u8303\u7684\u9002\u914d\u5668\u51fd\u6570\u6765\u66ff\u4ee3\u539f\u6765\u7684\u6a21\u5757\uff08\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u4e0d\u4f1a\u8fd9\u6837\u505a\uff0c\u4f46\u5b83\u662f\u4e00\u4e2a\u677e\u6563\u8026\u5408\u7684\u6269\u5c55\u70b9\uff09\u3002"),l.a.createElement("p",null,"\u5728 ",l.a.createElement("code",null,"defaults.js")," \u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u76f8\u5173\u9002\u914d\u5668\u7684\u9009\u62e9\u903b\u8f91\u2014\u2014\u6839\u636e\u5f53\u524d\u5bb9\u5668\u7684\u4e00\u4e9b\u72ec\u7279\u5c5e\u6027\u548c\u6784\u9020\u51fd\u6570\uff0c\u6765\u786e\u5b9a\u4f7f\u7528\u54ea\u4e2a\u9002\u914d\u5668\u3002"),l.a.createElement(r.a,{code:"function getDefaultAdapter() {\n  var adapter;\n  // \u53ea\u6709\u5728 Node.js \u4e2d\u5305\u542b process \u7c7b\u578b\u5bf9\u8c61\u65f6\uff0c\u624d\u4f7f\u7528\u5b83\u7684\u8bf7\u6c42\u6a21\u5757\n  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // Node.js \u8bf7\u6c42\u6a21\u5757\n    adapter = require('./adapters/http');\n  } else if (typeof XMLHttpRequest !== 'undefined') {\n    // \u6d4f\u89c8\u5668\u8bf7\u6c42\u6a21\u5757\n    adapter = require('./adapters/xhr');\n  }\n  return adapter;\n}\n",lang:"javascript"}),l.a.createElement("p",null,"axios \u4e2d\u7684 XHR \u6a21\u5757\u76f8\u5bf9\u7b80\u5355\uff0c\u5b83\u662f\u5bf9 ",l.a.createElement("code",null,"XMLHTTPRequest")," \u5bf9\u8c61\u7684\u5c01\u88c5\uff0c\u8fd9\u91cc\u6211\u5c31\u4e0d\u518d\u89e3\u91ca\u4e86\u3002\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u81ea\u5df1\u9605\u8bfb\u6e90\u6e90\u7801\u770b\u770b\uff0c\u6e90\u7801\u4f4d\u4e8e ",l.a.createElement("code",null,"adapters/xhr.js")," \u6587\u4ef6\u4e2d\u3002"),l.a.createElement("h3",{id:"\u62e6\u622a\u5668\u6a21\u5757"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a\u5668\u6a21\u5757"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u62e6\u622a\u5668\u6a21\u5757")),l.a.createElement("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u770b axios \u662f\u5982\u4f55\u5904\u7406\uff0c\u8bf7\u6c42\u548c\u54cd\u5e94\u62e6\u622a\u5668\u51fd\u6570\u7684\u3002\u8fd9\u5c31\u6d89\u53ca\u5230\u4e86 axios \u4e2d\u7684\u7edf\u4e00\u63a5\u53e3 \u2014\u2014",l.a.createElement("code",null,"request")," \u51fd\u6570\u3002"),l.a.createElement(r.a,{code:"Axios.prototype.request = function request(config) {\n  // \u5176\u4ed6\u6e90\u7801\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n  return promise;\n};\n",lang:"javascript"}),l.a.createElement("p",null,"\u8fd9\u4e2a\u51fd\u6570\u662f axios \u53d1\u9001\u8bf7\u6c42\u7684\u63a5\u53e3\u3002\u56e0\u4e3a\u51fd\u6570\u5b9e\u73b0\u4ee3\u7801\u76f8\u5f53\u957f\uff0c\u8fd9\u91cc\u6211\u4f1a\u7b80\u5355\u5730\u8ba8\u8bba\u76f8\u5173\u8bbe\u8ba1\u601d\u60f3\uff1a"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("code",null,"chain")," \u662f\u4e00\u4e2a\u6267\u884c\u961f\u5217\u3002\u961f\u5217\u7684\u521d\u59cb\u503c\u662f\u4e00\u4e2a\u643a\u5e26\u914d\u7f6e\uff08",l.a.createElement("code",null,"config"),"\uff09\u53c2\u6570\u7684 Promise \u5bf9\u8c61\u3002"),l.a.createElement("li",null,"\u5728\u6267\u884c\u961f\u5217\u4e2d\uff0c\u521d\u59cb\u51fd\u6570 ",l.a.createElement("code",null,"dispatchRequest")," \u7528\u6765\u53d1\u9001\u8bf7\u6c42\uff0c\u4e3a\u4e86\u4e0e ",l.a.createElement("code",null,"dispatchRequest"),"\u5bf9\u5e94\uff0c\u6211\u4eec\u6dfb\u52a0\u4e86\u4e00\u4e2a ",l.a.createElement("code",null,"undefined"),"\u3002\u6dfb\u52a0 ",l.a.createElement("code",null,"undefined")," \u7684\u539f\u56e0\u662f\u9700\u8981\u7ed9 Promise \u63d0\u4f9b\u6210\u529f\u548c\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570\uff0c\u4ece\u4e0b\u9762\u4ee3\u7801\u91cc\u7684 ",l.a.createElement("code",null,"promise = promise.then(chain.shift(), chain.shift());")," \u6211\u4eec\u5c31\u80fd\u770b\u51fa\u6765\u3002\u56e0\u6b64\uff0c\u51fd\u6570 ",l.a.createElement("code",null,"dispatchRequest")," \u548c ",l.a.createElement("code",null,"undefiend")," \u53ef\u4ee5\u770b\u6210\u662f\u4e00\u5bf9\u51fd\u6570\u3002"),l.a.createElement("li",null,"\u5728\u6267\u884c\u961f\u5217 ",l.a.createElement("code",null,"chain")," \u4e2d\uff0c\u53d1\u9001\u8bf7\u6c42\u7684 ",l.a.createElement("code",null,"dispatchReqeust")," \u51fd\u6570\u5904\u4e8e\u4e2d\u95f4\u4f4d\u7f6e\u3002\u5b83\u524d\u9762\u662f\u8bf7\u6c42\u62e6\u622a\u5668\uff0c\u4f7f\u7528 ",l.a.createElement("code",null,"unshift")," \u65b9\u6cd5\u63d2\u5165\uff1b\u5b83\u540e\u9762\u662f\u54cd\u5e94\u62e6\u622a\u5668\uff0c\u4f7f\u7528 ",l.a.createElement("code",null,"push")," \u65b9\u6cd5\u63d2\u5165\uff0c\u5728 ",l.a.createElement("code",null,"dispatchRequest")," \u4e4b\u540e\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e9b\u51fd\u6570\u90fd\u662f\u6210\u5bf9\u7684\uff0c\u4e5f\u5c31\u662f\u4e00\u6b21\u4f1a\u63d2\u5165\u4e24\u4e2a\u3002")),l.a.createElement("p",null,"\u6d4f\u89c8\u4e0a\u9762\u7684 ",l.a.createElement("code",null,"request")," \u51fd\u6570\u4ee3\u7801\uff0c\u6211\u4eec\u5927\u81f4\u77e5\u9053\u4e86\u600e\u6837\u4f7f\u7528\u62e6\u622a\u5668\u3002\u4e0b\u4e00\u6b65\uff0c\u6765\u770b\u770b\u600e\u6837\u64a4\u9500\u4e00\u4e2a HTTP \u8bf7\u6c42\u3002"),l.a.createElement("h3",{id:"\u64a4\u9500\u8bf7\u6c42\u6a21\u5757"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u64a4\u9500\u8bf7\u6c42\u6a21\u5757"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u64a4\u9500\u8bf7\u6c42\u6a21\u5757")),l.a.createElement("p",null,"\u4e0e\u64a4\u9500\u8bf7\u6c42\u76f8\u5173\u7684\u6a21\u5757\u4f4d\u4e8e ",l.a.createElement("code",null,"Cancel/")," \u6587\u4ef6\u5939\u4e0b\uff0c\u73b0\u5728\u6211\u4eec\u6765\u770b\u4e0b\u76f8\u5173\u6838\u5fc3\u4ee3\u7801\u3002"),l.a.createElement("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u6765\u770b\u4e0b\u57fa\u7840 ",l.a.createElement("code",null,"Cancel")," \u7c7b\u3002\u5b83\u662f\u4e00\u4e2a\u7528\u6765\u8bb0\u5f55\u64a4\u9500\u72b6\u6001\u7684\u7c7b\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),l.a.createElement(r.a,{code:"function Cancel(message) {\n  this.message = message;\n}\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\nCancel.prototype.__CANCEL__ = true;\n",lang:"javascript"}),l.a.createElement("p",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"CancelToken")," \u7c7b\u65f6\uff0c\u9700\u8981\u5411\u5b83\u4f20\u9012\u4e00\u4e2a Promise \u65b9\u6cd5\uff0c\u7528\u6765\u5b9e\u73b0 HTTP \u8bf7\u6c42\u7684\u64a4\u9500\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),l.a.createElement(r.a,{code:"function CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // \u5df2\u7ecf\u88ab\u64a4\u9500\u4e86\n      return;\n    }\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n",lang:"javascript"}),l.a.createElement("p",null,l.a.createElement("code",null,"adapters/xhr.js")," \u6587\u4ef6\u4e2d\uff0c\u64a4\u9500\u8bf7\u6c42\u7684\u5730\u65b9\u662f\u8fd9\u6837\u5199\u7684\uff1a"),l.a.createElement(r.a,{code:"if (config.cancelToken) {\n  // \u7b49\u5f85\u64a4\u9500\n  config.cancelToken.promise.then(function onCanceled(cancel) {\n    if (!request) {\n      return;\n    }\n\n    request.abort();\n    reject(cancel);\n    // \u91cd\u7f6e\u8bf7\u6c42\n    request = null;\n  });\n}\n",lang:"javascript"}),l.a.createElement("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u64a4\u9500  HTTP\u8bf7\u6c42\u7684\u4f8b\u5b50\uff0c\u8ba9\u6211\u4eec\u7b80\u8981\u5730\u8ba8\u8bba\u4e00\u4e0b\u76f8\u5173\u7684\u5b9e\u73b0\u903b\u8f91\uff1a"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5728\u9700\u8981\u64a4\u9500\u7684\u8bf7\u6c42\u4e2d\uff0c\u8c03\u7528 ",l.a.createElement("code",null,"CancelToken")," \u7c7b\u7684 ",l.a.createElement("code",null,"source")," \u65b9\u6cd5\u7c7b\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u4f1a\u5f97\u5230\u4e00\u4e2a\u5305\u542b ",l.a.createElement("code",null,"CancelToken")," \u7c7b\u5b9e\u4f8b A \u548c ",l.a.createElement("code",null,"cancel")," \u65b9\u6cd5\u7684\u5bf9\u8c61\u3002"),l.a.createElement("li",null,"\u5f53 source \u65b9\u6cd5\u6b63\u5728\u8fd4\u56de\u5b9e\u4f8b A \u7684\u65f6\u5019\uff0c\u4e00\u4e2a\u5904\u4e8e pending \u72b6\u6001\u7684 ",l.a.createElement("code",null,"promise")," \u5bf9\u8c61\u521d\u59cb\u5316\u5b8c\u6210\u3002\u5728\u5c06\u5b9e\u4f8b A \u4f20\u9012\u7ed9 axios \u4e4b\u540e\uff0c",l.a.createElement("code",null,"promise")," \u5c31\u53ef\u4ee5\u4f5c\u4e3a\u64a4\u9500\u8bf7\u6c42\u7684\u89e6\u53d1\u5668\u4f7f\u7528\u4e86\u3002"),l.a.createElement("li",null,"\u5f53\u8c03\u7528\u901a\u8fc7 ",l.a.createElement("code",null,"source")," \u65b9\u6cd5\u8fd4\u56de\u7684 ",l.a.createElement("code",null,"cancel")," \u65b9\u6cd5\u540e\uff0c\u5b9e\u4f8b A \u4e2d ",l.a.createElement("code",null,"promise")," \u72b6\u6001\u4ece pending \u53d8\u6210 fulfilled\uff0c\u7136\u540e\u7acb\u5373\u89e6\u53d1 ",l.a.createElement("code",null,"then")," \u56de\u8c03\u51fd\u6570\u3002\u4e8e\u662f axios \u7684\u64a4\u9500\u65b9\u6cd5\u2014\u2014",l.a.createElement("code",null,"request.abort()"),"\u88ab\u89e6\u53d1\u4e86\u3002")),l.a.createElement("h2",{id:"axios-\u8fd9\u6837\u8bbe\u8ba1\u7684\u597d\u5904\u662f\u4ec0\u4e48\uff1f"},l.a.createElement("a",{"aria-hidden":"true",href:"#axios-\u8fd9\u6837\u8bbe\u8ba1\u7684\u597d\u5904\u662f\u4ec0\u4e48\uff1f"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"axios \u8fd9\u6837\u8bbe\u8ba1\u7684\u597d\u5904\u662f\u4ec0\u4e48\uff1f")),l.a.createElement("h3",{id:"\u53d1\u9001\u8bf7\u6c42\u51fd\u6570\u7684\u5904\u7406\u903b\u8f91"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u53d1\u9001\u8bf7\u6c42\u51fd\u6570\u7684\u5904\u7406\u903b\u8f91"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u53d1\u9001\u8bf7\u6c42\u51fd\u6570\u7684\u5904\u7406\u903b\u8f91")),l.a.createElement("p",null,"\u5982\u524d\u51e0\u7ae0\u6240\u8ff0\uff0caxios \u4e0d\u5c06\u7528\u6765\u53d1\u9001\u8bf7\u6c42\u7684 ",l.a.createElement("code",null,"dispatchRequest")," \u51fd\u6570\u770b\u505a\u4e00\u4e2a\u7279\u6b8a\u51fd\u6570\u3002\u5b9e\u9645\u4e0a\uff0c",l.a.createElement("code",null,"dispatchRequest")," \u4f1a\u88ab\u653e\u5728\u961f\u5217\u7684\u4e2d\u95f4\u4f4d\u7f6e\uff0c\u4ee5\u4fbf\u4fdd\u8bc1\u961f\u5217\u5904\u7406\u7684\u4e00\u81f4\u6027\u548c\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u3002"),l.a.createElement("h3",{id:"\u9002\u914d\u5668\u7684\u5904\u7406\u903b\u8f91"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u9002\u914d\u5668\u7684\u5904\u7406\u903b\u8f91"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u9002\u914d\u5668\u7684\u5904\u7406\u903b\u8f91")),l.a.createElement("p",null,"\u5728\u9002\u914d\u5668\u7684\u5904\u7406\u903b\u8f91\u4e0a\uff0c",l.a.createElement("code",null,"http")," \u548c ",l.a.createElement("code",null,"xhr")," \u6a21\u5757\uff08\u4e00\u4e2a\u662f\u5728 Node.js \u4e2d\u7528\u6765\u53d1\u9001\u8bf7\u6c42\u7684\uff0c\u4e00\u4e2a\u662f\u5728\u6d4f\u89c8\u5668\u91cc\u7528\u6765\u53d1\u9001\u8bf7\u6c42\u7684\uff09\u5e76\u6ca1\u6709\u5728 ",l.a.createElement("code",null,"dispatchRequest")," \u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u800c\u662f\u5404\u81ea\u4f5c\u4e3a\u5355\u72ec\u7684\u6a21\u5757\uff0c\u9ed8\u8ba4\u901a\u8fc7 ",l.a.createElement("code",null,"defaults.js")," \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u65b9\u6cd5\u5f15\u5165\u7684\u3002\u56e0\u6b64\uff0c\u5b83\u4e0d\u4ec5\u786e\u4fdd\u4e86\u4e24\u4e2a\u6a21\u5757\u4e4b\u95f4\u7684\u4f4e\u8026\u5408\uff0c\u800c\u4e14\u8fd8\u4e3a\u5c06\u6765\u7684\u7528\u6237\u63d0\u4f9b\u4e86\u5b9a\u5236\u8bf7\u6c42\u53d1\u9001\u6a21\u5757\u7684\u7a7a\u95f4\u3002"),l.a.createElement("h3",{id:"\u64a4\u9500-http-\u8bf7\u6c42\u7684\u903b\u8f91"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u64a4\u9500-http-\u8bf7\u6c42\u7684\u903b\u8f91"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("strong",null,"\u64a4\u9500 HTTP \u8bf7\u6c42\u7684\u903b\u8f91")),l.a.createElement("p",null,"\u5728\u64a4\u9500 HTTP \u8bf7\u6c42\u7684\u903b\u8f91\u4e2d\uff0caxios \u8bbe\u8ba1\u4f7f\u7528 Promise \u6765\u4f5c\u4e3a\u89e6\u53d1\u5668\uff0c\u5c06 ",l.a.createElement("code",null,"resolve")," \u51fd\u6570\u66b4\u9732\u5728\u5916\u9762\uff0c\u5e76\u5728\u56de\u8c03\u51fd\u6570\u91cc\u4f7f\u7528\u3002\u5b83\u4e0d\u4ec5\u786e\u4fdd\u4e86\u5185\u90e8\u903b\u8f91\u7684\u4e00\u81f4\u6027\uff0c\u800c\u4e14\u8fd8\u786e\u4fdd\u4e86\u5728\u9700\u8981\u64a4\u9500\u8bf7\u6c42\u65f6\uff0c\u4e0d\u9700\u8981\u76f4\u63a5\u66f4\u6539\u76f8\u5173\u7c7b\u7684\u6837\u4f8b\u6570\u636e\uff0c\u4ee5\u907f\u514d\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u5165\u4fb5\u5176\u4ed6\u6a21\u5757\u3002")))}}}]);