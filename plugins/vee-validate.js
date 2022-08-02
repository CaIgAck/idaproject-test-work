import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

import Vue from "vue";
import moment from "moment";

const messages = {
  alpha: "Поле {_field_} может содержать только буквы",
  alpha_dash: "Поле {_field_} может содержать только буквы, цифры и дефис",
  alpha_num: "Поле {_field_} может содержать только буквы и цифры",
  alpha_spaces: "Поле {_field_} может содержать только буквы и пробелы",
  between: "Поле {_field_} должно быть между {min} и {max}",
  confirmed: "Поле {_field_} не совпадает с {target}",
  digits: "Поле {_field_} должно быть числовым и длиной {length}",
  dimensions:
    "Поле {_field_} должно быть {width} пикселей на {height} пикселей",
  email: "Поле {_field_} должно быть действительным электронным адресом",
  excluded: "Поле {_field_} должно быть допустимым значением",
  ext: "Поле {_field_} должно быть действительным файлом. ({args})",
  image: "Поле {_field_} должно быть изображением",
  oneOf: "Поле {_field_} должно быть допустимым значением",
  integer: "Поле {_field_} должно быть целым числом",
  length: "Длина поля {_field_} должна быть {length} символов",
  max: "Поле {_field_} не может быть более {length} символов",
  max_value: "Поле {_field_} должно быть {max} или менее",
  mimes: "Поле {_field_} должно иметь допустимый тип файла. ({args})",
  min: "Поле {_field_} должно быть не менее {length} символов",
  min_value: "Поле {_field_} должно быть {min} или больше",
  numeric: "Поле {_field_} должно быть числом",
  regex: "Поле {_field_} имеет ошибочный формат",
  required: "Поле {_field_} является обязательным",
  required_if: "Поле {_field_} обязательно для заполнения",
  size: "Поле {_field_} должно быть меньше, чем {size}KB",
  double: "Поле {_field_} должно быть допустимым десятичным числом",
};

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message);
  });
});

extend("betweenDate", {
  validate(value, { min, max }) {
    const valueDate = moment(value, "x");
    const firstDate = moment(min, "x");
    const secondDate = moment(max, "x");
    return (
      valueDate.isSameOrAfter(firstDate, "day") ||
      valueDate.isSameOrBefore(secondDate, "day")
    );
  },
  params: ["min", "max"],
  message: (fieldName, placeholders) => {
    const firstDate = moment(placeholders.min, "x");
    const secondDate = moment(placeholders.max, "x");

    return `Поле ${fieldName} должно быть между ${firstDate.format(
      "DD-MM-YYYY"
    )} и ${secondDate.format("DD-MM-YYYY")}`;
  },
});
extend("phone", {
  validate(phone) {
    const phoneRegExp = new RegExp(
      "^(\\+7|7|8)?[\\s\\-]?\\(?(9)[0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$"
    );
    return typeof phone === "string" && phoneRegExp.test(phone);
  },
  message: "Телефон должен соответсвовать виду +7 (9##) ###-##-##",
});
extend("stringOnly", {
  validate(string) {
    return typeof string === "string";
  },
  message: "Поле должно быть строкой",
});
extend("numberOnly", {
  validate(number) {
    return typeof number === "number";
  },
  message: "Поле должно быть числом",
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
