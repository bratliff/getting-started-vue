// global registration

 Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
});

new Vue({
    el: '#app'
});

// local registration

var Child = {
  template: '<div>A custom component!</div>'
}
new Vue({
  el: '#app2',
  // ...
  components: {
    // <my-component> will only be available in parent's template
    'my-component': Child
  }
})

// Data must be a function

var data = { counter: 0 }
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return {
        counter: 0
    }
  }
})
new Vue({
  el: '#example-2'
})
