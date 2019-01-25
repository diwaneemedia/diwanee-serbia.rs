const pkg = require('./package')

module.exports = {
  server: {
    host: "192.168.0.143",
    port: 3333
  },
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
        hid: 'og:title',
        property: 'og:title',
        content: "Diwanee Serbia"
      },
      {
        hid: "og:image",
        property: 'og:image',
        content: "http://www.diwanee-serbia.rs/og/hp-banner-twitt-fb.png"
      },
      {
        hid: "og:image:width",
        property:"og:image:width",
        content:"606"
      },
      {
        hid: "og:image:height",
        property:"og:image:height",
        content:"322"
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "diwanee-serbia"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Digital Media Company - We are building the future of digital media. We are gamers, developers, designers, thinkers."
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: "website"
      },

      {
        hid: "og:url",
        property:"og:url",
        content:"http://www.diwanee-serbia.rs"
      },
      {
        hid: "twitter:card",
        property:"twitter:card",
        content:"summary_large_image"
      },
      {
        hid: "twitter:title",
        property:"twitter:title",
        content:"Diwanee Serbia"
      },
      {
        hid: "twitter:description",
        property:"twitter:description",
        content:"Digital Media Company - We are building the future of digital media. We are gamers, developers, designers, thinkers."
      },
      {
        hid:"twitter:image",
        property:"twitter:image",
        content: "http://www.diwanee-serbia.rs/og/hp-banner-twitt-fb.png"
      },
      {
        hid: "twitter:site",
        property:"twitter:site",
        content:"@diwaneeserbia"
      },
      {
        hid: "twitter:url",
        property:"twitter:url",
        content:"http://www.diwanee-serbia.rs"
      },
      {
          hid: 'robots',
          name: 'robots',
          content: "index, nofollow"
      },
      {
          hid: 'cannonical',
          name: 'cannonical',
          content: "http://www.diwanee-serbia.rs"
      },
      {
          hid: 'author',
          name: 'author',
          content: pkg.author
      },
      {
          name: 'copyright',
          content: "Diwanee Serbia Copyright (c) 2019"
      }
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
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        type: "text/javascript"
      },
      {
        src:"/head.js",
        // body:true
      },


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
          exclude: /(node_modules)/,
          options: {
            fix:true
          }
        })
      }
    },
  }
}
