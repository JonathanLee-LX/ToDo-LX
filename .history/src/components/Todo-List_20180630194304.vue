<template>
  <el-collapse>
    <h3 style="text-align: left;">待办</h3>
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
          {{item.title}}
          <span 
            class="time"
            style="float: right;"
          >
            {{new Date(item.createAt).toLocaleTimeString()}}
          </span>
        </template>
        <div>
          <el-input 
            v-model="item.content"
            :rows="3" 
            type="textarea" 
            size="small" 
            placeholder="描述" 
          ></el-input>
        </div>
      </el-collapse-item>
    </div>
  </el-collapse>
</template>
<script>
  export default {
    name: 'TodoList',
    data() {
      return {
      }
    },
    props: {
      todoList: {
        type: Array,
        default: []
      }
    },
    methods: {
      getDone (done) {
        let i = this.todoList.findIndex(todo => todo === done)
        this.$emit('has-done', i, done)
      }
    }
  }
</script>
<style>
</style>