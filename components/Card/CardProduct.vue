<template>
  <div class="card">
    <button class="card-delete" @click="deleteCard">
      <img src="../../assets/img/delete.svg" alt="delete" />
    </button>
    <div class="card__container-img">
      <img class="card__img" :src="link" alt="photo" />
    </div>
    <div class="card__container-info">
      <p class="card__container-info-title">{{ title }}</p>
      <p class="card__container-info-description">
        {{ description }}
      </p>
      <p class="card__container-info-total">{{ cost | costFormatting }} руб.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    card: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    description() {
      return this.card?.description?.length > 120
        ? `${this.card?.description?.slice(0, 120)}...`
        : `${this.card?.description?.slice(0, 120)}`;
    },
    title() {
      return `${this.card?.title.slice(0, 20)}`;
    },
    cost() {
      return `${this.card?.cost.slice(0, 20)}`;
    },
    link() {
      return this.card?.link;
    },
  },
  methods: {
    deleteCard() {
      this.$store.dispatch("fakeQuery", {
        value: this.index,
        mutationName: "deleteCard",
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/mixin.scss";
.card {
  position: relative;
  @include card;
  width: 332px;
  height: 423px;
  cursor: pointer;
  &:hover {
    .card-delete {
      opacity: 1;
      transition: all 0.8s;
    }
  }
  &-delete {
    opacity: 0;
    background-color: $error;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 8px;
    position: absolute;
    right: -15px;
    top: -10px;
    cursor: pointer;
    border: none;
    transition-duration: 0.4s;
    &:after {
      border-radius: 10px;
      content: "";
      background: $error;
      display: block;
      position: absolute;
      padding-top: 100%;
      padding-left: 100%;
      margin-left: -8px !important;
      margin-top: -65%;
      opacity: 0;
      transition: all 0.8s;
    }
    &:hover {
      background-color: #49485e;
    }
    &:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }
  }
  &__img {
    width: 332px;
    height: 200px;
    border-radius: 4px 4px 0px 0px;
  }
  &__container-info {
    padding: 16px 16px 24px 16px;
    &-title {
      font-weight: 600;
      line-height: 25px;
      font-size: $fs-preLarge;
      color: $secondary-light;
      margin-bottom: 16px;
    }
    &-description {
      height: 80px;
      font-weight: 400;
      font-size: $fs-maxMedium;
      line-height: 20px;
      color: $secondary-light;
      margin-bottom: 32px;
    }
    &-total {
      font-weight: 600;
      font-size: $fs-large;
      line-height: 30px;
    }
  }
}
</style>
