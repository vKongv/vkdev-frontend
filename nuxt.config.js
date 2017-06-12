module.exports = {
  /*
  ** Headers of the page
  */
    head: {
        title: 'VK Dev',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/vklogo.ico' },
            { rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Muli:300,400,700|Montserrat:400,400|Special+Elite:300,400,700' },
        ],
    },
    /*
    */
    loading: { color: '#3B8070' },
    css: ['tachyons/css/tachyons.css', '~assets/main.css'],
    router: {
        linkActiveClass: 'active-link'
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLINT on save
        */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
        /*
        ** postcss plugins
        */
        postcss: [
            require('postcss-import')(),
            require('postcss-cssnext')({
                browsers: ['last 2 versions'],
            }),
        ],
    },
};
