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
      <div class='CarTable'>
        <img src='/src/assets/image/Car.jpg' width='446px' height='164px'>
        <div class='CarLegends'>
          <div class='CarLItem'></div><span>26</span>
          <div class='CarLItem'></div><span>26</span>
          <div class='CarLItem CL1'></div><span>26</span>
        </div>
      </div>
    </div>
    <div class='progressBox Box2'>
    <progress-column v-for="n in 6" :percentage='percentage' :unit='unit'/>
    </div>
    <div class='UBox1'>
      <img src='/src/assets/image/T1.jpg' width="200px">
      <div class='Numbers'>
        <span>0.1</span>
        <span>0.1</span>
        <span>0</span>
      </div>
    </div>
    <div class='UBox1'>
      <img src='/src/assets/image/T2.jpg' width="200px">
      <div class='Numbers'>
      <span>63.1</span>
      <span>85.9</span>
      <span>0</span>
      </div>
    </div>
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
	display: flex ;
	flex-flow: wrap ;
  width: 1003.58px;
  margin-top: 50px;
  /* background: #e6e6e6; */
  padding-top: 10px;
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
  margin-top: 20px;
}

.UBox1{
  display: flex;
  height: 127px;
  width: 250px;
  margin: 20px;
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
.CarTable{
  flex-direction: row;
  display: flex;
}
.CarLegends{
  justify-content: center;
  display: flex;
  align-items: center;
  width: 61px;
  flex-flow: wrap;
}
.CarLItem{
  width: 26px;
  height: 16px;
  background: #165f9b;
  margin-right: 10px;
}
.CL1{
  background: #7298B7;
}
.Numbers{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: space-around;
}
</style>
