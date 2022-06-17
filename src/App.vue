<template>
  <div class="app-wrapper">
    <yarn-color-selection />
  </div>
</template>

<script>
import YarnColorSelection from "./components/YarnColorSelection.vue";
export default {
  name: "App",
  components: {
    YarnColorSelection,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.app-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f3f7fa;
  font-family: "Poppins", sans-serif;
}

@media screen and (max-width: 767px) {
  .app-wrapper {
    height: auto;
    padding-top: 2.3rem;
    padding-bottom: 2.3rem;
  }
}
</style>
