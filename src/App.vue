<template>
  <the-header :heading="heading">
    <button ref="submit" form="product-form" @click="saveClick" v-if="state">
      Save
    </button>
    <button @click="addClick" v-else>add</button>
    <button type="reset" form="product-form" v-if="state">Cancel</button>
    <button @click="multiBoxDelete" v-else>Mass Delete</button>
  </the-header>
  <main>
    <add-product @prod-info="getInfo" v-if="onAddProducts"> </add-product>
    <product-list v-else>
      <div class="box-grid">
        <dyn-prod
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
    </product-list>
  </main>
</template>

<script>
export default {
  data() {
    return {
      boxes: [],
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
    saveClick() {
      this.state = false;
      console.log("save");
      this.heading = "Product List";
      this.$refs.submit.click();
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
      this.boxes.push(box);
      this.onAddProducts = !this.onAddProducts;
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
      console.log(this.boxes);
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
.whole {
  display: none;
}
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.whole {
  display: flex;
  flex-direction: column;
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding-right: 4rem;
}
hr {
  width: 95%;
  margin: auto;
}
.btns {
  width: 10rem;
  display: flex;
  justify-content: space-between;
}
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
.box-grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: 6rem;
}
</style>
