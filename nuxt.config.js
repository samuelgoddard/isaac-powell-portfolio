const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Isaac Powell',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    bodyAttrs: {
      class: 'transition',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  webfontloader: {
    typekit: { id: 'jnr4hbb' }
  },

  router: {
    linkExactActiveClass: 'current'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~plugins/vue-mouse-parallax.js',
    ssr: true
  }, {
    src: '~plugins/vue-mq.js',
    ssr: true
  }, {
    src: '~plugins/vue-intersect.js',
    ssr: true
  }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
