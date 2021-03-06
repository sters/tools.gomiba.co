import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Top from '../views/Top.vue';
import MediastreamVideoTest from '../views/MediastreamVideoTest.vue';
import QuickRetrospective from '../views/QuickRetrospective.vue';

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
      title: 'Mediastreamを使ったカメラデバイスの表示テスト',
    },
  },
  {
    path: '/quick_retrospective',
    name: 'QuickRetrospective',
    component: QuickRetrospective,
    meta: {
      title: 'クイック振り返りツール',
      draft: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

const DEFAULT_TITLE = 'tools.gomiba.co';
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title !== '' ? `${to.meta.title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  });
});

export default router;
