import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'index.ts'),
        config: resolve(__dirname, 'config.ts'),
        withDuxMermaid: resolve(__dirname, 'withDuxMermaid.ts')
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [
        'vue',
        'vitepress',
        /^vitepress\/.*/,
        'minisearch',
        '@vueuse/core',
        '@vueuse/integrations/useFocusTrap',
        'mark.js/src/vanilla.js',
        'focus-trap',
        'vitepress-plugin-mermaid',
        'mermaid'
      ],
      output: [
        {
          format: 'es',
          dir: 'dist/esm',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: __dirname,
          exports: 'named'
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          preserveModulesRoot: __dirname,
          exports: 'named'
        }
      ]
    }
  }
})
