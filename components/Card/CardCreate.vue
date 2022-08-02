<template>
  <div class="card-create">
    <ValidationForm>
      <template v-slot:default="{ handleSubmit }">
        <div class="card-create__form">
          <ValidationInputField
            placeholder="Введите наименование товара"
            label="Наименование товара"
            rules="required"
            v-model="cardForm.title"
          />
          <ValidationTextareaField
            class="mt-4"
            placeholder="Введите описание товара"
            label="Описание товара"
            v-model="cardForm.description"
          />
          <ValidationInputField
            class="mt-4"
            placeholder="Введите ссылку"
            label="Ссылка на изображение товара"
            rules="required"
            v-model="cardForm.link"
          />
          <ValidationInputField
            class="mt-4"
            placeholder="Введите цену"
            label="Цена товара"
            rules="required"
            v-model="cardForm.cost"
          />
          <ButtonCustom class="mt-6" @click="save">
            Добавить товар
          </ButtonCustom>
        </div>
      </template>
    </ValidationForm>
  </div>
</template>

<script>
import ValidationForm from "@/components/ValidationInputFields/ValidationForm";
import ValidationInputField from "@/components/ValidationInputFields/ValidationInputField";
import ValidationTextareaField from "@/components/ValidationInputFields/ValidationTextareaField";
import ButtonCustom from "@/components/UI/Button";
const cardForm = {
  title: null,
  description: null,
  link: null,
  cost: null,
};
export default {
  name: "CardCreate",
  data() {
    return {
      cardForm: cardForm,
    };
  },
  components: {
    ButtonCustom,
    ValidationTextareaField,
    ValidationInputField,
    ValidationForm,
  },
  methods: {
    save() {
      this.$store.dispatch("fakeQuery", this.cardForm);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/mixin.scss";
.card-create {
  @include card;
  width: 332px;
  max-height: 440px;
  &__form {
    padding: 24px;
    width: 332px;
  }
}
</style>
