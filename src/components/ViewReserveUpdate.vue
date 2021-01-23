<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
        <input type="text" v-model="id" placeholder="id" />
        <input type="text" v-model="reserve_date" placeholder="reserve_date" />
        <input type="text" v-model="start_time" placeholder="start_time" />
        <input type="text" v-model="end_time" placeholder="end_time" />
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
import { Reserves } from "../api/api";

const contents = {
  title: "Reserves/updateReserve",
  description: "予約を更新します",
  button: `updateReserve`,
  code: `import { Reserves } from "../api/api";
const params = {
  id: this.id,
  email: this.email,
  reserve_date: this.reserve_date,
  start_time:this.start_time,
  end_time:this.end_time
};
const result = await Reserves().updateReserve(params);`,
};

export default {
  name: "ViewReserveUpdate",
  components: {
    Result,
  },
  data: () => {
    return {
      id: null,
      email: "",
      reserve_date: "",
      start_time: "",
      end_time: "",
      result: null,
      contents,
    };
  },
  async mounted() {
    const list = await Reserves().getReserves({
      year: null,
      month: null,
      day: null,
    });
    this.id = list[0].id;
    this.email = list[0].user_mail;
    this.reserve_date = list[0].date;
    this.start_time = list[0].start_time;
    this.end_time = list[0].end_time;
  },
  methods: {
    async submit() {
      const params = {
        id: this.id,
        email: this.email,
        reserve_date: this.reserve_date,
        start_time: this.start_time,
        end_time: this.end_time,
      };
      console.log(params);
      const result = await Reserves().updateReserve(params);
      this.result = JSON.stringify(result);
    },
  },
};
</script>