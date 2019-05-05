<template>
  <div class="wrap">
    <div class="logo">
      <img src="../../../static/image/logo.png" height="50px"/>
      输电线路智能监控系统
    </div>
    <div class="menu" >
      <div class="item item1">
        <p :class="this.$store.state.menuLocation===1?'menu-selected':''">
          <router-link :to="{name:'Map'}" class="menu-item selected">
            线路地图
          </router-link>
        </p>

      </div>
      <div class="item item2" >
        <p :class="this.$store.state.menuLocation===2?'menu-selected':''">
          预警管理
        </p>
        <div class="item-children">
          <router-link :to="{name:'WarningList'}" class="item-child">
            预警列表
          </router-link>
          <router-link :to="{name:'WarningSetting'}" class="item-child">
            预警设置
          </router-link>
          <router-link :to="{name:'WarningFix'}" class="item-child">
            预警处理
          </router-link>
        </div>
      </div>
      <div class="item item3">
        <p :class="this.$store.state.menuLocation===3?'menu-selected':''">
          隐患管理
        </p>
        <div class="item-children">
          <router-link :to="{name:'DangerList'}" class="item-child">
           隐患列表
          </router-link>
          <router-link :to="{name:'WorkOrder'}" class="item-child">
            工单管理
          </router-link>
        </div>
      </div>
      <div class="item item4">
        <p :class="this.$store.state.menuLocation===4?'menu-selected':''">
          <router-link :to="{name:'Inspection'}" class="item-child">
            远程巡检
          </router-link>
        </p>

      </div>
      <div class="item item5">
        <p :class="this.$store.state.menuLocation===5?'menu-selected':''">
          数据统计
        </p>
        <div class="item-children">
          <router-link :to="{name:'WarningSta'}" class="item-child">
            预警统计
          </router-link>
          <router-link :to="{name:'DangerSta'}" class="item-child">
            隐患统计
          </router-link>
          <router-link :to="{name:'DeviceSta'}" class="item-child">
            设备统计
          </router-link>
          <router-link :to="{name:'HumanSta'}" class="item-child">
            人员统计
          </router-link>
        </div>
      </div>
      <div class="item item6">
        <p :class="this.$store.state.menuLocation===6?'menu-selected':''">
          设备管理
        </p>
        <div class="item-children">
          <router-link :to="{name:'DeviceList'}" class="item-child">
            设备列表
          </router-link>
          <router-link :to="{name:'DeviceMap'}" class="item-child">
            设备地图
          </router-link>
          <router-link :to="{name:'DevicePara'}" class="item-child">
            设备参数
          </router-link>
          <router-link :to="{name:'DeviceIn'}" class="item-child">
            设备接入
          </router-link>
          <router-link :to="{name:'DeviceOta'}" class="item-child">
            设备OTA升级
          </router-link>
        </div>
      </div>
      <div class="item item7">
        <p :class="this.$store.state.menuLocation===7?'menu-selected':''">
          系统管理
        </p>
        <div class="item-children">
          <router-link :to="{name:'Structure'}" class="item-child" >
            组织架构
          </router-link>
          <router-link :to="{name:'Authority'}" class="item-child">
            权限管理
          </router-link>
          <router-link :to="{name:'User'}" class="item-child">
            用户管理
          </router-link>
          <router-link :to="{name:'Dictionary'}" class="item-child">
            数据字典
          </router-link>
          <router-link :to="{name:'PopUp'}" class="item-child">
            推送设置
          </router-link>
          <router-link :to="{name:'Help'}" class="item-child">
            系统帮助
          </router-link>
        </div>
      </div>
    </div>
    <div class="user">管理员</div>
  </div>
</template>

<script>
    export default {
        name: "myheader",
        data(){
          return {

          }
        },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
      },
      created(){
      },
      mounted(){
          let _this  = this;
        _this.$('.item ').hover(function(){
          _this.$(this.querySelector('p')).addClass('menu-selected')
          _this.$(this.querySelector('.item-children')).css('display','block')
          _this.$(this.querySelector('.item-children')).animate({opacity:'0.9'})
        },function(){
          _this.$(this.querySelector('p')).removeClass('menu-selected')//与css的hover的区别
          _this.$(this.querySelector('.item-children')).css('display','none')
          _this.$(this.querySelector('.item-children')).animate({opacity:'0.5'})
        })

      }
    }
</script>

<style scoped lang="less">
  .menu-selected{
    border: 1px solid skyblue ;
    box-shadow: 0 0  10px 1px skyblue ;
    color: white !important;
    background-color: inherit ;
  }
  .wrap{
    box-sizing: border-box;
    height: 100px;
    display: flex;
    width: 100%;
    background-color:#0e1b55;
    .user{
      margin-left: 300px;
      color: white;
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
    .menu{
      display: flex;
      height: 50px;
      width: 1000px;
      margin-top: 25px;
      margin-left: 55px;
      .item{
        position: relative;
        flex: 1;
        height: 50px;
        margin: 0 10px ;
        border-radius: 50px ;
        line-height: 50px ;
        text-align: center;
        color: #92addf;
        cursor: pointer;
        /*border: 1px solid deeppink;*/
        p{
          border-radius: 50px ;

        }
      }
      .item-children{
        opacity: 0.5;
        z-index: 99;
        display: none;
        position: absolute;
        left: -15px;
        top: 50px;
        height: auto;
        width: 150px;
        border: 1px solid aqua;
        border-radius: 10px;
        overflow: hidden;
        background-color: #021365;
        .item-child{
          display: block;
          height: 33%;
          color: #649afd;
          text-align: center;
          line-height: 50px;
          &:hover{
            background-color: #25347b;
            color: white;
          }

        }
      }

    }

  }
</style>
