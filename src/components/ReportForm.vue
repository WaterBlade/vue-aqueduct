<template>
<el-row>
    <el-col>
    <el-form :model="reportForm" label-width="120px">
            <el-button type="primary" @click="onButton">生成计算算稿</el-button>
    </el-form>
    </el-col>
</el-row>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { HydroCalculator } from 'aqueduct';
@Component
export default class ReportForm extends Vue {
  get reportForm() {
    return this.$store.state.reportForm;
  }
  set reportForm(value) {
    this.$store.commit('updateReportForm', value);
  }
  public onButton() {
    const loading = (this as any).$loading({
      lock: true,
      text: '正在生成算稿',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });
    const hydro: HydroCalculator = this.$store.state.hydro;
    hydro.makeReport();
    loading.close();
  }
}
</script>
<style scoped>
body{
  margin: 0;
}
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