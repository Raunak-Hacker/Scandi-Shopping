<template>
  <div class="productBox">
    <input type="checkbox" class="delete-checkbox" />
    <div class="box-info">
      <div class="box-sku">
        <p>{{ sku }}</p>
      </div>
      <div class="box-name">
        <p>{{ name }}</p>
      </div>
      <div class="box-price">
        <p>{{ price }}</p>
      </div>
      <div class="box-option">
        <p>{{ type + value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "sku", "name", "price", "type", "value"],
};
</script>

<style scoped>
* {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}
.delete-checkbox {
  display: inline-box;
  margin: 1rem;
}

.productBox {
  height: 13rem;
  width: 18rem;
  border: 1px solid #ccc;
  border-radius: 10%;
  margin: 1rem;
}
.box-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 8rem;
}
</style>
