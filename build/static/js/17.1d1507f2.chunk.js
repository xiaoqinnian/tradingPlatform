webpackJsonp([17],{1109:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),i=n.n(o),c=n(1110),p=(n.n(c),n(11)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={content:""},n}return r(t,e),s(t,[{key:"toBack",value:function(){this.props.history.go(-1)}},{key:"render",value:function(){var e=this.state.content;return i.a.createElement("div",{className:"apitoken"},i.a.createElement("div",{className:"apitoken-box"},i.a.createElement("div",{className:"apitoken-header"},i.a.createElement("h3",null,"API\u5bc6\u94a5")),i.a.createElement("div",{className:"apitoken-details"},i.a.createElement("div",{className:"apitoken-left"},i.a.createElement("h4",null,"\u6211\u7684API\u5bc6\u94a5"),i.a.createElement("p",null,"\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86\u529f\u80fd\u5b8c\u5907\uff0c\u9ad8\u6027\u80fd\u7684\u81ea\u52a8\u5316\u4ea4\u6613API\uff0c\u901a\u8fc7API\u60a8\u80fd\u591f\u5f97\u5230\u5f53\u524d\u5e02\u573a\u884c\u60c5\uff0c\u5efa\u7acb\u4e70\u5355\u5356\u5355\uff0c\u67e5\u8be2\u81ea\u5df1\u7684\u59d4\u6258\u53ca\u6210\u4ea4\u8bb0\u5f55\uff0c\u67e5\u8be2\u8d26\u6237\u4f59\u989d\u53ca\u4e2a\u4eba\u4fe1\u606f\u3002"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(p.b,{to:"/httpapi",target:"_blank"},i.a.createElement("span",null,"HTTP API \u6587\u6863"))),i.a.createElement("li",null,i.a.createElement(p.b,{to:"/websocketapi",target:"_blank"},i.a.createElement("span",null,"Websocket API \u6587\u6863")))),i.a.createElement("span",null,"\u66f4\u591aAPI\u4fe1\u606f\u8bf7\u67e5\u770bGithub\u4e0a\u7684API\u7ae0\u8282"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/peatio/peatio#api",target:"_blank"},i.a.createElement("span",null,"https://github.com/peatio/peatio#api"))))),i.a.createElement("div",{className:"apitoken-right"},i.a.createElement("button",{className:"newpass"},"\u521b\u5efa\u65b0\u5bc6\u7801"),i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u6807\u7b7e"),i.a.createElement("th",null,"Access Key"),i.a.createElement("th",null))),i.a.createElement("tbody",{className:e?"":"none"},i.a.createElement("tr",null,i.a.createElement("td",null,"1"),i.a.createElement("td",null,"2"),i.a.createElement("td",null,"3")))),i.a.createElement("p",{className:e?"none":""},"\u6ca1\u6709API\u5bc6\u94a5")))),i.a.createElement("div",{className:"apitoken-box"},i.a.createElement("div",{className:"apitoken-header"},i.a.createElement("h3",null,"\u5e94\u7528\u7ed1\u5b9a")),i.a.createElement("div",{className:"apitoken-details"},i.a.createElement("div",{className:"apitoken-left"},i.a.createElement("h4",null,"\u5df2\u7ed1\u5b9a\u7684\u7b2c\u4e09\u65b9\u5e94\u7528"),i.a.createElement("p",null,"\u7ba1\u7406\u6240\u6709\u60a8\u7ed1\u5b9a\u8fc7\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u3002"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(p.b,{to:"/resetpassword"},i.a.createElement("span",null,"oAuth\u8ba4\u8bc1\u63a5\u53e3\u6587\u6863"))))),i.a.createElement("div",{className:"apitoken-right"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u5e94\u7528\u540d\u79f0"),i.a.createElement("th",null,"\u6388\u6743\u81ea\u52a8\u8fc7\u671f\u65f6\u95f4"),i.a.createElement("th",null,"\u6388\u6743\u8303\u56f4"))),i.a.createElement("tbody",{className:e?"":"none"},i.a.createElement("tr",null,i.a.createElement("td",null,"1"),i.a.createElement("td",null,"2"),i.a.createElement("td",null,"3")))),i.a.createElement("p",{className:e?"none":""},"\u6ca1\u6709API\u5bc6\u94a5")))))}}]),t}(o.Component);t.a=u},1110:function(e,t,n){var a=n(1111);"string"===typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0};l.transform=void 0;n(21)(a,l);a.locals&&(e.exports=a.locals)},1111:function(e,t,n){t=e.exports=n(20)(void 0),t.push([e.i,".apitoken {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 240px;\n  background: rgba(0, 0, 0, 0.05); }\n  .apitoken a {\n    color: #1d6fa5; }\n\n.apitoken-box {\n  width: 100%;\n  background-color: white;\n  border: 1px solid #dddddd;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px; }\n\n.apitoken-header {\n  width: 100%;\n  height: 38px;\n  line-height: 38px;\n  border-bottom: 1px solid #ccc;\n  padding-left: 20px;\n  background: rgba(0, 0, 0, 0.05); }\n  .apitoken-header h2 {\n    width: 100%;\n    height: 38px;\n    font-size: 16px; }\n\n.apitoken-details {\n  display: flex;\n  width: 100%; }\n\n.apitoken-left {\n  width: 40%;\n  box-sizing: border-box;\n  border-right: 1px solid #ccc;\n  padding: 20px; }\n  .apitoken-left h4 {\n    font-size: 24px;\n    margin-bottom: 10px; }\n\n.apitoken-right {\n  width: 60%;\n  padding: 10px;\n  position: relative; }\n  .apitoken-right .newpass {\n    position: absolute;\n    top: 14px;\n    right: 14px;\n    border: none;\n    outline: none;\n    border-radius: 4px;\n    padding: 6px 10px;\n    font-size: 14px;\n    color: white;\n    background-color: #364450;\n    border-color: #2c3741; }\n  .apitoken-right table {\n    width: 100%;\n    margin-top: 40px;\n    color: #000; }\n    .apitoken-right table thead {\n      vertical-align: bottom;\n      border-bottom: 2px solid #dddddd; }\n      .apitoken-right table thead th {\n        padding: 4px 0; }\n  .apitoken-right .none {\n    display: none; }\n  .apitoken-right p {\n    background-color: #f9f9f9;\n    text-align: center;\n    padding: 10px 0; }\n",""])},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1109);n.d(t,"default",function(){return a.a})}});
//# sourceMappingURL=17.1d1507f2.chunk.js.map