<template>
<select v-model=""></select>
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