<template>
  <v-card class="page">
    <h1>Profile</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-btn color="primary" class="button" @click="profile"
              >　プロフィール　</v-btn
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
  name: "ViewProfile",
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
    async profile() {
      console.log("profile");
      const result = await UserAuth().getLoggedinUserProfile();
      this.result = JSON.stringify(result);
      console.log("profile result", JSON.stringify(result));
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./basic.scss";
</style>