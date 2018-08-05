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
            addTodo(title) {
                this.$emit('add-todo', {
                    title: title,
                    content: 
                })
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