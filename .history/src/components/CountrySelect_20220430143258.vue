<template>
<select v-model="selected"></select>
  {{ countries }}
</template>

<script>
export default {
name: 'CountrySelect',
props: ['countries'],
data() {
  selected
}
}
</script>

<style>

</style>