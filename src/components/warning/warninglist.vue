<template>
  <div class="wrap">
    <div class="content">
      <div class="breadcrumb">
        <p class="grey title">当前位置：</p>
        <el-breadcrumb separator="/" >
          <el-breadcrumb-item class="item">首页</el-breadcrumb-item>
          <el-breadcrumb-item class="item">预警管理</el-breadcrumb-item>
          <el-breadcrumb-item class="grey item">预警列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="oneKey">
        <button class="my-button2">一键处理今日预警</button>
        <button class="my-button2">一键处理待处理预警</button>
        <button class="my-button2">一键处理选中项</button>
      </div>
      <div class="tabs">
        <div class="bts" >
          <button @click="onSelect" class="selected my-button">显示所有预警</button>
          <button @click="onSelect" class="my-button">仅显示今日预警</button>
          <button @click="onSelect" class="my-button">仅显示未处理预警</button>
          <button @click="onSelect" class="my-button">仅显示严重预警</button>
        </div>
        <ul class="filter">
          <li style="text-indent: 0.5em;">筛选：</li>
          <li>
            <el-date-picker class="datePiker"
            v-model="sDate"
            type="date"
            placeholder="开始时间">
          </el-date-picker>
          </li>
          <li>
            <el-date-picker class="datePiker"
              v-model="eDate"
              type="date"
              placeholder="结束时间">
            </el-date-picker>
          </li>
          <li class="voltage">
            <el-select v-model="value" placeholder="电压" style="width: 100px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li class="causes">
            <el-select v-model="value" placeholder="预警原因" style="width: 100px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li class="levels">
            <el-select v-model="value" placeholder="预警等级" style="width: 100px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li class="status">
            <el-select v-model="value" placeholder="状态" style="width: 100px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li class="dealing">
            <el-select v-model="value" placeholder="处理方式" style="width: 100px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <ul class="search">
          <li style="text-indent: 0.5em;">搜索：</li>
          <li>
            <el-select v-model="value" placeholder="按电压" style="width: 150px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <el-input  placeholder="请输入关键字"></el-input>
          </li>
          <li>
            <button class="my-button2" style="width: 70px">
              查找
            </button>
          </li>
        </ul>
      </div>
      <el-table class="data-table"  max-height="500" min-height="500" :header-cell-style="thStyle"
                :border='true' ref="multipleTable" :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <!--for渲染-->
        <el-table-column v-for="(item,index) in ths":key="index"
                         :prop="item.prop" :label="item.label" width="120"
                         :sortable="item.prop==='warningDate'||item.prop==='fixDate'?true:false">
        </el-table-column>
        <!--for渲染-->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button  size="mini" @click="handleEdit( scope.row.No,  scope.row.No)">
              查看
            </el-button>
            <el-button  size="mini" @click="handleDelete( scope.row.No,  scope.row.No)">
              处理
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="paginationClass clearFix" style="margin-top: 10px">
        <div class="showRule fl" @click="adjust">
          <i class="icon-tiaozheng iconfont"></i>
          调整显示规则
        </div>
        <el-pagination class="fr"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange" :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length+1">
        </el-pagination>
      </div>





      <div class="ad-alert" v-show="isShow">
        <p>显示字段设置
          <i class="icon-close iconfont" @click="isShow=false">
          </i>
        </p>
        <el-table class="ad-table"  max-height="400" min-height="500"
                  ref="multipleTable" :data="ths"
                  tooltip-effect="dark" style="width: 100%" >
          <el-table-column type="selection" width="75" ></el-table-column>

          <el-table-column prop="label" label="字段" width="120" >
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <div>
                <i class="icon-up iconfont"></i>
              </div>
              <div >
                <i class="icon-down iconfont"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: center; padding:10px 10px">
          <el-button class="my-button2" style="width: 50px;height: 28px; margin:auto">确定</el-button>
          <el-button class="my-button2" style="width: 50px;height: 28px; margin:auto" @click="isShow=false">取消</el-button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow:false,
        ths:[
          {prop:'No',label:'编号'},
          {prop:'voltage',label:'电压'},
          {prop:'line',label:'线路'},
          {prop:'tower',label:'杆塔'},
          {prop:'orientation',label:'监拍朝向'},
          {prop:'warningDate',label:'预警日期'},
          {prop:'reason',label:'预警原因'},
          {prop:'level',label:'预警等级'},
          {prop:'status',label:'状态'},
          {prop:'person',label:'处理人'},
          {prop:'way',label:'处理方式'},
          {prop:'describe',label:'描述'},
          {prop:'fixDate',label:'处理时间'},
        ],
        sDate:'',
        eDate:'',
        thStyle:{
          backgroundColor:'#2c3254',
          color:'white',
          fontSize:'16px',
          border:'none'
        },
        options: [{
          value: '选项1',
          label: '1v'
        }, {
          value: '选项2',
          label: '5v'
        }, {
          value: '选项3',
          label: '10v'
        }, {
          value: '选项4',
          label: '20v'
        }, {
          value: '选项5',
          label: '220v'
        }],
        tableData: [{
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.6'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.26'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.19'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.7.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2007.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, {
          No: 'Y032',
          voltage: '5v',
          line: '白兰线',
          tower:'035',
          orientation:'本体',
          warningDate:'2015.06.17',
          reason:'疑似烟雾',
          level:'严重',
          status:'待处理',
          person:'狗蛋',
          way:'重复报警',
          describe:'有鸟巢，需要处理',
          fixDate:'2017.6.16'
        }, ],
        value:'',
        pageSize:20,
        currentPage:1,
      };
    },
    methods: {
      onSelect(e){
          this.$('.bts button').removeClass('selected')
          e.target.classList.add('selected')
      },
      handleSelectionChange(index,row){
        console.log(index,row)
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(size){
        this.pageSize = size
      },
      handleCurrentChange(currentPage){
        this.currentPage = currentPage;
      },
      adjust(){
       this.isShow = true
        // let newThs = this.ths.sort(()=>{
        //   return Math.random() - 0.5
        // })
        // this.$set(this.ths,newThs)
      }
    },
    mounted() {


    }
  };
