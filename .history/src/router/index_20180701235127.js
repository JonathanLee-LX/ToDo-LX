import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ToDoList',
    component: ToDoList
  }]
})
