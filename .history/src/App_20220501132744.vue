<template>
<Header/>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
パスを@からnetlifyにdeploy可能になった
// import Header from "@/components/Header.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>