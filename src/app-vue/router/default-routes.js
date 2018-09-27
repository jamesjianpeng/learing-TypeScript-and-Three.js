/**
 * @file 默认子路由
 * @author jamesjianpeng
 */
const defaultRoutes = [
    {
      path: '/home',
      name: 'home',
      component: () => import(/*webpack Chunckname: pages-home */'../pages/home.vue'),
    },
    {
      path: '/sketchpad',
      name: 'sketchpad',
      component: () => import(/*webpack Chunckname: pages-sketchpad */'../pages/sketchpad.vue'),
    },
  ];
  
  export default defaultRoutes;