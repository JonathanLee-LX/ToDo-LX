<template>
  <el-collapse>
    <h3 style="text-align: left;">完成</h3>
    <div v-if="doneList.length">
      <el-collapse-item v-for="item in doneList" :title="item.title" :key="item.createAt" style="text-align: left;">
        <template slot="title">
          <el-checkbox v-model="item.done" @change="undo(item)" class="pull-left" style="margin-right: 10px;"></el-checkbox>
          <s>{{item.title}}</s>
          <span class="time" style="float: right;">
            {{new Date(item.createAt).toLocaleTimeString()}}
          </span>
        </template>
        <el-input v-model="item.content" :rows="3" type="textarea" size="small" placeholder="描述"></el-input>
      </el-collapse-item>
    </div>
  </el-collapse>
</template>
<script>
  export default {
    name: 'DoneList',
    created() {
    },
    data() {
      return {}
    },
    props: {
      doneList: {
        type: Array,
        default: []
      }
    },
    methods: {
      undo(done) {
        let i = this.doneList.findIndex(
          item => item === done
        )
        this.$emit('undo', i, done)
      }
    }
  }
</script>
<style>
</style>