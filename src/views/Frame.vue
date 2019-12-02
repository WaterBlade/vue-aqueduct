<template>
    <el-container>
        <el-header>渡槽辅助设计</el-header>
        <el-container>
        <el-aside width="120px"><nav-bar/></el-aside>
        <el-main><router-view/></el-main>
        </el-container>
        <el-footer>渡槽辅助设计</el-footer>
    </el-container>
</template>
<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
export default Vue.extend({
    name: 'frame',
    components: {
        NavBar,
    },
});
</script>
<style scoped>
.el-header, .el-footer{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    text-align: center;
}
.el-aside{
    color: #333;
}
</style>