// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "dayjs-nuxt"],
  dayjs: {
    locales: ['hr'], // Croatian locale
    defaultLocale: 'hr', // Set Croatian as the default locale
    defaultTimezone: 'Europe/Zagreb', // Set the default timezone for Croatia
    plugins: ['relativeTime', 'utc', 'timezone'] // Use desired plugins
  },
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
});
