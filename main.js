const app = Vue.createApp({
  data: function () {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      description: "Funny socks with different colors",
      // image: "./assets/images/socks_green.jpg",
      selectedVariant: 0,
      url: "https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3",
      // inStock: false,
      inventory: 5,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      sizes: [37, 38, 39, 40, 41, 42, 43, 44],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },

  methods: {
    addToCart() {
      this.cart += 1;
    },
    deleteFromCart() {
      if (this.cart > 0) this.cart -= 1;
    },

    updateVariant(index) {
      this.selectedVariant = index;
    },
  },

  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },

    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      return this.onSale ? `${this.title} is on sale` : null;
    },
  },
});
