export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nimvio-isomerpages-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,600'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://assets.wogaa.sg/fonts/LibreFranklin/stylesheet.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://d33wubrfki0l68.cloudfront.net/bundles/a2d805a62ec4b6c36f216f1b71743d6d951d48b8.css'},
      // {rel: 'stylesheet', type: 'text/css', href: '/assets/css/blueprint.css'},
      // {rel: 'stylesheet', type: 'text/css', href: '/assets/css/print.scss'},
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.8.3/polyfill.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js'},
      {src: 'https://d33wubrfki0l68.cloudfront.net/bundles/650734f2ff7cf69149ef340cd7618aadc354f5c0.js'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
