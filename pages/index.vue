<template>
  <div>
    <CardCreate />
    <CardProductProvider />
  </div>
</template>

<script>
import CardProductProvider from "@/components/Card/CardProductProvider";
import CardCreate from "@/components/Card/CardCreate";
export default {
  name: "IndexPage",
  components: { CardCreate, CardProductProvider },
};
</script>
<style lang="scss">
@import "../assets/scss/style.scss";
</style>
