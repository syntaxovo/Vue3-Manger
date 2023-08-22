/*    
  抽离pinia供于维护
  创建pinia实例
*/
import { createPinia } from 'pinia'
// 引入持久化插件
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// 注册持久化插件
pinia.use(persist)

export default pinia
// 在index中统一导出moudules中的仓库文件
export * from './modules/User'
