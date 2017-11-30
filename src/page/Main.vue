<template>
  <div class="main">
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
      class="el-menu-vertical-demo allheight"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(67, 75, 91)"
      text-color="#979797"
      active-text-color="#fff">
      <el-menu-item index="1">
      <img class='Micon' src='/src/assets/IconMedium/Micon1.png'></img>
        <span slot="title" class='menuName'>
        <router-link to="/main/monitor/plat">设备监控台</router-link></span>
      </el-menu-item>
      <el-menu-item index="2">
      <img class='Micon' src='/src/assets/IconMedium/Micon2.png'></img>
        <span slot="title" class='menuName'>
        <router-link to="/main/monitor/detail/alerts">设备管理</router-link></span>
      </el-menu-item>
      <el-menu-item index="3">
      <img class='Micon' src='/src/assets/IconMedium/Micon3.png'></img>
        <span slot="title" class='menuName'>
        <router-link to="/main/data">数据管理</router-link></span>
      </el-menu-item>
      <el-menu-item index="4">
      <img class='Micon' src='/src/assets/IconMedium/Micon4.png'></img>
        <span slot="title" class='menuName'>
        <router-link to="/main/monitor/plat">系统管理</router-link></span>
      </el-menu-item>
    </el-menu>

    </el-aside>
    <el-container>
      <el-main>
          <router-view/>
      </el-main>
      <el-footer style='line-height: 40px; height:40px;'>
        Copyright © 2016 IDMS. All rights reserved.
      </el-footer>
    </el-container>
  </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'main',
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
.main{
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
.menuName{
  font-size: 18px;
  margin-left: 10px
}
.menuName a{
  text-decoration: none;
  color: inherit;
}
</style>
