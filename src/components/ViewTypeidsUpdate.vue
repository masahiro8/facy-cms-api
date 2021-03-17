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
  title: "ViewTypeids/update",
  description: `既存type_idを更新します。`,
  button: `update`,
  code: `import { Typeids } from "../api/api";
const param = {
  id: 91594912893773,
  name: "更新する時間枠の名前",
  description: "更新する時間枠の説明テキスト",
};
const result = await Typeids().update(param);`,
};

export default {
  name: "ViewTypeidsUpdate",
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
        id: 91594912893773,
        name: "更新する時間枠の名前",
        description: "更新する時間枠の説明テキスト",
      };
      const result = await Typeids().update(param);
      this.result = JSON.stringify(result);
    },
  },
};
</script>