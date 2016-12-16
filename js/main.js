var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      alert(event.target.tagName)
    }
  }
})

var example3 = new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

var keypress = new Vue({
  el: '#keypress',
  methods: {
    say: function (message) {
      alert("fuck yeah");
    }
  }
})

var altclick = new Vue({
  el: '#modifier',
  methods: {
    regular: function () {
      alert("regular click");
    },
    control: function() {
        alert("special click");
    }
  }
})
