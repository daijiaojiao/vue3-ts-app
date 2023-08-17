import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 模块自动引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
      dts: 'src/components.d.ts',
      dirs: [],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
    }),
  ],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      '@': '/src',
    },
  },
})
