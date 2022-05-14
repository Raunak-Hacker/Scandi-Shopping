<template>
  <the-header :heading="heading">
    <button ref="submit" form="product_form" v-if="state">Save</button>
    <button @click="addClick" v-else>ADD</button>
    <button type="reset" form="product_form" v-if="state" @click="cancelClick">Cancel</button>
    <button @click="multiBoxDelete" id="delete-product-btn" v-else>
      MASS DELETE
    </button>
  </the-header>
  <main>
    <add-product @product-info="getInfo" v-if="onAddProducts" />
    <section id="product-list" v-else>
      <div class="box-grid">
        <product-box
          v-for="box in boxes"
          :key="box.id"
          :id="box.id"
          :sku="box.sku"
          :name="box.name"
          :price="box.price"
          :type="box.type"
          :value="box.value"
          @check="check(box)"
        />
      </div>
    </section>
  </main>
  <the-footer />
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          id: 1,
          sku: "DVD-1",
          name: "The Shawshank Redemption",
          price: "19.99 $",
          type: "Size: ",
          value: "800 MB",
        },
      ],
      mySelections: [],
      onAddProducts: false,
      state: false,
      heading: "Product List",
    };
  },
  methods: {
    addClick() {
      this.state = true;
      this.onAddProducts = true;
      this.heading = "Add Product";
    },
    cancelClick () {
      this.state = false;
      this.onAddProducts = false;
      this.heading = "Product List";
    },
    getInfo(sku, name, price, type, value) {
      const box = {
        id: this.boxes.length + 1,
        sku: sku,
        name: name,
        price: price,
        type: type,
        value: value,
      };
      if (
        box.sku != null &&
        box.name != null &&
        box.price != null &&
        box.type != null &&
        box.value != null
      ) {
        this.state = false;
        this.onAddProducts = false;
        this.heading = "Product List";
        this.boxes.unshift(box);
      }
    },
    check(box) {
      if (
        !this.mySelections.length ||
        !this.mySelections.find((f) => box.id == f.id)
      ) {
        this.mySelections.push(box);
      } else {
        this.mySelections = this.mySelections.filter((f) => box.id != f.id);
      }
    },
    multiBoxDelete() {
      this.boxes = this.boxes.filter((a) => !this.mySelections.includes(a));
      this.mySelections = [];
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

<style scoped>
button {
  margin-left: 1rem;
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
button:hover {
  background: #000;
  color: #fff;
}
#delete-product-btn {
  background: red;
  color: white;
  border-radius: 15px;
  cursor: pointer;
}
.box-grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: 6rem;
}
</style>
