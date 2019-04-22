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
              <li>预警16项</li>
              <li>其中严重预警<span style="color: yellow;font-weight: bold">3</span>项</li>
              <li>隐患6项</li>
              <li>其中紧急隐患<span style="color: yellow;font-weight: bold">2</span>项</li>
            </ul>
          </li>
          <li class="'">
            <p class="box-name">
              <i class="icon-yujing1 iconfont" style="color: #47f9f4"></i>
              &nbsp;今日预警
            </p>
          </li>
          <li >
            <p class="box-name">
              <i class="icon-gaojing iconfont" style="color: #2b94ff"></i>
              &nbsp;今日隐患
            </p>
          </li>
          <li >
            <p class="box-name">
              <i class="icon-fault iconfont" style="color: #8764ff"></i>
              &nbsp;设备
            </p>
          </li>
          <li >
            <p class="box-name">
              <i class="icon-zhiyuanxintong_ico_shebeilixian iconfont" style="color: #a26a5a"></i>
              &nbsp;本月以来
            </p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
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
        mounted(){
        }
    }
</script>

<style scoped lang="less">
  @images: "../../../static/image";
  @font-white: {color:white};
  .box1>.box1-content{
    text-indent: 2.5em;
    margin-top: 10px;
    li:nth-child(odd){
      font-size: 30px;

    }
    li:nth-child(even){
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
  .wrap{
    width: 100%;
    height: 100%;
    background-color: #02125f;
    .content{
      width: 98%;
      height: 90%;
      margin:10px auto 0;
      border: 1px solid white;
      .boxes{
        display: flex;
        border: 1px solid black;
        >li{
          flex: 1;
          /*margin: 10px 10px;*/
          height: 220px;
          border:1px solid black;
          @font-white();
          font-size: 18px;
          background-image: url('@{images}/light.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position-x: 22px;
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
    }
  }
</style>
