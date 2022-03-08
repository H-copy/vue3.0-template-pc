import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'

const resolvePath = <P extends string>(p: P) => path.resolve(__dirname, p)
const ROOT_PATH = resolvePath('./src')
const joinPath = (...args: string[]) => path.join(ROOT_PATH, ...args)
const ELEMNET_PLUS_RESOLVER = ElementPlusResolver()

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
       resolvers: [ELEMNET_PLUS_RESOLVER]
    }),
    Components({
      resolvers: [ELEMNET_PLUS_RESOLVER]
    })
  ],
  resolve: {
    alias: {
      '@': ROOT_PATH,
      '@sty': joinPath('/style'),
      '@ass': joinPath('/assets'),
      '@cmps': joinPath('/components') 
    }
  }
})
