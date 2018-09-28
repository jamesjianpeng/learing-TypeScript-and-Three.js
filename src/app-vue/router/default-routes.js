/**
 * @file 默认子路由
 * @author jamesjianpeng
 */
const defaultRoutes = [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "pages-home" */'../pages/home.vue'),
    },
    {
      path: '/sketchpad',
      name: 'sketchpad',
      component: () => import(/* webpackChunkName: "pages-sketchpad" */'../pages/sketchpad.vue'),
    },
  ];
  
  export default defaultRoutes;