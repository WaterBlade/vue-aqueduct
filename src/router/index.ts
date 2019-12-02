import Vue from 'vue';
import VueRouter from 'vue-router';
import Frame from '@/views/Frame.vue';
import Hydro from '@/views/Hydro.vue';
import Flume from '@/views/Flume.vue';
import SolidPier from '@/views/SolidPier.vue';
import HullPier from '@/views/HullPier.vue';
import Foundation from '@/views/Foundation.vue';
import Pile from '@/views/Pile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Frame,
    children: [
      {
        path: 'hydro',
        name: 'hydro',
        component: Hydro,
      },
      {
        path: 'flume',
        name: 'flume',
        component: Flume,
      },
      {
        path: 'solid-pier',
        name: 'solid-pier',
        component: SolidPier,
      },
      {
        path: 'hull-pier',
        name: 'hull-pier',
        component: HullPier,
      },
      {
        path: 'foundation',
        name: 'foundation',
        component: Foundation,
      },
      {
        path: 'pile',
        name: 'pile',
        component: Pile,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
