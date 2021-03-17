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
import { Typeids } from "../api/api";

const contents = {
  title: "ViewTypeids/get",
  description: `type_idを取得します。`,
  button: `get`,
  code: `import { Typeids } from "../api/api";
const result = await Typeids().get();`,
};

export default {
  name: "ViewTypeidsGet",
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
      const result = await Typeids().get();
      this.result = JSON.stringify(result);
    },
  },
};
</script>