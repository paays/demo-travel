import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BookingDetail from '@/components/BookingDetail'
import Checkout from '@/components/Checkout'
import BookingPackage from '@/components/BookingPackage'
import BookingConfirmation from '@/components/BookingConfirmation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/BookingDetail',
      name: 'BookingDetail',
      component: BookingDetail
    },
    {
      path: '/Checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/BookingPackage',
      name: '/BookingPackage',
      component: BookingPackage
    },
    {
      path: '/BookingConfirmation',
      name: '/BookingConfirmation',
      component: BookingConfirmation
    }
  ]
})
