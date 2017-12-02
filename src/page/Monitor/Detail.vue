<template>
  <div class="detail">
    	<div class='listtitle'>正昊木业2号机</div>
    	<div class='tabmenu'>
    		<el-button type="primary" v-for="(item,index) in tabs" :class='{active:index == num,menuItem:true}'  @click='tab(index)'>{{item}}</el-button>
    		<el-button class='menuItem refresh' >刷新</el-button>
    		
    	</div>
    	<router-view/>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      tabs:['报警','数据表','数据图','位置','实时'],
      num:1,
      routes:['alerts','datas','dataMap','locations','living']
    }
  },
  methods:{
  	tab: function(index){
  		this.num = index;
  		this.$router.push(this.routes[index]);
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
	background: #FFFFFF;
	box-shadow: 0 0 6px 0 rgba(0,0,0,0.32);
	border-radius: 6px;
	/*height: calc(100vh - 180px);*/
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
    width: 100px;
    height: 41px;
    background: #E6E6E6;
    border-radius: 4px;
    margin: 10px;
    font-size: 18px;
    border-color: #fff;
    color: #9b9b9b;
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
