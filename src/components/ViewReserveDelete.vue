<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
        <input type="text" v-model="id" placeholder="id" />
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
  title: "Reserves/deleteReserve",
  description: "予約を更新します",
  button: `deleteReserve`,
  code: `import { Reserves } from "../api/api";
const params = {
  id: this.id,
};
const result = await Reserves().deleteReserve(params);`,
};

export default {
  name: "ViewReserveDelete",
  components: {
    Result,
  },
  data: () => {
    return {
      id: "",
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
  },
  methods: {
    async submit() {
      const params = {
        id: this.id,
      };
      console.log(params);
      const result = await Reserves().deleteReserve(params);
      this.result = JSON.stringify(result);
    },
  },
};
</script>