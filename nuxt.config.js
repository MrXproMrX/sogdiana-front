export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sogdiana',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Цены гостиницы Самарканда на сайте. Забронируйте прямо сейчас! Лучшие цены. Высокое качество. Сауна, крытый бассейн в Самарканде в нашем отеле.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css", integrity:"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}
    ]
  },

  loading: {
    continuous: true,
    color: '#f1ca29',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins:[
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/strapi'
  ],

  i18n: {
    locales: [
      {
        code: 'ru',
        file: 'ru.json'
      },
      {
        code: 'en',
        file: 'en.json'
      },
    ],
    lazy: true,
    langDir: '~/locales/',
    defaultLocale: 'ru'
  },

  strapi: {
    entities: [
      { name: 'home', type: 'single' }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://sogdianahotel.uz:2118/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
