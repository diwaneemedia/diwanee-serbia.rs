const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: "Diwanee Serbia",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: "/icon.png"
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      }
    ],
    script: [{
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        type: "text/javascript"
      }
    ],
    noscript: [{
      innerHTML: 'This website requires JavaScript.'
    }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070',
    height: '3px',
    duration: 5000
  },

  /*
   ** Global CSS
   */
  css: [
    '~assets/scss/master.scss'
  ],

  /*
   ** Page transition
   */
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  }
}
