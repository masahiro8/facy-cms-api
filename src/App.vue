<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col>
          <ViewSignup />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ViewLogin />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ViewLogout />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ViewPasswordReset />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ViewProfile />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ViewUsers />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ViewProfileUpdate />
        </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { UserAuth, Users } from "./api/api";
import ViewSignup from "./components/ViewSignup";
import ViewLogin from "./components/ViewLogin";
import ViewLogout from "./components/ViewLogout";
import ViewProfile from "./components/ViewProfile";
import ViewUsers from "./components/ViewUsers";
import ViewProfileUpdate from "./components/ViewProfileUpdate";
import ViewPasswordReset from "./components/ViewPasswordReset";

export default {
  name: "App",
  components: {
    ViewSignup,
    ViewLogin,
    ViewLogout,
    ViewProfile,
    ViewUsers,
    ViewProfileUpdate,
    ViewPasswordReset,
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

<style lang="scss">
@import "./basic.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
