import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '@/components/Todo'
import TreeTable from '@/components/tree-table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: ToDoList
    },
    {
      path: '/tree-table',
      name: 'TreeTable',
      component: TreeTable
    }
  ]
})
