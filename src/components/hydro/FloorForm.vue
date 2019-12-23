<template>
    <el-row>
        <el-row>

          <el-col>
            <el-divider content-position="left">3.1-上游渠道断面参数</el-divider>
            <floor-sect-form sectPosition="up"/>
          </el-col>

          <el-col>
            <el-divider content-position="left">3.2-下游渠道断面参数</el-divider>
            <floor-sect-form sectPosition="down"/>
          </el-col>

        </el-row>

        <el-row>
          <el-col>
            <el-divider content-position="left">3.3-进口渐变段参数</el-divider>
            <trans-form transPosition="inlet"/>
          </el-col>

          <el-col>
            <el-divider content-position="left">3.4-出口渐变段参数</el-divider>
            <trans-form transPosition="outlet"/>
          </el-col>

        </el-row>

      <el-row>
        <el-col>
          <el-row>
            <el-divider content-position="left">3.5-槽身及底板参数</el-divider>
            <el-form label-width="150px">
              <el-form-item label="长度(m)">
                <el-input v-model="flumeForm.l" />
              </el-form-item>
              <el-form-item label="上游渠道底板高程(m)">
                <el-input v-model="flumeForm.inletFloor" />
              </el-form-item>
            <el-button type="primary" @click="onButton">底板高程试算</el-button>
            </el-form>
          </el-row>
        </el-col>
        <el-col>
          <el-card>
            计算结果
            <div v-if="showResult">
              <p>槽身进口底板高程：{{ Number(flumeInFloor).toFixed(3) }} m</p>
              <p>槽身出口底板高程：{{ Number(flumeOutFloor).toFixed(3) }} m</p>
              <p>下游渠道底板高程：{{ Number(outletFloor).toFixed(3) }} m</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import FloorSectForm from './floor/FloorSectForm.vue';
import TransForm from './floor/TransForm.vue';
import { HydroCalculator } from 'aqueduct';
@Component({
    components: {
        'floor-sect-form': FloorSectForm,
        'trans-form': TransForm,
    },
})
export default class FloorForm extends Vue {
    public flumeInFloor: number = 0;
    public flumeOutFloor: number = 0;
    public outletFloor: number = 0;
    public showResult = false;
    get flumeForm() {
      return this.$store.state.flumeForm;
    }
    set flumeForm(value) {
      this.$store.commit('updateFlumeForm', value);
    }
    public onButton() {
      const {up, down} = this.$store.state.floorSectForm;
      const {inlet, outlet} = this.$store.state.transForm;
      const flume = this.$store.state.flumeForm;
      const hydro: HydroCalculator = this.$store.state.hydro;
      if (up.sectType === 'trape') {
        hydro.setUpTrape(
          Number(up.iDen),
          Number(up.n),
          Number(up.b),
          Number(up.m),
        );
      } else {
        hydro.setUpRect(
          Number(up.iDen),
          Number(up.n),
          Number(up.b),
        );
      }
      if (down.sectType === 'trape') {
        hydro.setDownTrape(
          Number(down.iDen),
          Number(down.n),
          Number(down.b),
          Number(down.m),
        );
      } else {
        hydro.setDownRect(
          Number(down.iDen),
          Number(down.n),
          Number(down.b),
        );
      }
      hydro.setFloor(
        Number(inlet.l),
        Number(flume.l),
        Number(outlet.l),
        Number(inlet.n),
        Number(outlet.n),
        Number(inlet.zeta),
        Number(outlet.zeta),
        Number(flume.inletFloor),
      );
      let inletFloor: number;
      [this.flumeInFloor, this.flumeOutFloor, inletFloor, this.outletFloor] = hydro.calcFloor();
      this.showResult = true;
      this.$store.commit('updateLineForm', {
        inletFloor: Number(flume.inletFloor).toFixed(3),
        flumeInFloor: Number(this.flumeInFloor).toFixed(3),
        flumeOutFloor: Number(this.flumeOutFloor).toFixed(3),
        outletFloor: Number(this.outletFloor).toFixed(3),
      });
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