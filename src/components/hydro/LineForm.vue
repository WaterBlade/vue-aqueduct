<template>
  <el-row>
    <el-col>
      <el-form label-width="180px" :model="lineForm">
          <el-form-item label="上游渠道底板高程">
              <el-input v-model="lineForm.inletFloor"/>
          </el-form-item>
        <el-form-item label="槽身进口底板高程(m)">
          <el-input v-model="lineForm.flumeInFloor"/>
        </el-form-item>
        <el-form-item label="槽身出口底板高程(m)">
          <el-input v-model="lineForm.flumeOutFloor" />
        </el-form-item>
        <el-form-item label="下游渠道底板高程(m)">
          <el-input v-model="lineForm.outletFloor" />
        </el-form-item>
          <el-button type="primary" @click="onButton">水面线推算</el-button>
      </el-form>
    </el-col>
    <el-col>
      <el-card>
          计算结果
          <div v-if="showResult">
            <p>槽身出口推算水深：{{ Number(flumeh0).toFixed(3) }}m;</P>
            <p>槽身出口均匀流水深： {{ Number(flumeh).toFixed(3) }}m;</p>
            <p>上游渠道推算水深：{{ Number(inleth0).toFixed(3) }}m;</p>
            <p>上游渠道均匀流水深： {{ Number(inleth).toFixed(3) }}m;</p>
          </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { HydroCalculator } from 'aqueduct';
@Component
export default class LineForm extends Vue {
    public flumeh0!: number;
    public flumeh!: number;
    public inleth0!: number;
    public inleth!: number;
    public showResult = false;
    get lineForm() {
        return this.$store.state.lineForm;
    }
    set lineForm(value) {
        this.$store.commit('updateLineForm', value);
    }
    public onButton() {
        const hydro: HydroCalculator = this.$store.state.hydro;
        hydro.setLine(
          Number(this.lineForm.flumeInFloor),
          Number(this.lineForm.flumeOutFloor),
          Number(this.lineForm.inletFloor),
          Number(this.lineForm.outletFloor),
        );
        hydro.calcLine();
        [this.flumeh0, this.flumeh, this.inleth0, this.inleth] = hydro.calcRise();
        this.showResult = true;
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