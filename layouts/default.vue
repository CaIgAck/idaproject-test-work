<template>
  <div class="layout">
    <div class="layout-container"></div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variable.scss";
.layout {
  background-color: $bg-color;
  min-height: 100vh;
  &-container {
    max-width: 1350px;
    margin: 0 auto;
  }
}
</style>
