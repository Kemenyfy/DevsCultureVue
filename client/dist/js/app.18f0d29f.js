(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],o[r]&&d.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},o={app:0},n=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2e7bd8f2"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"365a800d"}[t]+".css",r=c.p+s,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var i=o[n],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===s||l===r))return e()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){i=u[n],l=i.getAttribute("data-href");if(l===s||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.request=s,a(o)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise(function(e,a){s=o[t]=[e,a]});e.push(s[2]=n);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t),l=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");n.type=s,n.request=r,a[1](n)}o[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1ad9":function(t,e,a){"use strict";var s=a("2f71"),r=a.n(s);r.a},"1cd4":function(t,e,a){"use strict";var s=a("4ddf"),r=a.n(s);r.a},"216c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("nav",{attrs:{id:"sidebar"}},[t._m(0),a("ul",{staticClass:"list-unstyled components"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("li",[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#pageSubmenu","data-toggle":"collapse","aria-expanded":"false"}},[t._v("Categories")]),a("ul",{staticClass:"collapse list-unstyled",attrs:{id:"pageSubmenu"}},[a("li",[a("router-link",{attrs:{to:"/subcategories/1"}},[t._v("Programming Languages")])],1),a("li",[a("router-link",{attrs:{to:{name:"subcategories",params:{categoryId:2}}}},[t._v("Front-End Techs")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/3"}},[t._v("Back-End Techs")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/4"}},[t._v("Design")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/8"}},[t._v("Tools")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/7"}},[t._v("Collaboration")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/5"}},[t._v("Hosting")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/6"}},[t._v("Browsers")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/12"}},[t._v("Meetups")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/11"}},[t._v("Podcasts, Books & News")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/9"}},[t._v("Coding Schools")])],1),a("li",[a("router-link",{attrs:{to:"/subcategories/10"}},[t._v("Cybersecurity")])],1)])]),a("li",[a("router-link",{attrs:{to:"/contactUs"}},[t._v("Contact Us")])],1)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-header"},[s("img",{staticClass:"logo",attrs:{src:a("cf05")}})])}],o=(a("cadf"),a("551c"),a("097d"),{name:"Nav",props:{msg:String}}),n=o,i=(a("adc7"),a("2877")),c=Object(i["a"])(n,s,r,!1,null,"393a2a3a",null);c.options.__file="Nav.vue";e["a"]=c.exports},2856:function(t,e,a){},"2f71":function(t,e,a){},"4ddf":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],n=(a("5c0b"),a("2877")),i={},c=Object(n["a"])(i,r,o,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Nav"),a("div",{staticClass:"pageContent"},[a("div",{staticClass:"mainBody"},[a("TopBar"),a("Categories")],1)])],1)},p=[],f=a("216c"),m=a("b043"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categoriesContainer"},[a("ul",{staticClass:"list"},t._l(t.categoriesData,function(e){return a("li",{key:e.id,style:{background:"url("+e.imageURL+")","background-size":"cover","background-position":"left"}},[a("router-link",{attrs:{to:{name:"subcategories",params:{categoryId:e.id}}}},[a("p",{staticClass:"text"},[t._v(t._s(e.name))])])],1)}))])},g=[],b={name:"Categories",data:function(){return{categoriesData:[]}},mounted:function(){var t=this;fetch("".concat("https://devsculture.herokuapp.com/api","/category")).then(function(t){return t.json()}).then(function(e){console.log(e),t.categoriesData=e})}},h=b,C=(a("ebf2"),Object(n["a"])(h,v,g,!1,null,"6ae8b47c",null));C.options.__file="Categories.vue";var _=C.exports,y={name:"app",components:{Nav:f["a"],TopBar:m["a"],Categories:_},mounted:function(){console.log(Object({VUE_APP_ROOT_API:"https://devsculture.herokuapp.com/api",NODE_ENV:"production",BASE_URL:"/"}))}},k=y,D=(a("cccb"),Object(n["a"])(k,d,p,!1,null,null,null));D.options.__file="Home.vue";var w=D.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Nav"),a("div",{staticClass:"pageContent"},[a("TopBar"),a("div",{staticClass:"mainBody"},[a("form",[a("div",{staticClass:"form-row"},[a("label",{attrs:{for:"inputState"}},[t._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCategory,expression:"selectedCategory"}],staticClass:"form-control",attrs:{id:"inputState",required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedCategory=e.target.multiple?a:a[0]},function(e){t.onChange()}]}},[a("option",{attrs:{selected:"",value:"0"}},[t._v("Choose...")]),t._l(t.categoriesData,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),a("label",{attrs:{for:"inputState"}},[t._v("Subcategory")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSubcategoryId,expression:"selectedSubcategoryId"}],staticClass:"form-control",attrs:{id:"inputState",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedSubcategoryId=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:"0",required:""}},[t._v("Choose...")]),t._l(t.subcategoriesData,function(e){return a("option",{key:e.id,domProps:{value:e.id},on:{Click:function(a){t.setSubcategoryId(e)}}},[t._v(t._s(e.name))])})],2)]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"resourceName"}},[t._v("Resource Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.resourceName,expression:"resourceName"}],staticClass:"form-control",attrs:{type:"text",name:"resourceName",placeholder:"...",maxlength:"24",required:""},domProps:{value:t.resourceName},on:{input:function(e){e.target.composing||(t.resourceName=e.target.value)}}})]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"briefDescription"}},[t._v("Resource Brief Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.briefDescription,expression:"briefDescription"}],staticClass:"form-control",attrs:{type:"text",name:"briefDescription",placeholder:"...",maxlength:"80"},domProps:{value:t.briefDescription},on:{input:function(e){e.target.composing||(t.briefDescription=e.target.value)}}})]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"detailedDescription",required:""}},[t._v("Resource Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.detailedDescription,expression:"detailedDescription"}],staticClass:"form-control",attrs:{type:"text",name:"detailedDescription",placeholder:"...",maxlength:"480",required:""},domProps:{value:t.detailedDescription},on:{input:function(e){e.target.composing||(t.detailedDescription=e.target.value)}}})]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"link",required:""}},[t._v("Link to Resources Website")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control",attrs:{type:"text",name:"link",placeholder:"Include http:// or https://",required:""},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})]),a("span",{staticClass:"submitButton",on:{click:function(e){return e.preventDefault(),t.submitResource(e)}}},[a("router-link",{attrs:{to:"/thankyou"}},[a("button",{staticClass:"btn submit",attrs:{type:"submit",value:"submit"}},[t._v("Submit")])])],1)])])],1)],1)},x=[],S=(a("b54a"),{components:{Nav:f["a"],TopBar:m["a"]},data:function(){return{categoriesData:[],subcategoriesData:[],selectedCategory:0,selectedSubcategory:0,selectedSubcategoryId:0,resourceName:"",briefDescription:"",detailedDescription:"",link:""}},methods:{onChange:function(){var t=this;console.log(this.value),console.log(this.selectedCategory),fetch("".concat("https://devsculture.herokuapp.com/api","/subcategory/").concat(this.selectedCategory)).then(function(t){return t.json()}).then(function(e){console.log(e),t.subcategoriesData=e})},setSubcategoryId:function(t){this.selectedSubcategoryId=t.id},submitResource:function(){var t=this;console.log(this.resourceName),console.log(this.briefDescription),console.log(this.detailedDescription),console.log(this.link),console.log(this.selectedSubcategoryId),fetch("".concat("https://devsculture.herokuapp.com/api","/subcategory/resource"),{method:"POST",body:JSON.stringify({Name:this.resourceName,BriefDescription:this.briefDescription,DetailedDescription:this.detailedDescription,Link:this.link,SubcategoryId:this.selectedSubcategoryId}),headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){console.log(e),t.formSubmit()})},formSubmit:function(){this.resourceName="",this.briefDescription="",this.detailedDescription="",this.link="",this.selectedCategory="",this.selectedSubcategory=""}},mounted:function(){var t=this;fetch("".concat("https://devsculture.herokuapp.com/api","/category")).then(function(t){return t.json()}).then(function(e){console.log(e),t.categoriesData=e})}}),E=S,T=(a("b0fb"),Object(n["a"])(E,N,x,!1,null,"8bb99434",null));T.options.__file="AddForm.vue";var B=T.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Nav"),a("div",{staticClass:"pageContent"},[a("TopBar"),a("div",{staticClass:"cards"},t._l(t.subcategoriesData,function(e){return a("div",{key:e.id,staticClass:"card"},[a("img",{attrs:{src:""+e.imageURL}}),a("div",{staticClass:"card-title"},[t._m(0,!0),a("h2",[t._v(t._s(e.name)),a("small",[t._v("Made by Somebody/Somehow/Maybe")])])]),a("div",{staticClass:"card-flap flap1"},[a("div",{staticClass:"card-description"},[t._v(t._s(e.briefDescription))]),a("div",{staticClass:"card-flap flap2"},[a("div",{staticClass:"card-actions"},[a("div",[a("router-link",{attrs:{to:"./resources/"+e.id}},[a("button",{staticClass:"btn"},[t._v("Find Resources")])])],1)])])])])}))],1)],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"toggle-info btn",attrs:{href:"#"}},[a("span",{staticClass:"left"}),a("span",{staticClass:"right"})])}],I={name:"app",components:{Nav:f["a"],TopBar:m["a"]},data:function(){return{subcategoriesData:[]}},watch:{$route:"updateData"},mounted:function(){this.updateData()},methods:{toggleDescription:function(){$(document).ready(function(){var t=10;$("div.card").click(function(e){e.preventDefault();var a=!1;$(this).hasClass("show")&&(a=!0),$("div.cards").hasClass("showing")?($("div.card.show").removeClass("show"),a?$("div.cards").removeClass("showing"):$(this).css({zIndex:t}).addClass("show"),t++):($("div.cards").addClass("showing"),$(this).css({zIndex:t}).addClass("show"),t++)})})},updateData:function(){var t=this;console.log(this.$route.params.categoryId),fetch("".concat("https://devsculture.herokuapp.com/api","/subcategory/").concat(this.$route.params.categoryId)).then(function(t){return t.json()}).then(function(e){console.log(e),t.subcategoriesData=e,setTimeout(t.toggleDescription,0)})}}},P=I,q=(a("1cd4"),Object(n["a"])(P,j,O,!1,null,"474ef7f4",null));q.options.__file="Subcategories.vue";var A=q.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Nav"),a("div",{staticClass:"pageContent"},[a("TopBar"),a("div",{staticClass:"mainBody"},[a("div",{staticClass:"cards"},t._l(t.resourcesData,function(e){return a("div",{key:e.id,staticClass:"blog-card"},[a("div",{staticClass:"title-content"},[a("h3",[t._v(t._s(e.name))]),a("hr"),a("div",{staticClass:"intro"},[t._v(t._s(e.briefDescription))]),a("div",{staticClass:"card-info"},[t._v(t._s(e.detailedDescription))])]),a("div",{staticClass:"title-link"},[a("a",{staticClass:"goToLink",attrs:{href:e.link,target:"_blank"}},[t._v("Read More")])])])}))])],1)],1)},L=[],U={components:{Nav:f["a"],TopBar:m["a"]},data:function(){return{resourcesData:[]}},mounted:function(){var t=this;console.log("/"),console.log(this.$route.params.subcategoryId),fetch("".concat("https://devsculture.herokuapp.com/api","/subcategory/resource/").concat(this.$route.params.subcategoryId)).then(function(t){return t.json()}).then(function(e){console.log(e),t.resourcesData=e,setTimeout(t.toggleExpander,0)})}},F=U,M=(a("1ad9"),Object(n["a"])(F,R,L,!1,null,"c6707de2",null));M.options.__file="Resources.vue";var Y=M.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Nav"),a("div",{staticClass:"pageContent"},[a("TopBar"),t._m(0)],1)],1)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"content"},[a("h2",{staticClass:"heading"},[t._v("Contact Us")]),a("p",{staticClass:"lead contactExtra"},[t._v("Let us know if we are missing a Category/Subcategory. Also if we can serve you somehow.")]),a("form",{staticClass:"contact-form",attrs:{id:"contact-form",method:"post",action:"https://formspree.io/gus.kemenyfy@gmail.com"}},[a("div",{staticClass:"controls"},[a("div",{staticClass:"name"},[a("div",[a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"name"}},[t._v("Your First Name *")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Enter Your First Name",required:"required"}})])]),a("div",[a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"surname"}},[t._v("Your Last Name *")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"surname",placeholder:"Enter Your Last Name",required:"required"}})])])]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"surname"}},[t._v("Your Email *")]),a("input",{staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Enter Your Email",required:"required"}})]),a("div",{staticClass:"form-input"},[a("label",{attrs:{for:"surname"}},[t._v("Your Message *")]),a("textarea",{staticClass:"form-control",attrs:{rows:"4",name:"message",placeholder:"Enter your message",required:"required"}})]),a("div",{staticClass:"submitContact"},[a("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",name:"name",value:"Send message"}})])])])])])}],J={components:{Nav:f["a"],TopBar:m["a"]}},V=J,W=(a("da13"),Object(n["a"])(V,H,z,!1,null,"aa12542a",null));W.options.__file="ContactUs.vue";var G=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Nav"),a("div",{staticClass:"pageContent"},[a("TopBar"),a("div",{staticClass:"mainBody"},[a("div",{staticClass:"box"},[a("h4",{staticClass:"heading"},[t._v("Thank You!")]),a("p",{staticClass:"content"},[t._v("DevsCulture is built by developers, for developers.")]),a("p",{staticClass:"content"},[t._v("The community appreciates your help.")]),a("button",{staticClass:"button",attrs:{type:"button"}},[a("router-link",{attrs:{to:"/"}},[t._v("Take me Home")])],1)])])],1)],1)},Q=[],X={components:{Nav:f["a"],TopBar:m["a"]}},Z=X,tt=(a("9277"),Object(n["a"])(Z,K,Q,!1,null,"709228aa",null));tt.options.__file="ThankYou.vue";var et=tt.exports;s["a"].use(u["a"]);var at=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/addForm",name:"addForm",component:B},{path:"/subcategories/:categoryId",name:"subcategories",component:A},{path:"/subcategories/resources/:subcategoryId",name:"resources",component:Y},{path:"/contactUs",name:"contactUs",component:G},{path:"/thankyou",name:"thankyou",component:et}]});s["a"].config.productionTip=!1,new s["a"]({router:at,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("2856"),r=a.n(s);r.a},"721c":function(t,e,a){},"730a":function(t,e,a){},"7b4d":function(t,e,a){},"8f59":function(t,e,a){},"8f9b":function(t,e,a){},9277:function(t,e,a){"use strict";var s=a("e1b3"),r=a.n(s);r.a},"9b68":function(t,e,a){},a1ba:function(t,e,a){"use strict";var s=a("721c"),r=a.n(s);r.a},adc7:function(t,e,a){"use strict";var s=a("9b68"),r=a.n(s);r.a},b043:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topButtons"},[t._m(0),a("router-link",{staticClass:"addForm",attrs:{to:"/addForm"}},[t._v("Add a Resource")])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button",attrs:{type:"button",id:"sidebarCollapse"}},[a("i",{staticClass:"fas fa-align-left"})])}],o=(a("cadf"),a("551c"),a("097d"),{name:"TopBar",props:{msg:String},mounted:function(){$("#sidebarCollapse").on("click",function(){$("#sidebar").toggleClass("active"),$(this).toggleClass("active")})}}),n=o,i=(a("a1ba"),a("2877")),c=Object(i["a"])(n,s,r,!1,null,"e62b4bd0",null);c.options.__file="TopBar.vue";e["a"]=c.exports},b0fb:function(t,e,a){"use strict";var s=a("730a"),r=a.n(s);r.a},cccb:function(t,e,a){"use strict";var s=a("8f59"),r=a.n(s);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.deef9eea.png"},da13:function(t,e,a){"use strict";var s=a("8f9b"),r=a.n(s);r.a},e1b3:function(t,e,a){},ebf2:function(t,e,a){"use strict";var s=a("7b4d"),r=a.n(s);r.a}});
//# sourceMappingURL=app.18f0d29f.js.map