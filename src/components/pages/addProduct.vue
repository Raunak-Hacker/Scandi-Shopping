<template>
  <section class="whole">
    <div class="prod-form">
      <form id="product_form" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="sku">SKU </label>
          <input
            required
            type="text"
            class="form-control"
            id="sku"
            v-model.trim="sku"
          />
        </div>
        <div class="form-group">
          <label for="name">Name </label>
          <input
            required
            type="text"
            class="form-control"
            id="name"
            v-model.trim="name"
          />
        </div>
        <div class="form-group">
          <label for="price">Price ($) </label>
          <input
            required
            type="number"
            class="form-control"
            id="price"
            v-model.trim="price"
          />
        </div>
        <div class="form-group">
          <label for="typeSwitcher">Type Switcher </label>
          <select
            name="products"
            id="productType"
            v-model.trim="optSel"
            required
          >
            <option style="color: gray" value="" disabled>Type Switcher</option>
            <option value="DVD" id="DVD">DVD</option>
            <option value="Furniture" id="Furniture">Furniture</option>
            <option value="Book" id="Book">Book</option>
          </select>
        </div>
        <div class="opt" v-if="optSel == 'DVD'">
          <div class="form-group">
            <label for="size">Size (MB) </label>
            <input
              required
              type="number"
              class="form-control"
              id="size"
              v-model.trim="size"
            />
          </div>
          <h4>Please provide disc space in MB</h4>
        </div>
        <div class="opt" v-else-if="optSel == 'Furniture'">
          <div class="form-group">
            <label for="height">Height (CM) </label>
            <input
              required
              type="number"
              class="form-control"
              id="height"
              v-model.trim="height"
            />
          </div>
          <div class="form-group">
            <label for="width">Width (CM) </label>
            <input
              required
              type="number"
              class="form-control"
              id="width"
              v-model.trim="width"
            />
          </div>
          <div class="form-group">
            <label for="Length">Length (CM) </label>
            <input
              required
              type="number"
              class="form-control"
              id="length"
              v-model.trim="length"
            />
          </div>
          <h4>Please provide furniture dimensions in HxWxL(CM) format</h4>
        </div>
        <div class="opt" v-else-if="optSel === 'Book'">
          <div class="form-group">
            <label for="weight">Weight (KG) </label>
            <input
              required
              type="number"
              class="form-control"
              id="weight"
              v-model.trim="weight"
            />
          </div>
          <h4>Please provide book's weight in KG</h4>
        </div>
      </form>
    </div>
    <dyn-form></dyn-form>
  </section>
</template>

<script>
export default {
  emits: ["product-info"],
  data() {
    return {
      sku: null,
      name: null,
      price: null,
      size: null,
      height: null,
      width: null,
      length: null,
      weight: null,
      divASelected: false,
      divFurniture: false,
      divBook: false,
      optSel: "",
      type: null,
      value: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.optSel === "DVD") {
        this.type = "Size: ";
        this.value = this.size + " MB";
      } else if (this.optSel === "Furniture") {
        this.type = "Dimensions: ";
        this.value = this.height + "x" + this.width + "x" + this.length;
      } else if (this.optSel === "Book") {
        this.type = "Weight: ";
        this.value = this.weight + "KG";
      }
      this.$emit(
        "product-info",
        this.sku,
        this.name,
        this.price + " $",
        this.type,
        this.value
      );
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.whole {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
.form-group label {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  font-weight: bold;
}
.form-group input {
  width: 10rem;
  height: 2rem;
  border-radius: 15px;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: bold;
}

.form-group select {
  width: 12rem;
  height: 2rem;
  border-radius: 15px;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: bold;
}
.prod-form {
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;
  margin-top: 3rem;
  margin-left: 8rem;
  width: 25rem;
}
</style>
