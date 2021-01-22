<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
        <input type="text" v-model="email" placeholder="email" />
        <input type="password" v-model="password" placeholder="password" />
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
  title: "UserAuth/login",
  description: "ログインします",
  button: `login`,
  code: `import { UserAuth } from "../api/api";
const params = {
  email: this.email,
  password: this.password,
};
const result = await UserAuth().login(params);`,
};

export default {
  name: "ViewLogin",
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
      const params = {
        email: this.email,
        password: this.password,
      };
      const result = await UserAuth().login(params);
      this.result = JSON.stringify(result);
    },
  },
};
</script>