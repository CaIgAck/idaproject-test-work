<template>
  <div>
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
      <InputField
        @input="$emit('input', $event)"
        :placeholder="placeholder"
        :label="name"
        :disabled="disabled"
        :value="value"
        :type="type"
        :errors="errors"
        :required="requiredCustom"
      />
    </ValidationProvider>
  </div>
</template>

<script>
import InputField from "@/components/InputFields/InputField";
export default {
  name: "ValidationInputField",
  components: { InputField },
  props: {
    value: [String, Number],
    disabled: Boolean,
    placeholder: String,
    label: String,
    type: String,
    rules: String,
    nameError: String,
    requiredCustom: Boolean,
  },
  computed: {
    name() {
      return this.label ?? this.nameError;
    },
  },
};
</script>

<style scoped></style>
