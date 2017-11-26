<template>
  <div class="plat">
  <el-container>
  <el-header class='header' style="height: 100px;">
    <img class='logo' src='/src/assets/logo.png'></img>
    <div class='fr'>
    <div class='me'><img src='/src/assets/me.png'></div>
    <div class=''>你好，张三</div>
    <div class='logout'><img src='/src/assets/logout.png'></div>
    <div class='logout1'>退出</div>
    </div>
    </el-header>

  <el-container>
    <el-aside style='width:210px;background-color:#eee;'>
    
<el-menu
      default-active="2"
      class="el-menu-vertical-demo allheight"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(67, 75, 91)"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">设备监控台</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span slot="title">设备管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span slot="title">数据管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
    </el-menu>

    </el-aside>
    <el-container>
      <el-main>
          <router-view/>
      </el-main>
      <el-footer>
        Copyright © 2016 IDMS. All rights reserved.
      </el-footer>
    </el-container>
  </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'plat',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plat{
}
.header{
  background-color: #fff;
  display: flex;
  align-items:center;
  justify-content:space-between;
}
.logo{
  float:left;
}
.fr{
  float:right;
  display: flex;
  align-items:center;
}
.me{
  margin-right: 10px;
}
.logout{
  margin-left: 60px;
  margin-right: 10px;
}
.logout1{
  margin-right: 60px;
}
.allheight{
  height:calc(100vh - 100px);
}
.main{

}
.LNav{

}
.content{

}
</style>
