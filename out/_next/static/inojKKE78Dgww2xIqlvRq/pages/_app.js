(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery;return r||a&&(void 0!==o&&o)}},1:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"1T6e":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};t.default=n},"5UwM":function(e,t,r){"use strict";function n(e,t){return function(){return null}}r.r(t),r.d(t,"chainPropTypes",(function(){return n})),r.d(t,"deepmerge",(function(){return a.a})),r.d(t,"elementAcceptingRef",(function(){return f})),r.d(t,"elementTypeAcceptingRef",(function(){return c})),r.d(t,"exactProp",(function(){return l})),r.d(t,"formatMuiErrorMessage",(function(){return d.a})),r.d(t,"getDisplayName",(function(){return h})),r.d(t,"HTMLElementType",(function(){return b})),r.d(t,"ponyfillGlobal",(function(){return g})),r.d(t,"refType",(function(){return w}));var a=r("2+6g"),o=r("17x9"),i=r.n(o);var u=(i.a.element,function(){return null});u.isRequired=(i.a.element.isRequired,function(){return null});var f=u;var c=(o.elementType,function(){return null});r("rePB"),r("wx14");function l(e){return e}var d=r("TrhM"),s=r("U8pU"),p=r("TOwV"),m=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||function(e){var t="".concat(e).match(m);return t&&t[1]||""}(e)||t}function v(e,t,r){var n=y(t);return e.displayName||(""!==n?"".concat(r,"(").concat(n,")"):r)}function h(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return y(e,"Component");if("object"===Object(s.a)(e))switch(e.$$typeof){case p.ForwardRef:return v(e,e.render,"ForwardRef");case p.Memo:return v(e,e.type,"memo");default:return}}}function b(e,t,r,n,a){return null}var g="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),w=i.a.oneOfType([i.a.func,i.a.object])},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},"8Kt/":function(e,t,r){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var n=f(r("q1tI")),a=f(r("Xuae")),o=r("lwAK"),i=r("FYa8"),u=r("/0+H");function f(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function s(e,t){return e.reduce((function(e,t){var r=n.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,f=d.length;u<f;u++){var c=d[u];if(a.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?o=!1:r.add(c);else{var l=a.props[c],s=n[c]||new Set;s.has(l)?o=!1:(s.add(l),n[c]=s)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return n.default.cloneElement(e,{key:r})}))}var p=(0,a.default)();function m(e){var t=e.children;return(n.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return n.default.createElement(i.HeadManagerContext.Consumer,null,(function(r){return n.default.createElement(p,{reduceComponentsToState:s,handleStateChange:r,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var y=m;t.default=y},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}},"8rdq":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"};t.default=n},Lozw:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.primary,r=void 0===t?{light:c.default[300],main:c.default[500],dark:c.default[700]}:t,n=e.secondary,g=void 0===n?{light:l.default.A200,main:l.default.A400,dark:l.default.A700}:n,w=e.error,x=void 0===w?{light:d.default[300],main:d.default[500],dark:d.default[700]}:w,M=e.warning,S=void 0===M?{light:s.default[300],main:s.default[500],dark:s.default[700]}:M,O=e.info,A=void 0===O?{light:p.default[300],main:p.default[500],dark:p.default[700]}:O,k=e.success,C=void 0===k?{light:m.default[300],main:m.default[500],dark:m.default[700]}:k,_=e.type,T=void 0===_?"light":_,P=e.contrastThreshold,j=void 0===P?3:P,E=e.tonalOffset,$=void 0===E?.2:E,F=(0,o.default)(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function R(e){return(0,y.getContrastRatio)(e,h.text.primary)>=j?h.text.primary:v.text.primary}var I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=(0,a.default)({},e)).main&&e[t]&&(e.main=e[t]),!e.main)throw new Error((0,i.formatMuiErrorMessage)(4,t));if("string"!==typeof e.main)throw new Error(_formatMuiErrorMessage(5,JSON.stringify(e.main)));return b(e,"light",r,$),b(e,"dark",n,$),e.contrastText||(e.contrastText=R(e.main)),e},H={dark:h,light:v};0;return(0,i.deepmerge)((0,a.default)({common:u.default,type:T,primary:I(r),secondary:I(g,"A400","A200","A700"),error:I(x),warning:I(S),info:I(A),success:I(C),grey:f.default,contrastThreshold:j,getContrastText:R,augmentColor:I,tonalOffset:$},H[T]),F)},t.dark=t.light=void 0;var a=n(r("pVnL")),o=n(r("QILm")),i=r("5UwM"),u=n(r("sAgZ")),f=n(r("sFvP")),c=n(r("xJ30")),l=n(r("8rdq")),d=n(r("fWIC")),s=n(r("1T6e")),p=n(r("vqLa")),m=n(r("VvZr")),y=r("wClv"),v={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:u.default.white,default:f.default[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}};t.light=v;var h={text:{primary:u.default.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:f.default[800],default:"#303030"},action:{active:u.default.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function b(e,t,r,n){var a=n.light||n,o=n.dark||1.5*n;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:"light"===t?e.light=(0,y.lighten)(e.main,a):"dark"===t&&(e.dark=(0,y.darken)(e.main,o)))}t.dark=h},QILm:function(e,t,r){var n=r("8OQS");e.exports=function(e,t){if(null==e)return{};var r,a,o=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},VvZr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};t.default=n},Xuae:function(e,t,r){"use strict";var n=r("/GRZ"),a=r("qXWd"),o=r("i2R6"),i=r("48fX"),u=r("tCBg"),f=r("T0f4"),c=r("mPvQ");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var a=f(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var d=r("q1tI"),s=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(c(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return(function(u){i(c,u);var f=l(c);function c(e){var o;return n(this,c),o=f.call(this,e),s&&(t.add(a(o)),r(a(o))),o}return o(c,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),o(c,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),c}(d.Component))}},fWIC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=n},hUgY:function(e,t,r){"use strict";r.r(t);var n=r("wx14"),a=r("q1tI"),o=r.n(a),i=(r("17x9"),r("OKji")),u=r("aXM8"),f=r("hfi/");var c=function(e){var t=e.children,r=e.theme,a=Object(u.a)(),c=o.a.useMemo((function(){var e=null===a?r:function(e,t){return"function"===typeof t?t(e):Object(n.a)(Object(n.a)({},e),t)}(a,r);return null!=e&&(e[f.a]=null!==a),e}),[r,a]);return o.a.createElement(i.a.Provider,{value:c},t)},l=r("viY9"),d=r("H2TA"),s={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},p=function(e){return Object(n.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var m=Object(d.a)((function(e){return{"@global":{html:s,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(n.a)({margin:0},p(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,r=void 0===t?null:t;return e.classes,a.createElement(a.Fragment,null,r)})),y=r("Lozw"),v=r.n(y),h=r("8Kt/"),b=r.n(h),g=o.a.createElement,w=v()({primary:{main:"#4e4e5b"},text:{primary:"#757575",secondary:"#444"}});t.default=function(e){var t=e.Component,r=e.pageProps;return g(o.a.Fragment,null,g(b.a,null,g("title",null,"Eike Foken")),g(c,{theme:Object(l.a)({palette:w,typography:{fontWeightBold:800,allVariants:{fontFamily:"Muli, sans-serif"},h1:{fontFamily:'"Saira Extra Condensed", sans-serif',fontSize:96,fontWeight:700,lineHeight:5.5/6,textTransform:"uppercase"},h2:{fontFamily:'"Saira Extra Condensed", sans-serif',fontSize:56,fontWeight:700,lineHeight:1.2,textTransform:"uppercase"},h3:{fontFamily:'"Saira Extra Condensed", sans-serif',fontSize:32,fontWeight:700,lineHeight:1.2,textTransform:"uppercase"},h4:{fontFamily:'"Saira Extra Condensed", sans-serif',fontSize:24,fontWeight:500,lineHeight:1.5,textTransform:"uppercase"},body1:{fontSize:18,letterSpacing:"normal",lineHeight:1.5},body2:{fontSize:16,letterSpacing:"normal",lineHeight:1.5},button:{fontSize:16,fontWeight:800,letterSpacing:.8,lineHeight:1.5,textTransform:"uppercase"}},overrides:{MuiAvatar:{circle:{borderColor:"rgba(255, 255, 255, 0.2)",borderStyle:"solid",borderWidth:8,height:160,width:160}},MuiButton:{text:{color:"rgba(255, 255, 255, 0.65)",padding:8,"&.active":{color:"#fff"}}},MuiDrawer:{root:{width:272},paper:{backgroundColor:w.primary.main}}},props:{MuiTypography:{variant:"body2"}}})},g(m,null),g(t,r)))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,r){var n=r("5fIB"),a=r("rlHP"),o=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},qT12:function(e,t,r){"use strict";var n="function"===typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,f=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,s=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function M(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case d:case s:case i:case f:case u:case m:return e;default:switch(e=e&&e.$$typeof){case l:case p:case h:case v:case c:return e;default:return t}}case o:return t}}}function S(e){return M(e)===s}t.AsyncMode=d,t.ConcurrentMode=s,t.ContextConsumer=l,t.ContextProvider=c,t.Element=a,t.ForwardRef=p,t.Fragment=i,t.Lazy=h,t.Memo=v,t.Portal=o,t.Profiler=f,t.StrictMode=u,t.Suspense=m,t.isAsyncMode=function(e){return S(e)||M(e)===d},t.isConcurrentMode=S,t.isContextConsumer=function(e){return M(e)===l},t.isContextProvider=function(e){return M(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return M(e)===p},t.isFragment=function(e){return M(e)===i},t.isLazy=function(e){return M(e)===h},t.isMemo=function(e){return M(e)===v},t.isPortal=function(e){return M(e)===o},t.isProfiler=function(e){return M(e)===f},t.isStrictMode=function(e){return M(e)===u},t.isSuspense=function(e){return M(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===s||e===f||e===u||e===m||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===c||e.$$typeof===l||e.$$typeof===p||e.$$typeof===g||e.$$typeof===w||e.$$typeof===x||e.$$typeof===b)},t.typeOf=M},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},sAgZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={black:"#000",white:"#fff"};t.default=n},sFvP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"};t.default=n},vqLa:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};t.default=n},wClv:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=o,t.rgbToHex=function(e){if(0===e.indexOf("#"))return e;var t=u(e).values;return"#".concat(t.map((function(e){return function(e){var t=e.toString(16);return 1===t.length?"0".concat(t):t}(e)})).join(""))},t.hslToRgb=i,t.decomposeColor=u,t.recomposeColor=f,t.getContrastRatio=function(e,t){var r=c(e),n=c(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)},t.getLuminance=c,t.emphasize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return c(e)>.5?l(e,t):d(e,t)},t.fade=function(e,t){e=u(e),t=a(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a");return e.values[3]=t,f(e)},t.darken=l,t.lighten=d;var n=r("5UwM");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),r)}function o(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map((function(e){return e+e}))),r?"rgb".concat(4===r.length?"a":"","(").concat(r.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}function i(e){var t=(e=u(e)).values,r=t[0],n=t[1]/100,a=t[2]/100,o=n*Math.min(a,1-a),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+r/30)%12;return a-o*Math.max(Math.min(t-3,9-t,1),-1)},c="rgb",l=[Math.round(255*i(0)),Math.round(255*i(8)),Math.round(255*i(4))];return"hsla"===e.type&&(c+="a",l.push(t[3])),f({type:c,values:l})}function u(e){if(e.type)return e;if("#"===e.charAt(0))return u(o(e));var t=e.indexOf("("),r=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(r))throw new Error((0,n.formatMuiErrorMessage)(3,e));var a=e.substring(t+1,e.length-1).split(",");return{type:r,values:a=a.map((function(e){return parseFloat(e)}))}}function f(e){var t=e.type,r=e.values;return-1!==t.indexOf("rgb")?r=r.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(r[1]="".concat(r[1],"%"),r[2]="".concat(r[2],"%")),"".concat(t,"(").concat(r.join(", "),")")}function c(e){var t="hsl"===(e=u(e)).type?u(i(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){if(e=u(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var r=0;r<3;r+=1)e.values[r]*=1-t;return f(e)}function d(e,t){if(e=u(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;return f(e)}},xJ30:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"};t.default=n}},[[1,0,1,3,2]]]);