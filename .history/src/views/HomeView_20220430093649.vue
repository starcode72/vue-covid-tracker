<template>
  <main v-if="">Hello World</main>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: {},
      countries: [],
      loadingImage: require("../../src/assets/logo.png"),
    };
  },
  methods: {
    async fetchCovidData() {
      // データ取得
      const res = await fetch("https://api.covid19api.com/summary");
      // fetchデータjson化
      const data = await res.json();
      return data;
    },
  },
  // initial request 初期化時に適用される処理を書く括り
  async created() {
    console.log('initial');
    // fetchメソッドの実行 データ取得
    const data = await this.fetchCovidData();
    console.log(data);

    this.dataDate = data.Data;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>
