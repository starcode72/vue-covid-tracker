<template>
  <select v-model="selected">
    <option value="0"></option>
  </select>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries"],
  data() {
    selected: 0;
  },
};
</script>

<style>
</style>