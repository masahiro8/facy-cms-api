<template>
  <v-card class="page">
    <h1>Signup</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              class="cols-4"
              v-model="name"
              label="名前"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              class="cols-4"
              v-model="email"
              label="メールアドレス"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              class="cols-4"
              v-model="password"
              type="password"
              label="パスワード"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn color="primary" class="button" @click="signup"
              >サインアップ</v-btn
            ></v-col
          ><v-col cols="12" md="12"
            ><v-textarea
              filled
              name="input-7-4"
              label="Result"
              v-model="result"
            ></v-textarea></v-col
        ></v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
import { UserAuth } from "../api/api";
export default {
  name: "ViewSignup",
  data: () => {
    return {
      name: "",
      email: "",
      roll: "",
      password: "",
      result: null,
    };
  },
  mounted() {},
  methods: {
    async signup() {
      const params = {
        email: this.email,
        password: this.password,
        name: this.name,
        roll: "",
      };
      const result = await UserAuth().signup(params);
      this.result = JSON.stringify(result);
      console.log("signup result", JSON.stringify(result));
    },
    async login() {
      console.log("login");
      const params = {
        email: this.email,
        password: this.password,
      };
      const result = await UserAuth().login(params);
      this.result = JSON.stringify(result);
      console.log("login result", JSON.stringify(result));
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./basic.scss";
</style>