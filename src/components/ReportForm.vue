<template>
<el-row>
    <el-col>
    <el-form :model="reportForm" label-width="120px">
        <el-form-item label="工程名称">
            <el-input v-model="reportForm.project" />
        </el-form-item>
        <el-form-item label="渡槽名称">
            <el-input v-model="reportForm.building" />
        </el-form-item>
        <el-form-item label="设计阶段">
            <el-input v-model="reportForm.phase" />
        </el-form-item>
            <el-button type="primary">生成计算算稿</el-button>
    </el-form>
    </el-col>
</el-row>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class ReportForm extends Vue {
    public reportForm: {
        project?: string,
        building?: string,
        phase?: string,
    } = {};
}
</script>
<style scoped>
.el-form .el-radio-group {
  float: left;
}
.el-button {
  width: 100%;
}
.el-card {
  margin-left: 10px;
}
.el-col {
  width: 50%;
}
</style>