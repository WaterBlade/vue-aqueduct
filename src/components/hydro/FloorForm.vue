<template>
    <el-row>
        <el-row>

          <el-col>
            <el-divider content-position="left">3.1-上游渠道断面参数</el-divider>
            <floor-sect-form/>
          </el-col>

          <el-col>
            <el-divider content-position="left">3.2-下游渠道断面参数</el-divider>
            <floor-sect-form/>
          </el-col>

        </el-row>

        <el-row>
          <el-col>
            <el-divider content-position="left">3.3-进口渐变段参数</el-divider>
            <trans-form/>
          </el-col>

          <el-col>
            <el-divider content-position="left">3.4-出口渐变段参数</el-divider>
            <trans-form/>
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
            <el-button type="primary">底板高程试算</el-button>
            </el-form>
          </el-row>
        </el-col>
        <el-col>
          <el-card>计算结果</el-card>
        </el-col>
      </el-row>
    </el-row>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import FloorSectForm from './floor/FloorSectForm.vue';
import TransForm from './floor/TransForm.vue';
@Component({
    components: {
        'floor-sect-form': FloorSectForm,
        'trans-form': TransForm,
    },
})
export default class FloorForm extends Vue {
    public flumeForm: {
        l?: number,
        inletFloor?: number,
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