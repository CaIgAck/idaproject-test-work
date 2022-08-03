<template>
  <button
    class="button-control"
    :class="disabled ? 'disabled' : ''"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: { type: Boolean },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/variable.scss";
.disabled {
  background-color: #eeeeee !important;
}
.button-control {
  position: relative;
  background: $success;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 284px;
  height: 36px;
  font-weight: 600;
  font-size: 12px;
  border: none;
  cursor: pointer;
  line-height: 15px;
  color: #ffffff;

  &:after {
    border-radius: 10px;
    content: "";
    background: #ffffff;
    display: block;
    position: absolute;
    padding-top: 36px;
    padding-left: 284px;
    margin-left: 0 !important;
    margin-top: -9%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
}
</style>
