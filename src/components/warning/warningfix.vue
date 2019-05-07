<template>
  <div class="wrap " id="warningFix">
    <div class="content clearFix">
      <bread-crumb  style="margin-bottom: 10px"
        :title="['首页','预警管理']" :title-grey="['自动处理预警','单张模式']">
      </bread-crumb>
      <div class="fl leftPart">
        <div class="topBts">
          <my-button title="一键处理今日预警" style="margin-right: 30px"></my-button>
          <my-button title="一键处理待处理预警"></my-button>
        </div>
        <div class="tabWrap">
          <el-tabs v-model="activeName" @tab-click="handleClick"  style="width: 92%;margin: auto">
            <el-tab-pane label="今日预警" name="first">
              <el-select v-model="value" placeholder="请选择" width="200"
                         style="width: 95%;margin-bottom: 20px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-table :header-cell-style="thStyle" :data="tableData" style="width: 95%;margin: auto">
                <el-table-column prop="tower" label="塔杆" >
                </el-table-column>
                <el-table-column prop="orientation" label="监拍朝向" >
                </el-table-column>
                <el-table-column prop="warningDate" label="预警时间">
                </el-table-column>
                <el-table-column prop="reason" label="预警原因" >
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="待处理预警" name="second">
              <el-table :header-cell-style="thStyle" :data="tableData" style="width: 95%;margin: auto">
                <el-table-column prop="tower" label="塔杆" >
                </el-table-column>
                <el-table-column prop="orientation" label="监拍朝向" >
                </el-table-column>
                <el-table-column prop="warningDate" label="预警时间">
                </el-table-column>
                <el-table-column prop="reason" label="预警原因" >
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="选中项" name="third">
              <el-table :header-cell-style="thStyle" :data="tableData" style="width: 95%;margin: auto">
                <el-table-column prop="tower" label="塔杆" >
                </el-table-column>
                <el-table-column prop="orientation" label="监拍朝向" >
                </el-table-column>
                <el-table-column prop="warningDate" label="预警时间">
                </el-table-column>
                <el-table-column prop="reason" label="预警原因" >
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>

      </div>
      <div class="fr rightPart"></div>
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
  #warningFix{
    .el-tabs__active-bar{
      margin-left: 20px;
      background-color: #24cdd0
    }
    .el-tabs__item:hover{
     color: #24cdd0;
    }
    .el-tabs__item.is-active{
      color: #24cdd0;
    }
    #tab-first,#tab-second,#tab-third{
     width: 118px;
      height: 48px;
      line-height: 48px;
    }
    #tab-first{
      margin-left: 20px;
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
      .rightPart{
        width: 1320px;
        height: 800px;
        border:1px solid  deeppink;
      }
    }
  }
</style>
