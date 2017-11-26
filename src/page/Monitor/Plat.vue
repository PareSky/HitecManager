<template>
  <div class="plat">
    <div class='tabs'>
    	<div class='smallTab' style='background: #228DDE;'>
    	<span class='stext'>全部设备数</span>
    	<span class='snum'>0899</span>
    	<span class='tai'>台</span>
    	</div>
    	<div class='smallTab' style='background: #7ED321;'>
    	<span class='stext'>运转正常数</span>
    	<img class='tick' src='/src/assets/tick.png'>
    	<span class='snum'>0899</span>
    	<span class='tai'>台</span>
    	</div>
    	<div class='smallTab' style='background: #F4A018;'>
    	<span class='stext'>运转正常数</span>
    	<span class='snum'>0899</span>
    	<span class='tai'>台</span>
    	</div>
    	<div class='smallTab' style='background: #DE6D16;'>
    	<span class='stext'>链接异常数</span>
    	<span class='snum'>0899</span>
    	<span class='tai'>台</span>
    	</div>
    	<div class='smallTab' style='background: #D8270F;'>
    	<span class='stext'>设备停机数</span>
    	<img class='tick' src='/src/assets/line.png'>
    	<span class='snum'>0899</span>
    	<span class='tai'>台</span>
    	</div>
    </div>
    <div class='listMap'>
    	<div class='DeviceList'>
    	<div class='listtitle'>设备列表</div>
    	<el-table
	      :data="tableData"
	      style="width: 100%"
	      :show-header=false>
	      <el-table-column
	        prop="name"
	        width="290px"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="state"
	        width="80px">
	      </el-table-column>
	    </el-table>
    	</div>
    	<div class='DeviceMap'>
    	<div class='listtitle'>地图监控</div>
    	<div id="MapContainer" ></div>  
    	</div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
import icon_1 from '@/assets/IconMedium/icon_car1.png'
var map
export default {
  name: 'plat',
	mounted: function () {
	  this.init()
	},
  data () {
    return {
      tableData: [
      	{name:'武汉2号机',state:'正常',position:[121.533067,31.219374]},
      	{name:'武汉2号机',state:'正常',position:[121.631946,31.211154]},
      	{name:'武汉2号机',state:'正常',position:[121.733069,31.319376]},
      	{name:'武汉2号机',state:'正常',position:[121.833088,31.219388]},
      	{name:'武汉2号机',state:'正常',position:[121.933089,31.219389]},
      ]
    }
  },
  methods: {
      init: function () {
        var map = new AMap.Map('MapContainer',{
            resizeEnable: true,
            zoom: 10,
            center: [121.533069,31.219375]
        });
        var icon1 = new AMap.Icon({
        	image : icon_1,
        	//size : new AMap.Size(24,24),
        	imageSize: '100% 100%'
				});
        var marker;
				for(var i = 0; i < this.tableData.length; i += 1){
					marker = new AMap.Marker({
						icon : icon1,
						position: this.tableData[i].position,
						title: '2号机',
						map: map
					});
				}
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs{
	display: flex;
	flex-wrap: wrap
}
.smallTab{
	position: relative;
	width:180px;
	height:120px;
	box-shadow: 0 0 6px 0 rgba(0,0,0,0.39);
	border-radius: 4px;
	float: left;
	margin-left: 20px;
}
.stext{
	position: absolute;
	font-family: PingFangSC-Regular;
	font-size: 18px;
	color: #FFFFFF;
	letter-spacing: 0;
	top: 20px;
	left: 20px;
}
.tick{
	position: absolute;
	right: 5px;
	top:5px;
}
.snum{
	position: absolute;
	font-family: DINCondensed-Bold;
	font-size: 64px;
	color: #FFFFFF;
	letter-spacing: 0;
	left:20px;
	top:45px;
}
.tai{
	position: absolute;
	font-family: PingFangSC-Regular;
	font-size: 18px;
	color: #FFFFFF;
	letter-spacing: 0;
	left:130px;
	top:75px;
}
.listMap{
	display: flex;
	margin-left: 20px;
	margin-top: 20px;
}
.DeviceList{
	width:380px;
	background: #FFFFFF;
	box-shadow: 0 0 6px 0 rgba(0,0,0,0.32);
	border-radius: 6px;
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
.DeviceMap{
	margin-left: 20px;
	width:60%;
	background: #FFFFFF;
	box-shadow: 0 0 6px 0 rgba(0,0,0,0.32);
	border-radius: 6px;
}
#MapContainer{
	height: 300px;
}
</style>
