import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // ここでVuetifyのプラグインをインポートします

createApp(App).use(vuetify).mount('#app')
