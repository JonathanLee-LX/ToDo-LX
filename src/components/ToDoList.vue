<template>
  <el-row>
    <el-col :offset="8" :span="8"  class="main-container">
      <div class="main">
        <h1 class=".title">
          Just Do It
        </h1>
        <div class="input-area">
          <el-input type="text" placeholder="记下你的重要事情！"></el-input>
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
          <el-collapse-item title="待办事项1">
            <div>学习数据结构和算法。</div>
          </el-collapse-item>
          <el-collapse-item title="待办事项2">
            <div>学习Vue.js框架</div>
          </el-collapse-item>
          <el-collapse-item title="待办事项3">
            <div>学习Typescript语言</div>
          </el-collapse-item>
          <el-collapse-item title="待办事项4">
            <div>学习设计模式</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="js">
export default {
  data: () => {
    return {
      header: 'header',
      aside: 'Aside',
      main: 'Main',
      footer: 'Footer'
    }
  }
}

</script>

<style>
.main-container {
    background-color: #fff !important;
    min-height: 800px;
    border: 1px solid #eee;
    box-shadow: 2px 2px 1px #ccc;
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
</style>
