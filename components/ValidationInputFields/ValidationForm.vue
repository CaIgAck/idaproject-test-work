<template>
  <ValidationObserver v-slot="{ validate, reset, handleSubmit }">
    <form
      @submit.prevent="
        () => {
          return false;
        }
      "
    >
      <slot
        :class="className"
        v-bind:validate="validate"
        v-bind:reset="reset"
        v-bind:handleSubmit="handleSubmit"
      >
      </slot>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: "ValidationForm",
  props: {
    className: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
