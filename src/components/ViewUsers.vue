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
import { Users } from "../api/api";

const contents = {
  title: "Users/getUsers",
  description: "ユーザーの一覧を取得します",
  button: `users`,
  code: `import { Users } from "../api/api";
const result = await Users().getUsers();`,
};

export default {
  name: "ViewUsers",
  components: {
    Result,
  },
  data: () => {
    return {
      name: "",
      email: "",
      roll: "",
      password: "",
      result: null,
      contents,
    };
  },
  mounted() {},
  methods: {
    async submit() {
      const result = await Users().getUsers();
      this.result = JSON.stringify(result);
    },
  },
};
</script>