<template lang="html">
    <div class="app">
      app hello TypeScript and Vue cool !!!q@#_#@p~~
      <button type="button" @click="alertMsg" name="button">click</button>
      <router-view></router-view>
    </div>
</template>

<script lang="ts">
// @ts-check

// 第三种方式 开发环境下：报特殊字符错误：@
// import { Vue, Component, Prop } from "vue-property-decorator";
//
// @Component({})
//
// export default class App extends Vue {
//     @Prop() name!: string;
//
//     number: number = 0
//
//     increment() {
//         this.number++;
//     }
//
//     get exclamationMarks(): string {
//         return Array(this.number + 1).join('!');
//     }
// }

// 第二种方式 开发环境下：报特殊字符错误：@
// import Vue from 'vue'
// import Component from 'vue-class-component'
//
// @Component
// export default class App extends Vue {
//     // 初始化数据
//     msg = 123
//
//     // 声明周期钩子
//     mounted () {
//         this.greet()
//     }
//
//     // 计算属性
//     get computedMsg () {
//         return 'computed ' + this.msg
//     }
//
//     // 方法
//     greet () {
//         alert('greeting: ' + this.msg)
//     }
// }

// 第一种方式
// export default {
//       name: 'app',
//       data () {
//           return {
//               number: 0
//           }
//       },
//       computed: {
//           exclamationMarks() {
//               return Array(this.number + 1).join('10');
//           }
//       },
//       methods: {
//           alertMsg(msg) {
//               alert(msg || 'default')
//           },
//           increment() {
//               this.number = '10'
//               this.number++;
//           }
//       }
// }
import Vue from "vue";

// 通过 Vue.extend 启用 TypeScript 类型推断
export default Vue.extend({
  data() {
    return {
      msg: 'Hello,Webpack'
    }
  },
  methods: {
      alertMsg(msg:string):void {
          alert(msg || 'default')
      }
  }
});
</script>

<style lang="scss">
.app {
    font-size: 20px;
    color: #eee;
}
</style>
