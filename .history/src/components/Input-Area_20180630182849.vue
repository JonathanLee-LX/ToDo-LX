<template>
    <div class="input-area">
        <el-input v-model="todo" @keydown.enter.native="addTodo" type="text" placeholder="记下你的重要事情！"></el-input>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                todo: ''
            }
        },
        methods: {
            addTodo(content) {
                this.$emit('add-todo', content)
                this.reset()
            },
            reset() {
                this.todo = ''
            }
        }
    }

</script>
<style>
</style>