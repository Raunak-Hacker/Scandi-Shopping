<template>
  <!-- <add-product @prod-info="getInfo"></add-product> -->
  <h1>hell</h1>
  <button @click="addClick">add</button>
  <button @click="massDelete">Del</button>
  <!-- <router-link to="/product-list"> Product List </router-link> -->
  <div class="box-grid">
    <dynprod
      v-for="box in boxess"
      :key="box.id"
      :sku="box.sku"
      :name="box.name"
      :price="box.price"
      :type="box.type"
      :value="box.value"
    />
  </div>
</template>

<script>
import dynprod from "@/components/DynProd.vue";
export default {
  props: {
    boxes: {
      type: Array,
      required: true,
    },
  },
  components: {
    dynprod,
  },

  data() {
    return {
      // mySelections: [],
      boxess: [],
    };
  },
  created() {
    this.boxess = this.boxes;
  },
  methods: {
    addClick() {
      this.$emit("add-click");
    },
    massDelete() {
      this.boxes.forEach((box) => {
        if (box.check) {
          this.boxess.splice(this.boxess.indexOf(box), 1);
        }
      });
    },
  },
};
// inject: ["boxes"],
// created() {
//   Event.$on("prod-info", (sku, name, price, type, value) => {
//     console.log(sku, name, price, type, value);
//   });
// },
// const box = {
//   sku: sku,
//   name: name,
//   price: price,
//   type: type,
//   value: value,
// };
// this.boxes.push(box);
</script>

<style>
.box-grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: 6rem;
}
</style>
