<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />

    <!-- コンポーネント内で@change()イベントを拾うと伝達される -->
    <country-select @get-country="getCountryData" :countries="countries" />

    <button
      @click="clearCountryData"
      v-if="stats.Country"
      class="
        bg-green-700
        text-white
        rounded
        p-3
        mt-10
        focus:outline-none
        hover:bg-green-600
      "
    >
      Clear Country
    </button>
  </main>

  <main class="flex flex-col justify-center align-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data</div>
    <img class="w-24 m-auto" :src="loadingImage" alt="" />
  </main>
</template>

<script>
import DataTitle from "./components/DataTitle.vue";
import DataBoxes from "@/components/DataBoxes.vue";
import CountrySelect from "@/components/CountrySelect.vue";
// import DataTitle from "@/components/DataTitle.vue";
// import DataBoxes from "@/components/DataBoxes.vue";
// import CountrySelect from "@/components/CountrySelect.vue";
export default {
  name: "HomeView",
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
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
    // countryの変更により全てのデータが書き変わる
    getCountryData(country) {
      this.stats = country;
      this.title = country.Country;
    },
    async clearCountryData() {
      this.loading = true
      const data = await this.fetchCovidData()
      this.title = 'Global'
      this.stats = data.Global
      this.loading = false
    }
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
