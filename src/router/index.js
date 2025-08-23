import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'

const routes = [
  { path: '/', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})