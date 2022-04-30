<template>
<Header/>
<div class="container"></div>
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
// import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>