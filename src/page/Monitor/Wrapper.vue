<template>
  <div class="Wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'wrapper',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Wrapper{
    display: flex;
    height: 100%;
}
</style>
