<template>
  <div class="main-page">
    <div class="main-page__info">
      <h1 class="main-page__info-title">Добавление товара</h1>
      <div class="main-page__info-filter">
        <select v-model="model" class="form-control__select">
          <option value="1">default</option>
          <option value="2">max price</option>
          <option value="3">min price</option>
        </select>
      </div>
    </div>
    <div class="main-page__content">
      <CardCreate class="mr-4" />
      <CardProductProvider />
    </div>
  </div>
</template>

<script>
import CardProductProvider from "@/components/Card/CardProductProvider";
import CardCreate from "@/components/Card/CardCreate";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorageHelper";
import { cards } from "@/testCard";
export default {
  name: "IndexPage",
  components: { CardCreate, CardProductProvider },
  data() {
    return {
      cards: cards,
      filter: {
        sortByCost: "1",
      },
    };
  },
  mounted() {
    this.setCardData();
  },
  computed: {
    model: {
      get() {
        return this.$store.getters.getFilter;
      },
      set(value) {
        this.$store.commit("setFilter", value);
      },
    },
  },
  methods: {
    setCardData() {
      const cardList = getLocalStorageData({ key: "cardsList" });
      if (!!cardList && cardList.length > 0) {
        this.$store.commit("setCardList", cardList);
      } else {
        this.$store.commit("setCardList", this.cards);
        setLocalStorageData({ key: "cardsList", value: this.cards });
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/style.scss";
@import "../assets/scss/variable.scss";
.main-page {
  &__info {
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: center;
    &-title {
      font-weight: 600;
      font-size: $fs-maxLarge;
      line-height: 35px;
      color: $secondary-light;
    }
    &-filter {
      margin-right: 15px;
    }
  }
  &__content {
    display: flex;
  }
}
</style>
