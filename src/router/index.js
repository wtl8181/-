import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Map from '@/components/map/map'
import WarningList from '@/components/warning/warninglist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/map',
      name:'Map',
      component:Map
    },
    {
      path:'/warning/warninglist',
      name:'WarningList',
      component:WarningList
    }
  ]
})
