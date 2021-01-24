<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
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
  title: "ConfigReserve/init",
  description: "予約設定を初期化します",
  button: `init`,
  code: `import { ConfigReserve } from "../api/api";
const result = await ConfigReserve().init();`,
};

export default {
  name: "ViewConfigInit",
  components: {
    Result,
  },
  data: () => {
    return {
      result: null,
      contents,
    };
  },
  mounted() {},
  methods: {
    async submit() {
      const result = await ConfigReserve().init();
      this.result = JSON.stringify(result);
    },
  },
};
</script>