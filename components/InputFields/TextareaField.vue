<template>
  <div class="form-control">
    <div>
      <div class="form-control__label">
        {{ label }}
      </div>
      <div class="form-control__container">
        <textarea
          :placeholder="placeholder"
          :disabled="disabled"
          class="form-control__input"
          v-model="normalizeData"
          :rows="rows"
          :cols="cols"
        />
      </div>
    </div>
    <div v-if="errors && errors.length > 0" class="form-control__errors">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TextareaField",
  props: {
    type: String,
    placeholder: String,
    disabled: Boolean,
    errors: Array,
    label: String,
    rows: String,
    cols: String,
    value: [String, Number],
  },
  computed: {
    normalizeData: {
      get() {
        return this.value;
      },
      set(newValue) {
        if (newValue === "") {
          this.$emit("input", null);
          return;
        }
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style scoped></style>
