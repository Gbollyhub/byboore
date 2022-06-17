<template>
  <div class="content-write-up">
    <h4 class="content-write-up-header">{{ WriteUp.header }}</h4>
    <p class="content-write-up-paragraph">{{ WriteUp.paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: "YarnColorSelector",
  props: {
    WriteUp: Object,
  },
};
</script>

<style scoped>
.content-write-up {
  margin-bottom: 2rem;
}
.content-write-up-header {
  margin-top: 0px;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 600;
}

.content-write-up-paragraph {
  color: #9b9b9b;
  font-size: 12px;
}
</style>