</script>
<style lang="less">
  .el-button{
    border: none;
    color: #22c2c5;
    background-color:transparent;
    &:hover{
      color:  #22c2c5;
      border: none;
      background-color:transparent;
    }
    &:focus{//button被点击后的样式写这里
      background-color: deeppink;
    }
  }
</style>

<style scoped lang="less">
  .selected{
    border: 1px solid #24cdd0 !important;
    color: #24cdd0;
    font-weight: bold;
  }
  .my-button{
    width: 150px;
    height: 30px;
    margin-top:20px;
    margin-left: 20px;
    border: none;
    font-size: 14px;
    border-radius: 3px;
    background-color: white;
  }
  .my-button2{
    width: 160px;
    height: 32px;
    margin-right: 18px;
    background-color: #24cdd0;
    border: none;
    color: white;
    border-radius: 3px;
  }
  //分割线---------------------------------------------------------------
  .wrap {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    .content {
      width: 98%;
      height: auto;
      margin: 10px auto 0;
      /*border: 1px solid blue;*/
      .breadcrumb{
        font-size: 14px;
        font-weight: bold;
        vertical-align: center;
        p{
          text-indent: 1em;
        }
        .item{
          position: relative;
          top: 4px;
        }
        .title{
          float: left;

        }
      }
      .oneKey{
          margin: 15px 0;
      }
      .tabs{
        margin: auto;
        height: 170px;
        width: 100%;
        background-color: white;
        box-shadow: 0 0 10px 5px #ddd;
        border-radius: 8px;
        .filter,.search{
          display: flex;
          margin-top: 10px;
          font-size: 14px;
          line-height: 30px;
          li{
            margin-left: 15px;
          }
          .datePiker{
            width: 130px;
          }
        }
      }
      .data-table{
        margin-top: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px 5px #ddd;
      }
      .paginationClass{
        .showRule{
          color: #cfcfcf;
          cursor: pointer;
          &:hover{
            color: black;
          }
        }

      }
      .ad-alert{
        position: fixed;
        top: 300px;
        left: 0;
        right: 0;
        margin: auto;
        width: 300px;
        border: 1px solid #ddd;
        background-color: white;
        >p{
          margin: 10px 0;
          position: relative;
          text-align: center;
          font-weight: bold;
          >i{
            position: absolute;
            top: -5px;
            right: 5px;
            color: #999;
            cursor: pointer;
          }
        }
      }
    }
  }

</style>
