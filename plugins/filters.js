import Vue from "vue";

Vue.filter("costFormatting", (value) => {
  return value
    .toString()
    .split("")
    .map((num, i, arr) => {
      return (arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1
        ? num + " "
        : num;
    })
    .join("");
});
