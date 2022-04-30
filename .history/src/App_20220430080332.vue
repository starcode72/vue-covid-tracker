<template>
<Header/>
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
import Header from "./";

export default {
  components: {
    Header,
  },
};
</script>