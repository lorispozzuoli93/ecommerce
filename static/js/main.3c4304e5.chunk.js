(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{31:function(n,e,t){},32:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,d,p,s,l,x,u,b,g,h,j,m,f,O,w,v,y,k,C=t(0),T=t.n(C),z=t(21),S=t.n(z),Q=(t(31),t(9)),B=(t(32),t(4)),E=t(2),P=t(3),F=t(1),U=P.a.div(r||(r=Object(E.a)(["\n  background-color: rgb(255, 255, 255);\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,\n    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n"]))),L=P.a.a(i||(i=Object(E.a)(["\n  text-decoration: none;\n  color: black;\n"]))),N=P.a.img(o||(o=Object(E.a)(["\n  width: 100%;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n"]))),R=P.a.div(a||(a=Object(E.a)(["\n  padding-left: 16px;\n  margin-top: 0px;\n"]))),I=P.a.h5(c||(c=Object(E.a)(["\n  margin: 0px;\n  padding-top: 12px;\n  font-weight: 400;\n  font-size: 1.5rem;\n  line-height: 1.334;\n  letter-spacing: 0em;\n"]))),A=P.a.p(d||(d=Object(E.a)(["\n  margin: 0px 0px 12px;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5;\n  letter-spacing: 0.00938em;\n  color: rgba(0, 0, 0, 0.6);\n"]))),K=P.a.p(p||(p=Object(E.a)(["\n  margin: 0px 0px 24px;\n"]))),D=P.a.span(s||(s=Object(E.a)(["\n  font-size: 0.8125rem;\n  padding: 12px;\n  display: inline-flex;\n  align-items: center;\n  height: 32px;\n  color: rgba(0, 0, 0, 0.87);\n  background-color: rgba(0, 0, 0, 0.08);\n  border-radius: 16px;\n  letter-spacing: 0.1px;\n  cursor: default;\n  outline: 0px;\n  text-decoration: none;\n  border: 0px;\n  vertical-align: middle;\n  box-sizing: border-box;\n"]))),H=function(n){var e=n.product;return Object(F.jsx)(U,{children:Object(F.jsxs)(L,{href:"/product/".concat(e.UPC),children:[Object(F.jsx)(N,{src:"https://via.placeholder.com/350"}),Object(F.jsxs)(R,{children:[Object(F.jsx)(I,{children:e.name}),Object(F.jsxs)(A,{children:["$ ",e.price.current.value]}),Object(F.jsx)(K,{children:e.availability.stock>0?Object(F.jsx)(D,{children:" in stock "}):Object(F.jsx)(D,{children:" out of stock "})})]})]})},e.UPC)},J=P.a.div(l||(l=Object(E.a)(["\n  margin-top: 22px;\n  @media (min-width: 1280px) {\n    margin-left: 82px;\n  }\n  @media (min-width: 768px) {\n    margin-right: -20px;\n  }\n  @media (max-width: 540px) {\n    margin-left: 10px;\n    margin-right: 50px;\n  }\n  @media (max-width: 414px) {\n    margin-right: 50px;\n  }\n  @media (max-width: 280px) {\n    margin-right: 0px;\n  }\n"]))),M=P.a.button(x||(x=Object(E.a)(["\n  background-color: transparent;\n  color: #1976d2;\n  height: 36px;\n  min-width: 64px;\n  padding: 5px 15px;\n  cursor: pointer;\n  border: 1px solid rgba(25, 118, 210, 0.5);\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  box-shadow: 0px 1.5px #888888;\n  vertical-align: middle;\n  transition: 250ms;\n  &.in {\n    border-radius: 5px 0 0 5px;\n  }\n  &.out {\n    border-radius: 0 5px 5px 0;\n  }\n  &:hover {\n    background-color: rgba(25, 118, 210, 0.04);\n    color: #1976d2;\n    border: 1px solid rgb(25, 118, 210);\n  }\n  &.selected {\n    background-color: #1976d2;\n    color: #fff;\n  }\n  &.selected:hover {\n    background-color: #155697;\n  }\n"]))),_=function(n){var e=n.toggle,t=n.setToggle;return Object(F.jsxs)(J,{children:[Object(F.jsx)(M,{className:"in"===e?"in selected":"in",activeButton:"in"===e,onClick:function(){return t("in"===e?"none":"in")},children:"IN STOCK"}),Object(F.jsx)(M,{className:"out"===e?"out selected":"out",activeButton:"out"===e,onClick:function(){return t("out"===e?"none":"out")},children:"OUT OF STOCK"})]})},W=t(26),X=P.a.div(u||(u=Object(E.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.75;\n    background-color: ",";\n    animation-name: ripple;\n    animation-duration: ","ms;\n  }\n\n  @keyframes ripple {\n    to {\n      opacity: 0;\n      transform: scale(2);\n    }\n  }\n"])),(function(n){return n.color}),(function(n){return n.duration})),Y=function(n){var e=n.duration,t=void 0===e?850:e,r=n.color,i=void 0===r?"rgba(255,255,255,0.4)":r,o=Object(C.useState)([]),a=Object(Q.a)(o,2),c=a[0],d=a[1];!function(n,e,t){Object(C.useLayoutEffect)((function(){var r=null;return n>0&&(clearTimeout(r),r=setTimeout((function(){t(),clearTimeout(r)}),4*e)),function(){return clearTimeout(r)}}),[n,e,t])}(c.length,t,(function(){d([])}));return Object(F.jsx)(X,{duration:t,color:i,onMouseDown:function(n){var e=n.currentTarget.getBoundingClientRect(),t=e.width>e.height?e.width:e.height,r={x:n.pageX-e.x-t/2,y:n.pageY-e.y-t/2,size:t};d([].concat(Object(W.a)(c),[r]))},children:c.length>0&&c.map((function(n,e){return Object(F.jsx)("span",{style:{top:n.y,left:n.x,width:n.size,height:n.size}},"span"+e)}))})},$=P.a.div(b||(b=Object(E.a)(["\n  margin-right: 1px;\n  @media (min-width: 1280px) {\n    margin-right: 117px;\n  }\n"]))),q=P.a.input(g||(g=Object(E.a)(["\n  font-size: 17px;\n  padding: 10px;\n  padding-left: 19px;\n  height: 34px;\n  margin-right: 16px;\n  border: 1px solid rgb(100, 100, 100, 0.5);\n  border-radius: 3px;\n  &:focus {\n    outline: none;\n    border: 2px solid #1976d2;\n  }\n  @media (min-width: 1280px) {\n    width: 380px;\n  }\n  @media (max-width: 540px) {\n    width: 380px;\n  }\n  @media (max-width: 414px) {\n    width: 200px;\n  }\n  @media (max-width: 320px) {\n    width: 100px;\n  }\n"]))),G=P.a.label(h||(h=Object(E.a)(["\n  color: gray;\n  font-size: 17px;\n  letter-spacing: inherit;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 14px;\n  top: 15px;\n  transition: 0.2s ease all;\n  ",":focus ~ & {\n    top: -10px;\n    font-size: 13px;\n    color: #1976d2;\n    background-color: white;\n    width: 40px;\n    padding-left: 5px;\n  }\n  &.up {\n    top: -10px;\n    font-size: 13px;\n    color: #1976d2;\n    background-color: white;\n    width: 40px;\n    padding-left: 5px;\n  }\n"])),q),V=P.a.div(j||(j=Object(E.a)(["\n  position: relative;\n  margin-top: 8px;\n  margin-left: 10px;\n  display: flex;\n"]))),Z=P.a.button(m||(m=Object(E.a)(["\n  position: relative;\n  height: 36px;\n  margin-top: 10px;\n  overflow: hidden;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  transition: background 0.5s;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  min-width: 64px;\n  padding: 6px 15.5px;\n  border-radius: 4px;\n  border: none;\n  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,\n    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;\n  transition: 0.8s;\n  &:active {\n    background-color: #1976d2;\n    opacity: 0.7;\n    transition: 2s;\n    box-shadow: 5px 5px 20px 0px #000000;\n  }\n  &:hover {\n    background-color: #155697;\n  }\n"])),(function(n){return n.colorBg?"#1976d2":"white"}),(function(n){return n.colorBg?"white":"#1976d2"})),nn=function(n){var e=n.searchQuery,t=n.setSearchQuery;return Object(F.jsxs)(V,{children:[Object(F.jsx)(q,{onChange:function(n){return t(n.target.value)},value:e}),Object(F.jsx)(G,{className:""===e?"":"up",children:"search"}),Object(F.jsxs)(Z,{colorBg:!0,onClick:function(){t("")},children:["RESET",Object(F.jsx)(Y,{})]})]})},en=function(n){var e=n.searchQuery,t=n.setSearchQuery;return Object(F.jsx)($,{children:Object(F.jsx)(nn,{searchQuery:e,setSearchQuery:t})})},tn=P.a.div(f||(f=Object(E.a)(["\n  border-bottom: 1px solid black;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),rn=function(n){var e=n.toggle,t=n.setToggle,r=n.searchQuery,i=n.setSearchQuery;return Object(F.jsxs)(tn,{children:[Object(F.jsx)("img",{style:{display:"block"},src:"https://via.placeholder.com/150x80",alt:"logo"}),Object(F.jsx)(_,{toggle:e,setToggle:t}),Object(F.jsx)(en,{searchQuery:r,setSearchQuery:i})]})},on=P.a.div(O||(O=Object(E.a)(["\n  background-color: #bdbdbd;\n  text-align: right;\n  padding: 16px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n"]))),an=P.a.a(w||(w=Object(E.a)(["\n  display: inline-flex;\n  background-color: transparent;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 0.875rem;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  min-width: 64px;\n  padding: 6px 8px;\n  color: rgb(25, 118, 210);\n  border: 0px;\n  vertical-align: middle;\n  &.border {\n    border-right: 1px solid rgb(25, 118, 210);\n  }\n"]))),cn=function(){return Object(F.jsxs)(on,{children:[Object(F.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",children:Object(F.jsx)(an,{className:"border",children:"TWITTER"})}),Object(F.jsx)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noreferrer",children:Object(F.jsx)(an,{children:"FACEBOOK"})})]})},dn=P.a.div(v||(v=Object(E.a)(["\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),pn=P.a.div(y||(y=Object(E.a)(["\n  display: grid;\n  grid-template-columns: 24.15% 24.15% 24.15% 24.15%;\n  @media (max-width: 1280px) {\n    grid-template-columns: 24% 24% 24% 24%;\n  }\n  @media (max-width: 1024px) {\n    grid-template-columns: 45% 45%;\n  }\n  @media (max-width: 414px) {\n    grid-template-columns: 98%;\n  }\n  padding-top: 16px;\n  padding-left: 16px;\n  padding-bottom: 84px;\n  @media (max-width: 1280px) {\n    padding-left: 5px;\n  }\n  @media (max-width: 1024px) {\n    padding-left: 55px;\n  }\n  @media (max-width: 768px) {\n    padding-left: 40px;\n  }\n  @media (max-width: 540px) {\n    padding-left: 25px;\n  }\n  @media (max-width: 414px) {\n    padding-left: 7px;\n  }\n  gap: 16px;\n"]))),sn=function(n){var e=n.products,t=Object(C.useState)(""),r=Object(Q.a)(t,2),i=r[0],o=r[1],a=Object(C.useState)("none"),c=Object(Q.a)(a,2),d=c[0],p=c[1];return Object(F.jsxs)(dn,{children:[Object(F.jsx)(rn,{toggle:d,setToggle:p,searchQuery:i,setSearchQuery:o}),Object(F.jsx)(pn,{children:null===e||void 0===e?void 0:e.filter((function(n){switch(d){case"in":return n.availability.stock>0;case"out":return n.availability.stock<=0;default:return!0}})).filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())})).map((function(n,e){return Object(F.jsx)(H,{product:n},e)}))}),Object(F.jsx)(cn,{})]})},ln=P.a.div(k||(k=Object(E.a)(["\n  display: grid;\n  grid-template-columns: 25%;\n"]))),xn=function(n){var e=n.products,t=Object(B.f)().UPC,r=e.find((function(n){return n.UPC===t}));return r?Object(F.jsx)(ln,{children:Object(F.jsx)(H,{product:r})}):null},un=function(){var n=Object(C.useState)([]),e=Object(Q.a)(n,2),t=e[0],r=e[1];return Object(C.useEffect)((function(){fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json").then((function(n){return n.json()})).then((function(n){return r(n)}))}),[]),Object(F.jsxs)(B.c,{children:[Object(F.jsx)(B.a,{path:"/product/:UPC",children:Object(F.jsx)(xn,{products:t})}),Object(F.jsx)(B.a,{path:"/",children:Object(F.jsx)(sn,{products:t})})]})},bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),o(n),a(n)}))},gn=t(15);S.a.render(Object(F.jsx)(T.a.StrictMode,{children:Object(F.jsx)(gn.a,{basename:"/",children:Object(F.jsx)(un,{})})}),document.getElementById("root")),bn()}},[[40,1,2]]]);
//# sourceMappingURL=main.3c4304e5.chunk.js.map