var binding = new Vue({
  el: '#app',
  data: {
      isActive: true,
      hasError: true
    }
})

/* OR.... */

var binding2 = new Vue({
  el: '#app2',
  data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
})
