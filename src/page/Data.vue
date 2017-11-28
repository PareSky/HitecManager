<template>
  <div class="data">
    	<div class='listtitle'>数据管理</div>

  		<span class='pl10 mt10'>查询设备</span>
  		<el-select class='deviceSearch mt10' v-model="value" placeholder="请选择设备">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
  		<span class='pl10 mt10'>查询时间</span>
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

			<div class='menuItem toRight'>查询</div>
	    </div>
	    <div class='chartHead'>
		    <span class='text1 pl10'>数据信息表</span>
		    <img src='/src/assets/IconMedium/download1.png'>
		    <span class='text2 mr30'>下载图表</span>
		</div>


  <el-table
    :data="tableData3"
    :header-row-style='trBack'
    style="width: 100%; text-align:left;padding-left: 10px;margin-top:10px;"
    height="600">
    <el-table-column
      prop="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="time"
      label="数据项">
    </el-table-column>
    <el-table-column
      prop="type"
      label="数据">
    </el-table-column>
    <el-table-column
      prop="beginTime"
      label="更新时间"
      >
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
export default {
  name: 'data',
  methods: {
      trBack({row, rowIndex}) {
        return 'background:#E6E6E6';
      }
    },
  data () {
    return {
		value1:'',
		value2:'',
		options: [{
		  value: '选项1',
		  label: '黄金糕'
		}, {
		  value: '选项2',
		  label: '双皮奶'
		}, {
		  value: '选项3',
		  label: '蚵仔煎'
		}, {
		  value: '选项4',
		  label: '龙须面'
		}, {
		  value: '选项5',
		  label: '北京烤鸭'
		}],
		value: '',

        tableData3: [{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        },{
          index: '1',
          time: '2017-10-10 20:32:55',
          type: '设备异常',
          content: '异常报警: !报警代号35',
          beginTime: '2017-10-11 15:12:56',
        }],

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.data{
	/* Rectangle 7: */
	background: #FFFFFF;
	box-shadow: 0 0 6px 0 rgba(0,0,0,0.32);
	border-radius: 6px;
	height: calc(100vh - 180px);
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: left;
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
.deviceSearch{
	width:600px;
	margin-left: 10px;
}
.toRight{
	margin-left: auto;
}

.chartHead{
	display: flex;
	align-items: center;
}
.chartHead img{
	margin-left: auto;
}
.text2{
	color:#107FE0;
}
.mr30{
	margin-right: 30px;
}
.pl10{
	padding-left: 10px;
}
.mt10{
	margin-top: 10px;
}
</style>
