<template>
<div id="todo-app">
  <el-row>
    <el-col :offset="8" :span="8"  class="main-container">
      <div class="main">
        <h1 class=".title">
          Just Do It
        </h1>
        <div class="input-area">
            <el-input type="text" placeholder="记下你的重要事情！" v-model="todo" @keydown.enter.native="addTodo"></el-input>
        </div>
        <div class="tool-bar">
          <el-dropdown class="pull-right">
            <el-button type="primary" size="mini">
              默认排序
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>创建时间从早到晚</el-dropdown-item>
              <el-dropdown-item>创建时间从晚到早</el-dropdown-item>
              <el-dropdown-item>到期时间从早到晚</el-dropdown-item>
              <el-dropdown-item>到期时间从晚到早</el-dropdown-item>
              <el-dropdown-item>重要性从高到低</el-dropdown-item>
              <el-dropdown-item>重要性从低到高</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>
        <el-collapse>
          <h3 style="text-align: left;">待办事项</h3>
          <div v-if="todoList.length">
          <el-collapse-item :title="item.content" v-for="item in todoList" :key="item.createAt" style="text-align: left;">
            <template slot="title">
              <el-checkbox class="pull-left" v-model="item.done" @change="getDone(item)" style="margin-right: 10px;"></el-checkbox>
              {{item.title}}
              <span style="float: right;" class="time">{{new Date(item.createAt).toLocaleTimeString()}}</span>
            </template>
            <el-input type="textarea" :rows="3" size="small" placeholder="详细描述" v-model="item.content"></el-input>
          </el-collapse-item>
          </div>
        </el-collapse>
        </div>
        <div>
          <el-collapse>
          <h3 style="text-align: left;">已完成</h3>
            <div v-if="doneList.length">
            <el-collapse-item :title="item.title" v-for="item in doneList" :key="item.createAt" style="text-align: left;">
              <template slot="title">
                <el-checkbox class="pull-left" v-model="item.done" @change="undo(item)" style="margin-right: 10px;"></el-checkbox>
                <s>{{item.title}}</s>
              </template>
              <div><s>{{item.content}}</s></div>
            </el-collapse-item>
            </div>
          </el-collapse>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script lang="js">
export default {
  data () {
    return {
      todoList: [],
      doneList: [],
      todo: ''
    }
  },
  methods: {
    addTodo () {
      if (this.todo.trim() === '') return
      this.todoList.push({
        title: this.todo,
        content: '',
        createAt: Date.now(),
        done: false
      })
      this.reset()
    },
    reset () {
      this.todo = ''
    },
    getDone (item) {
      let index = this.todoList.findIndex((item, i) => {
        return item.done === true
      })
      let doneItem = this.todoList.splice(index, 1)
      this.addDone(doneItem)
    },
    addDone (doneItem) {
      Array.prototype.push.apply(this.doneList, doneItem)
      // this.doneItem.push(doneItem)
    },
    undo (item) {
      let index = this.doneList.findIndex((item, i) => {
        return item.done === false
      })
      let todo = this.doneList.splice(index, 1)[0]
      this.todoList.push({
        title: todo.title,
        content: todo.content,
        createAt: todo.createAt,
        done: todo.done
      })
    }
  },
  created () {
  },
  beforeDestroy () {
    alert(this.todoList)
  }
}

</script>

<style>
.main-container {
    background-color: #fff !important;
    min-height: 600px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 1px #ccc;
    border-radius: 5px;
    margin-top: 30px;
}
.main {
    padding: 10px 10px;
}
.input-area {
    margin-bottom: 20px;
}
.el-col {
    background-color: #eee;
}
.el-collapse {
    margin-top: 60px;
}
.pull-right {
    float: right;
}
.pull-left {
    float: left;
}
.time {
    color: #aaa;
    font-size: 0.7em;
    display: inline-block;
    margin-right: 5px;
}
</style>
