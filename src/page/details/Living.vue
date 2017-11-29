<template>
  <div class="living">
    <div class='progressBox'>
    	<progress-column v-for="n in 8" :percentage='percentage' :unit='unit'/>
    </div>
    <div class='mainItems'>mainItems</div>
    <div class='progressBox Box2'>
    <progress-column v-for="n in 6" :percentage='percentage' :unit='unit'/>
    </div>
    <div class='UBox'>box1</div>
    <div class='UBox'>box2</div>
    <div class='UBox'>box3</div>


  </div>
</template>

<script>

import ProgressColumn from '@/components/ProgressColumn'
export default {
	components:{
		ProgressColumn
	},
  name: 'living',
  data () {
    return {
      percentage: 89,
      unit:'BAR'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.living{
	width: 1003.58px;
	display: flex ;
	flex-flow: wrap ;
}
.progressBox{
	width: 200px;
	display: flex;
	flex-flow: wrap;
}
.Box2{
	width: 180px;
}
.progressBox div{
	margin-right: 20px;
}
.mainItems{
	width: 50%;
}
.UBox{
	width: 33%;
}
</style>
