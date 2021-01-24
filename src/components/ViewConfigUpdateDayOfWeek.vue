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
  title: "ConfigReserve/updateDayOfWeek",
  description: "予約設定を変更します",
  button: `updateDayOfWeek`,
  code: `import { ConfigReserve } from "../api/api";
const params = {
  //変更する曜日単位でまるごと更新する
  Monday: {
    active: true,
    start_time: "08:00",
    end_time: "10:00",
    time: "30",
    detail: [
      {timeid: 1,active: true,start: "08:00",end: "08:30"},
      {timeid: 2,active: true,start: "08:30",end: "09:00"},
      {timeid: 3,active: true,start: "09:00",end: "09:30"},
      {timeid: 4,active: true,start: "09:30",end: "10:00"}
    ]
  },
  Wednesday: {
    active: true,
    start_time: "08:00",
    end_time: "10:00",
    time: "30",
    detail: [
      {timeid: 1,active: true,start: "08:00",end: "08:30"},
      {timeid: 2,active: true,start: "08:30",end: "09:00"},
      {timeid: 3,active: true,start: "09:00",end: "09:30"},
      {timeid: 4,active: true,start: "09:30",end: "10:00"}
    ]
  }
};
const result = await ConfigReserve().updateDayOfWeek(params);`,
};

export default {
  name: "ViewConfigUpdateDayOfWeek",
  components: {
    Result,
  },
  data: () => {
    return {
      day_of_week: {
        Monday: {
          active: true,
          start_time: "08:00",
          end_time: "10:00",
          time: "30",
          detail: [
            { timeid: 1, active: true, start: "08:00", end: "08:30" },
            { timeid: 2, active: true, start: "08:30", end: "09:00" },
            { timeid: 3, active: true, start: "09:00", end: "09:30" },
            { timeid: 4, active: true, start: "09:30", end: "10:00" },
          ],
        },
        Wednesday: {
          active: true,
          start_time: "08:00",
          end_time: "10:00",
          time: "30",
          detail: [
            { timeid: 1, active: true, start: "08:00", end: "08:30" },
            { timeid: 2, active: true, start: "08:30", end: "09:00" },
            { timeid: 3, active: true, start: "09:00", end: "09:30" },
            { timeid: 4, active: true, start: "09:30", end: "10:00" },
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
      const result = await ConfigReserve().updateDayOfWeek(this.day_of_week);
      this.result = JSON.stringify(result);
    },
  },
};
</script>