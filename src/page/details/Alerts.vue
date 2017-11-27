<template>
  <el-table
    :data="tableData3"
    style="width: 100%; text-align:left;padding-left: 10px;"
    height="600">
    <el-table-column
      prop="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="type"
      label="报警类型"
      width="100">
    </el-table-column>
    <el-table-column
      prop="content"
      label="报警内容"
      width="180">
    </el-table-column>
    <el-table-column
      prop="beginTime"
      label="开始时间"
      >
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
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
        }]
      }
    }
  }
</script>