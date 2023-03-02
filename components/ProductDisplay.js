app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /* html */
    `
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- <img v-bind:src="image" /> -->
            <!-- <img :src="image" :class="[!isStock ? 'out-of-stock-img' : '']" /> -->
            <img :src="image" :class="{'out-of-stock-img' : !inStock}" />
            <!-- <a :href="url">Lesson 3</a> -->
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <!-- <p v-show="inStock">In Stock</p> -->
            <p v-if="inStock">In Stock</p>
            <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p> -->
            <!-- <p v-if="inStock">In Stock</p> -->
            <p v-else>Out of Stock</p>
            <p>{{ sale }}</p>
            <p>Shipping: {{ shipping }}</p>


            <product-details :details="details"></product-details>
            <!-- <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>-->

            <!-- <ul>
              <li v-for="size in sizes">{{ size }}</li>
            </ul> -->

            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{backgroundColor: variant.color}"
            ></div>
            <!-- <button class="button" v-on:click="addToCart">Add to Cart</button> -->
            <button
              class="button"
              @click="addToCart"
              :class="{disabledButton: !inStock}"
              :disabled="!inStock"
            >
              Add to Cart
            </button>
            <button class="button" @click="deleteFromCart">Delete</button>
          </div>
        </div>
      </div>
    `,

  data: function () {
    return {
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

    shipping() {
      return this.premium ? "Free" : 2.99;
    },
  },
});
