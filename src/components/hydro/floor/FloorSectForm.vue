<template>
  <el-form label-width="120px">
    <el-form-item label="断面形式">
      <el-radio-group v-model="sectForm.sectType">
        <el-radio-button label="rect">矩形断面</el-radio-button>
        <el-radio-button label="trape">梯形断面</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="底坡">
      <el-input v-model="sectForm.iDen" />
    </el-form-item>
    <el-form-item label="糙率">
      <el-input v-model="sectForm.n" />
    </el-form-item>
    <el-form-item label="底宽(m)">
      <el-input v-model="sectForm.b" />
    </el-form-item>
    <el-form-item v-if="sectForm.sectType === 'trape'" label="边坡坡比">
      <el-input v-model="sectForm.m" />
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class FloorSectForm extends Vue {
    public sectForm: {
        sectType?: 'rect'|'trape',
        iDen?: number,
        n?: number,
        b?: number,
        m?: number,
    } = {};
}
</script>
<style scoped>
.el-form .el-radio-group {
  float: left;
}
</style>