<template>
    <div class="tree-table-container">
        <div class="tree-table">
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>体重</th>
                        <th>婚否</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>李祥</td>
                        <td>22</td>
                        <td>男</td>
                        <td>70</td>
                        <td>否</td>
                    </tr>
                    <tr>
                        <tree-item></tree-item>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TreeTable',
        components: {
            treeItem: () => import('./tree-item.vue')
        }
    }
</script>

<style>
    .tree-table-container {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .tree-table {
        width: 50%;
        margin: 10% 25%;
    }
    table{
        width: 100%;
        border: 1px solid #aaa;
        border-collapse: collapse;
        background-color: #fff;
    }
    th, tr, td{
        border: 1px solid #bbb;
    }
</style>