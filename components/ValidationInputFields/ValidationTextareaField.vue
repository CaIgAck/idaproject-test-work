<template>
  <div>
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
      <TextareaField
        @input="$emit('input', $event)"
        :placeholder="placeholder"
        :label="name"
        :disabled="disabled"
        :value="value"
        :errors="errors"
        :rows="rows"
        :cols="cols"
      />
    </ValidationProvider>
  </div>
</template>

<script>
import TextareaField from "@/components/InputFields/TextareaField";
export default {
  name: "ValidationTextareaField",
  components: { TextareaField },
  props: {
    value: [String, Number],
    disabled: Boolean,
    placeholder: String,
    label: String,
    type: String,
    rules: String,
    nameError: String,
    cols: String,
    rows: String,
  },
  computed: {
    name() {
      return this.label ?? this.nameError;
    },
  },
};
</script>

<style scoped></style>
