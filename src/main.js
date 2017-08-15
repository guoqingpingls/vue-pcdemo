// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import Detail from './pages/detail'
import OrderPage from './pages/order'
import DetailAnalysis from './pages/details/detailAnalysis'
import DetailCount from './pages/details/detailCount'
import DetailForecast from './pages/details/detailForecast'
import DetailPublish from './pages/details/detailPublish'

Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/order',
      component: OrderPage
    },
    {
      path: '/detail',
      component: Detail,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnalysis
        },
        {
          path: 'count',
          component: DetailCount
        },
        {
          path: 'forecast',
          component: DetailForecast
        },
        {
          path: 'publish',
          component: DetailPublish
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  template: '<Layout/>',
  components: { Layout }
})
// /* eslint-disable no-new */
// // new Vue({
// //   el: '#app',
// //   router,
// //   template: '<App/>',
// //   components: { App }
// // })

// /**
//  *注册全局组件
//  */
// // Vue.component('my-header', {
// //   template: '<p>this is my header{{ header }}</p>',
// //   data: {
// //     header: 'this is data content'
// //   }
// // })

// /**
//  *注册自组件，并非全局组件
//  */
// var myheaderchild = {
//   template: '<p> I am my header child</p>'
// }
// var myheader = {
//   template: '<p> <my-header-child>this</my-header-child> is a child component</p>',
//   components: {
//     'my-header-child': myheaderchild
//   }
// }
// new Vue({
//   el: '#app',
//   // template: '<p>hello world hello{{ word }}</p>',
//   data: {
//     word: 'apple,orange,green'
//   },
//   components: {
//     'my-header': myheader
//   }
// })
