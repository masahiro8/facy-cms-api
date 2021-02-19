<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
        <input type="text" v-model="year" placeholder="year" />
        <input type="text" v-model="month" placeholder="month" />
        <input type="text" v-model="day" placeholder="day" />
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
    title: "Reserves/getReservableTime",
    description: `予約の可能時間を取得します。予約が入っている時間帯は返さない。
全件取得する場合はパラメータを全てnullにする {year:null,month:null,day:null}
年で絞り込む場合はyearに設定 {year:"2020",month:null,day:null}`,
    button: `getReservableTime`,
    code: `import { Reserves } from "../api/api";
const params = {
  year: this.year,
  month: this.month,
  day: this.day,
};
const result = await Reserves().getReservableTime(params);`,
  };

  export default {
    name: "ViewReservableTime",
    components: {
      Result,
    },
    data: () => {
      return {
        year: null,
        month: null,
        day: null,
        result: null,
        contents,
      };
    },
    mounted() {},
    methods: {
      async submit() {
        const result = await Reserves().getReservableTime({
          year: this.year,
          month: this.month,
          day: this.day,
        });
        this.result = JSON.stringify(result);
      },
    },
  };
</script>
