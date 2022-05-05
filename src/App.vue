<template>
  <!-- <product-list></product-list> -->
  <div>
    <!-- <add-product @submt="getName"></add-product> -->
    <product-list />
  </div>
</template>

<script>
// import addProduct from './pages/addProduct.vue';
export default {
  // components: { addProduct },
  data() {
    return {};
  },
 
  provide() {
    return {
      boxes: [this.getName, this.nam,]
    };
  },
   methods: {
    getName(nam) {
      console.log(this.nam);
      console.log(nam);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}
</style>
