import './layers.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CopySkill from './CopySkill.vue'
import Demo from './Demo.vue'
import '@/style.css'
import 'vue-sonner/style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.component('CopySkill', CopySkill)
  },
} satisfies Theme
