(this["webpackJsonpreact-class-boilerplate"]=this["webpackJsonpreact-class-boilerplate"]||[]).push([[1],{129:function(e,t,n){"use strict";n.r(t);n(0);var r=n(218),a=n(217),o=n(223),c=n(224),l=n(9),i=n(18),s=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Hello World"}),Object(i.jsx)("p",{children:"This is a paragraph"}),Object(i.jsx)("p",{children:"This is another paragraph"})]})},p=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{style:{margin:"70px"},children:"CSS Margins"}),Object(i.jsx)("div",{style:{border:"1px solid #4CAF50"},children:"This element has a margin of 70px."})]})},u=n(222),m=r.a.Content,f=r.a.Sider;t.default=function(){var e=Object(l.g)(),t=Object(l.f)();return Object(i.jsxs)(r.a,{style:{height:"100%"},children:[Object(i.jsx)(f,{width:250,className:"site-layout-background",children:Object(i.jsxs)(a.a,{mode:"inline",selectable:!1,style:{height:"100%",borderRight:0,fontSize:18},children:[Object(i.jsx)(a.a.Item,{onClick:function(){return t("html")},icon:Object(i.jsx)(c.a,{}),children:"HTML"},"1"),Object(i.jsx)(a.a.Item,{onClick:function(){return t("css")},icon:Object(i.jsx)(c.a,{}),children:"CSS"},"2"),Object(i.jsx)(a.a.Item,{icon:Object(i.jsx)(c.a,{}),onClick:function(){window.open("https://www.w3schools.com/html/default.asp","_blank")},children:"W3CSchool"},"3")]})}),Object(i.jsxs)(r.a,{style:{padding:"0 24px 24px"},children:[Object(i.jsxs)(o.a,{style:{margin:"16px 0",fontSize:18},children:[Object(i.jsx)(o.a.Item,{children:"Course"}),Object(i.jsx)(o.a.Item,{children:"Day1"}),Object(i.jsx)(o.a.Item,{children:e["*"].toUpperCase()})]}),Object(i.jsx)(m,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"",element:Object(i.jsx)(u.a,{})}),Object(i.jsx)(l.a,{path:"html",element:Object(i.jsx)(s,{})}),Object(i.jsx)(l.a,{path:"css",element:Object(i.jsx)(p,{})})]})})]})]})}},221:function(e,t,n){"use strict";var r=n(3),a=n(4),o=n(7),c=n(0),l=n(60),i=n(5),s=n.n(i),p={adjustX:1,adjustY:1},u=[0,0],m={topLeft:{points:["bl","tl"],overflow:p,offset:[0,-4],targetOffset:u},topCenter:{points:["bc","tc"],overflow:p,offset:[0,-4],targetOffset:u},topRight:{points:["br","tr"],overflow:p,offset:[0,-4],targetOffset:u},bottomLeft:{points:["tl","bl"],overflow:p,offset:[0,4],targetOffset:u},bottomCenter:{points:["tc","bc"],overflow:p,offset:[0,4],targetOffset:u},bottomRight:{points:["tr","br"],overflow:p,offset:[0,4],targetOffset:u}};var f=c.forwardRef((function(e,t){var n=e.arrow,i=void 0!==n&&n,p=e.prefixCls,u=void 0===p?"rc-dropdown":p,f=e.transitionName,d=e.animation,b=e.align,v=e.placement,h=void 0===v?"bottomLeft":v,y=e.placements,j=void 0===y?m:y,O=e.getPopupContainer,g=e.showAction,C=e.hideAction,x=e.overlayClassName,w=e.overlayStyle,E=e.visible,N=e.trigger,P=void 0===N?["hover"]:N,S=Object(o.a)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),R=c.useState(),k=Object(a.a)(R,2),A=k[0],T=k[1],_="visible"in e?E:A,I=c.useRef(null);c.useImperativeHandle(t,(function(){return I.current}));var D=function(){var t=e.overlay;return"function"===typeof t?t():t},M=function(t){var n=e.onOverlayClick,r=D().props;T(!1),n&&n(t),r.onClick&&r.onClick(t)},B=function(){var e=D(),t={prefixCls:"".concat(u,"-menu"),onClick:M};return"string"===typeof e.type&&delete t.prefixCls,c.createElement(c.Fragment,null,i&&c.createElement("div",{className:"".concat(u,"-arrow")}),c.cloneElement(e,t))},L=C;return L||-1===P.indexOf("contextMenu")||(L=["click"]),c.createElement(l.a,Object.assign({},S,{prefixCls:u,ref:I,popupClassName:s()(x,Object(r.a)({},"".concat(u,"-show-arrow"),i)),popupStyle:w,builtinPlacements:j,action:P,showAction:g,hideAction:L||[],popupPlacement:h,popupAlign:b,popupTransitionName:f,popupAnimation:d,popupVisible:_,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?B:B(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;T(t),"function"===typeof n&&n(t)},getPopupContainer:O}),function(){var t=e.children,n=t.props?t.props:{},r=s()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(u,"-open")}());return A&&t?c.cloneElement(t,{className:r}):t}())}));t.a=f},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(97),a=n(98),o=n(101),c=n(99),l=n(0),i=n(231),s=n(18),p=i.a.Title,u=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(s.jsx)(p,{level:3,children:"\uc67c\ucabd \uba54\ub274\ub97c \ud074\ub9ad\ud574 \uc8fc\uc138\uc694"})}}]),n}(l.Component)},223:function(e,t,n){"use strict";var r=n(2),a=n(3),o=n(6),c=n(0),l=n(5),i=n.n(l),s=n(33),p=n(1),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},m=n(11),f=function(e,t){return c.createElement(m.a,Object(p.a)(Object(p.a)({},e),{},{ref:t,icon:u}))};f.displayName="DownOutlined";var d=c.forwardRef(f),b=n(221),v=n(82),h=n(4),y=n(100),j=n(216),O=n(36),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},C=j.a.Group,x=function(e){var t=c.useContext(O.b),n=t.getPopupContainer,a=t.getPrefixCls,o=t.direction,l=e.prefixCls,s=e.type,p=void 0===s?"default":s,u=e.disabled,m=e.onClick,f=e.htmlType,d=e.children,b=e.className,v=e.overlay,x=e.trigger,w=e.align,E=e.visible,N=e.onVisibleChange,P=e.placement,S=e.getPopupContainer,k=e.href,A=e.icon,T=void 0===A?c.createElement(y.a,null):A,_=e.title,I=e.buttonsRender,D=void 0===I?function(e){return e}:I,M=e.mouseEnterDelay,B=e.mouseLeaveDelay,L=e.overlayClassName,U=e.overlayStyle,V=g(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle"]),z=a("dropdown-button",l),W={align:w,overlay:v,disabled:u,trigger:u?[]:x,onVisibleChange:N,getPopupContainer:S||n,mouseEnterDelay:M,mouseLeaveDelay:B,overlayClassName:L,overlayStyle:U};"visible"in e&&(W.visible=E),W.placement="placement"in e?P:"rtl"===o?"bottomLeft":"bottomRight";var H=D([c.createElement(j.a,{type:p,disabled:u,onClick:m,htmlType:f,href:k,title:_},d),c.createElement(j.a,{type:p,icon:T})]),F=Object(h.a)(H,2),J=F[0],G=F[1];return c.createElement(C,Object(r.a)({},V,{className:i()(z,b)}),J,c.createElement(R,W,G))};x.__ANT_BUTTON=!0;var w=x,E=n(28),N=n(38),P=n(20),S=(Object(N.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,n=c.useContext(O.b),o=n.getPopupContainer,l=n.getPrefixCls,s=n.direction,p=e.arrow,u=e.prefixCls,m=e.children,f=e.trigger,d=e.disabled,h=e.getPopupContainer,y=e.overlayClassName,j=l("dropdown",u),g=c.Children.only(m),C=Object(P.a)(g,{className:i()("".concat(j,"-trigger"),Object(a.a)({},"".concat(j,"-rtl"),"rtl"===s),g.props.className),disabled:d}),x=i()(y,Object(a.a)({},"".concat(j,"-rtl"),"rtl"===s)),w=d?[]:f;return w&&-1!==w.indexOf("contextMenu")&&(t=!0),c.createElement(b.a,Object(r.a)({arrow:p,alignPoint:t},e,{overlayClassName:x,prefixCls:j,getPopupContainer:h||o,transitionName:function(){var t=l(),n=e.placement,r=void 0===n?"":n,a=e.transitionName;return void 0!==a?a:r.indexOf("top")>=0?"".concat(t,"-slide-down"):"".concat(t,"-slide-up")}(),trigger:w,overlay:function(){return function(t){var n,r=e.overlay;n="function"===typeof r?r():r;var a=(n=c.Children.only("string"===typeof n?c.createElement("span",null,n):n)).props;Object(E.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var o=a.selectable,l=void 0!==o&&o,i=a.expandIcon,s="undefined"!==typeof i&&c.isValidElement(i)?i:c.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},c.createElement(v.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?n:Object(P.a)(n,{mode:"vertical",selectable:l,expandIcon:s})}(j)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===s?"bottomRight":"bottomLeft"}()}),C)});S.Button=w,S.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var R=S,k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},A=function(e){var t,n,a=e.prefixCls,o=e.separator,l=void 0===o?"/":o,i=e.children,s=e.overlay,p=e.dropdownProps,u=k(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,c.useContext(O.b).getPrefixCls)("breadcrumb",a);return t="href"in u?c.createElement("a",Object(r.a)({className:"".concat(m,"-link")},u),i):c.createElement("span",Object(r.a)({className:"".concat(m,"-link")},u),i),n=t,t=s?c.createElement(R,Object(r.a)({overlay:s,placement:"bottomCenter"},p),c.createElement("span",{className:"".concat(m,"-overlay-link")},n,c.createElement(d,null))):n,i?c.createElement("span",null,t,l&&c.createElement("span",{className:"".concat(m,"-separator")},l)):null};A.__ANT_BREADCRUMB_ITEM=!0;var T=A,_=function(e){var t=e.children,n=(0,c.useContext(O.b).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(n,"-separator")},t||"/")};_.__ANT_BREADCRUMB_SEPARATOR=!0;var I=_,D=n(217),M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function B(e,t,n,r){var a=n.indexOf(e)===n.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?c.createElement("span",null,o):c.createElement("a",{href:"#/".concat(r.join("/"))},o)}var L=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},U=function(e){var t,n=e.prefixCls,l=e.separator,p=void 0===l?"/":l,u=e.style,m=e.className,f=e.routes,d=e.children,b=e.itemRender,v=void 0===b?B:b,h=e.params,y=void 0===h?{}:h,j=M(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),g=c.useContext(O.b),C=g.getPrefixCls,x=g.direction,w=C("breadcrumb",n);if(f&&f.length>0){var N=[];t=f.map((function(e){var t,n=L(e.path,y);return n&&N.push(n),e.children&&e.children.length&&(t=c.createElement(D.a,null,e.children.map((function(e){return c.createElement(D.a.Item,{key:e.path||e.breadcrumbName},v(e,y,f,function(e,t,n){var r=Object(o.a)(e),a=L(t||"",n);return a&&r.push(a),r}(N,e.path,y)))})))),c.createElement(T,{overlay:t,separator:p,key:n||e.breadcrumbName},v(e,y,f,N))}))}else d&&(t=Object(s.a)(d).map((function(e,t){return e?(Object(E.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(P.a)(e,{separator:p,key:t})):e})));var S=i()(w,Object(a.a)({},"".concat(w,"-rtl"),"rtl"===x),m);return c.createElement("div",Object(r.a)({className:S,style:u},j),t)};U.Item=T,U.Separator=I;var V=U;t.a=V},224:function(e,t,n){"use strict";var r=n(1),a=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},c=n(11),l=function(e,t){return a.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:o}))};l.displayName="UserOutlined";t.a=a.forwardRef(l)}}]);
//# sourceMappingURL=1.d5315a4e.chunk.js.map