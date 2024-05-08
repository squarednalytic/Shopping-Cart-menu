<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - ${{ item.price }} - Quantity: {{ item.quantity }}
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ total }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ShoppingCart } from './ShoppingCart';
import { ShoppingCartItem } from './ShoppingCartItem';

export default defineComponent({
  data() {
    return {
      cartItems: [] as ShoppingCartItem[],
      total: 0,
      newItem: {} as ShoppingCartItem
    };
  },
  created() {
    // Fetch cart items from backend and calculate total
    this.fetchCartItems();
  },
  methods: {
    fetchCartItems() {
      ShoppingCartService.getCartItems()
      .then(items => {
      this.cartItems = items;
      this.calculateTotal();
        })
      .catch(error => {
       console.error('Error fetching cart items:', error);
         });
    },
    addItem() {
      ShoppingCartService.addItem(this.newItem)
      .then(() => {
       this.fetchCartItems();
      })
      .catch(error => {
       console.error('Error adding item to cart:', error);
        });
      this.newItem = {} as ShoppingCartItem;
    },
    removeItem(itemId: number) {
      
      ShoppingCartService.removeItem(itemId)
      .then(() => {
       this.fetchCartItems();
       })
      .catch(error => {
       console.error('Error removing item from cart:', error);
         });
    },
    calculateTotal() {
      this.total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
  }
});
</script>
