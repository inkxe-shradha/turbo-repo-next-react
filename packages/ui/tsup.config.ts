import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['./**/*.tsx'],
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    format: ['esm'],
    minify: true,
    dts: true,
    external: ['react']
})