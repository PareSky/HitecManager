<template>
  <div class="detail">
    	<div class='listtitle'>正昊木业2号机</div>
    	<div class='tabmenu'>
    		<div class='menuItem active'>报警</div>
    		<div class='menuItem'>数据表</div>
    		<div class='menuItem'>位置</div>
    		<div class='menuItem'>实时</div>
    		<div class='menuItem refresh'>刷新</div>
    	</div>
    	<router-view/>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
	/* Rectangle 7: */
	background: #FFFFFF;
	box-shadow: 0 0 6px 0 rgba(0,0,0,0.32);
	border-radius: 6px;
	height: calc(100vh - 200px);
	width: 100%;
	display: flex;
	flex-direction: column;
}
.listtitle{
	border-bottom: 1px solid blue;
	font-family: PingFangSC-Medium;
	font-size: 20px;
	color: #107FE0;
	letter-spacing: 0;
	height: 50px;
	line-height: 50px;
	text-align: left;
	padding-left: 20px;
}
.tabmenu{
	width:100%;
	display: flex;
}
.menuItem{
	width:100px;
	height:41px;
	background: #E6E6E6;
	border-radius: 4px;
	line-height: 41px;
	margin: 10px;
	color: #9B9B9B;
}
.active{
	background-color: #107FE0;
	color:#fff;
}
.refresh{
	background-color: #7ED321;
	margin-left: auto ;
	color:#fff;
}
</style>
