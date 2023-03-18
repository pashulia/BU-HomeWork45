import { createApp } from 'vue';

import components from '@/components';

import App from './App.vue';

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app')
