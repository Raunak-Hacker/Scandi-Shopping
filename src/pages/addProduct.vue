<template>
  <section class="whole">
    <div class="head-div">
      <div class="heading">
        <h1>Product Add</h1>
        <div class="btns">
          <button type="button" form="product-form" tabindex="0">Save</button>
          <button type="submit" form="product-form">Cancel</button>
        </div>
      </div>
      <hr />
    </div>
    <form id="product-form" @submit.prevent="onSubmit">
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
        <select name="products" id="productType" v-model.trim="optSel">
          <option value="">Choose Province</option>
          <option value="DVD" id="DVD">DVD</option>
          <option value="Furniture" id="Furniture">Furniture</option>
          <option value="Book" id="Book">Book</option>
        </select>
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
        <div class="opt" v-if="optSel == 'Furniture'">
          <div class="form-group">
            <label for="height">Height (CM) </label>
            <input
              required
              type="number"
              class="form-control"
              id="height"
              v-model.trim="height"
            />
            <br />
            <label for="width">Width (CM) </label>
            <input
              required
              type="number"
              class="form-control"
              id="width"
              v-model.trim="width"
            />
            <br />
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
        <div class="opt" v-if="optSel == 'Book'">
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
          <h4>Please provide weight in KG</h4>
        </div>
      </div>
      <input required type="submit" id="submit-form" style="display: none" />
    </form>
    <dyn-form></dyn-form>
  </section>
</template>

<script>
import DynForm from "@/components/dynForm.vue";
export default {
  components: { DynForm },
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
      console.log(this.optsel);
      if (this.optSel == "DVD") {
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
        "prod-info",
        this.sku,
        this.name,
        this.price + " $",
        this.type,
        this.value
      );
      // this.sku = null;
      // this.name = null;
      // this.price = null;
      // this.optSel = "";
      // this.weight = null;
      // this.size = null;
      // this.height = null;
      // this.width = null;
      // this.length = null;
    },
  },
};
</script>

<style scoped>
.whole {
  display: flex;
  flex-direction: column;
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
  margin: 1rem;
  padding-right: 4rem;
}
hr {
  width: 95%;
  margin: auto;
}
.btns {
  width: 10rem;
  /* height: 10rem; */
  display: flex;
  justify-content: space-between;
}
button {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: none;
  background: #f1f1f1;
  color: #000;
  border-radius: 15px;
  cursor: pointer;
}
/* input required[type="number"]::-webkit-inner-spin-button,
input required[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
} */
</style>
