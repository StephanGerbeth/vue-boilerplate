module.exports = {
  build: {
    analyze: true,
    babel: {
      presets: [
        ['vue-app', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]
      ]
    }
  },

  dev: (process.env.NODE_ENV !== 'production'),
  srcDir: 'src/',
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'application-name', content: '&nbsp;'},
      {name: 'msapplication-TileColor', content: '#FFFFFF'},
      {name: 'msapplication-TileImage', content: 'favicon/mstile-144x144.png'},
      {name: 'msapplication-square70x70logo', content: 'favicon/mstile-70x70.png'},
      {name: 'msapplication-square150x150logo', content: 'favicon/mstile-150x150.png'},
      {name: 'msapplication-wide310x150logo', content: 'favicon/mstile-310x150.png'},
      {name: 'msapplication-square310x310logo', content: 'favicon/mstile-310x310.png'}
    ],
    link: [
      {rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: 'favicon/apple-touch-icon-57x57.png'},
      {rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: 'favicon/apple-touch-icon-114x114.png'},
      {rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: 'favicon/apple-touch-icon-72x72.png'},
      {rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: 'favicon/apple-touch-icon-144x144.png'},
      {rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: 'favicon/apple-touch-icon-60x60.png'},
      {rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: 'favicon/apple-touch-icon-120x120.png'},
      {rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: 'favicon/apple-touch-icon-76x76.png'},
      {rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: 'favicon/apple-touch-icon-152x152.png'},
      {rel: 'icon', sizes: '196x196', type: 'image/png', href: 'favicon/favicon-196x196.png'},
      {rel: 'icon', sizes: '96x96', type: 'image/png', href: 'favicon/favicon-96x96.png'},
      {rel: 'icon', sizes: '32x32', type: 'image/png', href: 'favicon/favicon-32x32.png'},
      {rel: 'icon', sizes: '16x16', type: 'image/png', href: 'favicon/favicon-16x16.png'},
      {rel: 'icon', sizes: '128x128', type: 'image/png', href: 'favicon/favicon-128.png'},
      {rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon//favicon.ico'}
    ]
  }
};
