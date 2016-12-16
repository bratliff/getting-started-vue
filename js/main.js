
var toggler = new Vue({
  el: '#demo',
  data: {
    ok: true
  },
  methods: {
    changestatus : function() {
      this.ok = !this.ok;
    }
  }
})

var show = new Vue({
  el: '#demo2',
  data: {
    ok: true
  },
  methods: {
    changestatus : function() {
      this.ok = !this.ok;
    }
  }
})
