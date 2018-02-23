webpackJsonp([1],[,,,,,,function(t,e,a){"use strict";e.a={name:"app"}},function(t,e,a){"use strict";var r=a(4),s=a(23),n=a(24),i=a(46),c=a(49);r.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:n.a},{path:"/plate-scanner",name:"PlateScanner",component:i.a},{path:"/car-detail",name:"CarDetail",component:c.a}]})},function(t,e,a){"use strict";var r=a(26),s=a.n(r);e.a={name:"hello",data:function(){return{lat:"",long:"",address:""}},methods:{getLocation:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){t.lat=e.coords.latitude,t.long=e.coords.longitude,t.getAddress()}):alert("Geolocation not supported")},getAddress:function(){var t=this;s.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.lat+","+this.long+"&sensor=true").then(function(e){t.address=e.data.results[0].formatted_address}).catch(function(t){console.log(t)})}}}},,,,,,function(t,e,a){"use strict";a(7);e.a={data:function(){return{mediaStream:null,plate:"",processing:!1,captured:!1}},mounted:function(){var t=this;console.log(this.plate),navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){t.mediaStream=e,t.$refs.video.srcObject=e,t.$refs.video.play()}).catch(function(t){return console.error("getUserMedia() error:",t)})},methods:{capture:function(){var t=this,e=this.mediaStream.getVideoTracks()[0];return new window.ImageCapture(e).takePhoto().then(function(e){t.processing=!0,t.plate="DDN 29B",t.captured=!0,t.processing=!1,window.location="/#/car-detail"})},getInfo:function(){return{plate:"DDN 29B",make:"2016 MERCEDES-BENZ C300",kms:"5000",price:"80000",transmission:"Automatic",engine:"4 cyl, 2.0 L"}}},destroyed:function(){this.mediaStream.getTracks().map(function(t){return t.stop()})}}},function(t,e,a){"use strict";e.a={data:function(){return{make:"Mercedes-Benz",model:"C300 coupe",year:"2016",img_url:"/static/img/content/VLT16L.jpg",chart_url:"/static/img/content/pricing-chart.png",prices:[{name:"Low price",value:"76,990"},{name:"High price",value:"108,579"},{name:"Current price",value:"79,500"}]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(4),s=a(19),n=a(7);r.a.config.productionTip=!1,new r.a({el:"#app",router:n.a,template:"<App/>",components:{App:s.a}})},,,function(t,e,a){"use strict";function r(t){a(20)}var s=a(6),n=a(22),i=a(1),c=r,o=i(s.a,n.a,!1,c,null,null);e.a=o.exports},function(t,e){},,function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("main",[a("router-view")],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("span",[t._v("Autotrader - On The Lot")])])}],n={render:r,staticRenderFns:s};e.a=n},,function(t,e,a){"use strict";function r(t){a(25)}var s=a(8),n=a(45),i=a(1),c=r,o=i(s.a,n.a,!1,c,null,null);e.a=o.exports},function(t,e){},,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello col"},[a("router-link",{attrs:{to:"/plate-scanner"}},[a("span",[t._v("Scan License Plate")])]),t._v(" "),t._m(0),t._v(" "),a("form",{staticClass:"col"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"form-group"},[a("i",{staticClass:"fi-target-two"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control ",attrs:{type:"text",id:"exampleFormControlInput1",placeholder:"location"},domProps:{value:t.address},on:{click:t.getLocation,input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-lg btn-dark",attrs:{type:"button"}},[t._v("Search")]),t._v(" "),t._m(4)])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("img",{staticClass:"logo",attrs:{src:"/static/img/icons/mstile-150x150.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleFormControlInput1"}},[t._v("Search cars")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1",placeholder:"car"}},[a("option",[t._v("Honda")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1",placeholder:"type"}},[a("option",[t._v("Accord")]),t._v(" "),a("option",[t._v("Civic")]),t._v(" "),a("option",[t._v("CRV")]),t._v(" "),a("option",[t._v("City")]),t._v(" "),a("option",[t._v("Euro")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1",placeholder:"price"}},[a("option",[t._v("Less than $10,000")]),t._v(" "),a("option",[t._v("Less than $15,000")]),t._v(" "),a("option",[t._v("Less than $20,000")]),t._v(" "),a("option",[t._v("Less than $25,000")]),t._v(" "),a("option",[t._v("Less than $30,000")]),t._v(" "),a("option",[t._v("Less than $35,000")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dealer"},[a("a",{attrs:{href:""}},[t._v("Do you need help at the dealer?")])])}],n={render:r,staticRenderFns:s};e.a=n},function(t,e,a){"use strict";function r(t){a(47)}var s=a(14),n=a(48),i=a(1),c=r,o=i(s.a,n.a,!1,c,"data-v-cf9c16a6",null);e.a=o.exports},function(t,e){},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.captured?t._e():a("div",{staticClass:"camera-modal"},[a("video",{ref:"video",staticClass:"camera-stream"}),t._v(" "),a("div",{staticClass:"camera-modal-container"},[a("button",{staticClass:"btn btn-lg btn-success",on:{click:t.capture}},[t._v("Scan")]),t._v(" "),a("br"),t._v(" "),t.processing?a("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v("\n        Processing...\n      ")]):t._e()])]),t._v(" "),t.plate?a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"https://res.cloudinary.com/carsguide/image/private/t_cg_car_l/v1/car/0591/3984/2016_mercedes-benz_c300_used_5913984_1.jpg?version=1518775371",alt:"Card image cap"}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("a",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{role:"button"}},[a("router-link",{attrs:{to:"/car-detail"}},[a("span",[t._v("View Car detail")])])],1)]):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("2016 MERCEDES-BENZ C300")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("his C300 is finished in Tenorite Grey with Black Leather interior and features 19 Inch Alloys, Satellite Navigation, Electric Panoramic Sunroof, Park Distance Control with Surround Camera, Auto Tailgate, Xenon Headlights.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("Plate number: DDN 29B")]),t._v(" "),a("li",{staticClass:"list-group-item"},[t._v("Kms: 5000")]),t._v(" "),a("li",{staticClass:"list-group-item"},[t._v("Price: $80,000")])])}],n={render:r,staticRenderFns:s};e.a=n},function(t,e,a){"use strict";function r(t){a(50)}var s=a(15),n=a(51),i=a(1),c=r,o=i(s.a,n.a,!1,c,"data-v-10f8bfd3",null);e.a=o.exports},function(t,e){},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"detail row"},[a("div",{staticClass:"header-img header-img-vehicle col-6"},[a("img",{attrs:{src:t.img_url}})]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"make col-12"},[a("strong",[t._v(" "+t._s(t.make)+" ")])]),t._v(" "),a("div",{staticClass:"model col-12"},[a("strong",[t._v(t._s(t.model)+" "+t._s(t.year))])]),t._v(" "),a("div",{staticClass:"price-chart col-12"},[a("img",{attrs:{src:t.chart_url}})]),t._v(" "),a("div",{staticClass:"car-data price-minmax col-12"},t._l(t.prices,function(e){return a("dl",[a("dt",[t._v(t._s(e.name))]),t._v(" "),a("dd",[t._v("$"+t._s(e.value))])])})),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-img header-img-owner col-6"},[a("img",{attrs:{src:"/static/img/content/Carl-D-norm.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"car-data price-depreciation col-12"},[a("dl",[a("dt",[t._v("Price drop on 15 Feb 2018")]),t._v(" "),a("dd",[t._v("$84,999 → $79,500")])]),t._v(" "),a("dl",[a("dt",{staticStyle:{display:"inline"}},[t._v("Time on the lot")]),t._v(" "),a("dd",{staticStyle:{display:"inline"}},[t._v("29 days")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"car-data car-history col-12"},[a("strong",[t._v("Vehicle history")]),t._v(" "),a("dl",[a("dt",[t._v("Accident check")]),t._v(" "),a("dd",[t._v("✔")])]),t._v(" "),a("dl",[a("dt",[t._v("Finance owed check")]),t._v(" "),a("dd",[t._v("✔")])]),t._v(" "),a("dl",[a("dt",[t._v("One owner")]),t._v(" "),a("dd",[t._v("✔")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"car-data car-history col-12"},[a("strong",[t._v("Running cost")]),t._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Type")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Yearly cost")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("3 year cost")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("Fuel cost")]),t._v(" "),a("td",[t._v("$2,089")]),t._v(" "),a("td",[t._v("$6,267")])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("Insurance")]),t._v(" "),a("td",[t._v("$1,097")]),t._v(" "),a("td",[t._v("$3,291")])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("Service")]),t._v(" "),a("td",[t._v("$792")]),t._v(" "),a("td",[t._v("$2376")])])])])])}],n={render:r,staticRenderFns:s};e.a=n}],[16]);
//# sourceMappingURL=app.6baaab19951640441043.js.map