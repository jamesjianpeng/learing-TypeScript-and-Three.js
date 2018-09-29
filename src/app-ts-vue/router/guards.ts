/**
 * @file 全局路由守卫
 * @author jamesjianpeng
*  @todo 路由守卫失败
 * error info"
 *    TS2339: Property 'afterEach' does not exist on type 'object'.
 *    TS2339: Property 'beforeEach' does not exist on type 'object'.
 * 
 *  const globalGuards = function (router:object) {
 *      router.beforeEach((to:object, from:object, next:any) => {
 *          console.log('%c 全局路由 %c - beforeEach', 'background: #5C6BC0; color: #fff;', 'background: #fff; color: #5C6BC0;')
 *          next()
 *      })
 *
 *       router.afterEach((to:object, from:object) => {
 *           console.log('%c 全局路由 %c - afterEach', 'background: #5C6BC0; color: #fff;', 'background: #fff; color: #5C6BC0;')
 *       })
 *   }
 *
 * export default globalGuards
 */

