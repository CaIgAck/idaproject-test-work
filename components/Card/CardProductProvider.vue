<template>
  <div class="card-provider">
    <Loader v-if="isLoading" />
    <div v-else-if="cards.length > 0" class="card-provider__container">
      <div
        v-for="(card, index) in sortedCards"
        :key="index"
        class="card-provider__item"
      >
        <CardProduct :card="card" :index="index" />
      </div>
    </div>
    <div v-else class="card-provider__empty">Список пуст</div>
  </div>
</template>

<script>
import Loader from "@/components/UI/Loader";
import { cloneDeep } from "lodash/lang";
export default {
  name: "CardProductProvider",
  components: { Loader },
  computed: {
    filter() {
      return this.$store.getters.getFilter;
    },
    cards() {
      return cloneDeep(this.$store.getters.getCardsList);
    },
    sortedCards() {
      if (this.filter === "2") {
        return this.cards.sort(
          (firstCard, secondCard) =>
            Number(secondCard.cost) - Number(firstCard.cost)
        );
      }
      if (this.filter === "3") {
        return this.cards.sort(
          (firstCard, secondCard) =>
            Number(firstCard.cost) - Number(secondCard.cost)
        );
      }
      return this.cards;
    },
    isLoading() {
      return this.$store.getters.getLoading;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/variable.scss";
.card-provider {
  &__container {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    margin: 0 16px 16px 0;
  }
  &__empty {
    font-size: $fs-large;
    text-align: center;
  }
}
</style>
