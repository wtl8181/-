//这是共享数据的仓库
import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)
const  store = new Vuex.Store({
  state:{//state数据跟根组件data写法一模一样。也是储存数据的
   menuLocation:1
  },
  mutations:{//此处的function是同步操作的。其他的都跟上面一样
    INCREMENT(state){
      state.menuLocation++
      console.log(typeof state.menuLocation)
    }

  },
  getters:{//这个跟组件的computed差不多，接收state作为参数，不接受组件传参数。需要return值。

  },
  actions:{//actions里面全是方法，与mutations区别只有这儿的方法可以使用异步操作

  }
})
export default store
