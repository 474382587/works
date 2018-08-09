import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Detail from './pages/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:movieId',
      name: 'movie-detail',
      component: Detail,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
