import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import EventList from '@/components/eventList'
import Event from '@/components/event'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/eventList/:id',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'Event',
      component: Event
    }
  ]
})
