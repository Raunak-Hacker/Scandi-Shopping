<template>
  <!-- <div class="form-group">
    <label for="typeSwitcher">Type Switcher </label>
    <select id="productType" v-model="divsel">
      <option value="none" id="DVD">Choose Province</option>
      <option value="DVD" id="DVD">DVD</option>
      <option value="Furniture" id="Furniture">Furniture</option>
      <option value="Book" id="Book">Book</option>
    </select>
  </div>
  <div class="selOpt" :style="{ display: divASelected ? 'block' : 'none' }">
    <div class="form-group">
      <label for="size">Size (MB) </label>
      <input type="number" class="form-control" id="size" v-model="size" />
    </div>
    <h4>Please provide disc space in MB</h4>
  </div>
  <div class="selOpt" :style="{ display: divBSelected ? 'block' : 'none' }">
    <div class="form-group">
      <label for="height">Height (CM) </label>
      <input
        type="number"
        class="form-control"
        id="height"
        v-model="height"
        required
      />
      <br />
      <label for="width">Width (CM) </label>
      <input
        type="number"
        class="form-control"
        id="width"
        v-model="width"
        required
      />
      <br />
      <label for="Length">Length (CM) </label>
      <input
        type="number"
        class="form-control"
        id="length"
        v-model="length"
        required
      />
    </div>
    <h4>Please provide furniture dimensions in HxWxL(CM) format</h4>
  </div>
  <div class="selOpt" :style="{ display: divCSelected ? 'block' : 'none' }">
    <div class="form-group">
      <label for="weight">Weight (KG) </label>
      <input type="number" class="form-control" id="weight" v-model="weight" />
    </div>
    <h4>Please provide weight in KG</h4>
  </div> -->
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      selected: "Choose Province",
      divASelected: false,
      divFurniture: false,
      divBook: false,
      divsel: "none",
    };
  },
  watch: {
    divsel: function (val) {
      console.log(this.divsel);
      if (val === "DVD") {
        this.divASelected = true;
        this.divBSelected = false;
        this.divCSelected = false;
      } else if (val === "Furniture") {
        this.divASelected = false;
        this.divBSelected = true;
        this.divCSelected = false;
      } else if (val === "Book") {
        this.divASelected = false;
        this.divBSelected = false;
        this.divCSelected = true;
      } else if (val === "none") {
        this.divASelected = false;
        this.divBSelected = false;
        this.divCSelected = false;
      }
    },
  },
};
</script>

<style>
.selOpt {
  display: none;
}
</style>
