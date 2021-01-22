<template>
  <div class="result">
    <div class="col">
      <div class="label">code</div>
      <pre>
          <code>
{{code}}</code>
        </pre>
    </div>
    <div class="col">
      <div class="label">response</div>
      <div class="textarea">{{ response }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    code: {
      type: String,
      defaultValue: "",
    },
    response: {
      type: String,
      defaultValue: "",
    },
  },
};
</script>