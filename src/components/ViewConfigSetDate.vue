<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="button">
        <button class="submit" @click="submit">{{ contents.button }}</button>
      </div>
    </div>
    <Result :code="contents.code" :response="result" />
  </div>
</template>
<script>
import Result from "./Result";
import { ConfigReserve } from "../api/api";

const contents = {
  title: "ConfigReserve/setDate",
  description: `個別の予約設定をします。
日付単位で設定します。
`,
  button: `setDate`,
  code: `import { ConfigReserve } from "../api/api";
const params = {
  //日付を設定
  year:"2020",
  month:"02",
  day:"01",
  params:{
    active: true,
    detail: [
      {
        timeid: 1,
        active: true,
        start: "10:00",
        end: "10:30"
      },
      {
        timeid: 2,
        active: true,
        start: "10:30",
        end: "11:00"
      }
    ]
  }
};
const result = await ConfigReserve().setDate(params);`,
};

export default {
  name: "ViewConfigUpdateDayOfWeek",
  components: {
    Result,
  },
  data: () => {
    return {
      params: {
        year: "2020",
        month: "02",
        day: "01",
        params: {
          active: true,
          detail: [
            {
              timeid: 1,
              active: true,
              start: "10:00",
              end: "10:30",
            },
            {
              timeid: 2,
              active: true,
              start: "10:30",
              end: "11:00",
            },
          ],
        },
      },
      result: null,
      contents,
    };
  },
  mounted() {},
  methods: {
    async submit() {
      const result = await ConfigReserve().setDate(this.params);
      this.result = JSON.stringify(result);
    },
  },
};
</script>