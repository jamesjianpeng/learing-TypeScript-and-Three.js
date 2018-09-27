/**
 * @file 路由出口
 * @author jamesjianpeng
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from './default-routes.js';
import globalGuards from './guards.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layoutDefault',
    component: () => import(/* layout-default' */'../layout/default.vue'),
    children: defaultRoutes,
  },
];

const router = new VueRouter({
  routes,
});

globalGuards(router);

export default router;