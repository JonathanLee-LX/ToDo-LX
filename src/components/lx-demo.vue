<template>
  <div>
    <!-- <el-radio-group 
      v-model = "isExist"
      @change = "handle"
    >
      <el-radio :label='false' ></el-radio>
      <el-radio :label='true' ></el-radio>
    </el-radio-group> -->
    <!-- <br> -->
    <!-- <strong>Error!</strong> -->
    <!-- <slot></slot> -->
    <slot :todoList='todoList'></slot>
  </div>

</template>
<script>
export default {
  data() {
    return {
      exist: false,
      todoList: [
        {
          text: 'eat',
          time: 30
        },
        {
          text: 'running',
          time: 20
        }
      ]
    }
  },
  computed: {
    isExist: {
      get: function () {
        return this.exist
      },
      set: function (val) {
        this.exist = val
        debugger
      }
    }
  },
  methods: {
    handle(val) {
      this.isExist = val
      debugger
    }
  }
}
</script>