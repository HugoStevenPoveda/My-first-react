(this.webpackJsonpprimer_react=this.webpackJsonpprimer_react||[]).push([[0],{36:function(e,c,s){},61:function(e,c,s){},62:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s(1),r=s(29),i=s.n(r),n=(s(36),s(12)),l=s(13),o=s(10),m=s(15),d=s(14),j=function(e){Object(m.a)(s,e);var c=Object(d.a)(s);function s(e){var t;return Object(n.a)(this,s),(t=c.call(this,e)).state={nombre:"",correo:"",fecha:new Date},t.cambiarNombre=t.cambiarNombre.bind(Object(o.a)(t)),t.cambiarCorreo=t.cambiarCorreo.bind(Object(o.a)(t)),t.cambiarFecha=t.cambiarFecha.bind(Object(o.a)(t)),t}return Object(l.a)(s,[{key:"cambiarNombre",value:function(e){this.setState({nombre:e.target.value})}},{key:"cambiarCorreo",value:function(e){this.setState({correo:e.target.value})}},{key:"cambiarFecha",value:function(e){this.setState({fecha:new Date})}},{key:"render",value:function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"ed-grid",children:[Object(t.jsx)("h1",{children:"Formulario "}),Object(t.jsxs)("form",{children:[Object(t.jsxs)("div",{className:"ed-grid m-grid-2",children:[Object(t.jsxs)("div",{id:"hola",className:"ed-item l-40  form__item",children:[Object(t.jsx)("label",{children:"Nombre del usuario "}),Object(t.jsx)("input",{type:"text",onChange:this.cambiarNombre})]}),Object(t.jsxs)("div",{className:" ed-item l-40 form__item",children:[Object(t.jsx)("label",{children:"Correo Electronico "}),Object(t.jsx)("input",{"aria-label":"email",type:"email",onChange:this.cambiarCorreo})]})]}),Object(t.jsx)("div",{children:Object(t.jsx)("h4",{children:Math.ceil(this.state.fecha/1e3)})})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"hola ".concat(this.state.nombre)}),Object(t.jsx)("span",{children:"tu correo es ".concat(this.state.correo)})]})]})})}},{key:"componentDidMount",value:function(){var e=this;this.intervaloFecha=setInterval((function(){e.cambiarFecha()}),1e3)}},{key:"componentDidUpdate",value:function(e,c){}},{key:"componentWillMount",value:function(){clearInterval(this.intervaloFecha)}}]),s}(a.Component),b=s(8),h=function(e){var c=e.image,s=e.title,a=e.nameTheacher,r=e.price,i=e.id;return Object(t.jsxs)("article",{className:"card",children:[Object(t.jsx)("div",{className:" img-container s-ratio-16-9 s-radius-tr s-radius-tl",children:Object(t.jsx)(b.b,{to:"/cursos/".concat(i),children:Object(t.jsx)("img",{src:c,alt:"props.nameTheacher"})})}),Object(t.jsxs)("div",{className:"card__data s-border s-radius-br s-radius-bl s-pxy-2",children:[Object(t.jsxs)("h3",{className:"t5 s-mb-2 s-center",children:[" ",s," "]}),Object(t.jsx)("div",{className:"s-mb-2 s-main-center",children:Object(t.jsxs)("div",{className:"card__teacher s-cross-center",children:[Object(t.jsx)("div",{className:"card__avatar s-mr-1"}),Object(t.jsxs)("span",{className:"small",children:[" ",a]})]})}),Object(t.jsx)("div",{className:"s-main-center",children:Object(t.jsx)("a",{className:"button--ghost-alert button--tiny",href:"https://github.com/HugoStevenPoveda/my-first-react",children:"$ ".concat(r)})})]})]})};h.defaultProps={title:"proximo curso",nameTheacher:"por asignar ",price:" cero UD",image:"https://4.bp.blogspot.com/-ZIXB-sB1oGQ/WyhWHEXS_dI/AAAAAAAAWEQ/YFaaAFmYy18VfroS59Ha0B4IUJL232xiACLcBGAs/s640/mejores%2Bcanales%2Byoutube%2Bmatematicas.jpg"};var u=h,O=s.p+"static/media/hugo.fa167e33.jpg",g=s.p+"static/media/hola.41d23ec0.PNG",x=s.p+"static/media/STEVEN.652c1e20.jpg",p=s.p+"static/media/proximo.af377c84.jpg",v={imageAlgebra:g,imageHugo:O,imageSteven:x,imageCalculo:s.p+"static/media/calculointegral.a91073ed.JPG",sinImagen:p},N=[{id:1,title:"Curso Algebra",image:v.imageAlgebra,price:40,profesor:"hugo poveda"},{id:2,title:"Curso de IA",image:v.imageHugo,price:40,profesor:"Steven poveda"},{id:3,title:"Curso Calculo",image:v.imageCalculo,price:40,profesor:"Steven girata"},{id:4,title:"Curso Calculo",image:v.imageSteven,price:400,profesor:"Steven girata poveda"}],f=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"ed-grid m-grid-4",children:N.map((function(e){return Object(t.jsx)(u,{id:e.id,image:e.image,title:e.title,nameTheacher:e.profesor,price:e.price},e.id)}))}),";"]})},C=function(e){var c=e.match,s=e.location,a=e.history;return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"match"}),Object(t.jsx)("p",{children:"-------------------------"}),JSON.stringify(c),Object(t.jsx)("h1",{children:"location"}),JSON.stringify(s),Object(t.jsx)("h1",{children:"history"}),JSON.stringify(a)]})})},y=[{id:1,title:"Curso Algebra",image:v.imageAlgebra,price:40,profesor:"hugo poveda"},{id:2,title:"Curso de IA",image:v.imageHugo,price:40,profesor:"Steven poveda"},{id:3,title:"Curso Calculo",image:v.imageCalculo,price:40,profesor:"Steven girata"},{id:4,title:"Curso Calculo",image:v.imageSteven,price:400,profesor:"Steven girata poveda"}],S=function(e){var c=e.match,s=y.filter((function(e){return e.id===parseInt(c.params.id)}))[0];return Object(t.jsx)("div",{className:"ed-grid m-grid-3",children:s?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h1",{className:"m-cols-3",children:" "}),Object(t.jsx)("img",{className:"m-cols-1",src:s.image}),Object(t.jsxs)("p",{className:"m-cols-2",children:[" profesor :",s.profesor]})]}):Object(t.jsx)("h1",{children:"Error 404 no exite la ruta"})})},A=function(e){var c=e.names,s=e.username,a=e.email;return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("article",{className:"card",children:Object(t.jsxs)("div",{className:"card__data s-border s-radius-br s-radius-bl s-pxy-2",children:[Object(t.jsxs)("h3",{className:"t5 s-mb-2 s-center",children:[" ",c," "]}),Object(t.jsx)("div",{className:"s-mb-2 s-main-center",children:Object(t.jsx)("div",{className:"card__teacher s-cross-center",children:Object(t.jsxs)("span",{className:"s-mb-2 s-main-center",children:[" ",s]})})}),Object(t.jsx)("div",{className:"s-main-center",children:Object(t.jsx)("a",{className:"button--ghost-alert button--tiny",href:"https://github.com/HugoStevenPoveda/my-first-react",children:"email: ".concat(a)})})]})})})},_=(s(42),function(e){Object(m.a)(s,e);var c=Object(d.a)(s);function s(e){var t;return Object(n.a)(this,s),(t=c.call(this,e)).state={users:[]},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users",{method:"get"}).then((function(e){return e.json()})).then((function(c){e.setState({users:c})}))}},{key:"render",value:function(){var e=this.state.users;return Object(t.jsxs)("div",{className:"ed-grid",children:[Object(t.jsx)("h1",{children:"usuario steven"}),Object(t.jsx)("div",{className:"ed-grid s-grid-1 m-grid-2 l-grid-4",children:e.map((function(e){return Object(t.jsx)(A,{names:e.name,username:e.username,email:e.email},e.id)}))})]})}}]),s}(a.Component)),E=s.p+"static/media/IA.1d929513.jpg",I=function(){return Object(t.jsx)("div",{className:"main-banner img-container l-section",id:"main-banner",children:Object(t.jsx)("div",{className:"ed-grid lg-grid-6",children:Object(t.jsxs)("div",{className:"lg-cols-4 lg-x-2",children:[Object(t.jsx)("img",{className:"main-banner__img",src:E,alt:" FONDO Inteligencia "}),Object(t.jsxs)("div",{className:"main-banner__data s-center",children:[Object(t.jsx)("p",{className:"t2 s-mb-0",children:"Curso de Matem\xe1ticas"}),Object(t.jsx)("p",{children:" SOMOS LO QUE HACEMOS DIA A DIA. DE MODO QUE LA EXCELENCIA NO ES UN ACTO SINO UN HABITO \u2013 ARISTOTELES. "}),Object(t.jsx)("a",{href:" https://ux.ed.team/cards.html",className:"button third-color",children:"Eligue tu curso "})]})]})})})},F=function(){return Object(t.jsx)(I,{})},k=s(2);s(61);function D(){return Object(t.jsx)("div",{className:"ed-header s-bg-grey s-py-2",children:Object(t.jsxs)("div",{className:"ed-grid lg-grid-5",children:[Object(t.jsx)("div",{className:"s-cross-center s-main-center lg-main-start",children:Object(t.jsx)(b.b,{to:"/",children:Object(t.jsx)("img",{className:"logo",src:v.imageSteven})})}),Object(t.jsx)("nav",{className:"nav lg-cols-4 s-cross-center ed-grid full",children:Object(t.jsxs)("ul",{className:"menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1",children:[Object(t.jsx)("li",{className:"lg-mr-3",children:Object(t.jsx)(b.b,{className:"link s-column s-cross-center",to:"/",children:"Home"})}),Object(t.jsx)("li",{className:"lg-mr-3",children:Object(t.jsx)(b.b,{className:"link s-column s-cross-center",to:"/forms",children:"Formulario"})}),Object(t.jsx)("li",{className:"lg-mr-3",children:Object(t.jsx)(b.b,{className:"link s-column s-cross-center",to:"/cursos",children:"Cursos "})}),Object(t.jsx)("li",{className:"lg-mr-3",children:Object(t.jsx)(b.b,{className:"link s-column s-cross-center",to:"/users",children:"Users "})})]})})]})})}var H=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)(b.a,{children:[Object(t.jsx)(D,{}),Object(t.jsxs)(k.c,{children:[Object(t.jsx)(k.a,{path:"/forms",component:j}),Object(t.jsx)(k.a,{path:"/cursos/:id",component:S}),Object(t.jsx)(k.a,{path:"/cursos",component:f}),Object(t.jsx)(k.a,{path:"/historial/:valor",component:C}),Object(t.jsx)(k.a,{path:"/users",exact:!0,component:_}),Object(t.jsx)(k.a,{path:"/",exact:!0,component:F}),Object(t.jsx)(k.a,{component:function(){return Object(t.jsxs)("div",{className:"ed-grid",children:[Object(t.jsx)("h1",{children:"ERROR 404"}),Object(t.jsx)("span",{children:"pagina no encontrada"})]})}})]})]})})},B=document.getElementById("root");i.a.render(Object(t.jsx)(H,{}),B)}},[[62,1,2]]]);
//# sourceMappingURL=main.f4de9654.chunk.js.map