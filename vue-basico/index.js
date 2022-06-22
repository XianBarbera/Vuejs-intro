let app = new Vue({
  el: '#app',
  data: {
    message: 'alojaaah',
    seen: true,
    todos: [
      { text: 'arnold' },
      { text: 'isabel' },
      { text: 'peloconcha' },
      { text: 'negro garka' },
      { text: 'john salchichon' },
      { text: 'harry' }
    ]
  },
  methods: {
    reverse: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

let app1 = new Vue({
  el: '#app1',
  data: {
    message: 'escribime esta'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

let app2 = new Vue({
  el: '#app2',
  data: {
    groceryList: [
      { id: 0, text: 'bananitas' },
      { id: 1, text: 'puchito' },
      { id: 2, text: 'muchachita' }
    ]
  }
})
