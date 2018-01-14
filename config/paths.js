import { PathResolver } from '@beautiful-code/path-resolver'

let { paths, files } = new PathResolver({
    config: {},
    libs: {},
    node_modules: { _: 'modules' },
    public: {
        css: {},
        js: {}
    },
    src: {
        css: {},
        js: {}
    },
   
})

export {
     paths, files
}