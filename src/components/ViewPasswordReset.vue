<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
        <input type="text" v-model="email" placeholder="email" />
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
import { UserAuth } from "../api/api";

const contents = {
  title: "UserAuth/sendPasswordResetEmail",
  description: "パスワードをリセットするメールを送信します",
  button: `sendPasswordResetEmail`,
  code: `import { UserAuth } from "../api/api";
const params = {
  email: this.email,
};
const result = await UserAuth().sendPasswordResetEmail(params);`,
};

export default {
  name: "ViewPasswordRest",
  components: {
    Result,
  },
  data: () => {
    return {
      email: "",
      result: null,
      contents,
    };
  },
  mounted() {},
  methods: {
    async submit() {
      const params = {
        email: this.email,
      };
      const result = await UserAuth().sendPasswordResetEmail(params);
      this.result = JSON.stringify(result);
    },
  },
};
</script>