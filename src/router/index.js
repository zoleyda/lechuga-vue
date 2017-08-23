import Vue from 'vue'
import Router from 'vue-router'
import Currency from '@/components/Currency'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Currency',
      component: Currency
    }
  ]
})
