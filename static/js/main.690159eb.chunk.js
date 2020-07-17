(this["webpackJsonpyt-react-dark-theme"]=this["webpackJsonpyt-react-dark-theme"]||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),i=n(4),l=(n(17),n(1)),u=n(2);function f(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  height: 100vh;\n  background-color: ",";\n  transition: all 0.15s linear;\n"]);return f=function(){return e},e}var s=l.b.div(f(),(function(e){return e.theme.colors.background}));function d(){var e=Object(u.a)(["\n  font-size: ",";\n  color: ",";\n  font-weight: 300;\n  margin: 0px 10px;\n"]);return d=function(){return e},e}var m=l.b.div(d(),(function(e){return e.fontSize||"25px"}),(function(e){return e.theme.colors.text}));function h(){var e=Object(u.a)(["\n  font-weight: 300;\n  font-size: 70px;\n  color: ",";\n"]);return h=function(){return e},e}function x(){var e=Object(u.a)(["\n  font-weight: 600;\n  font-size: 18px;\n"]);return x=function(){return e},e}function g(){var e=Object(u.a)(["\n  width: ",";\n  height: ",";\n  background-color: ",";\n  border-radius: 2px;\n  margin: 5px;\n  flex-grow: 1;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  padding: 10px;\n  align-items: center;\n  justify-content: space-around;\n  display: flex;\n  flex-direction: column;\n"]);return g=function(){return e},e}var b=l.b.div(g(),(function(e){return e.width||"200px"}),(function(e){return e.height||"120px"}),(function(e){return e.theme.colors.surface})),v=Object(l.b)(m)(x()),p=l.b.div(h(),(function(e){return e.theme.colors.text2})),w=function(e){var t=e.title,n=e.height,r=e.text;return a.a.createElement(b,{height:n},a.a.createElement(v,null,t),a.a.createElement(p,null,r))};function k(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  flex-wrap: wrap;\n"]);return k=function(){return e},e}var E=l.b.div(k());function j(){var e=Object(u.a)(["\n  background: none;\n  outline: none;\n  border: 1px solid ",";\n  color: ",";\n  border-radius: 5px;\n  font-size: 15px;\n"]);return j=function(){return e},e}var O=l.b.button(j(),(function(e){return e.theme.colors.text2}),(function(e){return e.theme.colors.text2})),y=function(e){var t=e.handleClick;return a.a.createElement(O,{onClick:t},"Toggle Theme")};function F(){var e=Object(u.a)(["\n  max-width: 60%;\n"]);return F=function(){return e},e}var S=l.b.div(F()),z=function(){var e=Object(r.useState)(window.localStorage.getItem("theme")),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&a(e)}),[]);return[n,function(){if("default"===n)return window.localStorage.setItem("theme","dark"),void a("dark");window.localStorage.setItem("theme","default"),a("default")}]};var I=function(){var e=z(),t=Object(i.a)(e,2),n=t[0],r=t[1];return a.a.createElement(l.a,{theme:{default:{colors:{primary:"#FFF",accent:"#000",background:"#f1f1f1",surface:"#FFF",text:"#989898",text2:"#000"}},dark:{colors:{primary:"#FFF",accent:"#000",background:"#23292d",surface:"#32383b",text:"#FFF",text2:"#317e94"}}}[n]},a.a.createElement(s,null,a.a.createElement(S,null,a.a.createElement(E,null,a.a.createElement(m,null,"Weekly Stats - Moguelo Dev"),a.a.createElement(y,{handleClick:r})),a.a.createElement(E,null,a.a.createElement(w,{title:"Marketing",text:"25%"}),a.a.createElement(w,{title:"Conversion",text:"4.3M"}),a.a.createElement(w,{title:"Users",text:"+20M"})),a.a.createElement(E,null,a.a.createElement(w,{title:"Sales",height:"120px",text:"$0.00"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.690159eb.chunk.js.map