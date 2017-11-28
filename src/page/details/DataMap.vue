<template>
  <div class="dataMap">
  	<span class='pl10'>查询条件</span>
    <div class='searchBox'>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="请选择开始时间">
    </el-date-picker>
    <span style='margin:0 10px;'>至</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="请输入结束时间">
    </el-date-picker>

	<div class='menuItem toRight'>最新数据</div>
	<div class='menuItem'>查询</div>
    </div>
    <div class='chartHead'>
	    <span class='text1 pl10'>室内温度变化曲线</span>
	    <img src='/src/assets/IconMedium/download.png'>
	    <span class='text2 mr30'>下载图表</span>
	</div>
    <div class='chart'>
      <img src='/src/assets/image/chart.jpeg'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataMap',
  data () {
    return {
      value1:'',
      value2:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dataMap{
	text-align: left ;
}
.searchBox{
	display: flex;
	align-items: center;
	padding-left: 10px;
}
.menuItem{
	width:157px;
	height:41px;
	background: #107FE0;
	border-radius: 4px;
	line-height: 41px;
	margin: 10px;
	color: #fff;
	text-align: center;
}
.toRight{
	margin-left: auto;
}
.pl10{
	padding-left: 10px;
}
.chart img{
	width: 800px;
	height: 250px;
	padding-left: 10px;
}
.text1{
	color:#107FE0;
}
.text2{
	color:#59708A;
}
.chartHead{
	display: flex;
	align-items: center;
}
.chartHead img{
	margin-left: auto;
}
.mr30{
	margin-right: 30px;
}
</style>
