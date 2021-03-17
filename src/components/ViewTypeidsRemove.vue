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
  title: "ViewTypeids/remove",
  description: `type_idを削除します。`,
  button: `remove`,
  code: `import { Typeids } from "../api/api";
const param = {
  id: 91594912893773,
};
const result = await Typeids().remove(param);`,
};

export default {
  name: "ViewTypeidsRemove",
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
      };
      const result = await Typeids().remove(param);
      this.result = JSON.stringify(result);
    },
  },
};
</script>