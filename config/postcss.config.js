module.exports = {
    plugins: {
        'postcss-import': {
            from: 'src/css'
        },
        // 'postcss-map': {
        //     maps: tokens.map((name) => getToken(name))
        // },
        'postcss-mixins': {},
        'postcss-custom-media': {},
        'postcss-font-magician': {},
        'postcss-conditionals': {},
        'postcss-easing-gradients': {},
        'postcss-custom-selectors': {},
        'postcss-at-rules-variables': {},    
        'postcss-for': {},
        'postcss-each': {},
        'postcss-nested': {},       
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
            // features: {
            //     customProperties: {
            //         preserve: true
            //     }
            // }
        },
    }
}