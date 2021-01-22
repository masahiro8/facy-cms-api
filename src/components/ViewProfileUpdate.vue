<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
        <input type="text" v-model="email" placeholder="email" />
        <input type="text" v-model="username" placeholder="username" />
        <input type="text" v-model="uid" placeholder="uid" disabled />
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
import { Users } from "../api/api";

const contents = {
  title: "Users/updateUserProfile",
  description:
    "ユーザーのプロフィールを更新します。\n uidは変更しないでください。",
  button: `updateUserProfile`,
  code: `import { Users } from "../api/api";
const params = {
  uid: this.uid,
  email: this.email,
  name: this.username,
  roll: this.roll,
};
const result = await Users().updateUserProfile(params);`,
};

export default {
  name: "ViewLogin",
  components: {
    Result,
  },
  data: () => {
    return {
      uid: null,
      username: "",
      email: "",
      roll: "",
      result: null,
      contents,
    };
  },
  async mounted() {
    const list = await Users().getUsers();
    if (list[0]) {
      const user = { ...list[0] };
      this.uid = user.uid;
      this.username = user.username;
      this.email = user.email;
      this.uid = user.uid;
      this.roll = user.roll;
    } else {
      alert("ユーザーがいません。登録してください。");
    }
  },
  methods: {
    async submit() {
      const params = {
        uid: this.uid,
        email: this.email,
        name: this.username,
        roll: this.roll,
      };
      const result = await Users().updateUserProfile(params);
      this.result = JSON.stringify(result);
    },
  },
};
</script>