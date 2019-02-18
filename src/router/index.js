import Vue from 'vue'
import Router from 'vue-router'

import COMPONENTS from './components'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: COMPONENTS.IndexComponent
    },
    // tags
    {
      path: '/views',
      component: COMPONENTS.IndexComponent,
      children: [
        {
          path: 'admin',
          component: COMPONENTS.AdminComponent,
          children: [
            {
              path: 'index',
              name: 'index',
              meta: {
                title: '首页'
              },
              component: COMPONENTS.AdminIndexComponent
            },
            {
              path: 'user',
              name: 'user',
              meta: {
                title: '用户管理'
              },
              component: COMPONENTS.AdminUserComponent
            }
          ]
        }
      ]
    }
    // tags end
  ]
})

routes.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default routes
