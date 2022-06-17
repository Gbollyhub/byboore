<template>
  <div class="yarn-selector-content-col-1">
    <yarn-content-write-up
      v-for="(item, index) in contentWriteUp"
      :key="index"
      :WriteUp="item"
    />
  </div>
</template>

<script>
import YarnContentWriteUp from "./YarnContentWriteUp.vue";

export default {
  components: { YarnContentWriteUp },
  name: "YarnColorSelector",
  data() {
    return {
      contentWriteUp: [
        {
          header: "Create your own palette by selecting yarn colors",
          paragraph:
            "By mixing your own yarn colors, you can create a custom palette you need.",
        },
        {
          header: "Surprise",
          paragraph:
            "Sometimes the choice of colors turns out surprisingly different, sometimes unexpectedly beautiful. Abandon all constraints and experiment like an artist!",
        },
      ],
    };
  },
};
</script>

<style scoped>
.yarn-selector-content-col-1 {
  padding-top: 0px;
  padding-right: 2rem;
  padding-bottom: 0px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 50%;
  -ms-flex: 0 50%;
  flex: 0 50%;
  border-right: 1px solid #e3e3ec;
}

@media screen and (max-width: 767px) {
  .yarn-selector-content-col-1 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

@media screen and (max-width: 479px) {
  .yarn-selector-content-col-1 {
    border-right-style: none;
  }
}
</style>
