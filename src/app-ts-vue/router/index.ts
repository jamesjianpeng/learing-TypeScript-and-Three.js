/**
 * @file 路由出口
 * @author jamesjianpeng
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from './default-routes.ts';

/**
 * @todo 路由守卫失败
 * error info"
 *    TS2339: Property 'afterEach' does not exist on type 'object'.
 *    TS2339: Property 'beforeEach' does not exist on type 'object'.
 * 
 * import globalGuards from './guards.ts';
 * globalGuards(router);
 * 
 */

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layoutDefault',
    beforeEnter: (to:object, from:object, next:any) => {
        console.log('%c 路由组件中特有的钩子 %c - beforeEach', 'background: #5C6BC0; color: #fff;', 'background: #fff; color: #5C6BC0;')
        next();
    },
    component: () => import(/* webpackChunkName: "layout-default" */'../layout/default.vue'),
    children: defaultRoutes,
  },
];

const router = new VueRouter({
  routes
});

export default router;