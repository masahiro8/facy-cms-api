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
  title: "UserAuth/profile",
  description: "ログインしているユーザーのプロフィールを取得します",
  button: `profile`,
  code: `import { UserAuth } from "../api/api";
const result = await UserAuth().getLoggedinUserProfile();`,
};

export default {
  name: "ViewProfile",
  components: { Result },
  data: () => {
    return {
      result: null,
      contents,
    };
  },
  mounted() {},
  methods: {
    async submit() {
      const result = await UserAuth().getLoggedinUserProfile();
      this.result = JSON.stringify(result);
    },
  },
};
</script>