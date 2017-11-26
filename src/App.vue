<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eee;
}
*{
  padding:0;
  margin: 0;
}
@font-face {
    font-family: 'DINCondensed-Bold';
    src: url('/src/assets/fonts/DINCondensedC.otf');
    font-weight: normal;
    font-style: normal;
}
body{ height:100%}
html{ height:100%}
</style>
