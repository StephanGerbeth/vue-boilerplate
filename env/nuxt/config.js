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
  srcDir: 'src/'
};
