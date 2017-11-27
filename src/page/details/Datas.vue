<template>
  <div class="datas">
  	<el-row :gutter="10">
	  <el-col :span="12">
		  <div class="dataflow">
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox active'>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  	<div class='item'>
		  		<div class='oval'><img src='/src/assets/IconMedium/Oval2.png'></div>
		  		<div class='inforBox '>第1次数据 (2017-10-11 19:43:31)</div>
		  	</div>
		  </div></el-col>
	  <el-col :span="10"><div class="details">
  		<el-row class='head'>
		  	<el-col :span="12">记录项</el-col>
		  	<el-col :span="12">数据</el-col>
		</el-row>
		<div class='bodyWrapper'>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
  		<el-row class='body'>
		  	<el-col :span="12">lock_off</el-col>
		  	<el-col :span="12">0</el-col>
		</el-row>
		</div>
	  </div></el-col>
	</el-row>
  </div>
</template>

<script>
export default {
  name: 'datas',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details{
	text-align: left;
	line-height: 54px;
	overflow: scroll;
}
.head{
	background-color: #E6E6E6;
	height: 54px;
	padding-left: 10px;
}
.bodyWrapper{
	overflow: scroll;
	height: calc(100vh - 390px);
}
.body{
	padding-left: 10px;
	font-size: 20px;
	border-bottom: solid 1px #ddd;
}
.active{
	background-color: #E6E6E6;
	border-radius: 4px;
}
.item{
	display: flex;
	margin-left: 30px;
}
.oval{
	position: relative;
	border-right: 2px dotted #107FE0;
	margin-left: 20px;
	top: 10px;
}
.item:last-child .oval{
	border: none;
}
.oval img{
	position: absolute;
	left: 0;
	margin-left: -10px;
	margin-top: -8px;
}
.inforBox{
	margin-left: 40px;
	margin-bottom: 20px;
}
.dataflow{
	margin-top: 20px;
	height: calc(100vh - 340px);
	overflow: scroll;
}
</style>
