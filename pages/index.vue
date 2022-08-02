<template>
  <div>
    <CardProductProvider />
  </div>
</template>

<script>
import CardProductProvider from "@/components/Card/CardProductProvider";
export default {
  name: "IndexPage",
  components: { CardProductProvider },
};
</script>
<style lang="scss">
@import "../assets/scss/style.scss";
</style>
