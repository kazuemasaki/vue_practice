new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

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

setInterval(function() {
  'use strict';
  console.log('baaasss');
}, 1000);

