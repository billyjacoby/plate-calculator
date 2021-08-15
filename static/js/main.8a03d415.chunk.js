(this["webpackJsonpplate-calculator"]=this["webpackJsonpplate-calculator"]||[]).push([[0],{25:function(e,n,t){"use strict";t.r(n);var i,r,c,l,a=t(1),o=t.n(a),s=t(12),d=t.n(s),j=t(4),b=t(6),h=t(3),x=t(2),u=(t(21),t(0)),p=x.b.header(i||(i=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: var(--headerBGColor);\n  color: var(--headerFontColor);\n"]))),O=x.b.div(r||(r=Object(h.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n  align-items: center;\n  padding: 15px 0;\n  max-width: 800px;\n"]))),g=x.b.h1(c||(c=Object(h.a)(["\n  padding: 0;\n  margin: 0;\n"]))),v=x.b.h3(l||(l=Object(h.a)(["\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 400;\n"])));function f(){return Object(u.jsx)(p,{children:Object(u.jsxs)(O,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{children:"plate calculator"}),Object(u.jsx)(v,{children:"get strong, not smart"})]}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"https://github.com",children:"Github"})})]})})}var y,m,W,w,I,C=t(5),F=x.b.button(y||(y=Object(h.a)(["\n  font-size: ",";\n  min-width: ",";\n  min-height: ",";\n  padding: 10px;\n  border-radius: 15px;\n  margin: 10px;\n\n  background-color: var(--colorFour);\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n"])),(function(e){return e.small?"12px":"24px"}),(function(e){return e.small?"2rem":"3rem"}),(function(e){return e.small?"2rem":"3rem"})),k=Object(x.a)(m||(m=Object(h.a)(["\n  :root {\n    --blue: green;\n\n    ","\n    --colorOne: #082032;\n    --colorTwo: #2C394B;\n    --colorThree: #334756;\n    --colorFour: #FF4C29;\n    --colorFive: #f4f4f4;\n\n    --headerBGColor: #082032;\n    --headerFontColor: #FF4C29;\n  }\n\n  html {\n    font-family: Inter;\n    font-weight: 400;\n    color: var(--colorFive);\n  }\n  body {\n    background-color: var(--colorThree);\n  }\n"])),""),P=x.b.div(W||(W=Object(h.a)(["\n  border: 1px solid var(--colorFive);\n  margin: 5px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1 200px;\n  /* padding: 50px 0; */\n"]))),S=x.b.div(w||(w=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 150px;\n  align-items: center;\n  justify-content: space-around;\n"]))),z=x.b.span(I||(I=Object(h.a)(["\n  font-size: 24px;\n  font-weight: 600;\n"]))),B=function(e){var n=e.weight,t=e.inventory,i=e.setPlateInventory;return Object(u.jsx)(P,{children:Object(u.jsxs)(S,{children:[Object(u.jsxs)(z,{children:[n," lbs"]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(F,{type:"button",onClick:function(){return i(Object(j.a)(Object(j.a)({},t),{},Object(C.a)({},n,t[n]-1)))},children:"-"}),Object(u.jsx)(z,{children:t[n]}),Object(u.jsx)(F,{type:"button",onClick:function(){return i(Object(j.a)(Object(j.a)({},t),{},Object(C.a)({},n,t[n]+1)))},children:"+"})]})]})})},q=t(16);var G,T,D,E,J,M,A,H,K=function(e){var n=e.desiredWeight,t=e.barWeight,i=e.plateInventory;if((n=parseInt(n,10))-(t=parseInt(t,10))<0)return!1;var r={plates:[],closestWeight:0},c=n-t;r.closestWeight=t;var l,a=Object(q.a)(Object.entries(i).sort((function(e,n){return parseInt(e[0])<parseInt(n[0])?1:-1})));try{for(a.s();!(l=a.n()).done;){var o=l.value,s=2*Math.floor(c/o[0]/2);if(o[1]>=s){if(0===s)continue;i[o[0]]-=s,r.plates.push({plateWeight:o[0],qty:s}),r.closestWeight+=o[0]*s,c-=o[0]*s}else i[o[0]]=0,r.plates.push({plateWeight:o[0],qty:o[1]}),r.closestWeight+=o[0]*o[1],c-=o[0]*o[1]}}catch(d){a.e(d)}finally{a.f()}return parseInt(r.closestWeight,10)===parseInt(n,10)&&(r.exactWeight=!0),r},L=x.b.div(G||(G=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]))),N=x.b.div(T||(T=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Q=x.b.form(D||(D=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & > * {\n    margin: 10px 0;\n  }\n"]))),R=x.b.div(E||(E=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),U=x.b.div(J||(J=Object(h.a)(["\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),V=x.b.div(M||(M=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid var(--colorFive);\n  padding: 10px 100px;\n  border-radius: 10px;\n\n  & > * {\n    margin: 2px 0px;\n  }\n"]))),X=x.b.ul(A||(A=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  list-style: none;\n"]))),Y=x.b.li(H||(H=Object(h.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  margin: 5px 0;\n"])));var Z=function(){var e=Object(a.useState)(""),n=Object(b.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(45),c=Object(b.a)(r,2),l=c[0],o=c[1],s=Object(a.useState)(),d=Object(b.a)(s,2),h=d[0],x=d[1],p=Object(a.useState)({45:4,35:2,25:4,10:4,5:4,2.5:2}),O=Object(b.a)(p,2),g=O[0],v=O[1];function y(e){null===e||void 0===e||e.preventDefault(),x(K({desiredWeight:t,barWeight:l||0,plateInventory:Object(j.a)({},g)}))}return Object(u.jsxs)(L,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)(N,{children:[Object(u.jsxs)(Q,{children:[Object(u.jsxs)("label",{htmlFor:"desiredWeight",children:["Enter Desired Weight:",Object(u.jsx)("input",{type:"number",name:"desiredWeight",placeholder:"135",value:t,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsx)("label",{htmlFor:"barWeight",children:" Choose a bar weight: "}),Object(u.jsxs)("select",{name:"barWeight",id:"barWeight",style:{padding:"2px 10px"},value:l,onChange:function(e){return o(e.target.value)},children:[Object(u.jsx)("option",{value:"45",default:!0,children:"45lbs"}),Object(u.jsx)("option",{value:"35",children:"35lbs"}),Object(u.jsx)("option",{value:"25",children:"25lbs"}),Object(u.jsx)("option",{value:"15",children:"15lbs"}),Object(u.jsx)("option",{value:"10",children:"10lbs"}),Object(u.jsx)("option",{value:"0",children:"0"}),Object(u.jsx)("option",{value:"other",disabled:!0,children:"other"})]}),h?Object(u.jsxs)(V,{children:[Object(u.jsx)("h3",{children:"Plates needed:"}),Object(u.jsxs)("div",{children:[!(null===h||void 0===h?void 0:h.exactWeight)&&Object(u.jsxs)("p",{children:["Closest Weight: ",null===h||void 0===h?void 0:h.closestWeight]}),Object(u.jsx)(X,{children:null===h||void 0===h?void 0:h.plates.map((function(e){return Object(u.jsx)(Y,{children:Object(u.jsxs)("span",{children:[e.plateWeight,"lbs x ",e.qty]})},e.plateWeight)}))})]}),Object(u.jsx)(F,{type:"submit",onClick:y,disabled:!t,children:"re-Calculate!"})]}):Object(u.jsx)(F,{type:"submit",onClick:y,disabled:!t,children:"Calculate!"})]}),Object(u.jsxs)(R,{children:[Object(u.jsx)("h2",{children:"Plate Inventory:"}),Object(u.jsxs)(U,{children:[Object(u.jsx)(B,{weight:"45",inventory:g,setPlateInventory:v}),Object(u.jsx)(B,{weight:"35",inventory:g,setPlateInventory:v}),Object(u.jsx)(B,{weight:"25",inventory:g,setPlateInventory:v}),Object(u.jsx)(B,{weight:"10",inventory:g,setPlateInventory:v}),Object(u.jsx)(B,{weight:"5",inventory:g,setPlateInventory:v}),Object(u.jsx)(B,{weight:"2.5",inventory:g,setPlateInventory:v})]})]})]})]})};d.a.render(Object(u.jsxs)(o.a.StrictMode,{children:[Object(u.jsx)(Z,{}),Object(u.jsx)(k,{})]}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.8a03d415.chunk.js.map