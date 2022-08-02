<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      @submit.prevent="
        () => {
          return false;
        }
      "
    >
      <slot v-bind:handleSubmit="handleSubmit"> </slot>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: "ValidationForm",
};
</script>

<style scoped></style>
