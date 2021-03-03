import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Top from '../views/Top.vue';
import MediastreamVideoTest from '../views/MediastreamVideoTest.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TOP',
    component: Top,
    meta: {
      title: '',
    },
  },
  {
    path: '/mediastream_video_test',
    name: 'MediastreamVideoTest',
    component: MediastreamVideoTest,
    meta: {
      title: 'Mediastreamを使ったカメラデバイスの表示確認',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
