<template>
  <div class="locations" id='MapContainer'>
    locations
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
		// 创建高德地图
		this.createMap().then( ()=> {
		  console.log('读取高德地图成功')
		  // 加載當前的ip定位
			  this.init()
		}).catch(function (error) {
		  // 处理 getJSON 和 前一个回调函数运行时发生的错误
		  console.log('发生错误！', error)
		})
	},
  data () {
    return {
      tableData: [
      	{name:'武汉2号机',state:'正常',position:[121.533067,31.219374],icon:4,color:'color_nomal'},
      	{name:'武汉2号机',state:'异常',position:[121.631946,31.211154],icon:3,color:'color_error'},
      	{name:'武汉2号机',state:'故障',position:[121.733069,31.319376],icon:1,color:'color_link'},
      	{name:'武汉2号机',state:'停机',position:[121.833088,31.219388],icon:2,color:'color_stop'},
      	{name:'武汉2号机',state:'正常',position:[121.933089,31.219389],icon:4,color:'color_nomal'},
      ],
      icons:[icon_1,icon_2,icon_3,icon_4],
      markers:[],
      map:{}
    }
  },
  methods: {
  	createMap:function (){
		  const promise = new Promise(function (resolve, reject) {
		    let script = document.createElement('script')
		    script.type = 'text/javascript'
		    script.src = 'http://webapi.amap.com/maps?v=1.4.0&key=774b53830a7310b9a8ee707d0aab4be5'   // 高德地图
		    document.body.appendChild(script)
		    if (script.nodeName === 'SCRIPT') {
		      resolve()
		    } else {
		      reject(new Error('Could not script image at ' + script.src))
		    }
		  })
		  return promise
		},
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
     		console.log('_onClick');
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

#MapContainer{
	flex:1;
}
</style>
