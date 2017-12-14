new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    once: 'yolo'
  },
})
app2.once = 'changed?';

new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      'use strict';
      this.message = this.message.split('').reverse().join('')
    }
  }
})

new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

Vue.component('todo-item2', {
  props: ['todo','additional_text'],
  template: '<li>{{ todo.text }} {{ additional_text }}</li>'
})
new Vue({
  el: '#app-7_2',
  data: {
    grocery:{
      id: 0, text: 'Vegetables'
    },
    hoge:1
  }
})

new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` は vm インスタンスを指します
    console.log('a is: ' + this.a)
  }
})

new Vue({
  el: '#app-html',
  data:{
    rawHtml:'<span style="color:red">This should be red.</span>'
  }
})

new Vue({
  el:'#app-prop',
  data:{
    dynamicId:'first-id',
    isButtonDisabled:null
  },
  created: function () {
    setTimeout( () => { //ES6 アロー関数() => を使うことで、
                        //setTimeout内のthisは呼び出し元のthisとなる
                        //refs http://chaika.hatenablog.com/entry/2017/03/31/083000
      'use strict';
      this.dynamicId = 'afterfivesecond';
      this.isButtonDisabled = true;
    }, 5000);
  }
})

setInterval(function() {
  'use strict';
  console.log('baaasss');
}, 1000);

