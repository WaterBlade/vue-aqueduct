<template>
    <el-row>
      <el-col>
        <el-form :model="heightForm" label-width="120px">
          <el-form-item label="最终确定底宽(m)" v-if="sectType==='rect'">
            <el-input v-model="heightForm.b"></el-input>
          </el-form-item>
          <el-form-item label="最终确定内径(m)" v-if="sectType==='ushell'">
            <el-input v-model="heightForm.r"></el-input>
          </el-form-item>
          <el-form-item label="拉杆高(m)">
            <el-input v-model="heightForm.t"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" :disabled="buttonDisabled" @click="onButton">净尺寸计算</el-button>
      </el-col>
      <el-col>
        <el-card>
          计算结果
          <p v-if="showResult">
            槽身最小净高为{{ Number(this.height).toFixed(2) }}m
          </p>
        </el-card>
      </el-col>
    </el-row>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
@Component
export default class HeightForm extends Vue {
    public height: number = 0;
    public showResult = false;
    get heightForm() {
      return this.$store.state.heightForm;
    }
    set heightForm(value) {
      this.$store.state.updateHeightForm(value);
    }
    get sectType() {
      return this.$store.state.sectForm.sectType;
    }
    get buttonDisabled() {
      return this.$store.state.heightForm.buttonDisabled;
    }
    public onButton() {
      const hydro = this.$store.state.hydro;
      if (this.sectType === 'rect') {
        hydro.setFlumeW(Number(this.heightForm.b));
      } else {
        hydro.setFlumeW(Number(this.heightForm.r));
      }

      const height = Math.max(...hydro.findSurmount(Number(this.heightForm.t)));
      this.height = height;
      this.showResult = true;
      hydro.setFlumeH(Math.ceil(height * 10) / 10);
    }
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