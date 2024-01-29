// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  plugins: ["~/plugins/preline.client.ts"],
    modules: [
    '@nuxtjs/tailwindcss',
      'nuxt-swiper',
  ],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    }
})
