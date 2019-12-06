<template>
  <el-row>
    <el-col>
      <el-form label-width="180px" :model="lineForm">
          <el-form-item label="上游渠道底板高程">
              <el-input v-model="inletFloor"/>
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
      <el-card>计算结果</el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class LineForm extends Vue {
    get lineForm() {
        return this.$store.state.lineForm;
    }
    set lineForm(value) {
        this.$store.commit('updateLineForm', value);
    }
    get inletFloor() {
        return this.$store.state.flumeForm.inletFloor;
    }
    set inletFloor(value) {
        this.$store.commit('updateFlumeForm', {inletFloor: value});
    }
    public onButton() {
        const hydro = this.$store.state.hydro;
        hydro.findOutletH();
        hydro.findFLumeH();
        hydro.findInletH();
        hydro.findUpCheck();
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