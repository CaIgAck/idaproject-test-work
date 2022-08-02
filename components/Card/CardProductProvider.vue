<template>
  <div class="card-provider">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card-provider__item"
    >
      <CardProduct :card="card" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProductProvider",
  components: {},
  computed: {
    cards() {
      return this.$store.getters.getCardsList;
    },
  },
};
</script>

<style scoped lang="scss">
.card-provider {
  display: flex;
  flex-wrap: wrap;
  &__item {
    margin: 0 16px 16px 0;
  }
}
</style>
