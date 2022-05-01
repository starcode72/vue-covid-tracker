<template>
<Header/>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
// パスを@から通常の.ドットに変更することでnetlifyにdeploy可能になった
// import Header from "@/components/Header.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>