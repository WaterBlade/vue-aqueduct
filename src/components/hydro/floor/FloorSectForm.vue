<template>
  <el-form label-width="120px" :model="sectForm">
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
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class FloorSectForm extends Vue {
    @Prop(String) public sectPosition!: 'up'| 'down';
    get sectForm() {
      return this.$store.state.floorSectForm[this.sectPosition];
    }
    set sectForm(value) {
      this.$store.commit('updateFloorSectForm', {sectPosition: this.sectPosition, value});
    }
}
</script>
<style scoped>
.el-form .el-radio-group {
  float: left;
}
</style>