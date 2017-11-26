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
    	<span class='stext'>运转异常数</span>
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
	      style="width: 100%;text-align: left;"
	      height='300'
	      :show-header=false>
	      <el-table-column
	        prop="name"
	        width="290px"
	        >
	        <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.name }}</span>
		      </template>
	      </el-table-column>
	      <el-table-column
	        prop="state"
	        width="80px">
	        <template slot-scope="scope">
		        <span v-bind:class='scope.row.color'>{{ scope.row.state }}</span>
		      </template>
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
import icon_2 from '@/assets/IconMedium/icon_car2.png'
import icon_3 from '@/assets/IconMedium/icon_car3.png'
import icon_4 from '@/assets/IconMedium/icon_car4.png'
var map
export default {
  name: 'plat',
	mounted: function () {
	  this.init()
	},
  data () {
    return {
      tableData: [
      	{name:'武汉2号机',state:'正常',position:[121.533067,31.219374],icon:4,color:'color_nomal'},
      	{name:'武汉2号机',state:'异常',position:[121.631946,31.211154],icon:3,color:'color_error'},
      	{name:'武汉2号机',state:'故障',position:[121.733069,31.319376],icon:1,color:'color_link'},
      	{name:'武汉2号机',state:'停机',position:[121.833088,31.219388],icon:2,color:'color_stop'},
      	{name:'武汉2号机',state:'正常',position:[121.933089,31.219389],icon:4,color:'color_nomal'},
      	{name:'武汉2号机',state:'停机',position:[121.833088,31.219388],icon:2,color:'color_stop'},
      	{name:'武汉2号机',state:'正常',position:[121.933089,31.219389],icon:4,color:'color_nomal'},
      	{name:'武汉2号机',state:'停机',position:[121.833088,31.219388],icon:2,color:'color_stop'},
      	{name:'武汉2号机',state:'正常',position:[121.933089,31.219389],icon:4,color:'color_nomal'},
      	{name:'武汉2号机',state:'停机',position:[121.833088,31.219388],icon:2,color:'color_stop'},
      	{name:'武汉2号机',state:'正常',position:[121.933089,31.219389],icon:4,color:'color_nomal'},
      	{name:'武汉2号机',state:'停机',position:[121.833088,31.219388],icon:2,color:'color_stop'},
      	{name:'武汉2号机',state:'正常',position:[121.933089,31.219389],icon:4,color:'color_nomal'},
      	{name:'武汉2号机',state:'停机',position:[121.833088,31.219388],icon:2,color:'color_stop'},
      	{name:'武汉2号机',state:'正常',position:[121.933089,31.219389],icon:4,color:'color_nomal'},
      	{name:'武汉2号机',state:'停机',position:[121.833088,31.219388],icon:2,color:'color_stop'},
      ],
      icons:[icon_1,icon_2,icon_3,icon_4],
      markers:[],
      map:{}
    }
  },
  methods: {
      init: function () {
        this.map = new AMap.Map('MapContainer',{
            resizeEnable: true,
            zoom: 10,
            center: [121.533069,31.219375]
        });
        var marker;
				for(var i = 0; i < this.tableData.length; i += 1){
					marker = new AMap.Marker({
						icon : this.icons[this.tableData[i].icon-1],
						position: this.tableData[i].position,
						title: this.tableData[i].name,
						map: this.map
					});
					marker.content=this.tableData[i];
					this.markers.push(marker);
					AMap.event.addListener(marker, 'click', this._onClick);
				}
      },
     	_onClick : function(e){
	   		var ct = e.target.content;
	   		var title= ct.name;
		    var info = [];
		   info.push('编号：'+23898+'<br>');
		   info.push('状态：'+ct.state+'<br>');
		   info.push('位置：苏州市吴中区吴中大道 189号 <br>');
		   var content = `
		   	<div style='
					background: #FFFFFF;
					box-shadow: 0 0 4px 0 rgba(0,0,0,0.37);
					border-radius: 6px;
					text-align:left;
					font-size: 14px;
					padding:10px'>
					<span style='
						font-family: PingFangSC-Medium;
						color: #107FE0;
						letter-spacing: 0;'>${ct.name}</span><br>
						编号：23894384<br>
						状态：<span style='color:#7ED321'>${ct.state}</span><br>
						位置：苏州市吴中区吴中大道 189号
						</div>
		   `;

		   var infoWindow = new AMap.InfoWindow({
				isCustom: true,  //使用自定义窗体
				content: content,
				offset: new AMap.Pixel(0, -50)//-113, -140
		   });
		   //infoWindow.setContent(e.target.content.state);
		   infoWindow.open(this.map, e.target.getPosition());
			}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plat{
    display: flex;
    flex-direction: column;
}
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
	flex:1;
	margin-left: 20px;
	margin-top: 20px;
}
.DeviceList{
	width:380px;
	background: #FFFFFF;
	box-shadow: 0 0 6px 0 rgba(0,0,0,0.32);
	border-radius: 6px;
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
.DeviceMap{
	margin-left: 20px;
	width:60%;
	background: #FFFFFF;
	box-shadow: 0 0 6px 0 rgba(0,0,0,0.32);
	border-radius: 6px;
	display: flex;
	flex-direction:column;
}
#MapContainer{
	flex:1;
}
.tb_colrmn_left  {
	text-align: left;
}
.color_nomal{
	color:#7ED321;
}
.color_error{
	color:#F4A018;
}
.color_link{
	color:#DE6D16;
}
.color_stop{
	color:#D8270F;
}
</style>
