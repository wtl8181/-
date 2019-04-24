<template>
    <div class="wrap">
      <div class="content">
        <ul class="boxes">
          <li class="box1">
            <p class="box-name">
              <i class="icon-daichuli iconfont" style="color: #d6d04e"></i>
              &nbsp;待处理事项
            </p>
            <ul class="box1-content">
              <li>预警<span style="font-size: 32px">{{arr1[0]}}</span>项
                 <div class="progress">
                   <span :style="arr1Style[0]">{{arr1[1]}}</span>
                   <span :style="arr1Style[1]">{{arr1[2]}}</span>
                 </div>
              </li>
              <li>隐患<span style="font-size: 32px">{{arr2[0]}}</span>项
                <div class="progress">
                  <span :style="arr2Style[0]">{{arr2[1]}}</span>
                  <span :style="arr2Style[1]">{{arr2[2]}}</span>
                  <span :style="arr2Style[2]">{{arr2[3]}}</span>
                </div>
              </li>
            </ul>
          </li>
          <li class="box2">
            <p class="box-name">
              <i class="icon-yujing1 iconfont" style="color: #47f9f4"></i>
              &nbsp;今日预警
            </p>
            <div class="box2-content">
              <p>
                <span style="font-size: 30px">14</span>
                个，其中严重警告
                <span style="font-size: 18px;color: aqua">5</span>
                个
              </p>
            </div>
          </li>
          <li class="box3">
            <p class="box-name">
              <i class="icon-gaojing iconfont" style="color: #2b94ff"></i>
              &nbsp;今日隐患
            </p>
            <div class="box3-content">
              <p>
                <span style="font-size: 30px">14</span>
                个，其中严重隐患
                <span style="font-size: 18px;color: #2463bf">5</span>
                个
              </p>
            </div>
          </li>
          <li class="box4">
            <p class="box-name">
              <i class="icon-fault iconfont" style="color: #8764ff"></i>&nbsp;设备
            </p>
            <ul class="box4-content">
              <li>已安装
                <sapn style="font-size: 18px">3333</sapn>台
                <el-progress style="width: 260px;margin: auto;background-color: #000"
                  :show-text="false" :stroke-width="14" :percentage="80" color="#8160f8">

                </el-progress>
              </li>
              <li>故障设备
              <sapn style="font-size: 18px">13</sapn>台
              <el-progress style="width: 260px;margin: auto"
                           :show-text="false" :stroke-width="14" :percentage="20" color="#8160f8">

              </el-progress>
             </li>
              <li>本月未报警
                <sapn style="font-size: 18px">9</sapn>台
                <el-progress style="width: 120px;margin: 0 50px  0"
                             :show-text="false" :stroke-width="14" :percentage="20" color="#8160f8">

                </el-progress>
              </li>
              <li>本周未报警
                <sapn style="font-size: 18px">1</sapn>台
                <el-progress style="width: 120px;margin: 0 50px  0"
                             :show-text="false" :stroke-width="14" :percentage="90" color="#8160f8">

                </el-progress>
              </li>
            </ul>
          </li>
          <li class="box5">
            <p class="box-name">
              <i class="icon-zhiyuanxintong_ico_shebeilixian iconfont" style="color: #a26a5a"></i>
              &nbsp;本月以来
            </p>
            <div style="position:relative;top:-60px;left:-20px;margin:auto;width:180px;height: 160px">
              <canvas id="myChart" width="260" height="230">
              </canvas>
            </div>
          </li>
        </ul>
        <div class="container" ref="container">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            arr1:[16,4,12],
            arr2:[6,1,1,4],
          }
        },
        computed:{
          arr1Style(){
            return [{
              backgroundColor: '#0abd8f',
              width: 100*this.arr1[1]/+this.arr1[0]+'%'
            },{
              backgroundColor: '#44eca5',
              width:100*this.arr1[2]/+this.arr1[0]+'%'
            }]
          },
          arr2Style(){
            return [{
              backgroundColor: '#ffa400',
              width: 100*this.arr2[1]/+this.arr2[0]+'%'
            },{
              backgroundColor: '#ffde00',
              width: 100*this.arr2[2]/+this.arr2[0]+'%'
            },{
              backgroundColor: '#95fb54',
              width: 100*this.arr2[3]/+this.arr2[0]+'%'
            }]

          },
        },
        created(){
          let oli = this.$('li')
          // oli.first().css('background','white')
          // oli.not('.box1').css('background','white')
          // oli.filter('.box1').css('background','white')
          // this.$('.box1').next().css('background','white')
          this.$('.box1').click((e)=>{
            console.log(this.$('.box1').offsetParent())
          })
          // oli.before(this.$('<div>666</div>'))
          // oli.html('123')
          // this.$('.wrap').remove()自杀
          let _this = this;
          // oli.hover(function(){
          //   console.log(_this.$(this))
          // })
        },
        mounted() {
          var myChart = this.$echarts.init(document.getElementById('myChart'));
// 绘制图表
          myChart.setOption({
            series : [
              {
                name: '访问来源',
                type: 'pie',
                label:{
                  show:false
                },
                radius: '55%',
                data:[
                  {value:235, name:'正常报'},
                  {value:274, name:'重复报'},
                  {value:310, name:'漏报'},
                  {value:335, name:'误报'}
                ]
              }
            ]
          });
          let user = new qq.maps.LatLng(22.532940,113.932750);//用户坐标
          let map = new qq.maps.Map(this.$refs.container, {//地图对象
            center: user,
            zoom: 10,
          });
          let userMarker  = new qq.maps.Marker({
            position: user,
            map: map
          });



        }

    }
</script>

<style scoped lang="less">
  @images: "../../../static/image";
  @font-white: {color:white};
  .box1>.box1-content{
    text-indent: 2.5em;
    margin-top: 10px;
    li+li{
      margin-top: 10px;
    }
    >li{
      font-size: 18px;
      .progress{
        display: flex;
        box-sizing: border-box;
        margin: auto;
        width: 260px;
        height: 12px;
        /*border: 1px solid deeppink;*/
        border-radius: 130px;
        overflow: hidden;
        >span{
          display:inline-block;
          height:100%;
          text-align:center;
          text-indent:0;
          font-size: 10px;
          color: black;
        }
      }
    }
  }
  .box2>.box2-content{
    p{
      font-size: 16px;
      text-indent: 3em;
    }

  }
  .box3>.box3-content{
    p{
      font-size: 16px;
      text-indent: 3em;
    }

  }
  .box4>.box4-content{
    position: relative;
    li{
      margin-top: 10px;
      font-size: 15px;
      text-indent: 4em;
      &:last-child{
        position: absolute;
        top: 80px;
        left: 140px;
      }
    }


  }
  .wrap{
    width: 100%;
    height: 100%;
    background-color: #02125f;
    .content{
      width: 98%;
      height: 100%;
      margin:10px auto 0;
      /*border: 1px solid white;*/
      .boxes{
        display: flex;
        border: 1px solid black;
        >li{
          flex: 1;
          /*margin: 10px 10px;*/
          height: 220px;
          @font-white();
          font-size: 18px;
          background-image: url('@{images}/light.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          >.box-name{
            /*border: 1px solid pink;*/
            text-indent: 2.5em;
            margin-top: 20px;
            >i{
              font-size: 20px;
            }
          }
        }
      }
      .container{
        margin: 5px auto;
        width: 1800px;
        height: 730px;
        border: 1px solid yellowgreen;
        border-radius: 10px;
      }
    }
  }
</style>
