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
    <el-row>
        <el-col>
            <el-row>
            <el-form label-width="180px">
                <el-form-item label="槽身进口底板高程(m)">
                    <el-input/>
                </el-form-item>
                <el-form-item label="槽身出口底板高程(m)">
                    <el-input/>
                </el-form-item>
                <el-form-item label="下游渠道底板高程(m)">
                    <el-input/>
                </el-form-item>
            </el-form>
            </el-row>
            <el-row>
            <el-button type="primary">水面线推算</el-button>
            </el-row>
        </el-col>
        <el-col>
            <el-card>计算结果</el-card>
        </el-col>
    </el-row>
    <el-divider content-position="left">
      <b>5</b>-渡槽水力学计算算稿
    </el-divider>
    <el-row>
        <el-col>
            <el-button type="primary">生成算稿</el-button>
        </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import SectForm from '@/components/hydro/SectForm.vue';
import HeightForm from '@/components/hydro/HeightForm.vue';
import FloorForm from '@/components/hydro/FloorForm.vue';

@Component({components: {
    'sect-form': SectForm,
    'height-form': HeightForm,
    'floor-form': FloorForm,
}})
export default class Hydro extends Vue {
    public floorForm: {
        up: {
            sectType?: 'rect'|'trape',
            iDen?: number,
            n?: number,
            b?: number,
            m?: number,
        },
        down: {
            sectType?: 'rect'|'trape',
            iDen?: number,
            n?: number,
            b?: number,
            m?: number,
        },
        inlet: {
            l?: number,
            zeta?: number,
            n?: number,
        },
        outlet: {
            l?: number,
            zeta?: number,
            n?: number,
        },
        flume: {
            l?: number,
            inletFloor?: number,
        },
    } = {
        up: {},
        down: {},
        inlet: {},
        outlet: {},
        flume: {},
    };
    public lineForm: {
        inFlumeFloor?: number,
        outFlumeFloor?: number,
        outletFloor?: number,
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