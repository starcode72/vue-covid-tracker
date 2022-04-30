<template>
<select v-model="selected"></select>
  {{ countries }}
</template>

<script>
export default {
name: 'CountrySelect',
props: ['countries']
}
</script>

<style>

</style>