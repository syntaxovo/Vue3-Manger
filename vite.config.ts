import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'

import path from "path";  
import { fileURLToPath, URL } from 'node:url'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/front':{
          target:loadEnv('',process.cwd()).VITE_API_URL,
          changeOrigin:true,
          rewrite:(path)=>path.replace(/^\/front/,'/front')
      },
       '/boss':{
         target:loadEnv('',process.cwd()).VITE_API_URL,
         changeOrigin:true,
         rewrite:(path)=>path.replace(/^\/boss/,'/boss')
     }
    }
  },
  plugins: [vue(),
    AutoImport({
      // 实现vue 内置函数的自动引入
      imports:['vue'],
      resolvers: [ElementPlusResolver(),
        IconsResolver(),],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
     
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve:{
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
