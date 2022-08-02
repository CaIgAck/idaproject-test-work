<template>
  <div class="card-provider">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card-provider__item"
    >
      <CardProduct />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProductProvider",
  components: {},
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    };
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
