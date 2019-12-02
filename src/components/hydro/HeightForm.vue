<template>
    <el-row>
      <el-col>
        <el-form :model="heightForm" label-width="120px">
          <el-form-item label="最终确定底宽(m)" >
            <el-input v-model="heightForm.b"></el-input>
          </el-form-item>
          <el-form-item label="最终确定内径(m)" >
            <el-input v-model="heightForm.r"></el-input>
          </el-form-item>
          <el-form-item label="拉杆高(m)">
            <el-input v-model="heightForm.t"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" >净尺寸计算</el-button>
      </el-col>
      <el-col>
        <el-card>计算结果</el-card>
      </el-col>
    </el-row>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class HeightForm extends Vue {
    public heightForm: {
        b?: number,
        r?: number,
        t?: number,
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