<template>
  <div class="head-div">
    <div class="heading">
      <h1>{{ heading }}</h1>
      <div class="btns">
        <button
          @click="saveClick"
          type="submit"
          form="product-form"
          v-if="save"
        >
          Save
        </button>
        <button @click="addClick" v-else>add</button>
        <button type="reset" form="product-form" v-if="cancel">Cancel</button>
        <button @click="delClick" v-else>Delete</button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    save: {
      type: Boolean,
      default: true,
    },
    cancel: {
      type: Boolean,
      default: true,
    },
    heading: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      // save: true,
      // cancel: true,
    };
  },
  watch: {},
  methods: {
    saveClick() {
      this.$emit("save-click");
      // this.save = false;
      // this.cancel = false;
      console.log(this.save, this.cancel);
    },
    addClick() {
      this.$emit("add-click");
      // this.save = true;
      // this.cancel = true;
    },
    delClick() {
      this.$emit("del-click");
    },
  },
};
</script>

<style>
.head-div {
  width: 80vw;
  margin: auto;
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding-right: 4rem;
}

hr {
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
</style>
