(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{47:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(34),r=c.n(i),s=c(10),o=c(9),l=(c(47),c(2)),d=c(21),j=c(13),b=c(14),h=c(11),u=c(18),O=c(17),x=c(35),m=c.n(x).a.create({baseURL:"http://localhost:8000",headers:{"Content-type":"application/json"}}),p=new(function(){function e(){Object(j.a)(this,e)}return Object(b.a)(e,[{key:"findAll",value:function(){return m.get("/getProductos")}}]),e}()),v=(c(65),c(8)),f=c.n(v),g=c(0),k=f.a.generarRegistro("1","Ripio",1234567895825,3800,"m^3",3500,2699),y=f.a.generarRegistro("2","Cemento",8596963247852,849,"Bolsa x50 kg",2365,2300),C=f.a.generarRegistro("3","Cal",6958254573628,351.8,"Bolsa x20 kg",3285,3146),N=f.a.cargarRegistro(k,N);N=f.a.cargarRegistro(y,N),N=f.a.cargarRegistro(C,N);var R=f.a.generarRegimen(2020,10,N,undefined,"15362585915","Ricardo Ramirez e Hijos S.R.L"),w=function(e){Object(u.a)(c,e);var t=Object(O.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).isChecked=function(){n.setState((function(e){return{isHidden:!e.isHidden}}))},n.retrieveProductos=n.retrieveProductos.bind(Object(h.a)(n)),n.refreshList=n.refreshList.bind(Object(h.a)(n)),n.postRegimen=n.postRegimen.bind(Object(h.a)(n)),n.isChecked=n.isChecked.bind(Object(h.a)(n)),n.state={isHidden:!1},n.state={productos:[],currentProducto:null,currentIndex:-1,searchTitle:""},n}return Object(b.a)(c,[{key:"componentDidMount",value:function(){this.retrieveProductos()}},{key:"retrieveProductos",value:function(){var e=this;p.findAll().then((function(t){e.setState({productos:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveProductos(),this.setState({currentProducto:null,currentIndex:-1})}},{key:"postRegimen",value:function(){f.a.postRegimen("https://60a829368532520017ae5a5f.mockapi.io/regimen",R),alert("notificacion enviada satisfactoriamente")}},{key:"render",value:function(){var e,t=this.state,c=t.productos;t.currentIndex;return Object(g.jsx)("main",{children:Object(g.jsxs)("form",{children:[Object(g.jsx)("legend",{children:"Declaraci\xf3n Jurada"}),Object(g.jsx)("div",{class:"mb-3",children:Object(g.jsx)("label",{for:"disabledTextInput",class:"form-label",children:"CUIT: 23-42450167-5"})}),Object(g.jsxs)("table",{"data-table-name":"test-fake-table",class:"ui compact selectable table",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsxs)("th",{children:[Object(g.jsx)("span",{children:"Nombre Producto"}),Object(g.jsx)("span",{class:"rsdt "})]}),Object(g.jsx)("th",{children:"EAN"}),Object(g.jsx)("th",{children:"Precio Unitario"}),Object(g.jsx)("th",{children:"Cantidad Producida"}),Object(g.jsx)("th",{children:"Cantidad Vendida"})]})}),Object(g.jsx)("tbody",{children:c&&c.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.nombre}),Object(g.jsx)("td",{children:e.EAN}),Object(g.jsxs)("td",{children:["$",e.precioKG]}),Object(g.jsx)("td",{children:e.cantidadP}),Object(g.jsx)("td",{children:e.cantidadV})]})}))})]}),Object(g.jsx)("div",{class:"mb-3",children:Object(g.jsxs)("div",{class:"form-check",children:[Object(g.jsx)("input",{type:"checkbox",className:"checkbox",id:"termschkbx",onChange:this.isChecked})," "," "," ",Object(g.jsx)("label",{class:"form-check-label",children:"JURO QUE ESTOS DATOS SON CORRECTOS"})]})}),this.state.isHidden&&Object(g.jsx)("button",(e={type:"submit",id:"sub1",className:"btn btn-primary createaccount"},Object(d.a)(e,"type","submit"),Object(d.a)(e,"children","Enviar Regimen"),e))]})})}}]),c}(n.Component);f.a.getNotificacion("https://60a829368532520017ae5a5f.mockapi.io/notificaciones","9a9c8b7e-c249-4cb5-a171-655502d0c89e").then().then((function(e){return localStorage.setItem("notificacion",JSON.stringify(e))}));var S=JSON.parse(localStorage.getItem("notificacion")),P=function(e){Object(u.a)(c,e);var t=Object(O.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(g.jsx)("div",{id:"descripcion",children:S}),Object(g.jsx)("button",{type:"button",class:"close","data-bs-dismiss":"alert","aria-label":"Close",children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(g.jsx)("main",{role:"main",class:"inner cover",id:"central",children:Object(g.jsxs)("main",{children:[Object(g.jsx)("h1",{class:"cover-heading",children:"Una empresa que vende ripio."}),Object(g.jsx)("p",{class:"lead",children:"Vendemos un par de cosas mas, pero tambien tenemos ripio."})]})})]})}}]),c}(n.Component),E=function(){var e=Object(s.b)().logout;return Object(g.jsx)("button",{class:"btn btn-outline-secondary btn-sm",onClick:function(){return e({returnTo:window.location.origin})},children:"Cerrar sesion"})},I=function(){var e=Object(s.b)().loginWithRedirect;return Object(g.jsx)("button",{class:"btn btn-outline-secondary btn-sm text-right",onClick:function(){return e()},children:"Iniciar sesion"})},T={backgroundColor:"#333",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},A={display:"block",width:"100%"};var H=function(e){var t=e.children;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{style:A}),Object(g.jsxs)("div",{style:T,children:[t," ",Object(g.jsxs)("p",{children:["Pagina para la empresa ",Object(g.jsx)("a",{href:"https://getbootstrap.com/",children:"Los enripiadores"}),", by ",Object(g.jsx)("a",{href:"https://cdn.memegenerator.es/imagenes/memes/full/31/39/31392168.jpg",children:"Grupo8"}),"."]})]})]})};var L=function(){var e=Object(s.b)().isAuthenticated;return Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)("header",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar",children:Object(g.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(g.jsx)("h4",{className:"",children:Object(g.jsx)("a",{href:"/principal",className:"h4 text-left",children:"Corralon Nak"})}),Object(g.jsx)("ul",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex",children:e?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link active",children:Object(g.jsx)(o.b,{to:"/principal",children:"Principal"})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link active",children:Object(g.jsx)(o.b,{to:"/servicios",children:"Servicios"})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(E,{})})]}):Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(o.b,{to:"/",children:Object(g.jsx)(I,{})})})})]})}),Object(g.jsx)("div",{className:"container mt-3",children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{exact:!0,path:["/servicios"],component:w}),Object(g.jsx)(l.a,{exact:!0,path:["/principal"],component:P})]})}),Object(g.jsx)(H,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(g.jsx)(o.a,{children:Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(s.a,{domain:"grupo8-tpi.us.auth0.com",clientId:"CXKqDkfXlEjROqsE4X6vTvElHHuqYBxc",redirectUri:window.location.origin,useRefreshTokens:!0,cacheLocation:"localstorage",children:Object(g.jsx)(L,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.8ae2e892.chunk.js.map