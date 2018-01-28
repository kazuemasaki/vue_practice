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

new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // ネイティブイベントを参照しています
      if (event) event.preventDefault()
      alert(message)
    }    
  }
})

Vue.component('select-option', {
  template: '\
    <option v-bind:value="value">\
      {{ text }}\
    </option>\
  ',
  props: ['value','text']
})


new Vue({
  el: '#forms-example',
  data:{
    message: 'ge',
    checked: true,
    checkedNames: ['Jack'],
    picked: 'Two',
    selected: 'c',
    options:[
      {value:'a',text:'Amidara'},
      {value:'b',text:'Back'},
      {value:'c',text:'Cancel'},
    ],
    selected2: {
      number:123
    }
  },
  computed: {
    selectedText:function() {
      if(this.selected == '') {
        return '';
      }
      var matchedElement = this.options.filter((element)=> {
        return (element.value == this.selected) ;
      })
      if(matchedElement.length != 1) {
        return '';
      }
      return matchedElement[0].text;
    }
  }
})

new Vue({
  el:'#lazy-example',
  data: {
    lazy:'llllazy'
  }
})

new Vue({
  el:'#local-component',
  components:{
    'my-component': {
      template: `<div v-bind:id="dynamic3">A custom component! <div v-bind:class="dynamic2"> {{dynamic2}}{{ dynamic }}</div></div>
      `,
      props: ['dynamic','dynamic2','dynamic3'],
    }
  },
  data:{
    dyna : 'from root',
    dyna3 : 'text'
  }
})

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

Vue.component('currency-input', {
  template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)">\
    </span>\
  ',
  props: ['value'],
  methods: {
    // 値を直接的に更新する代わりに、このメソッドを使用して input の
    // 値の整形と値に対する制約が行われる
    updateValue: function (value) {
      var formattedValue = value
        // 両端のスペースを削除
        .trim()
        // 小数点2桁以下まで短縮
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 値が既に正規化されていないならば、
      // 手動で適合するように上書き
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // input イベントを通して数値を発行する
      this.$emit('input', Number(formattedValue))
    }
  }
})  

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0,
    price: 100
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    },
    hoge: function () {
      console.log('hoge');
    }
  }
})

Vue.component('my-checkbox', {
  model: {
    prop: 'checked2',
    event: 'change'
  },
  props: {
    checked2: Boolean,
    // これによって、 `value` プロパティを別の目的で利用することを許可します。
    value: String
  },
  template: `
    <label>
      <input v-bind:value="value" type="checkbox" v-bind:checked="checked2">{{value}}
    </label>
  `
})
new Vue({
  el: '#vmodel-custom',
  data: {
    foo: true
  // },
  // created: function() {
  //   this.foo = false;
  }
})

new Vue({
  el: '#transistion-demo',
  data: {
    show: true
  }
})

new Vue({
  el: '#transition-example-1',
  data: {
    show: true
  }
})

new Vue({
  el: '#slot-example',
  components:{
    'my-component': {
      template: `
        <div>
          <h2>I'm the child title</h2>
          <slot>
            This will only be displayed if there is no content
            to be distributed.
          </slot>
        </div>
      `
    },
    'app-layout':{
      template: `
        <div class="container">
          <header>
            <slot name="header"></slot>
          </header>
          <main>
            <slot></slot>
          </main>
          <footer>
            <slot name="footer">this will be displayed when no contents are inserted as footer</slot>
          </footer>
        </div>      
      `
    },
    'child':{
      template:`
        <div class="child" v-bind:id="prop_id">
          <slot v-bind:id="span_id" text="hello from child"></slot>
        </div>
      `,
      props:{
        prop_id : String,
        span_id : null
      }
    }
  },  
})

new Vue({
  el: '#scroll-app',
  data: {
    scrollYBottom: 0,
    targetY:0,
    img:''
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
        this.scrollYBottom = window.scrollY+window.innerHeight;
        console.log(this.scrollYBottom);
        this.targetY = document.getElementById('scroll-target').getBoundingClientRect().top+ window.pageYOffset;
    }
  },
  watch:{
    scrollYBottom: function(new_value) {
      console.log(new_value);
      if(this.targetY <= new_value) {
        this.img = 'https://st.jetsetrecords.net/product/thumbnail/3/2/6/326c45a45de28d3c482161ab9a12c124/medium.jpg';
      }
    }
  }
})

setInterval(function() {
  'use strict';
  console.log('baaasss');
}, 1000);

