<template>
  <div>
    <!--    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">-->
    <!--      <InputField-->
    <!--        :placeholder="placeholder"-->
    <!--        :label="name"-->
    <!--        :disabled="disabled"-->
    <!--        :value="value"-->
    <!--        :type="type"-->
    <!--        :errors="errors"-->
    <!--      />-->
    <!--    </ValidationProvider>-->
  </div>
</template>

<script>
export default {
  name: "ValidationInputField",
  props: {
    value: [String, Number],
    disabled: Boolean,
    placeholder: String,
    label: String,
    type: String,
    rules: String,
    nameError: String,
  },
  computed: {
    name() {
      return this.label ?? this.nameError;
    },
  },
};
</script>

<style scoped></style>
