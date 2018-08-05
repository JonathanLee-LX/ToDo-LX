<template>
  <div id="todo-app">
    <el-row>
      <el-col :offset="8" :span="8" class="main-container">
        <div class="main">
          <app-title></app-title>
          <InputArea
            @add-todo="addTodo"
          ></InputArea>
          <Sort></Sort>
          <TodoList
            :todoList="todoList"
            @has-done="hasDone"
          ></TodoList>
          <DoneList
            :doneList="doneList"
            @undo="undo"
          ></DoneList>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="js">
  import AppTitle from './app-title.vue'
  import InputArea from './Input-Area.vue'
  import TodoList from './Todo-List.vue'
  import DoneList from './Done-List.vue'
  import Sort from './Sort.vue'

  export default {
    components: {
      AppTitle,
      InputArea,
      Sort,
      TodoList,
      DoneList
    },
    data() {
      return {
        todo: '',
        todoList: [],
        doneList: []
      }
    },
    methods: {
      addTodo (todo) {
        this.todoList.push(todo)
      },
      hasDone(i, done) {
        this.todoList.splice(i, 1)
        this.addDone(done)
      },
      addDone(done) {
        this.doneList.push(done)
      },
      undo(item) {
        let index = this.doneList.findIndex((item, i) => {
          return item.done === false
        })
        this.doneList.splice(index, 1)
        this.todoList.push({
          title: item.title,
          content: item.content,
          createAt: item.createAt,
          done: item.done
        })
      }
    },
    created() {
    },
    beforeDestroy() {
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