import { createSSRApp } from "vue";
import uviewPlus from 'uview-plus'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus)
  // 如此配置即可
  // uni.$u.config.unit = 'rpx'
  return {
    app,
  };
}
