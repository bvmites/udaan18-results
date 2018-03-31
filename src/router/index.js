import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import EventList from '@/components/eventList'
import Event from '@/components/event'
import EventContainer from '@/components/eventContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/eventList/:parentId',
      component: EventContainer,
      children: [
        {
          path: '',
          name: 'EventList',
          component: EventList,
        },
        {
          path: 'event/:childId',
          name: 'Event',
          component: Event
        }
      ]
    }
  ]
})
