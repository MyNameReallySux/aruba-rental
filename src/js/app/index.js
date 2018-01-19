let $, Parallax, Luminous
import { App } from './app'
import { ConsoleUtils } from '@beautiful-code/console-utils'

import {
    handleAnimations,
    handleLightbox,
    handleParallax,
    handleOwlCarousel,
    handleScroller,
    handleStickyElements,
    loadImages,
    loadSVGs
} from './functions'

const main = async () => {
    /* #############################
		Load Vendor Modules
    ############################## */
    $ = await import(/* webpackChunkName: "vendor" */ '@modules/jquery')
    await import(/* webpackChunkName: "vendor" */ '@modules/owl.carousel')
    Parallax = await import(/* webpackChunkName: "vendor" */ '@modules/parallax-scroll')
    Luminous = await import(/* webpackChunkName: "vendor" */ '@libs/Luminous')
    let { Scroller } = await import(/* webpackChunkName: "vendor" */ '@libs/Scroller')
    let { AnimationFactory } = await import(/* webpackChunkName: "vendor" */ '@libs/Animation')

    let app = new App({
        defer: true,
        jquery: $,
        imports: {
            Parallax, Luminous, Scroller, AnimationFactory
        }
    })

    app.onReady = function(imports) {
        loadImages(imports)
        loadSVGs(imports)
        handleOwlCarousel(imports)
        handleScroller(imports)
        handleStickyElements(imports)
        handleParallax(imports)
        handleLightbox(imports)
    }

    app.onInstantaneousScroll = function(imports) {
        handleStickyElements(imports)
    }

    app.init()
}

main()