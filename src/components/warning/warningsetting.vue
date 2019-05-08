<template>
  <div class="wrap " id="warningSetting">
    <div class="content clearFix">
      <bread-crumb  style="margin-bottom: 10px"
                    :title="['首页','预警管理']" :title-grey="['预警设置']">
      </bread-crumb>
      <div class="tabWrap">
        <el-tabs v-model="activeName" @tab-click="handleClick"
                 style="width: 800px;height:50px;margin: 20px 20px 20px">
          <el-tab-pane label="数据采集" name="first">
              <div class="tabDetail">
                <p class="line1 line">
                  <span>图像采集间隔</span>&nbsp;&nbsp;&nbsp;
                  <el-input type="text" v-model="input" maxlength="10">
                    <span slot="suffix" style="color: black;font-size: 16px;position: relative;top: 12px">分钟</span>
                  </el-input>
                  <span style="display: inline-block;margin-left: 100px">图像采集质量</span>&nbsp;&nbsp;&nbsp;
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                </p>
                <p class="line2 line">
                  <span>图像采集时段</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;主摄像头</span>
                  <el-select v-model="value" style="margin-left: 66px" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                  <el-select v-model="value" style="margin-left: 60px" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                </p>
                <p class="line3 line">
                  <span style="color: transparent;user-select:none;">图像采集时段</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;主摄像头</span>
                  <el-select v-model="value" style="margin-left: 66px" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                  <el-select v-model="value" style="margin-left: 60px" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                </p>
                <p class="line4 line">
                  <span style="color: transparent;user-select:none;">图像采集时段</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;主摄像头</span>
                  <el-select v-model="value" style="margin-left: 66px" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                  <el-select v-model="value" style="margin-left: 60px" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                </p>
                <p class="line5 line">
                  <span>图像上传设定</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;发生预警后主动上传</span>
                  <span style="display: inline-block;margin-left: 100px">每天拍摄照片上传</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;08:00</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;10:00</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;12:00</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;14:00</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;16:00</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;18:00</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;20:00</span>
                </p>
                <p class="line6 line clearFix" >
                  <my-button title="重置" class="thisBt"></my-button>
                  <my-button title="调整" class="thisBt thisBt1"></my-button>
                </p>
                <p class="greyLine"></p>
                <p class="line7 line clearFix" >
                  <span style="display: inline-block;margin-left: 0">视频采集质量</span>&nbsp;&nbsp;&nbsp;
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                  <span style="margin-left: 80px">视频采集时长</span>&nbsp;&nbsp;&nbsp;
                  <el-input type="text" v-model="input" maxlength="10">
                    <span slot="suffix" style="color: black;font-size: 16px;position: relative;top: 12px">分钟</span>
                  </el-input>
                </p>
                <p class="line8 line clearFix">
                  <my-button title="重置" class="thisBt"></my-button>
                  <my-button title="调整" class="thisBt thisBt1"></my-button>
                </p>
                <p class="greyLine"></p>
                <p class="line9 line clearFix" >
                  <span style="margin-left: 0">温度采集周期</span>&nbsp;&nbsp;&nbsp;
                  <el-input type="text" v-model="input" maxlength="10">
                    <span slot="suffix" style="color: black;font-size: 16px;position: relative;top: 12px">分钟</span>
                  </el-input>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;采集后即更新</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;任何设备预警后均更新</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;定时更新</span>
                  <el-input type="text" v-model="input" maxlength="10">
                    <span slot="suffix" style="color: black;font-size: 16px;position: relative;top: 12px">分钟</span>
                  </el-input>
                </p>
                <p class="line10 line clearFix">
                  <my-button title="重置" class="thisBt"></my-button>
                  <my-button title="调整" class="thisBt thisBt1"></my-button>
                </p>
                <p class="greyLine"></p>
                <p class="line11 line clearFix" >
                  <span style="margin-left: 0">微气象数据</span>&nbsp;&nbsp;&nbsp;
                  <el-input type="text" v-model="input" maxlength="10">
                    <span slot="suffix" style="color: black;font-size: 16px;position: relative;top: 12px">分钟</span>
                  </el-input>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;采集后即更新</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;任何设备预警后均更新</span>
                  <span><i class="icon-duigou iconfont"></i>&nbsp;&nbsp;定时更新</span>
                  <el-input type="text" v-model="input" maxlength="10">
                    <span slot="suffix" style="color: black;font-size: 16px;position: relative;top: 12px">分钟</span>
                  </el-input>
                </p>
                <p class="line12 line clearFix">
                  <my-button title="重置" class="thisBt"></my-button>
                  <my-button title="调整" class="thisBt thisBt1"></my-button>
                </p>
              </div>
          </el-tab-pane>
          <el-tab-pane label="预警条件" name="second">
            <div class="tabContainer">2</div>
          </el-tab-pane>
          <el-tab-pane label="声光报警" name="third">
            <div class="tabContainer">3</div>
          </el-tab-pane>
          <el-tab-pane label="语音警示" name="fourth">
            <div class="tabContainer">4</div>
          </el-tab-pane>
          <el-tab-pane label="蓝光" name="fifth">
            <div class="tabContainer">5</div>
          </el-tab-pane>
          <el-tab-pane label="其他" name="sixth">
            <div class="tabContainer">6</div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="fl leftPart">
        <div class="left-content">
          <my-button class="my-button button-on" @click.native="buttonTap" title="所有杆塔">
            <i class="icon-xiangyou iconfont fr" style="color: #ccc"></i>
          </my-button>
          <my-button class="my-button" @click.native="buttonTap" title="分组1">
            <i class="icon-xiangyou iconfont fr" style="color: #ccc"></i>
          </my-button>
          <my-button class="my-button" @click.native="buttonTap" title="分组2">
            <i class="icon-xiangyou iconfont fr" style="color: #ccc"></i>
          </my-button>
          <my-button class="my-button my-button4" @click.native="buttonTap" title="杆塔单独设置">
          </my-button>

        </div>
      </div>

    </div >
  </div>
