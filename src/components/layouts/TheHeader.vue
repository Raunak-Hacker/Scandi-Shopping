<template>
  <div class="head-div">
    <div class="heading">
      <h1>{{ heading }}</h1>
      <div class="btns">
        <slot />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
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
  width: fit-content;
  /* height: 10rem; */
  display: flex;
  justify-content: space-around;
}
/* button {
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
} */
</style>
