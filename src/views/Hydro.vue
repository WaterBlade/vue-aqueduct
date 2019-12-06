<template>
  <div class="hydro">
    <el-divider content-position="left">
      <b>1</b>-槽身合理尺寸试算
    </el-divider>
    <sect-form/>
    <el-divider content-position="left">
      <b>2</b>-槽身净尺寸计算
    </el-divider>
    <height-form/>
    <el-divider content-position="left">
      <b>3</b>-底板高程试算
    </el-divider>
    <floor-form/>
    <el-divider content-position="left">
      <b>4</b>-水面线推算
    </el-divider>
    <line-form/>
    <el-divider content-position="left">
      <b>5</b>-渡槽水力学计算算稿
    </el-divider>
    <report-form/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import SectForm from '@/components/hydro/SectForm.vue';
import HeightForm from '@/components/hydro/HeightForm.vue';
import FloorForm from '@/components/hydro/FloorForm.vue';
import LineForm from '@/components/hydro/LineForm.vue';
import ReportForm from '@/components/ReportForm.vue';

@Component({components: {
    'sect-form': SectForm,
    'height-form': HeightForm,
    'floor-form': FloorForm,
    'line-form': LineForm,
    'report-form': ReportForm,
}})
export default class Hydro extends Vue {
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