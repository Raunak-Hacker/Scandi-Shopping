<template>
  <!-- <the-header @add-click="addClick" @save-click="onSubmit" /> -->
  <add-product @prod-info="getInfo" v-if="onAddProducts" />
  <product-list
    v-if="!onAddProducts"
    :boxes="this.boxes"
    @addClick="addClick"
  />
</template>

<script>
import addProduct from "./pages/addProduct.vue";
// import { computed } from "vue";
// import DynForm from "@/components/dynForm.vue";
export default {
  components: { addProduct },
  // props: ["onSubmit"],
  data() {
    return {
      boxes: [],
      onAddProducts: true,
    };
  },
  methods: {
    // onSubmitt() {
    //   this.onAddProducts = false;
    // },
    onSubmit() {
      console.log(this.optsel);
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
        "prod-info",
        this.sku,
        this.name,
        this.price + " $",
        this.type,
        this.value
      );
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
      console.log(sku, name, price, type, value);
      this.onAddProducts = false;
    },
    onSave() {
      this.$emit("onSubmit");
    },
    addClick() {
      this.onAddProducts = !this.onAddProducts;
      console.log("hello");
      this.save = false;
      this.cancel = false;
    },
  },
};
// components: { DynForm },
// props: {},
// data() {
//   return {
//     sku: null,
//     name: null,
//     price: null,
//     size: null,
//     height: null,
//     width: null,
//     length: null,
//     weight: null,
//     divASelected: false,
//     divFurniture: false,
//     divBook: false,
//     optSel: "",
//     type: null,
//     value: null,
//     boxes: [
//       {
//         id: 1,
//         sku: this.sku,
//         name: this.name,
//         price: this.price + " $",
//         type: this.type,
//         value: this.value,
//       },
//     ],
//   };
// },
// provide() {
//   return {
//     boxes: [
//       {
//         id: computed(() => this.boxes[0].id),
//         sku: computed(() => this.sku),
//         name: computed(() => this.name),
//         price: computed(() => this.price + " $"),
//         type: this.type,
//         value: this.value,
//       },
//     ],
//   };
// },
// methods: {
//   onSubmit() {
//     console.log(this.optsel);
//     if (this.optSel === "DVD") {
//       this.type = "Size: ";
//       this.value = this.size + " MB";
//     } else if (this.optSel === "Furniture") {
//       this.type = "Dimensions: ";
//       this.value = this.height + "x" + this.width + "x" + this.length;
//     } else if (this.optSel === "Book") {
//       this.type = "Weight: ";
//       this.value = this.weight + "KG";
//     }

//     this.$emit(
//       "prod-info",
//       this.sku,
//       this.name,
//       this.price + " $",
//       this.type,
//       this.value
//     );
//   },
// },
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
</style>
