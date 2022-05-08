<template>
  <!-- <add-product @prod-info="getInfo"></add-product> -->
  <!-- {{ boxes }} -->
  <!-- <router-link to="/product-list"> Product List </router-link> -->
  <the-header @add-click="addClick" @del-click="massDelete" :heading="this.heading" :save="this.save" :cancel="this.cancel" />
  
  <div class="box-grid">
    <dynprod
      v-for="box in boxess"
      :key="box.id"
      :id="box.id"
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
      mySelections: [],
      boxess: [],
      heading: "Product List",
      save: false,
      cancel: false,
    };
  },
  created() {
    this.boxess = this.boxes;
  },
  methods: {

    addClick() {
      this.$emit("add-click");
      console.log(this.checkin);
    },
    multiDelete() {
      this.mySelections = [];
      this.boxess = this.boxes;
    },
    // massDelete() {
    //   this.mySelections = [];
    //   this.boxess = this.boxes;
    // },
    // multiDeletes(boxessf) {
    //   this.mySelections = boxessf;
    //   this.boxess = this.boxessf.filter(
    //     (box) => !this.mySelections.includes(box.id)
    //   );
    // },
    massDelete() {
      this.boxess.forEach((box) => {
        if (box.id) {
          this.boxess.splice(this.boxess.indexOf(box.id),1);
          console.log(this.boxess);
        }
      });
    },
    deleteBox(id) {
      this.boxess.splice(this.boxess.indexOf(id), 1);
    },
  },
};
</script>

<style>
.box-grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: 6rem;
}
</style>
