<template>
  <div id="todo-app">
    <el-row>
      <el-col :offset="8" :span="8" class="main-container">
        <div class="main">
          <InputArea
            @add-todo="addTodo"
          ></InputArea>
          <TodoItem
            @has-done="hasDone"
          ></TodoItem>
          <DoneItem
            @undo="undo"
          ></DoneItem>
          <Sort></Sort>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="js">
  import InputArea from './Input-Area.vue'
  import TodoItem from './Todo-Item.vue'
  import DoneItem from './Done-Item.vue'
  import Sort from './Sort.vue'

  export default {
    components: {
      InputArea,
      Sort,
      TodoItem,
      DoneItem
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
      hasDone(i, item) {
        let doneItem = this.todoList.splice(i, 1)
        this.addDone(doneItem)
      },
      addDone(doneItem) {
        this.doneList.push(doneItem)
      },
      undo(item) {
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
    created() {
    },
    beforeDestroy() {
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