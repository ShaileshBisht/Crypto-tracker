(this["webpackJsonpcrypto-api"]=this["webpackJsonpcrypto-api"]||[]).push([[0],{42:function(e,c,n){},43:function(e,c,n){},44:function(e,c,n){},51:function(e,c,n){},53:function(e,c,n){},54:function(e,c,n){},55:function(e,c,n){"use strict";n.r(c);var t=n(0),r=n.n(t),i=n(19),a=n.n(i),s=(n(42),n(43),n(44),n.p+"static/media/coinnav1.f7e11c72.webp"),o=n(3),l=n(15),d=n(1);var j=function(){var e=Object(o.f)();return Object(t.useEffect)((function(){l.a.from(".coinImg",{duration:2,rotate:"360deg",repeat:-1,yoyo:!0}),l.a.from(".aniTitle",{duration:2,y:-100,ease:"bounce.out(1, 0.3)"})}),[]),Object(t.useEffect)((function(){window.onscroll=function(){window.pageYOffset>50?document.getElementById("navBar").classList.add("navBar_active"):document.getElementById("navBar").classList.remove("navBar_active")}})),Object(d.jsx)("div",{className:"navBar",id:"navBar",children:Object(d.jsx)("section",{children:Object(d.jsx)("nav",{className:"navBar_container",children:Object(d.jsxs)("div",{onClick:function(){return e.push("/")},className:"navBar_container-left",id:"navBar_container-left",children:[Object(d.jsx)("img",{className:"coinImg",src:s,alt:""}),Object(d.jsxs)("h1",{className:"aniTitle",children:["crypto",Object(d.jsx)("strong",{children:"Tracker"})]})]})})})})},h=n(16),u=n.n(h),b=n(22),p=n(25),O=(n(51),n(14)),x=n(26),v=Object(x.b)({name:"coin",initialState:{coin:0},reducers:{tracker:function(e,c){e.coin=c.payload}}}),m=v.actions.tracker,g=function(e){return e.coin.coin},f=v.reducer;n(53);var _=function(e){var c=e.coinid,n=e.name,t=e.image,r=e.symbol,i=e.current_price,a=e.rank,s=e.hourChangePercentage,l=e.ChangePercentage24,j=e.updated,h=Object(o.f)(),u=Object(O.b)();return Object(d.jsx)("div",{onClick:function(){u(m({uid:c})),h.push("./coin/detail")},className:"cryptoCard",children:Object(d.jsxs)("section",{className:"cryptoCard_block",children:[Object(d.jsxs)("div",{className:"cryptoCard_left",children:[Object(d.jsxs)("div",{className:"left_rank",children:[Object(d.jsx)("h3",{children:"rank"}),Object(d.jsx)("p",{children:a})]}),Object(d.jsx)("img",{src:t,alt:""}),Object(d.jsxs)("div",{className:"left_name",children:[Object(d.jsx)("h3",{children:"Name"}),Object(d.jsxs)("p",{children:[n,"(",r,")"]})]})]}),Object(d.jsxs)("div",{className:"cryptoCard_price",children:[Object(d.jsx)("h3",{children:"current price"}),Object(d.jsxs)("p",{children:["\u20b9 ",null===i||void 0===i?void 0:i.toLocaleString("en-IN")]})]}),Object(d.jsxs)("div",{className:"cryptoCard_24Hour",children:[Object(d.jsx)("h3",{children:"Price change 24h"}),Object(d.jsxs)("p",{className:l>0?"green":"red",children:[null===l||void 0===l?void 0:l.toFixed(2),"%"]})]}),Object(d.jsxs)("div",{className:"cryptoCard_1Hour",children:[Object(d.jsx)("h3",{children:"Price change 1h"}),Object(d.jsxs)("p",{className:s>0?"green":"red",children:[null===s||void 0===s?void 0:s.toFixed(2),"%"]})]}),Object(d.jsxs)("div",{className:"cryptoCard_updated",children:[Object(d.jsx)("h3",{children:"last updated"}),Object(d.jsx)("p",{children:j})]})]})})},y=n(69),k=n(66),N=Object(k.a)((function(e){return{root:{marginTop:"30px",display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));var C=function(){var e=N(),c=Object(t.useState)([]),n=Object(p.a)(c,2),r=n[0],i=n[1];return Object(t.useEffect)((function(){return function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h").then((function(e){return e.json()})).then((function(e){return i(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(d.jsx)("div",{className:"homeDisplay",children:0!==r.length?Object(d.jsx)(d.Fragment,{children:r.map((function(e){return Object(d.jsx)(_,{coinid:e.id,name:e.name,image:e.image,symbol:e.symbol,current_price:e.current_price,rank:e.market_cap_rank,hourChangePercentage:e.price_change_percentage_1h_in_currency,ChangePercentage24:e.price_change_percentage_24h,updated:e.last_updated},e.id)}))}):Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(y.a,{}),Object(d.jsx)(y.a,{color:"secondary"})]})})},w=n(21),B=(n(54),Object(k.a)((function(e){return{root:{marginTop:"30px",display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}})));var P=function(){var e,c,n,r,i,a,s,o,j,h,x,v,m,f,_,k,N,C,w,P=B(),I=Object(O.c)(g),S=Object(t.useState)([]),D=Object(p.a)(S,2),E=D[0],F=D[1];return console.log(E),Object(t.useEffect)((function(){l.a.from(".coinDetail",{duration:2,opacity:0,rotateY:"360deg",ease:"back.out(1.7)"})})),Object(t.useEffect)((function(){return function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/".concat(I.uid)).then((function(e){return e.json()})).then((function(e){return F(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[I]),Object(d.jsx)("div",{children:0!==E.length?Object(d.jsxs)("div",{className:"coinDetail",children:[Object(d.jsxs)("div",{className:"coinDetail_top",children:[Object(d.jsx)("div",{className:"coinDetail_top-left",children:Object(d.jsx)("img",{src:null===(e=E.image)||void 0===e?void 0:e.large,alt:E.id})}),Object(d.jsxs)("div",{className:"coinDetail_top-right",children:[Object(d.jsxs)("h3",{children:["Name: ",Object(d.jsx)("span",{children:E.name})]}),Object(d.jsxs)("h3",{children:["Symbol: ",Object(d.jsx)("span",{children:E.symbol})]}),Object(d.jsxs)("h3",{children:["Categories: ",Object(d.jsx)("span",{children:E.categories})]})]})]}),Object(d.jsxs)("div",{className:"coinDetail_middle",children:[Object(d.jsxs)("h3",{children:["Hashing Algorithm: ",Object(d.jsx)("span",{children:E.hashing_algorithm})]}),Object(d.jsxs)("h3",{children:["Official Site :",Object(d.jsx)("a",{href:null===(c=E.links)||void 0===c?void 0:c.homepage,target:"_blank",rel:"noreferrer",children:"Click here"})]}),Object(d.jsxs)("h3",{children:["Market Cap Rank: ",Object(d.jsx)("span",{children:E.market_cap_rank})]}),Object(d.jsxs)("h3",{children:["Current Price:"," ",Object(d.jsxs)("span",{children:["\u20b9"," ",null===E||void 0===E||null===(n=E.market_data)||void 0===n||null===(r=n.current_price)||void 0===r||null===(i=r.inr)||void 0===i?void 0:i.toLocaleString("en-IN")]})]}),Object(d.jsxs)("h3",{children:["Total Volume:"," ",Object(d.jsxs)("span",{children:["\u20b9"," ",null===E||void 0===E||null===(a=E.market_data)||void 0===a||null===(s=a.total_volume)||void 0===s||null===(o=s.inr)||void 0===o?void 0:o.toLocaleString("en-IN")]})]}),Object(d.jsxs)("h3",{children:["Price Change in 1hrs:"," ",Object(d.jsxs)("span",{children:[null===E||void 0===E||null===(j=E.market_data)||void 0===j||null===(h=j.price_change_percentage_1h_in_currency)||void 0===h||null===(x=h.inr)||void 0===x?void 0:x.toFixed(2),"%"]})]}),Object(d.jsxs)("h3",{children:["Price Change in 24hrs:"," ",Object(d.jsxs)("span",{children:[null===E||void 0===E||null===(v=E.market_data)||void 0===v||null===(m=v.price_change_percentage_24h)||void 0===m?void 0:m.toFixed(2),"%"]})]}),Object(d.jsxs)("h3",{children:["Price Change in 7Day:"," ",Object(d.jsxs)("span",{children:[null===E||void 0===E||null===(f=E.market_data)||void 0===f||null===(_=f.price_change_percentage_7d_in_currency)||void 0===_||null===(k=_.inr)||void 0===k?void 0:k.toFixed(2),"%"]})]}),Object(d.jsxs)("h3",{children:["Price Change in 1Y:"," ",Object(d.jsxs)("span",{children:[null===E||void 0===E||null===(N=E.market_data)||void 0===N||null===(C=N.price_change_percentage_1y_in_currency)||void 0===C||null===(w=C.inr)||void 0===w?void 0:w.toFixed(2),"%"]})]})]})]}):Object(d.jsxs)("div",{className:P.root,children:[Object(d.jsx)(y.a,{}),Object(d.jsx)(y.a,{color:"secondary"})]})})};var I=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)(w.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(C,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/coin/detail",children:Object(d.jsx)(P,{})})]})]})})},S=Object(x.a)({reducer:{coin:f}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O.a,{store:S,children:Object(d.jsx)(I,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.d405954f.chunk.js.map