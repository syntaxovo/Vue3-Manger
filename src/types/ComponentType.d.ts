// 为vue 组件声明组件类型
// declare module 'vue' {
//   interface GlobalComponents {
 
//   }
// }
/* 
    给全局组件提供类型
    1 写一个类型声明文件，declare module 'vue' 声明一个vue类型模块
    2 然后interface GlobalComponents书写全局组件的类型
    3 key 组件名称，value 是组件类型。通过typeof组件实例得到
 */
