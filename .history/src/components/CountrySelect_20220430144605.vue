<template>
  <select
    @change="onChange()"
    v-model="selected"
    class="form-select mt-1 block w-full border p-3 rounded"
  >
    <option value="0">Select Country</option>
    <option v-for="country in countries" :value="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries"],
  data() {
    selected: 0;
  },
  // selectタグ選択と同じ要素を配列から探し出して変数化して
  // 下部の{{ country.Country}}内で使用して表示する
  methods: {
    onChange() {
      const country = this.countries.find((item) => item.ID === this.selected);
      console.log(country);


      this.$emit("get-country", country);
      this.$emit(”emit名", ひきすう)
    },
  },
};
</script>

<style>
</style>