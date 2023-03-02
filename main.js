const app = Vue.createApp({
  data: function () {
    return {
      cart: [],
      premium: true,
    };
  },

  methods: {
    updateCart(id) {
      this.cart.push(id);
    },

    removeFromCart(id) {
      if (this.cart.includes(id)) {
        const i = this.cart.indexOf(id);
        this.cart.splice(i, 1);
      }
    },
  },
});
