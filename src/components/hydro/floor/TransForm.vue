<template>
  <el-form label-width="120px">
    <el-form-item label="长度(m)">
      <el-input v-model="transForm.l" />
    </el-form-item>
    <el-form-item label="局损系数">
      <el-input v-model="transForm.zeta" />
    </el-form-item>
    <el-form-item label="糙率">
      <el-input v-model="transForm.n" />
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class TransForm extends Vue {
    public transForm: {
        l?: number,
        zeta?: number,
        n?: number,
    } = {};
}
</script>
<style scoped>
.el-form .el-radio-group {
  float: left;
}
</style>