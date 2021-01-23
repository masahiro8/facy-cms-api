<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
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
  title: "Reserves/setNewReserve",
  description: "予約します",
  button: `setNewReserve`,
  code: `import { Reserves } from "../api/api";
const params = {
  email: this.email,
  reserve_date: this.reserve_date,
  start_time:this.start_time,
  end_time:this.end_time
};
const result = await Reserves().setNewReserve(params);`,
};

export default {
  name: "ViewSetNewReserve",
  components: {
    Result,
  },
  data: () => {
    return {
      email: "",
      reserve_date: "",
      start_time: "",
      end_time: "",
      result: null,
      contents,
    };
  },
  mounted() {},
  methods: {
    async submit() {
      const params = {
        email: this.email,
        reserve_date: this.reserve_date,
        start_time: this.start_time,
        end_time: this.end_time,
      };
      console.log(params);
      const result = await Reserves().setNewReserve(params);
      this.result = JSON.stringify(result);
    },
  },
};
</script>