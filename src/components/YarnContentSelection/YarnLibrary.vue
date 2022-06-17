<template>
                  <div class="yarn-library">
            <div class="yarn-library-box">
              
                <h5 class="library-header">Yarn Library</h5>
 
              
              <div class="color-pack">
                <div @click="newPickHandler(item)" :class="[defaultClass, item.pantoneId === currentId ? currentClass : item.pantoneId === selectedColor ? pickedClass : null]" v-for="(item,index) in colors.yarnColors" :key="index">
                  <div class="color-box" :style="{backgroundColor: item.hex}"></div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>

import yarnColors from "../../data/yarn-colors.json"

export default {
 name: "YarnLibrary",
 props:{
  currentId: String
 },
 data(){
  return{
    defaultClass: "box-status",
    currentClass: "current-pick",
    pickedClass: "new-pick",
    selectedColor: null,
    colors:yarnColors,
  }
 },
 methods:{
  newPickHandler(value){
    this.selectedColor = value.pantoneId
    this.$emit('updateHandler',value)
  },

 }
};
</script>


<style scoped>
.yarn-library {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: 9999;
  width: 100%;
  border: 1px none #000;
  border-radius: 16px;
  margin-top: 4.5rem;
}
.yarn-library-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.library-header {
  margin-bottom: 1rem;
  color: #979b9e;
  font-size: 12px;
  font-weight: 600;
}

.library-header.done {
  margin-bottom: 1rem;
  color: #61e990;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid #61e990;
  padding: 2px 5px;
  border-radius: 3px;
  cursor: pointer;
}

.yarn-library-box {
  overflow: auto;
  height: 35vh;
  padding: 14px;
  border: 1px solid #e3e3ec;
  border-radius: 16px;
  background-color: #fff;
}

.color-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 32px;
  height: 32px;
  margin: auto;
  border: 1px solid #e3e3ec;
  border-radius: 50%;
}

.color-pack {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.box-status {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 38px;
  height: 38px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 50%;
}

.box-status.current-pick {
  border: 1px solid #000;
}

.box-status.new-pick {
  border: 1px solid #e3e3ec;
}

@media screen and (max-width: 479px) {

  .yarn-library {
    padding-right: 0%;
    padding-left: 0%;
  }
}
</style>
