<template>
  <div id="app">
    <v-sheet class="overflow-hidden">
      <v-app-bar
        scroll-target="#scrolling-main"
        hide-on-scroll
        absolute
        dense
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Reserve Api</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <!-- ページ -->
      <v-sheet id="scrolling-main" class="overflow-y-auto" max-height="100vh">
        <v-container>
          <v-row id="signup">
            <v-col>
              <ViewSignup />
            </v-col>
          </v-row>
          <v-row id="login">
            <v-col>
              <ViewLogin />
            </v-col>
          </v-row>
          <v-row id="logout">
            <v-col>
              <ViewLogout />
            </v-col>
          </v-row>
          <v-row id="passwordreset">
            <v-col>
              <ViewPasswordReset />
            </v-col>
          </v-row>
          <v-row id="profile">
            <v-col>
              <ViewProfile />
            </v-col>
          </v-row>
          <v-row id="users">
            <v-col>
              <ViewUsers />
            </v-col>
          </v-row>
          <v-row id="profileupdate">
            <v-col>
              <ViewProfileUpdate />
            </v-col>
          </v-row>
          <v-row id="newreserve">
            <v-col>
              <ViewSetNewReserve />
            </v-col>
          </v-row>
          <v-row id="reserves">
            <v-col>
              <ViewReserves />
            </v-col>
          </v-row>
          <v-row id="updatereserve">
            <v-col>
              <ViewReserveUpdate />
            </v-col>
          </v-row>
          <v-row id="deletereserve">
            <v-col>
              <ViewReserveDelete />
            </v-col>
          </v-row>
          <v-row id="configinit">
            <v-col>
              <ViewConfigInit />
            </v-col>
          </v-row>
          <v-row id="configget">
            <v-col>
              <ViewConfigGet />
            </v-col>
          </v-row>
          <v-row id="configgetdate">
            <v-col>
              <ViewConfigGetDate />
            </v-col>
          </v-row>
          <v-row id="updatedayofweek">
            <v-col>
              <ViewConfigUpdateDayOfWeek />
            </v-col>
          </v-row>
          <v-row id="setdate">
            <v-col>
              <ViewConfigSetDate />
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense class="drawer">
          <v-list-group v-model="drawerMenu.UserAuth.active" no-action>
            <template v-slot:activator>
              <v-list-item-content> UserAuth </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>
                  <v-list-item-title>
                    <a href="#signup">signup</a>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <a href="#login">login</a>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><a href="#logout">logout</a></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><a href="#passwordreset"
                      >passwordreset</a
                    ></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><a href="#profile">profile</a></v-list-item-title
                  >
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-group v-model="drawerMenu.Users.active" no-action>
            <template v-slot:activator>
              <v-list-item-content> Users </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>
                  <v-list-item-title
                    ><a href="#users">users</a></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <a href="#profileupdate">profileupdate</a>
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-group v-model="drawerMenu.Reserve.active" no-action>
            <template v-slot:activator>
              <v-list-item-content> Reserve </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>
                  <v-list-item-title
                    ><a href="#newreserve">newreserve</a></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><a href="#reserves">reserves</a></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><a href="#updatereserve"
                      >updatereserve</a
                    ></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><a href="#deletereserve"
                      >deletereserve</a
                    ></v-list-item-title
                  >
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-group v-model="drawerMenu.ConfigReserve.active" no-action>
            <template v-slot:activator>
              <v-list-item-content> ConfigReserve </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item>
                  <v-list-item-title>
                    <a href="#configinit">configinit</a>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <a href="#configget">configget</a>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <a href="#updatedayofweek">updatedayofweek</a>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <a href="#setdate">setdate</a>
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
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
import ViewSetNewReserve from "./components/ViewSetNewReserve";
import ViewReserves from "./components/ViewReserves";
import ViewReserveUpdate from "./components/ViewReserveUpdate";
import ViewReserveDelete from "./components/ViewReserveDelete";
import ViewConfigInit from "./components/ViewConfigInit";
import ViewConfigGet from "./components/ViewConfigGet";
import ViewConfigGetDate from "./components/ViewConfigGetDate";
import ViewConfigUpdateDayOfWeek from "./components/ViewConfigUpdateDayOfWeek";
import ViewConfigSetDate from "./components/ViewConfigSetDate";

export default {
  name: "App",
  data: () => {
    return {
      drawer: false,
      collapseOnScroll: true,
      drawerMenu: {
        UserAuth: { active: false },
        Users: { active: false },
        Reserve: { active: false },
        ConfigReserve: { active: false },
      },
    };
  },
  components: {
    ViewSignup,
    ViewLogin,
    ViewLogout,
    ViewProfile,
    ViewUsers,
    ViewProfileUpdate,
    ViewPasswordReset,
    ViewSetNewReserve,
    ViewReserves,
    ViewReserveUpdate,
    ViewReserveDelete,
    ViewConfigInit,
    ViewConfigGet,
    ViewConfigUpdateDayOfWeek,
    ViewConfigSetDate,
    ViewConfigGetDate,
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
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.overflow-hidden {
  overflow: hidden;
}
.overflow-y-auto {
  overflow-y: scroll;
}
.drawer {
  .v-list-item__title {
    text-align: left;
  }
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
