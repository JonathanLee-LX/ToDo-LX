<template>
  <el-collapse>
    <h3 style="text-align: left;">已完成</h3>
    <div v-if="todoList.length">
      <el-collapse-item 
        v-for="item in todoList" 
        :title="item.title" 
        :key="item.createAt" 
        style="text-align: left;"
      >
        <template slot="title">
          <el-checkbox 
            v-model="item.done" 
            @change="getDone(item)" 
            class="pull-left" 
            style="margin-right: 10px;"
          >
          </el-checkbox>
          <s>{{item.title}}</s>
        </template>
        <div>
          <s>{{item.content}}</s>
        </div>
      </el-collapse-item>
    </div>
  </el-collapse>
</template>
<script>
  export default {
    name: 'TodoItem',
    data() {
      return {
        todoList: []
      }
    },
    getDone (done) {
      let i = this.todoList.findIndex(todo => todo === done)
      this.$emit('get-done', i, done)
    }
  }
</script>
<style>
</style>