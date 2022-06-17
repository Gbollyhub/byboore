<template>
  <div class="yarn-selector-header">
    <div>
      <h1 class="yarn-header-heading">{{ title }}</h1>
    </div>
    <div class="app-primary-button">
      <div class="app-primary-button-label">Save &amp; Apply</div>
      <img
        src="../../assets/images/Icons-24x24.svg"
        loading="lazy"
        width="21"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "YarnHeader",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yarn-selector-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 10px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #e3e3ec;
}

.yarn-header-heading {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
  font-weight: 600;
}

.app-primary-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 6px 11px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #e0e0e0;
  border-radius: 40px;
  color: #575757;
  text-decoration: none;
  cursor: pointer;
}

.app-primary-button-label {
  margin-right: 0.5rem;
  color: #333;
  font-size: 13px;
}

@media screen and (max-width: 479px) {
  .yarn-header-heading {
    font-size: 16px;
    line-height: 20px;
  }

  .app-primary-button {
    padding-right: 5px;
    padding-left: 5px;
  }

  .app-primary-button-label {
    font-size: 12px;
  }
}
</style>
