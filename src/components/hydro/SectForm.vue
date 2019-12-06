<template>
  <el-row>
    <el-col>
      <el-form ref="sectForm" label-width="120px" :model="sectForm">

        <el-form-item>
          <span slot="label">
            设计流量 (m<sup>3</sup>/s)
          </span>
          <el-input v-model="sectForm.Qs"></el-input>
        </el-form-item>

        <el-form-item>
          <span slot="label">
            加大流量 (m<sup>3</sup>/s)
          </span>
          <el-input v-model="sectForm.Qj"></el-input>
        </el-form-item>

        <el-form-item label="底坡">
          <el-input v-model="sectForm.iDen"></el-input>
        </el-form-item>

        <el-form-item label="糙率">
          <el-input v-model="sectForm.n"></el-input>
        </el-form-item>

        <el-form-item>
          <span slot="label">槽身形式</span>
          <el-radio-group v-model="sectForm.sectType">
            <el-radio-button label="ushell">U形槽身</el-radio-button>
            <el-radio-button label="rect">矩形槽身</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-button type="primary" @click="onSectButton">槽身尺寸试算</el-button>

      </el-form>
    </el-col>

    <el-col>
      <el-card>
        计算结果
        <div v-if="showResult">
        <p v-if="sectForm.sectType === 'ushell'">
          U形槽内径的取值范围是：
        </p>
        <p v-else>
          矩形槽底宽的取值范围是：
        </p>
        <p>
          {{ Number(range[0]).toFixed(3) }}m~{{ Number(range[1]).toFixed(3) }}m
        </p>
        </div>
      </el-card>
    </el-col>

  </el-row>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class SectForm extends Vue {
    get sectForm() {
      return this.$store.state.sectForm;
    }
    set sectForm(value) {
      this.$store.commit('updateSectForm', value);
    }
    public range: number[] = [0, 0];
    public showResult: boolean = false;
    public onSectButton() {
        const {Qs, Qj, iDen, n, sectType} = this.sectForm;
        if (!(Qs && Qj && iDen && n && sectType)) {
            (this as any).$notify({
                title: '输入不完整',
                message: '1-槽身合理尺寸试算输入内容不完整',
            });
            return;
        }
        const hydro = this.$store.state.hydro;
        hydro.setFlumeSect(sectType, iDen, n);
        const [sl, sr, jl, jr] = hydro.findW(Qs, Qj);
        this.range = [jl, sr];
        this.showResult = true;
        this.$store.commit('updateHeightForm', {buttonDisabled: false});
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