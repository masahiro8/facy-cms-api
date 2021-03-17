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
  title: "ViewTypeids/create",
  description: `type_idを新規作成します。`,
  button: `create`,
  code: `import { Typeids } from "../api/api";
const param = {
  name: "時間枠の名前",
  description: "時間枠の説明テキスト",
};
const result = await Typeids().create(param);`,
};

export default {
  name: "ViewTypeidsCreate",
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
      const param = {
        name: "時間枠の名前",
        description: "時間枠の説明テキスト",
      };
      const result = await Typeids().create(param);
      this.result = JSON.stringify(result);
    },
  },
};
</script>