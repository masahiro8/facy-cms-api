<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
        <input type="text" v-model="year" placeholder="year" />
        <input type="text" v-model="month" placeholder="month" />
        <input type="text" v-model="day" placeholder="day" />
      </div>
      <div class="button">
        <button class="submit" @click="submit">{{ contents.button }}</button>
      </div>
    </div>
    <Result :code="contents.code" :response="result" />
  </div>
</template>
<script>
import Result from "./Result";
import { ConfigReserve } from "../api/api";

const contents = {
  title: "ConfigReserve/getDate",
  description: `予約設定を取得します。
year,month,dayを指定して取得、指定しない場合はそれぞれnullを設定します`,
  button: `getDate`,
  code: `import { ConfigReserve } from "../api/api";
const result = await ConfigReserve().getDate({
  year: "2021",
  month: "01",
  day: null,
});`,
};

export default {
  name: "ViewConfigGetDate",
  components: {
    Result,
  },
  data: () => {
    return {
      year: "2020",
      month: "01",
      day: null,
      result: null,
      contents,
    };
  },
  mounted() {},
  methods: {
    async submit() {
      const result = await ConfigReserve().getDate({
        year: this.year,
        month: this.month,
        day: this.day,
      });
      this.result = JSON.stringify(result);
    },
  },
};
</script>