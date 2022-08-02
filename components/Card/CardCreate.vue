<template>
  <div class="card-create">
    <ValidationForm v-slot:default="{ handleSubmit }">
      <ValidationInputField
        placeholder="Введите наименование товара"
        label="Наименование товара"
      />
      <ValidationTextareaField
        placeholder="Введите описание товара"
        label="Описание товара"
      />
      <ValidationInputField
        placeholder="Введите ссылку"
        label="Ссылка на изображение товара"
      />
      <ValidationInputField placeholder="Введите цену" label="Цена товара" />
      <ButtonCustom @click="handleSubmit(save)" />
    </ValidationForm>
  </div>
</template>

<script>
import ValidationForm from "@/components/ValidationInputFields/ValidationForm";
import ValidationInputField from "@/components/ValidationInputFields/ValidationInputField";
import ValidationTextareaField from "@/components/ValidationInputFields/ValidationTextareaField";
import ButtonCustom from "@/components/UI/Button";
export default {
  name: "CardCreate",
  components: {
    ButtonCustom,
    ValidationTextareaField,
    ValidationInputField,
    ValidationForm,
  },
  methods: {
    save() {},
  },
};
</script>

<style scoped></style>
