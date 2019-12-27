<template>
    <div>
        <el-form :model="flume" label-width="120px">
            <el-form-item label="槽身净宽(m)" >
                <el-input v-model="flume.B"/>
            </el-form-item>
            <el-form-item label="槽身净高(m)" >
                <el-input v-model="flume.H"/>
            </el-form-item>
            <el-form-item label="槽身总长(m)" >
                <el-input v-model="flume.L"/>
            </el-form-item>
            <el-form-item label="单侧端部长(m)" >
                <el-input v-model="flume.Le"/>
            </el-form-item>
            <el-form-item label="单侧过渡段长(m)" >
                <el-input v-model="flume.Lt"/>
            </el-form-item>
            <el-form-item label="分缝宽(m)" >
                <el-input v-model="flume.wg"/>
            </el-form-item>
            <el-form-item label="槽壁厚(m)" >
                <el-input v-model="flume.tw"/>
            </el-form-item>
            <el-form-item label="底板厚(m)" >
                <el-input v-model="flume.tb"/>
            </el-form-item>
            <el-form-item label="端部槽壁厚(m)" >
                <el-input v-model="flume.ew"/>
            </el-form-item>
            <el-form-item label="端部底板厚(m)" >
                <el-input v-model="flume.eb"/>
            </el-form-item>
            <el-form-item label="倒角(m)" >
                <el-input v-model="flume.c"/>
            </el-form-item>
            <el-form-item label="顶梁外挑距离(m)" >
                <el-input v-model="flume.a"/>
            </el-form-item>
            <el-form-item label="顶梁外挑直高(m)" >
                <el-input v-model="flume.h"/>
            </el-form-item>
            <el-form-item label="顶梁外挑斜高(m)" >
                <el-input v-model="flume.s"/>
            </el-form-item>
            <el-form-item label="拉杆高(m)" >
                <el-input v-model="flume.t"/>
            </el-form-item>
            <el-form-item label="拉杆间距(m)" >
                <el-input v-model="flume.ts"/>
            </el-form-item>
            <el-button type="primary" @click="onButton">生成结构图</el-button>
        </el-form>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { FlumeDraw } from 'aqueduct';
@Component
export default class Flume extends Vue {
    public flume = {
        B: '',
        H: '',
        L: '',
        Le: '',
        Lt: '',
        wg: '',
        tw: '',
        tb: '',
        ew: '',
        eb: '',
        c: '',
        a: '',
        h: '',
        s: '',
        t: '',
        ts: '',
    };
  public onButton() {
    const loading = (this as any).$loading({
      lock: true,
      text: '正在生成算稿',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });
    const hydro = new FlumeDraw();
    hydro.B = Number(this.flume.B);
    hydro.H = Number(this.flume.H);
    hydro.L = Number(this.flume.L);
    hydro.Le = Number(this.flume.Le);
    hydro.Lt = Number(this.flume.Lt);
    hydro.wg = Number(this.flume.wg);
    hydro.tw = Number(this.flume.tw);
    hydro.tb = Number(this.flume.tb);
    hydro.ew = Number(this.flume.ew);
    hydro.eb = Number(this.flume.eb);
    hydro.c = Number(this.flume.c);
    hydro.a = Number(this.flume.a);
    hydro.h = Number(this.flume.h);
    hydro.s = Number(this.flume.s);
    hydro.t = Number(this.flume.t);
    hydro.ts = Number(this.flume.ts);
    hydro.draw();
    loading.close();
  }
}
</script>