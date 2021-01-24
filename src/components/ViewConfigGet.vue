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
  title: "ConfigReserve/get",
  description: "予約設定を取得します",
  button: `get`,
  code: `import { ConfigReserve } from "../api/api";
const result = await ConfigReserve().get();`,
};

export default {
  name: "ViewConfigGet",
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
      const result = await ConfigReserve().get();
      this.result = JSON.stringify(result);
    },
  },
};
</script>