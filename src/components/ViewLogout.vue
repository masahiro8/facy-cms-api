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
import { UserAuth } from "../api/api";

const contents = {
  title: "UserAuth/logout",
  description: "ログアウトします",
  button: `logout`,
  code: `import { UserAuth } from "../api/api";
const result = await UserAuth().logout();`,
};

export default {
  name: "ViewLogout",
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
      const result = await UserAuth().logout();
      this.result = JSON.stringify(result);
    },
  },
};
</script>