import Vue from 'vue';
import app from './app.vue';

const createAppId = function() {
    const scriptTag = document.body.lastChild;
    const app = document.createElement('div');
    app.id = 'app';
    document.body.insertBefore(app, scriptTag);
    return '#' + app.id;
};
console.log(createAppId())
new Vue({
    el: createAppId(),
    render: (h) => h(app),
});
