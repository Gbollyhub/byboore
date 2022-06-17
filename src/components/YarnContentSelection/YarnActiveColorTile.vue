<template>
  <div
    :class="[defaultClass, isSelected ? activeClass : null]"
    @click="openLibrary(colors.pantoneId)"
  >
    <div class="title-box-pack">
      <div class="tile-box" :style="{ backgroundColor: colors.hex }"></div>
    </div>

    <div class="text-box">
      <h4 class="tile-header">{{ colors.hex }}</h4>
      <p class="tile-sub">{{ colors.name }}</p>
    </div>
    <yarn-library
      v-show="isSelected"
      :currentId="colors.pantoneId"
      @updateHandler="updateCurrentPick"
    />
  </div>
</template>

<script>
import YarnLibrary from './YarnLibrary.vue';

export default {
  components: { YarnLibrary },
  
 name: "YarnActiveColorTile",
 props:{
  colors: Object,
  index: Number
 },
 data(){
  return{
    defaultClass: "selected-color-tile",
    activeClass: "active-tile",
  currentTile: null,
  isSelected: false,
  jamo:"kepp"
  }
 },
 methods:{
  openLibrary(id){
    if(this.currentTile === id ){
       console.log("exist")
      this.isSelected = !this.isSelected
      this.currentTile = null
    }
    else{
       console.log("new")
    this.isSelected = !this.isSelected
     this.currentTile = id
    }

  },
  updateCurrentPick(value){

    let temp = this.$store.state.selectedColors
   temp[this.index] = value
    this.$store.commit('updateSelectedColor', temp)
  },

 }

};
</script>


<style scoped>
.selected-color-tile {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 1.5rem;
  padding: 10px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
   position: relative;
}

.selected-color-tile.active-tile {
  position: relative;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.title-box-pack {
  clip-path: polygon(30% 0, 70% 0, 80% 100%, 20% 100%);
  width:42px;
  height:42px;
  background: #E8E8E8;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 9px 10px 17px 0px rgba(219,219,219,1);
-moz-box-shadow: 9px 10px 17px 0px rgba(219,219,219,1);
box-shadow: 9px 10px 17px 0px rgba(219,219,219,1);
  margin-right: 1.5rem;
}
.tile-box {
  clip-path: polygon(30% 0, 70% 0, 80% 100%, 20% 100%);
  width:35px;
  height:35px;
  margin: auto;
}

.tile-header {
  color: #6c7073;
}

.tile-sub {
  color: #9b9b9b;
  font-size: 12px;
}

</style>
