<template>
  <div class="wrap" id="warninglist">
    <div class="content">
      <bread-crumb :title="['首页','预警管理']"  :title-grey="['预警列表']"></bread-crumb>
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
                :border='true' ref="multipleTable" :data="tableData"
                tooltip-effect="dark" style="width: 100%" >
        <el-table-column type="selection" width="55">
        </el-table-column>
        <!--for渲染-->
        <el-table-column v-for="(item,index) in ths":key="index"  v-if="!item.isHide"
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
        <div class="showRule fl" @click="isShow=true">
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
          <i class="icon-close iconfont" @click="noAdjust">
          </i>
        </p>
        <table border="1" style="margin: auto;border: 1px solid #ddd" >
          <tr >
            <th width="70" height="40">
              是否显示
            </th>
            <th width="80">字段名</th>
            <th width="50">顺序</th>
          </tr>
          <tr v-for="(item,index) in thsModel" :key="item.prop" style="text-align: center" height="30">
            <td>
              <i class="icon-duigou iconfont" @click="clickTd(index)" :class="{hideTh:item.isHide}">
              </i>
            </td>
            <td>{{item.label}}</td>
            <td >
              <i class="icon-down iconfont" @click="modelSort(index,-1)"></i>
              <i class="icon-up iconfont" @click="modelSort(index,1)"></i>
            </td>
          </tr>
        </table>

        <div style="text-align: center; padding:10px 10px">
          <el-button class="my-button2" style="width: 50px;height: 28px; margin:auto" @click="adjust">确定</el-button>
          <el-button class="my-button2" style="width: 50px;height: 28px; margin:auto" @click="noAdjust">取消</el-button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import {deepCopy} from '../../../static/global'
  import breadCrumb from "../common/breadcrumb";
  export default {
    components: {breadCrumb},
    data() {
      return {
        isShow:false,
        multipleSelection:0,
        ths:[
          {prop:'towerCode',label:'编号',isHide:false},
          {prop:'towerVoltage',label:'电压',isHide:false},
          {prop:'towerCircuit',label:'线路',isHide:false},
          {prop:'tower',label:'杆塔',isHide:false},
          {prop:'monitorOrientation',label:'监拍朝向',isHide:false},
          {prop:'alarmTime',label:'预警时间',isHide:false},
          {prop:'alarmCauseDescribe',label:'预警原因',isHide:false},
          {prop:'alarmLevelDescri',label:'预警等级',isHide:false},
          {prop:'remark',label:'状态',isHide:false},
          {prop:'disposeUser',label:'处理人',isHide:false},
          {prop:'disposeMethodDescri',label:'处理方式',isHide:false},
          {prop:'alarmDescribe',label:'描述',isHide:false},
          {prop:'disposeTime',label:'处理时间',isHide:false},


          {prop:'createTime',label:'创建时间',isHide:true},
          {prop:'createUser',label:'创建人',isHide:true},
          {prop:'disposeMethodCode',label:'处理方式码',isHide:true},
          {prop:'id',label:'id',isHide:true},
          {prop:'ipcId',label:'ipcId',isHide:true},
          {prop:'modifyTime',label:'修改时间',isHide:true},
          {prop:'modifyUser',label:'修改人',isHide:true},
          {prop:'alarmCode',label:'预警码',isHide:true},
          {prop:'alarmImage',label:'预警图片',isHide:true},
          {prop:'alarmLevelCode',label:'预警等级码',isHide:true},
          {prop:'alarmCauseCode',label:'预警原因码',isHide:true},
          {prop:'status',label:'状态码',isHide:true},
        ],
        thsModel:[
          {prop:'towerCode',label:'编号',isHide:false},
          {prop:'towerVoltage',label:'电压',isHide:false},
          {prop:'towerCircuit',label:'线路',isHide:false},
          {prop:'tower',label:'杆塔',isHide:false},
          {prop:'monitorOrientation',label:'监拍朝向',isHide:false},
          {prop:'alarmTime',label:'预警时间',isHide:false},
          {prop:'alarmCauseDescribe',label:'预警原因',isHide:false},
          {prop:'alarmLevelDescri',label:'预警等级',isHide:false},
          {prop:'remark',label:'状态',isHide:false},
          {prop:'disposeUser',label:'处理人',isHide:false},
          {prop:'disposeMethodDescri',label:'处理方式',isHide:false},
          {prop:'alarmDescribe',label:'描述',isHide:false},
          {prop:'disposeTime',label:'处理时间',isHide:false},


          {prop:'createTime',label:'创建时间',isHide:true},
          {prop:'createUser',label:'创建人',isHide:true},
          {prop:'disposeMethodCode',label:'处理方式码',isHide:true},
          {prop:'id',label:'id',isHide:true},
          {prop:'ipcId',label:'ipcId',isHide:true},
          {prop:'modifyTime',label:'修改时间',isHide:true},
          {prop:'modifyUser',label:'修改人',isHide:true},
          {prop:'alarmCode',label:'预警码',isHide:true},
          {prop:'alarmImage',label:'预警图片',isHide:true},
          {prop:'alarmLevelCode',label:'预警等级码',isHide:true},
          {prop:'alarmCauseCode',label:'预警原因码',isHide:true},
          {prop:'status',label:'状态码',isHide:true},
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
        tableData:[],
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
      modelSort(index,num){
        if(num===-1&&index<this.thsModel.length-1){
          let baby = this.thsModel[index];
          this.$set(this.thsModel, index, this.thsModel[index+1])
          this.$set(this.thsModel, index+1,baby)
        }
        if(num===1&&index>0){
          let baby2 = this.thsModel[index];
          this.$set(this.thsModel, index, this.thsModel[index-1])
          this.$set(this.thsModel, index-1,baby2)
        }

      },
      clickTd(index){
        this.thsModel[index].isHide = !this.thsModel[index].isHide;
      },
      adjust(){
        this.ths = deepCopy(this.thsModel);
        this.isShow = false;
      },
      noAdjust(){
        this.thsModel = deepCopy(this.ths)
        this.isShow = false;
      }



    },
    created() {
      this.$ajax.get('api/v1/alarm/page/9/15')
        .then((res)=>{
          this.tableData = res.data.data;
          console.log(res.data.cursor)
        })
        .catch(function (error) {
          console.log(error)
        });
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
  .icon-up,.icon-down{
    &:hover{
      color: #24cdd0;
    }
  }
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
    overflow: hidden;
    .content {
      width: 98%;
      height: auto;
      margin: 10px auto 0;
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
        top: 50px;
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
        .icon-duigou{
          display: block;
          margin: auto;
          border: 1px solid #ddd;
          width: 15px;
          height: 15px;
          border-radius: 3px;
          color: blue;

        }
        .hideTh{
          color: white;
        }
      }
    }
  }

</style>
