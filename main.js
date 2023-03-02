const app = Vue.createApp({
  data: function () {
    return {
      product: "Socks",
      description: "Funny socks with different colors",
      image: "./assets/images/socks_green.jpg",
      url: "https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3",
      inStock: true,
      inventory: 5,
      details: ["50% cotton", "30% wool", "20% polyester"],
      sizes: [37, 38, 39, 40, 41, 42, 43, 44],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
    };
  },
});
