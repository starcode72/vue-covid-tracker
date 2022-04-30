<template>
  <select v-model="selected" class="form-select m6">
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