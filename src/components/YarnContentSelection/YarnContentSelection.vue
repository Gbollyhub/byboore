<template>
  <div class="yarn-selector-content-col-2">
    <yarn-active-color-tile
      v-for="(item, index) in getSelectedColor"
      :key="index"
      :colors="item"
      :index="index"
    />
  </div>
</template>

<script>
import YarnActiveColorTile from "./YarnActiveColorTile.vue";
import { mapGetters } from "vuex";
export default {
  components: { YarnActiveColorTile },
  name: "YarnContentSelection",
  props: {
    selectedColors: Array,
  },
  computed: {
    ...mapGetters(["getSelectedColor"]),
  },
};
</script>


<style scoped>
.yarn-selector-content-col-2 {
  position: relative;
  padding-right: 6%;
  padding-left: 6%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 50%;
  -ms-flex: 0 50%;
  flex: 0 50%;
}

@media screen and (max-width: 767px) {
  .yarn-selector-content-col-2 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

@media screen and (max-width: 479px) {
  .yarn-selector-content-col-2 {
    padding-right: 0%;
    padding-left: 0%;
  }
}
</style>
