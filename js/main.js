var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
    },
    methods: {
        hideIt: function() {
            this.seen = false;
        }
    }
})

var toggler = new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
