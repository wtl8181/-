<template>
  <div class="wrap " id="warningSetting">
    <div class="content clearFix">
      <bread-crumb  style="margin-bottom: 10px"
                    :title="['首页','预警管理']" :title-grey="['预警设置']">
      </bread-crumb>
      <div class="tabWrap">
        <el-tabs v-model="activeName" @tab-click="handleClick"  style="width: 800px;height:50px;margin: 10px 20px 0;border: 1px solid black">
          <el-tab-pane label="数据采集" name="first">
            1
          </el-tab-pane>
          <el-tab-pane label="预警条件" name="second">
            2
          </el-tab-pane>
          <el-tab-pane label="声光报警" name="third">
            3
          </el-tab-pane>
          <el-tab-pane label="语音警示" name="fourth">
            4
          </el-tab-pane>
          <el-tab-pane label="蓝光" name="fifth">
            5
          </el-tab-pane>
          <el-tab-pane label="其他" name="sixth">
            6
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="fl leftPart">
      </div>
    </div >
  </div>
</template>

<script>
  import breadCrumb from "../common/breadcrumb";
  import myButton from "../common/mybutton";
  export default {
    name: "warningfix",
    components: {breadCrumb,myButton},
    data() {
      return {
        activeName: 'second',
        tableData: [
          {
            tower: 'C35',
            orientation: '本体',
            warningDate: '2015.01.15',
            reason:'疑似烟雾'
          },
          {
            tower: 'C35',
            orientation: '本体',
            warningDate: '2015.01.15',
            reason:'疑似烟雾'
          },
          {
            tower: 'C35',
            orientation: '本体',
            warningDate: '2015.01.15',
            reason:'疑似烟雾'
          },],
        thStyle:{
          backgroundColor:'#f2f2f2',
          color:'black',
          fontSize:'16px',
          border:'none'
        },
        options: [{
          value: '选项1',
          label: '所有预警级别'
        }, {
          value: '选项2',
          label: '严重预警'
        }, {
          value: '选项3',
          label: '轻微预警'
        }],
        value: ''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style lang="less">
  #warningSetting{
    .el-tabs__content{
      position: absolute;
      left: 400px;
      width: 1320px;
      height: 800px;
      border:1px solid green;
    }
  }
</style>
<style scoped lang="less">
  .wrap {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    overflow: hidden;
    .content {
      width: 98%;
      height: auto;
      margin: 10px auto 0;
      .leftPart{
        width: 436px;
        height:800px;
        /*border: 1px solid green;*/
        text-align: center;
        .topBts{
          margin-top: 10px;
          display: inline-block;
          width: auto;
          /*border: 1px solid blue*/
        }
        .tabWrap{
          margin: 20px auto 0 ;
          width: 98%;
          height: 746px;
          background-color: white;
          border-radius: 5px;
          box-shadow:  0 0 5px 5px #ddd;

        }
      }
    }
  }
</style>
