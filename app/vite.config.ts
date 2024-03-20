import { resolve } from 'path'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from '@solidjs/start/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@interfaces': resolve(__dirname, './src/interfaces'),
                '@components': resolve(__dirname, './src/components'),
                '@routes': resolve(__dirname, './src/routes'),
                '@pages': resolve(__dirname, './src/pages'),
                '@styles': resolve(__dirname, './src/styles'),
                '@config': resolve(__dirname, './src/config'),
                '@src': resolve(__dirname, './src'),
                '@assets': resolve(__dirname, './assets'),
                '@hooks': resolve(__dirname, './src/utils/hooks'),
                '@store': resolve(__dirname, './src/store'),
                '@context': resolve(__dirname, './src/context'),
                '@static': resolve(__dirname, './src/static'),
                '@utils': resolve(__dirname, './src/utils'),
            },
        },
    },
})
