<template>
  <div class="yarn-color-selection">
    <yarn-header title="Choose Colors" />
    <div class="yarn-selector-content">
      <yarn-content-info />
      <yarn-content-selection />
    </div>
  </div>
</template>

<script>
import YarnContentInfo from "./YarnContentInfo/YarnContentInfo.vue";
import YarnContentSelection from "./YarnContentSelection/YarnContentSelection.vue";
import YarnHeader from "./YarnHeader/YarnHeader.vue";
export default {
  components: { YarnHeader, YarnContentInfo, YarnContentSelection },
  name: "YarnColorSelection",
};
</script>


<style scoped>
.yarn-color-selection {
  width: 60%;
  height: 90vh;
  padding: 2% 3% 3%;
  border-style: solid;
  border-width: 1px;
  border-color: #e0ebfc;
  border-radius: 16px;
  background-color: #fff;
}
.yarn-selector-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 2rem;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

@media screen and (max-width: 991px) {
  .yarn-color-selection {
    width: 90%;
  }
}

@media screen and (max-width: 767px) {
  .yarn-color-selection {
    height: auto;
  }
}

@media screen and (max-width: 479px) {
  .yarn-color-selection {
    padding-right: 5%;
    padding-left: 5%;
  }
}
</style>
