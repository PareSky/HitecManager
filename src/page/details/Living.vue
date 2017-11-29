<template>
  <div class="living">
    <div class='progressBox'>
    	<progress-column v-for="n in 8" :percentage='percentage' :unit='unit'/>
    </div>
    <div class='mainItems'>
      <div class='ItemBox'>
        <img src='/src/assets/image/backgroundArrow.png'>
        <div class='Items'>
        <div>232</div>
        <div class="hot">232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div class="cold">232</div>
        </div>
      </div>
      <div class='ItemBox'>
        <img src='/src/assets/image/backgroundArrow.png'>
        <div class='Items'>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        <div>232</div>
        </div>
      </div>
    </div>
    <div class='progressBox Box2'>
    <progress-column v-for="n in 6" :percentage='percentage' :unit='unit'/>
    </div>
    <div class='UBox'>box1</div>
    <div class='UBox'>box2</div>
    <div class='UBox'>
      <div class="TimeRow">
        <div class='TimeImg'><img src='/src/assets/IconMedium/time1.png'></div>
        <div class='TimeNum'>63.1</div>
        <span>SEC</span>
      </div>
      <div class="TimeRow">
        <div class='TimeImg'><img src='/src/assets/IconMedium/time2.png'></div>
        <div class='TimeNum'>63.1</div>
        <span>CNT</span>
      </div>
      <div class="TimeRow">
        <div class='TimeImg'><img src='/src/assets/IconMedium/time3.png'></div>
        <div class='TimeNum'>63.1</div>
        <span>SEC</span>
      </div>
      <div class="TimeRow">
        <div class='TimeImg'><img src='/src/assets/IconMedium/time4.png'></div>
        <div class='TimeNum'>63.1</div>
        <span>SEC</span>
      </div>
    </div>


  </div>
</template>

<script>

import ProgressColumn from '@/components/ProgressColumn'
export default {
	components:{
		ProgressColumn
	},
  name: 'living',
  data () {
    return {
      percentage: 89,
      unit:'BAR'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.living{
	width: 1003.58px;
	display: flex ;
	flex-flow: wrap ;
}
.progressBox{
	display: flex;
	flex-flow: wrap;
  width: 200px;
  margin-left: 10px;
}
.Box2{
	width: 180px;
}
.progressBox div{
	margin-right: 20px;
  margin-bottom: 10px;
}
.mainItems{
	width: 585px;
}
.UBox{
	width: 33%;
}
.ItemBox{
  position: relative;
  margin-bottom: 25px;
}
.Items{
  position: absolute;
  top: -13px;
  left: 33px;
}
.Items div{
  float: left;
  width: 36px;
  height: 42px;
  background: #f7931e;
  border: 8px solid #e6e6e6;
  line-height: 42px;
  margin: 4px;
  color: #fff;
}
div .hot{
  background: #00a99d;
}
div .cold{
  background: #b3b3b3;
}
.TimeRow{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 231px;
  margin-bottom: 10px;
}
.TimeRow .TimeImg{
  width: 36px;
}
.TimeRow .TimeNum{
  width: 115.34px;
  height: 36.14px;
  background: #e6e6e6;
  font-size: 24px;
  line-height: 36px;
}
.TimeRow span{
  font-size: 24px;
  color: #165f9b;
}
</style>
