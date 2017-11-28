<template>
  <div class="login">
  <el-container>
    <el-header class='header' style="height: 100px;">
     <img class='logo' src='/src/assets/logo.png'></img>
    </el-header>

    <el-main class='main'>
      <img src='/src/assets/image/banner.png'>

      <div class='loginBox'>
        <div class='loginHeader'>用户登录</div>
        <div class='loginForm'>
          <div>
          <img src='/src/assets/IconMedium/user.png'>
          <input type='text' placeholder='请输入用户名'></input>
          </div>

          <div>
          <img src='/src/assets/IconMedium/password.png'>
          <input type='password' placeholder='请输入密码'></input>
          </div>

          <div class='loginBtn'>登录</div>
          <a href='#'> 忘记密码？</a>
        </div>
      </div>

    </el-main>
    <el-footer class='footer' style='height: 298px;'>
    <div class='codes'>
    <div >
     <img class='logo' src='/src/assets/image/android.png'></img>
     <span>扫一扫下载 Android应用</span>
     </div>
     <div>
     <img class='logo' src='/src/assets/image/appBarcode.png'></img>
     <span>扫一扫<br/> 关注我们</span>
     </div>
    </div>
     <span class='copyright'>Copyright © 2016 IDMS. All rights reserved.</span>
    </el-footer>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    display: flex;
    height: 100%;
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
.main{
  display: flex;
  height: 627px;
  background-color: #294FBD;
  align-items:center;
  justify-content:space-around;
}
.loginBox{
  display: flex;
  flex-direction:column;
  width: 378px;
  height: 388px;
}
.loginHeader{
  height: 50px;
  background: #EEEFF0;
  line-height: 50px;
}
.loginForm{
  display: flex;
  flex-direction:column;
  flex:1;
  justify-content: space-around ;
  background-color: #fff;
  align-items: center ;
}
.loginForm div{
  position: relative;
}
.loginForm img{
  position: absolute;
  top: 10px;
  left: 10px;
}
.loginForm input{
  width: 263px;
  height: 51px;
  background: #FFFFFF;
  border: 1px solid #909FB0;
  border-radius: 8px;
  font-size: 20px;
  padding-left: 40px;
}
.loginBtn{
  width: 303px;
  height: 51px;
  background: #F5A623;
  border-radius: 8px; 
  line-height: 51px;
}
.footer{
  background-color: #434B5B;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.codes{
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
}
.codes div{
  width:102px;
  margin: 0 50px;
}
.footer span{
  color:#E6E6E6;
}
.copyright{
  margin-top: auto;
  margin-bottom: 20px;
}
</style>
