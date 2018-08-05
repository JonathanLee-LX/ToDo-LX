<template>
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
</template>
<script>
    export default {
        name: 'Sort',
        components: {},
        data() {
            return {}
        }
    }
</script>
<style>
</style>