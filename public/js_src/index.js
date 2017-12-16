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

new Vue({
  el:'#app-formula',
  data:{
    number: 10,
    ok: true,
    id: 'hoge',
    message:'reverse'
  }
})

new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 算出 getter 関数
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    }    
  },
  created: function () {
    setTimeout( () => { 
      'use strict';
      this.message = 'change str';
    }, 5000);
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }  
})

new Vue({
  el: '#watched_property',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  created: function () {
    setTimeout( () => { 
      'use strict';
      this.lastName = 'lastname';
    }, 5000);
  }
})

new Vue({
  el: '#computed_property',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter 関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  created: function () {
    setTimeout( () => { 
      'use strict';
      this.lastName = 'lastname';
    }, 5000);

    setTimeout( () => {
      this.fullName = 'Will Smith'
    },10000);
  }  
})

setInterval(function() {
  'use strict';
  console.log('baaasss');
}, 1000);

