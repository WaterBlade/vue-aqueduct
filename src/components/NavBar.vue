<template>
    <el-menu @select="handleSelect">
        <el-menu-item index="hydro">水力学设计</el-menu-item>
        <el-menu-item index="flume">槽身设计</el-menu-item>
        <el-menu-item index="solid-pier">实心墩设计</el-menu-item>
        <el-menu-item index="hull-pier">空心墩设计</el-menu-item>
        <el-menu-item index="foundation">扩大基础设计</el-menu-item>
        <el-menu-item index="pile">桩基础设计</el-menu-item>
    </el-menu>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'nav-bar',
    methods: {
        handleSelect(key: string) {
            this.$router.push(key);
        },
    },
});
</script>
