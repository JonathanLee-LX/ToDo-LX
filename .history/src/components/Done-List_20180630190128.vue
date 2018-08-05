<template>
  <el-collapse>
    <h3 style="text-align: left;">完成</h3>
    <div v-if="doneList.length">
      <el-collapse-item 
        v-for="item in doneList" 
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
          <s>{{item.title}}</s>
          <span 
            class="time"
            style="float: right;"
          >
            {{new Date(item.createAt).toLocaleTimeString()}}
          </span>
        </template>
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
    props: {
      doneList: {
        type: Array,
        default: []
      }
    },
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