<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col>
          <ViewSignup />
        </v-col>
        <v-col>
          <ViewLogin />
        </v-col>
        <v-col>
          <ViewProfile />
        </v-col>
        <v-col>
          <ViewUsers />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { UserAuth, Users } from "./api/api";
import ViewSignup from "./components/ViewSignup";
import ViewLogin from "./components/ViewLogin";
import ViewProfile from "./components/ViewProfile";
import ViewUsers from "./components/ViewUsers";

export default {
  name: "App",
  components: {
    ViewSignup,
    ViewLogin,
    ViewProfile,
    ViewUsers,
  },
  async mounted() {
    const result = await UserAuth().getLoggedinUserProfile();
    if (result) {
      //ログイン済み
      const users = await Users().getUsers();
      console.log("welcome ", result.username, users);
    } else {
      //未ログイン
      console.log("please login ");
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