</template>

<script>
  import breadCrumb from "../common/breadcrumb";
  import myButton from "../common/mybutton";
  export default {
    name: "warningSetting",
    components: {breadCrumb,myButton},
    data(){
      return{
        activeName:'first',
        input:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      buttonTap(e){
        this.$('.my-button').removeClass('button-on')
        this.$(e.target).addClass('button-on')
      }
    },
    mounted() {
      let _this = this;
      this.$('.icon-duigou').on('click',function(){
        this.classList.toggle('onDuigou')
      })
    }
  }
</script>
<style lang="less">
  #warningSetting{
    .el-tabs__content{
      position: absolute;
      left: 430px;
      top: 110px;
      width: 1280px;
      height: 800px;
      background-color: white !important;
      box-shadow: 0 0 10px 10px #ddd;
      .tabDetail{
        width: 96%;
        margin: 20px auto;
        /*border: 1px solid black;*/
        .el-input {
          font-size: 14px;
          display: inline-block;
          width: 180px;
          height: 44px;
          outline: none;
          .el-input__inner{
            width: 180px;
            height: 100%;
            padding: 0;
            &:focus{
              border-color: #DCDFE6 !important;
            }
          }
        }
      }
    }
    .el-tabs__item {
      font-size: 16px;
      width: 133px;
      text-align: center;
      /*margin-left: 35px;*/
      &:hover{
        color: #24cdd0;
      }
    }
    .el-tabs__item.is-active{
      color: #24cdd0;
    }
    .el-tabs__active-bar {
      /*left: 20px;*/
      /*width: 100px !important;*/
      background-color: #24cdd0;

    }
  }
</style>
<style scoped lang="less">
  .button-on{
    background-color: #24cdd0 !important;
    color: white !important;
  }
  .icon-duigou{
    display: inline-block;
    margin-left: 10px;
    width: 15px;
    height: 15px;
    background-color: transparent;
    color:white;
    border-radius: 2px;
    border:1px solid  #ddd;
  }
  .onDuigou{
    background-color: #24cdd0;
  }
  .wrap {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    overflow: hidden;
    .content {
      width: 98%;
      height: auto;
      margin: 10px auto 0;
      .thisBt{
        float: right;
        margin-right: 20px;
        width: 90px;
        height: 30px;
        line-height: 10px;
      }
      .thisBt1{
        background-color: white;
        color: black;
        border: 1px solid #ddd;
        border-radius: 4px;

      }
      .leftPart{
        width: 400px;
        height:690px;
        /*border: 1px solid green;*/
        text-align: center;
        background-color: white;
        box-shadow: 0 0 10px 10px #ddd;
        .left-content{
          margin: 10px auto;
          height: 95%;
          width: 90%;
          border: 1px solid aqua;
          .my-button{
            display: block;
            margin-bottom: 2px;
            width: 100%;
            height: 40px;
            font-size: 16px;
            background-color: white;
            color: black;
          }
          .my-button4{
            background-color: #f2f2f2;
          }
        }

      }
      .line+.line{
        margin-top: 16px;
      }
      .greyLine{
        margin: 20px 0;
        width: 100%;
        height: 1px;
        background-color: #ddd;
      }
    }
  }
</style>
