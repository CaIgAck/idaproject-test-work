<template>
  <div class="main-page">
    <div class="main-page__info">
      <h1 class="main-page__info-title">Добавление товара</h1>
      <div class="main-page__info-filter">Добавление товара</div>
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
export default {
  name: "IndexPage",
  components: { CardCreate, CardProductProvider },
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
  }
  &__content {
    display: flex;
  }
}
</style>
