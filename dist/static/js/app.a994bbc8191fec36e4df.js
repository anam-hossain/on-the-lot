webpackJsonp([1],[,,,function(e,t,r){"use strict";t.a={name:"app"}},function(e,t,r){"use strict";t.a={name:"hello",data:function(){return{msg:"Welcome to Autotrader"}}}},function(e,t,r){"use strict";var s=r(23),a=r.n(s);t.a={data:function(){return{mediaStream:null,plate:""}},mounted:function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){e.mediaStream=t,e.$refs.video.srcObject=t,e.$refs.video.play()}).catch(function(e){return console.error("getUserMedia() error:",e)})},methods:{capture:function(){var e=this,t=this.mediaStream.getVideoTracks()[0];return new window.ImageCapture(t).takePhoto().then(function(t){a.a.recognize(t).progress(function(e){return console.log(e)}).catch(function(e){return console.error(e)}).then(function(t){e.plate=t.text})})}},destroyed:function(){this.mediaStream.getTracks().map(function(e){return e.stop()})}}},,function(e,t){e.exports={_from:"tesseract.js",_id:"tesseract.js@1.0.10",_inBundle:!1,_integrity:"sha1-4RqWrnYUeTnZIY+I4of7aUFLHl0=",_location:"/tesseract.js",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"tesseract.js",name:"tesseract.js",escapedName:"tesseract.js",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.10.tgz",_shasum:"e11a96ae76147939d9218f88e287fb69414b1e5d",_spec:"tesseract.js",_where:"/Users/anam.hossain/sites/onthelot",author:"",browser:{"./src/node/index.js":"./src/browser/index.js"},bugs:{url:"https://github.com/naptha/tesseract.js/issues"},bundleDependencies:!1,dependencies:{"file-type":"^3.8.0","is-url":"^1.2.2","jpeg-js":"^0.2.0","level-js":"^2.2.4","node-fetch":"^1.6.3","object-assign":"^4.1.0","png.js":"^0.2.1","tesseract.js-core":"^1.0.2"},deprecated:!1,description:"Pure Javascript Multilingual OCR",devDependencies:{"babel-preset-es2015":"^6.16.0",babelify:"^7.3.0",browserify:"^13.1.0",envify:"^3.4.1","http-server":"^0.9.0",pako:"^1.0.3",watchify:"^3.7.0"},homepage:"https://github.com/naptha/tesseract.js",license:"Apache-2.0",main:"src/index.js",name:"tesseract.js",repository:{type:"git",url:"git+https://github.com/naptha/tesseract.js.git"},scripts:{build:"browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js",release:"npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish",start:"watchify src/index.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract & watchify src/browser/worker.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js & http-server -p 7355",test:'echo "Error: no test specified" & exit 1'},version:"1.0.10"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),a=r(12),n=r(16);s.a.config.productionTip=!1,new s.a({el:"#app",router:n.a,template:"<App/>",components:{App:a.a}})},,,,function(e,t,r){"use strict";function s(e){r(13)}var a=r(3),n=r(15),i=r(1),o=s,c=i(a.a,n.a,!1,o,null,null);t.a=c.exports},function(e,t){},,function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),r("main",[r("router-view")],1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("span",[e._v("Autotrader - On The Lot")])])}],n={render:s,staticRenderFns:a};t.a=n},function(e,t,r){"use strict";var s=r(2),a=r(17),n=r(18),i=r(21);s.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Home",component:n.a},{path:"/plate-scanner",name:"PlateScanner",component:i.a}]})},,function(e,t,r){"use strict";function s(e){r(19)}var a=r(4),n=r(20),i=r(1),o=s,c=i(a.a,n.a,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("router-link",{attrs:{to:"/plate-scanner"}},[r("span",[e._v("Scan License Plate")])]),e._v(" "),r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links CUSTOM")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("Vue Community Chat")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],n={render:s,staticRenderFns:a};t.a=n},function(e,t,r){"use strict";function s(e){r(22)}var a=r(5),n=r(27),i=r(1),o=s,c=i(a.a,n.a,!1,o,"data-v-3a0ad190",null);t.a=c.exports},function(e,t){},,,,,function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"camera-modal"},[r("video",{ref:"video",staticClass:"camera-stream"}),e._v(" "),r("div",{staticClass:"camera-modal-container"},[r("span",{staticClass:"take-picture-button",on:{click:e.capture}},[r("i",[e._v("camera")])])]),e._v(" "),r("div",[e._v(e._s(e.plate))])])},a=[],n={render:s,staticRenderFns:a};t.a=n}],[8]);
//# sourceMappingURL=app.a994bbc8191fec36e4df.js.map