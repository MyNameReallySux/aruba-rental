import $ from 'jquery'
import { print, info, debug, warn, error } from '@beautiful-code/console-utils'

export class Scroller {
    static guid = 0
    static registry = {}
    static lastScrollPos = 0
    static defaultOptions = {
        offset: 0,
        topOffset: 0,
        bottomOffset: 0,

        onInit: () => {},
        onInitElement: () => {},
        onScroll: () => {},
        onScrollDown: () => {},
        onScrollUp: () => {},

        onTopIn: () => {},
        onTopOut: () => {},
        onBottomIn: () => {},
        onBottomOut: () => {}
    }

    constructor(options = []){
        this.initializeConfig(options)
        $(window).on('scroll resize load', (e) => {
            this.handleScrollEvent(e)
        })
    }

    static _addToRegistry = ($element, config) => {
        let guid = Scroller._getNewGuid()
        Scroller.registry[guid] = {
            $element, guid,
            triggered: {
                topIn: false,
                topOut: false,
                bottomIn: false,
                bottomOut: false
            },
            data: {},
            ...config
        }
    }

    static _getNewGuid = () => {
        let guid = Scroller.guid
        Scroller.guid++
        return guid
    }

    static _getScrollDetails = () => {
        let pos = $(window).scrollTop()
        let direction = pos > Scroller.lastScrollPos ? 'down' : 'up'
        let delta =  Math.abs(Scroller.lastScrollPos - pos)
        let lastPos = Scroller.lastScrollPos

        return { pos, direction, delta, lastPos }
    }

    static _getElementDetails = ($element) => {
        let height = $element.outerHeight()
        let top = $element.offset().top
        let bottom = top + height

        return { top, bottom, height }
    }

    static _getElementVisibleDetails = ($element, elementPos, scrollPos, offset) => {
        let { top, bottom, height } = elementPos
        let { pos, direction, delta } = scrollPos

        let viewportHeight = $(window).height()

        let partialFromTop = pos <= (top + height - offset)
        let partialFromBottom = (pos + viewportHeight) >= (top + offset)

        let fullFromTop = pos <= (top - offset)
        let fullFromBottom = (pos + viewportHeight) >= (top + height + offset)

        return {
            partial: {
                fromTop: partialFromTop,
                fromBottom: partialFromBottom,
                inBounds: partialFromTop && partialFromBottom
            },
            full: {
                fromTop: fullFromTop,
                fromBottom: fullFromBottom,
                inBounds: partialFromTop && partialFromBottom
            },
            viewport: {
                height: viewportHeight
            },
        }
    }

    initializeConfig = (options) => {
        options.map((config) => {
            config = Object.assign({}, Scroller.defaultOptions, config)

            let { 
                selector, offset, topOffset, bottomOffset, onInitElement, onInit
            } = config

            try {
                if(!selector) throw new TypeError(`Scroller selector '${selector}' was either blank or invalid, must be a {String}`);
                let $selection = $(selector)

                if($selection.length <= 0) warn(`Scroller selector '${selector}' found no reference element.`)
                if($selection.length > 1) warn(`Scroller selector '${selector}' found more than 1 reference element, using first element.`)

                onInit($selection)
                if($selection.length == 1){
                    onInitElement($selection)
                    Scroller._addToRegistry($selection, config)
                    
                } else if($selection.length > 1){
                    $selection.each((i, element) => {
                        let $element = $(element)
                        onInitElement($element)
                        Scroller._addToRegistry($element, config)
                        
                    })
                }
            } catch (err){
                error(err.message)
            }
        })
    }

    handleScrollEvent = (e) => {
        let scrollPos = Scroller._getScrollDetails()
        Object.values(Scroller.registry).map((entry) => {
            let { 
                $element, selector, triggered,
                onScroll, onScrollUp, onScrollDown,
                onTopIn, onTopOut, onBottomIn, onBottomOut,
                offset, topOffset, bottomOffset
            } = entry

            let elementPos = Scroller._getElementDetails($element)
            let elementVis = Scroller._getElementVisibleDetails($element, elementPos, scrollPos, offset)

            let callbackArgs = { elementPos, scrollPos, offset }
            let { partial, full, viewport } = elementVis

            entry.data = {
                pos: elementPos,
                visible: elementVis
            }

            if(onScroll){
                if(partial.inBounds){
                    onScroll($element, callbackArgs)
                }
            }

            if(scrollPos.direction == 'up'){
                callbackArgs.offset = offset

                let shouldFireOnTopIn = scrollPos.pos >= (elementPos.bottom - offset)
                let notTriggeredOnTopIn = !triggered.topIn
                if(shouldFireOnTopIn && notTriggeredOnTopIn){
                    onTopIn($element, callbackArgs)
                    triggered.topIn = true
                }

                
                let shouldFireOnBottomOut = (scrollPos.pos + viewport.height) >= (elementPos.bottom - offset)
                let notTriggeredOnBottomOut = !triggered.bottomOut
                if(shouldFireOnBottomOut && notTriggeredOnBottomOut){
                    onBottomOut($element, callbackArgs)
                    triggered.bottomOut = true
                }

                if(onScrollUp){
                    if(partial.inBounds){
                        onScrollUp($element, callbackArgs)
                    }
                   
                } 
            }

            if(scrollPos.direction == 'down'){
                offset = bottomOffset ? bottomOffset : offset
                callbackArgs.offset = offset

                let shouldFireOnTopOut = scrollPos.pos >= (elementPos.top - offset)
                let notTriggeredOnTopOut = !triggered.topOut
                if(shouldFireOnTopOut && notTriggeredOnTopOut){
                    onTopOut($element, callbackArgs)          
                    triggered.topOut = true
                }

                let shouldFireOnBottomIn = (scrollPos.pos +  viewport.height) >= (elementPos.bottom - offset)
                let notTriggeredOnBottomIn = !triggered.bottomIn
                if(shouldFireOnBottomIn && notTriggeredOnBottomIn){
                    onBottomIn($element, callbackArgs)
                    triggered.bottomIn = true
                }

                if(onScrollDown){
                    if(partial.inBounds){
                        onScrollDown($element, callbackArgs)
                    }
                } 
            }
        })

        Scroller.lastScrollPos = scrollPos.pos
    }
}