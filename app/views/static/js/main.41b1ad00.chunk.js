(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(29),a=c.n(r),s=c(10),i=c(8),l=c(9),o=c(13),d=c(12),j=(c(36),c(2)),h=c(15),u=c(30),b=c.n(u).a.create({baseURL:"http://localhost:8000",headers:{"Content-type":"application/json"}}),O=new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"findAll",value:function(){return console.log("hola mundo llegue"),b.get("/getProductos")}}]),e}()),x=c(1),m=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).retrieveProductos=n.retrieveProductos.bind(Object(h.a)(n)),n.refreshList=n.refreshList.bind(Object(h.a)(n)),n.state={productos:[],currentProducto:null,currentIndex:-1,searchTitle:""},n}return Object(l.a)(c,[{key:"componentDidMount",value:function(){this.retrieveProductos()}},{key:"retrieveProductos",value:function(){var e=this;O.findAll().then((function(t){e.setState({productos:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveProductos(),this.setState({currentProducto:null,currentIndex:-1})}},{key:"render",value:function(){var e=this.state,t=e.productos;e.currentIndex;return Object(x.jsx)("main",{children:Object(x.jsxs)("form",{children:[Object(x.jsx)("legend",{children:"Declaraci\xf3n Jurada"}),Object(x.jsx)("div",{class:"mb-3",children:Object(x.jsx)("label",{for:"disabledTextInput",class:"form-label",children:"CUIT: 23-42450167-5"})}),Object(x.jsx)("ul",{className:"list-group",children:t&&t.map((function(e,t){return Object(x.jsx)("li",{children:e.nombre})}))}),Object(x.jsx)("div",{class:"mb-3",children:Object(x.jsxs)("div",{class:"form-check",children:[Object(x.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),Object(x.jsx)("label",{class:"form-check-label",for:"flexCheckDefault",children:"JURO QUE ESTOS DATOS SON CORRECTOS"})]})}),Object(x.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Enviar Declaracion"})]})})}}]),c}(n.Component),p=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(x.jsxs)("main",{children:[Object(x.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(x.jsx)("strong",{children:"\xa1Fecha l\xedmite cerca!"})," La secretar\xeda informo acerca de la tardanza para entregar la DJ",Object(x.jsx)("button",{type:"button",class:"close","data-bs-dismiss":"alert","aria-label":"Close",children:Object(x.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(x.jsx)("main",{role:"main",class:"inner cover",id:"central",children:Object(x.jsxs)("main",{children:[Object(x.jsx)("h1",{class:"cover-heading",children:"Una empresa que vende ripio."}),Object(x.jsx)("p",{class:"lead",children:"Vendemos un par de cosas mas, pero tambien tenemos ripio."})]})})]})}}]),c}(n.Component),v=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(x.jsx)("div",{class:"text-center",children:Object(x.jsxs)("div",{class:"cover-container d-flex h-100 p-3 mx flex-column",children:[Object(x.jsx)("header",{class:"masthead mb",children:Object(x.jsxs)("div",{class:"inner",children:[Object(x.jsx)("h4",{class:"masthead-brand ",children:Object(x.jsx)("a",{href:"/principal",className:"navbar-brand",children:"Corralon Nak"})}),Object(x.jsxs)("nav",{class:"nav nav-masthead justify-content-center",children:[Object(x.jsx)("a",{class:"nav-link active",children:Object(x.jsx)(s.b,{to:"/principal",children:"Principal"})}),Object(x.jsx)("a",{class:"nav-link active",children:Object(x.jsx)(s.b,{to:"/servicios",children:"Servicios"})})]})]})}),Object(x.jsx)("div",{className:"container mt-3",children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:["/","/servicios"],component:m}),Object(x.jsx)(j.a,{exact:!0,path:["/","/principal"],component:p})]})})]})})}}]),c}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(x.jsx)(s.a,{children:Object(x.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.41b1ad00.chunk.js.map