<!--suppress ALL -->
<template>
  <div id="app">
    <div class="leftPart clearFix">
      <ul>
        <li><i class="icon-full_screen iconfont "></i></li>
        <li><i class="icon-alarm iconfont "></i></li>
        <li><i class="icon-tiaozheng iconfont "></i></li>
        <li><i class="icon-back iconfont "></i></li>
        <li><i class="icon-pic iconfont "></i></li>
        <li><i class="icon-elctri_Tower iconfont "></i></li>
        <li><i class="icon-icon02 iconfont "></i></li>
      </ul>
    </div>
    <div class="rightPart clearFix">
      <my-header></my-header>
      <router-view id="content"/>
    </div>


  </div>
</template>

<script>
  //引入头部组件
  import MyHeader from '@/components/common/myheader'
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      ted:'ted',
      childShow2:false
    };
  },
  components:{
    MyHeader
  },

}
</script>

<style scoped lang="less">

#app {
  width: 1920px;
  height: 1080px;
  margin: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #021365;
  .leftPart{
    float: left;
    box-sizing: border-box;
    width: 70px;
    height: 100%;
    border: 1px solid black;
    background-color: #1d3187;
    >ul>li{
      padding: 9px 0;
      text-align: center;
      color: #c0c2c7;
      font-size: 42px;
      cursor: pointer;
      >i{
        font-size: inherit;
      }
    }
  }
  .rightPart{
    float: right;
    box-sizing: border-box;
    width: 1850px;
    height: 100%;
    background-color: white;
    #content{
      box-sizing: border-box;
      height: 980px;
      border: 1px solid deeppink;
    }


  }
}

</style>
