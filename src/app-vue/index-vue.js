import Vue from 'vue';
import app from './app.vue';
import router from './router';
/**
 * 生成一个 id 为 app 的元素插入到 body 中，在最后一个元素的前面
 * @param none
 * @returns {string} id名字：'#app'
 */
const createAppId = function() {
    const scriptTag = document.body.lastChild;
    const app = document.createElement('div');
    app.id = 'app';
    document.body.insertBefore(app, scriptTag);
    return '#' + app.id;
};

/**
 * @todo https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6
 * 第二种方式需要编译
 * 在 ./webpack/webapck.vue.conf.js 中的配置如下
 * ...
 *    resolve: {
 *        alias: {
 *           'vue$': 'vue/dist/vue.esm.js'
 *        }
 *    }
 * ...
 */
new Vue({
    router,
    el: createAppId(),
    template: `<div>
                    <app />
               </div>`,
    components:{
      app
    }
});

/**
 * @todo https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6
 * 第二种方式需要编译
 * 不需要编译器
 * new Vue({
 *     el: createAppId(),
 *     render: (h) => h(app),
 * });
 */
