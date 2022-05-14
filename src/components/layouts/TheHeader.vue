<template>
  <header>
    <div class="heading">
      <h1>{{ heading }}</h1>
      <div class="btns">
        <slot />
      </div>
    </div>
    <hr />
  </header>
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
header {
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
  display: flex;
  justify-content: space-around;
}
</style>
