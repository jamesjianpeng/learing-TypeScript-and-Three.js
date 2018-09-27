/**
 * @file 全局路由守卫
 * @author jamesjianpeng
 */
const globalGuards = function (router) {
    router.beforeEach((to, from, next) => {
        console.log('%c 全局路由 %c - beforeEach', 'background: #5C6BC0; color: #fff;', 'background: #fff; color: #5C6BC0;')
        next()
    })

    router.afterEach((to, from) => {
        console.log('%c 全局路由 %c - afterEach', 'background: #5C6BC0; color: #fff;', 'background: #fff; color: #5C6BC0;')
    })
}

export default globalGuards