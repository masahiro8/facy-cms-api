<template>
  <div class="page">
    <h1>{{ contents.title }}</h1>
    <div class="description">{{ contents.description }}</div>
    <div class="interface">
      <div class="inputs">
        <v-select
          v-model="day"
          :items="DAY_OF_WEEK"
          item-text="label"
          item-value="id"
          label="Select"
          single-line
        ></v-select>
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
import { ConfigReserve, DAY_OF_WEEK } from "../api/api";

const contents = {
  title: "ConfigReserve/getDayOfWeek",
  description: `週単位の予約設定を取得します。`,
  button: `getDayOfWeek`,
  code: `import { ConfigReserve } from "../api/api";
const result = await ConfigReserve().getDayOfWeek();`,
};

export default {
  name: "ViewConfigGetDate",
  components: {
    Result,
  },
  data: () => {
    return {
      DAY_OF_WEEK: [{ id: null, label: "全て選択" }].concat(
        Object.keys(DAY_OF_WEEK).map((key) => {
          return DAY_OF_WEEK[key];
        })
      ),
      result: null,
      day: null,
      contents,
    };
  },
  mounted() {
    console.log("DAY_OF_WEEK", this.DAY_OF_WEEK);
  },
  methods: {
    async submit() {
      console.log("DAY_OF_WEEK", this.day, this.DAY_OF_WEEK);
      const result = await ConfigReserve().getDayOfWeek(this.day);
      this.result = JSON.stringify(result);
    },
  },
};
</script>