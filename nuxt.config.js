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
    }],
    noscript: [{
      innerHTML: 'This website requires JavaScript.'
    }],
    script: [
      // {
      //     type: "text/javascript",
      //     async: true,
      //     src: "https://connect.facebook.net/en_US/fbevents.js"
      //   },
      //   {
      //     type: "text/javascript",
      //     async: true,
      //     src: "https://www.google-analytics.com/analytics.js"
      //   },
      //   {
      //     type: "text/javascript",
      //     id: "facebook-jssdk",
      //     src: "https://connect.facebook.net/en_US/sdk.js"
      //   },
      //   {
      //     type: "text/javascript",
      //     async: true,
      //     src: "https://www.googletagmanager.com/gtm.js?id=GTM-5W2CLW"
      //   },
      //   {
      //     type: "text/javascript",
      //     async: true,
      //     src: "https://connect.facebook.net/signals/config/837271083056525?v=2.8.30&r=stable"
      //   },
      // {
      //   type: "text/javascript",
      //   content: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date.getTime(), event: 'gtm.js'});var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src ='//www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', 'GTM-5W2CLW');"
      // }
    ],
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
    // vendor:['~/assets/js/UnityLoader.js'],
  }
}
