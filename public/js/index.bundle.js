!function(e){function t(s){if(a[s])return a[s].exports;var n=a[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,s){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){new Vue({el:"#app",data:{message:"Hello Vue!"}});new Vue({el:"#app-2",data:{message:"You loaded this page on "+(new Date).toLocaleString(),once:"yolo"}}).once="changed?",new Vue({el:"#app-3",data:{seen:!0}}),new Vue({el:"#app-4",data:{todos:[{text:"Learn JavaScript"},{text:"Learn Vue"},{text:"Build something awesome"}]}}),new Vue({el:"#app-5",data:{message:"Hello Vue.js!"},methods:{reverseMessage:function(){"use strict";this.message=this.message.split("").reverse().join("")}}}),new Vue({el:"#app-6",data:{message:"Hello Vue!"}}),Vue.component("todo-item",{props:["todo"],template:"<li>{{ todo.text }}</li>"}),new Vue({el:"#app-7",data:{groceryList:[{id:0,text:"Vegetables"},{id:1,text:"Cheese"},{id:2,text:"Whatever else humans are supposed to eat"}]}}),Vue.component("todo-item2",{props:["todo","additional_text"],template:"<li>{{ todo.text }} {{ additional_text }}</li>"}),new Vue({el:"#app-7_2",data:{grocery:{id:0,text:"Vegetables"},hoge:1}}),new Vue({data:{a:1},created:function(){console.log("a is: "+this.a)}}),new Vue({el:"#app-html",data:{rawHtml:'<span style="color:red">This should be red.</span>'}}),new Vue({el:"#app-prop",data:{dynamicId:"first-id",isButtonDisabled:null},created:function(){setTimeout(()=>{"use strict";this.dynamicId="afterfivesecond",this.isButtonDisabled=!0},5e3)}}),new Vue({el:"#app-formula",data:{number:10,ok:!0,id:"hoge",message:"reverse"}}),new Vue({el:"#example",data:{message:"Hello"},computed:{reversedMessage:function(){return this.message.split("").reverse().join("")},now:function(){return Date.now()}},created:function(){setTimeout(()=>{"use strict";this.message="change str"},5e3)},methods:{reverseMessage:function(){return this.message.split("").reverse().join("")}}}),new Vue({el:"#watched_property",data:{firstName:"Foo",lastName:"Bar",fullName:"Foo Bar"},watch:{firstName:function(e){this.fullName=e+" "+this.lastName},lastName:function(e){this.fullName=this.firstName+" "+e}},created:function(){setTimeout(()=>{"use strict";this.lastName="lastname"},5e3)}}),new Vue({el:"#computed_property",data:{firstName:"Foo",lastName:"Bar"},computed:{fullName:{get:function(){return this.firstName+" "+this.lastName},set:function(e){var t=e.split(" ");this.firstName=t[0],this.lastName=t[t.length-1]}}},created:function(){setTimeout(()=>{"use strict";this.lastName="lastname"},5e3),setTimeout(()=>{this.fullName="Will Smith"},1e4)}}),new Vue({el:"#watch-example",data:{question:"",answer:"I cannot give you an answer until you ask a question!",img:""},watch:{question:function(){this.answer="Waiting for you to stop typing...",this.getAnswer()}},methods:{getAnswer:_.debounce(function(){if(-1===this.question.indexOf("?"))return this.answer="Questions usually contain a question mark. ;-)",void(this.img="");this.answer="Thinking...";var e=this;axios.get("https://yesno.wtf/api").then(function(t){e.answer=_.capitalize(t.data.answer),e.img=t.data.image}).catch(function(t){e.answer="Error! Could not reach the API. "+t,e.img=""})},500)}}),new Vue({el:"#obj-example",data:{isActive:!0,hasError:!1},computed:{classObject:function(){return{active:this.isActive&&!this.error,"text-danger":this.error&&"fatal"===this.error.type}}}}),new Vue({el:"#arr-example",data:{errorClass:"text-danger",isActive:1}}),Vue.component("my-component",{template:'<p class="foo bar">Hi</p>'}),new Vue({el:"#in-component",data:{isActive:!0}}),new Vue({el:"#inline-style-object-syntax",data:{activeColor:"red",fontSize:30,styleObject:{color:"green",fontSize:"13px"}}}),new Vue({el:"#inline-style-array-syntax",data:{baseStyles:{color:"blue",fontSize:"13px"},overridingStyles:{color:"yellow",fontStyle:"italic",backgroundColor:"red",transform:"rotate(40deg)"}}}),new Vue({el:"#v-if-example",data:{ok:!1,template:!0,type:"D"}}),setInterval(function(){"use strict";console.log("baaasss")},1e3)}]);