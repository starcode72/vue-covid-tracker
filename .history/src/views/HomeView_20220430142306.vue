<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats"/>
  </main>

  <main class="flex flex-col justify-center align-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data</div>
    <img class="w-24 m-auto" :src="loadingImage" alt="" />
  </main>
</template>

<script>
import DataTitle from "@/components/DataTitle.vue";
import DataBoxes from "@/components/DataBoxes.vue";
import CountrySelect from '@/components/CountrySelect.vue'
export default {
  name: "HomeView",
  components: {
    DataTitle,
    DataBoxes,
    Co
  },
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
    console.log("initial");
    // fetchメソッドの実行 データ取得
    const data = await this.fetchCovidData();
    console.log(data);

    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>
