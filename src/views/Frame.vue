<template>
    <el-container>
        <el-header>渡槽辅助设计</el-header>
        <el-container>
        <el-aside width="200px"><nav-bar/></el-aside>
        <el-main><router-view/></el-main>
        </el-container>
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