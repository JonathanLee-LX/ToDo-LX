<template>
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
        <el-collapse>
          <div v-if="todoList.length">
          <el-collapse-item :title="item.title" v-for="item in todoList" :key="item.createAt">
            <template slot="title">
              <el-checkbox class="pull-left" v-model="item.done" @change="getDone(item)"></el-checkbox>
              {{item.title}}
            </template>
            <div>{{item.content}}</div>
          </el-collapse-item>
          </div>
        </el-collapse>
        <el-collapse>
          <div v-if="doneList.length">
          <el-collapse-item :title="item.title" v-for="item in doneList" :key="item.createAt">
            <template slot="title">
              <el-checkbox class="pull-left" v-model="item.done" @change="undo(item)"></el-checkbox>
              <s>{{item.title}}</s>
            </template>
            <div><s>{{item.content}}</s></div>
          </el-collapse-item>
          </div>
        </el-collapse>
      </div>
    </el-col>
  </el-row>
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
      this.todoList.push({
        title: this.todo.substring(0, 2),
        content: this.todo,
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
      // Array.prototype.push.apply(this.doneList, undoItem)
      // this.doneItem.push(doneItem)
      let index = this.doneList.findIndex((item, i) => {
        return item.done === false
      })
      let todo = this.doneList.splice(index, 1)
      this.addTodo(todo)
    }
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
</style>
