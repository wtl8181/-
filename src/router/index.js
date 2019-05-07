import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//线路地图
import Map from '@/components/map/map'
//预警管理//
import WarningIndex from '@/components/warning/index'
import WarningList from '@/components/warning/warninglist'
import WarningSetting from '@/components/warning/warningsetting'
import WarningFix from '@/components/warning/warningfix'
//隐患管理//
import DangerIndex from '@/components/danger/index'
import DangerList from '@/components/danger/dangerlist'
import WorkOrder from '@/components/danger/workorder'
//远程巡检//
import Inspection from '@/components/inspection/inspection'
//数据统计//
import StaIndex from '@/components/statistics/index'
import WarningSta from '@/components/statistics/warningsta'
import DangerSta from '@/components/statistics/dangersta'
import DeviceSta from '@/components/statistics/devicesta'
import HumanSta from '@/components/statistics/humansta'
//设备管理
import DeviceIndex from '@/components/device/index'
import DeviceIn from '@/components/device/devicein'
import DeviceList from '@/components/device/devicelist'
import DeviceMap from '@/components/device/devicemap'
import DeviceOta from '@/components/device/deviceota'
import DevicePara from '@/components/device/devicepara'
//系统管理
import ManageIndex from '@/components/manage/index'
import Authority from '@/components/manage/authority'
import Dictionary from '@/components/manage/dictionary'
import Help from '@/components/manage/help'
import PopUp from '@/components/manage/popup'
import Structure from '@/components/manage/structure'
import User from '@/components/manage/user'


export default new Router({
  routes: [
    {
      path:'/',
      name:'Map',
      component:Map
    },
    {//预警 嵌套路由
      path:'/warning/',
      component:WarningIndex,
      children:[
        {
          path:'warninglist',
          name:'WarningList',
          component:WarningList
        },
        {
          path:'warningSetting',
          name:'WarningSetting',
          component:WarningSetting
        },
        {
          path:'warningFix',
          name:'WarningFix',
          component:WarningFix
        }
      ]
    },
    {//隐患 嵌套路由
      path:'/danger/',
      component:DangerIndex,
      children: [
        {
          path:'/danger/dangerlist',
          name:'DangerList',
          component:DangerList
        },
        {
          path:'/danger/workorder',
          name:'WorkOrder',
          component:WorkOrder
        }
      ]
    },
    {
      path:'/inspection',
      name:'Inspection',
      component:Inspection
    },
    {//数据嵌套路由
      path:'/statistics/',
      component:StaIndex,
      children:[
        {
          path:'/statistics/dangersta',
          name:'DangerSta',
          component:DangerSta
        },
        {
          path:'/statistics/devicesta',
          name:'DeviceSta',
          component:DeviceSta
        },
        {
          path:'/statistics/humansta',
          name:'HumanSta',
          component:HumanSta
        },
        {
          path:'/statistics/warningsta',
          name:'WarningSta',
          component:WarningSta
        },
      ]
    },
    {
      path:'/device/',
      component:DeviceIndex,
      children:[
        {
          path:'/device/devicein',
          name:'DeviceIn',
          component:DeviceIn
        },
        {
          path:'/device/devicelist',
          name:'DeviceList',
          component:DeviceList
        },
        {
          path:'/device/devicemap',
          name:'DeviceMap',
          component:DeviceMap
        },
        {
          path:'/device/deviceota',
          name:'DeviceOta',
          component:DeviceOta
        },
        {
          path:'/device/devicepara',
          name:'DevicePara',
          component:DevicePara
        },
      ]
    },
    {
      path:'/manage/',
      component:ManageIndex,
      children:[
        {
          path:'/manage/authority',
          name:'Authority',
          component:Authority
        },
        {
          path:'/manage/dictionary',
          name:'Dictionary',
          component:Dictionary
        },
        {
          path:'/manage/help',
          name:'Help',
          component:Help
        },
        {
          path:'/manage/popup',
          name:'PopUp',
          component:PopUp
        },
        {
          path:'/manage/structure',
          name:'Structure',
          component:Structure
        },
        {
          path:'/manage/user',
          name:'User',
          component:User
        },
      ]
    },



  ]
})
