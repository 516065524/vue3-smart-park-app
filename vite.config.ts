import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  envDir: resolve(__dirname, 'config'),
  resolve: {
      // 配置别名
      alias: {
          '@': resolve(__dirname, 'src')
      }
  },
  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 8080
  }
});
