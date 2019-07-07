let header = new Vue({
  el: ".header",
  data: {
    show: false
  },
  methods: {
    toggleNav() {
      this.show = !this.show;
    }
  }
});
