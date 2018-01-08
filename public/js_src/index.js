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

new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!',
    img:''
  },
  watch: {
    // この関数は question が変わるごとに実行されます。
    question: function () {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce は特にコストの高い処理の実行を制御するための
    // lodash の関数です。この場合は、どのくらい頻繁に yesno.wtf/api
    // へのアクセスすべきかを制限するために、ユーザーの入力が完全に
    // 終わるのを待ってから ajax リクエストを実行しています。
    // _.debounce (とその親戚である _.throttle )  についての詳細は
    // https://lodash.com/docs#debounce を見てください。
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          this.img = ''
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
            vm.img = response.data.image
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
            vm.img = ''
          })
      },
      // ユーザーの入力が終わるのを待つ時間をミリ秒で指定します。
      500
    )
  }
})

new Vue({
  el:'#obj-example',
  data: {
    isActive: true,
    hasError: false,
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }  
})

new Vue({
  el:'#arr-example',
  data: {
    // activeClass: 'active',
    errorClass: 'text-danger',
    isActive:1 //truthy
  }
})

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

new Vue({
  el:'#in-component',
  data: {
    isActive:true
  }
})
new Vue({
  el:'#inline-style-object-syntax',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'green',
      fontSize: '13px'
    }
  }
})

new Vue({
  el:'#inline-style-array-syntax',
  data: {
    baseStyles: {
      color: 'blue',
      fontSize: '13px'
    },
    overridingStyles: {
      color: 'yellow',
      fontStyle : 'italic',
      backgroundColor : 'red',
      transform:'rotate(40deg)'
    }
  }
})

new Vue({
  el:'#v-if-example',
  data:{
    ok:false,
    template:true,
    type:'D'
  }
})

new Vue({
  el:'#control-by-key',
  data:{
    loginType:'username',
  },
  methods: {
    toggleLoginType: function () {
      return this.loginType = this.loginType === 'username' ? 'email' : 'username'
    }
  }
})

new Vue({
  el:'#v-show-example',
  data: {
    ok:false
  }
})

var example1 = new Vue({
  el: '#v-for-example-1',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})

new Vue({
  el: '#evennumber-example',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }  
})

new Vue({
  el: '#v-for-with-template',
  data :{
    items:[
      { msg: 'Foo' },
      { msg: 'Bar' }
    ]
  }
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // `methods` オブジェクトの下にメソッドを定義する
  methods: {
    greet: function (event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert('Hello ' + this.name + '!')
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})


setInterval(function() {
  'use strict';
  console.log('baaasss');
}, 1000);

