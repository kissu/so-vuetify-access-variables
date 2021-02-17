module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/global.sass"`,
      },
      scss: {
        additionalData: `@import "@/styles/global.scss";`,
      },
    },
  },
}
