<template>
  <div class="ProgressColumn">

    <div class='ProBar'>
    <div class='ProNum' :style="{height: percentage+'%'}"></div>
    </div>
    <span>{{percentage}}</span>
    <span>{{unit}}</span>


  </div>
</template>

<script>
export default {
  name: 'ProgressColumn',
  props: ['percentage','unit'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ProgressColumn{
	display: flex;
	flex-direction:column;
	width:30px;
}
.ProBar{
	position: relative;
	height: 71px;
	width: 26px;
	background: #E6E6E6;
}
.ProNum{
	position: absolute;
	width: 100%;
	background: #1D6CBB;
	bottom: 0;
}
</style>
