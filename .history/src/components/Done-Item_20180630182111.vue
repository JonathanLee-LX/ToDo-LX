<template>
  <el-collapse>
    <h3 style="text-align: left;">待办</h3>
    <div v-if="todoList.length">
      <el-collapse-item 
        v-for="item in todoList" 
        :title="item.content" 
        :key="item.createAt" 
        style="text-align: left;"
      >
        <template slot="title">
          <el-checkbox 
            v-model="item.done" 
            @change="undo(item)" 
            class="pull-left" 
            style="margin-right: 10px;"
          ></el-checkbox>
            {{item.title}}
          <span 
            class="time"
            style="float: right;" 
          >
            {{new Date(item.createAt).toLocaleTimeString()}}
          </span>
        </template>
        <el-input 
          v-model="item.content"
          :rows="3" 
          type="textarea" 
          size="small" 
          placeholder="详细描述" 
        ></el-input>
      </el-collapse-item>
    </div>
  </el-collapse>
</template>
<script>
  export default {
    name: 'DoneList',
    data () {
      return {}
    },
    props: ['doneList'],
    undo (todo) {
      let i = this.doneList.findIndex( 
        done => todo === done
      ) 
      this.$emit('undo', i, done)
    }
  }
</script>
<style>
</style>