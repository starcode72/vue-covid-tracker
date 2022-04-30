<template>
  <div class="home">Hello World</div>

</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    fetchCovidData()
  }
  // initial request 初期化時に適用される処理を書く括り
  created() {
    console.log(123);
  }
};
</script>
