<template>
  <div class="home">Hello World</div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats
    }
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
  },
  // initial request 初期化時に適用される処理を書く括り
  async created() {
    console.log(123);
    const data = await this.fetchCovidData();
    console.log(data);
  },
};
</script>
