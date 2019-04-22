<!--suppress ALL -->
<template>
  <div id="app">
    <div class="leftPart clearFix">
      <ul>
        <li><i class="icon-xitongxiaoxi iconfont "></i></li>
        <li><i class="icon-wodexiaoxi iconfont "></i></li>
        <li><i class="icon-zhuye iconfont "></i></li>
        <li><i class="icon-xitong iconfont "></i></li>
        <li><i class="icon-fanhui iconfont "></i></li>
        <li><i class="icon-tuichu iconfont "></i></li>
        <li><i class="icon-icon02 iconfont "></i></li>
      </ul>
    </div>
    <div class="rightPart clearFix">
      <div class="header">
        <div class="logo">
          <img src="../static/image/logo.png" height="50px"/>
          输电线路智能监控系统
        </div>
        <ul class="header-menu">
          <li class="menu-item">
            <router-link :to="{name:'Map'}">线路地图</router-link>
          </li>
          <li class="menu-item">消息中心</li>
          <li class="menu-item">订单管理</li>
          <li class="menu-item">处理中心</li>
          <li class="menu-item">处理中心</li>
          <li class="menu-item ">处理中心</li>
        </ul>
        <div class="user">管理员</div>
      </div>
      <router-view id="content"/>
    </div>


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      ted:'ted'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted(){
    let _this = this;
    let  menuItem = this.$('.menu-item');
    menuItem.on('click',function(){
      menuItem.removeClass('selected')
      _this.$(this).addClass('selected')
    })
  }
}
</script>

<style scoped lang="less">
  .selected{
    border: 1px solid skyblue ;
    box-shadow: 0 0  10px 1px skyblue ;
    color: white !important;
    background-color: inherit ;
  }
#content{

  height: 980px;
  border: 1px solid deeppink;
}
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
      /*border: 1px solid black;*/
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
    .header{
      box-sizing: border-box;
      height: 100px;
      display: flex;
      width: 100%;
      background-color:#0e1b55;
      .user{
        margin-left: 300px;
        color: white;
        /*border: 1px solid white;*/
        line-height: 100px;
      }
      .logo{
        margin-left: 40px;
        color: white;
        font-size: 32px;
        line-height: 100px;
        font-weight: bold;
        img{
          position: relative;
          top: 14px;
        }
      }
      .header-menu{
        display: flex;
        height: 50px;
        width: 900px;
        margin-top: 25px;
        margin-left: 55px;
        /*border: 1px solid deeppink;*/
        .menu-item{
          flex: 1;
          height: 100% ;
          width: 100px;
          margin: 0 10px ;
          border-radius: 50px ;
          line-height: 50px ;
          text-align: center;
          color: #92addf;
          cursor: pointer;

        }

      }

    }

  }
}

</style>
