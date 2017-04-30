import Vue from 'vue'
import Router from 'vue-router'
import test from '../test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: test
    }
  ]
})
