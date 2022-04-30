<template>
  <select v-model="selected" class="form-select mt-1 block ">
    <option value="0">Select Country</option>
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