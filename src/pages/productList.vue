<template>
  <!-- <h1>hello</h1> -->
  <add-product @prod-info="getInfo"></add-product>
  <div class="boxes">
    <dynprod
      v-for="box in boxes"
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
import AddProduct from "./addProduct.vue";
export default {
  components: { dynprod, AddProduct },
  data() {
    return {
      boxes: [
        {
          id: 1,
          sku: "12345",
          name: "Product 1",
          price: "100",
          optSel: "DVD",
        },
      ],
    };
  },
  methods: {
    getInfo(sku, name, price, type, value) {
      const box = {
        sku: sku + 'a',
        name: name,
        price: price,
        type: type,
        value: value,
      };
      this.boxes.push(box);
      console.log(sku, name, price, type, value);
    },
    // inject: ['boxes'],
  },
  mounted() {
    setTimeout(() => {
      this.boxes.push({
        id: "events",
        sku: "Erevents",
        name: "Events are important in Vue",
      });
    }, 1000);
  },
};
</script>

<style>
.boxes {
  display: flex;
  flex-wrap: wrap;
  margin-left: 6rem;
}
</style>
