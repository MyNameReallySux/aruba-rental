import $ from 'jquery'
import { print, info, debug, warn, error } from '@beautiful-code/console-utils'

export class Animation {
    constructor(name, options = {}){
        options.name = name
        this.options = Object.assign({}, options, Animation.defaultOptions)
    }

    static ANIMATIONS = {
        FADE_IN: 'fade-in',
        FADE_OUT: 'fade-out'
    }

    static defaultOptions = {
        duration: 0.4,
        delay: 0,
        units: 's'
    }

    static makeAnimation = (name, options) => {
        let isSupportedAnimation = Object.values(Animation.ANIMATIONS).includes(name)
        if(!isSupportedAnimation) warn(`'${name}' is a potentially unsupported animation.`)

        return new Animation(name, options)
    }

    prepare = ($element) => {
        let { name, delay, duration, units } = this.options
        $element.attr('data-animate', name)
        $element.css('animation-duration', `${duration}${units}`)
        if(delay != 0) $element.css('animation-delay', `${delay}${units}`)
        $element.addClass('prepared')
    }

    static trigger = ($element) => {
        $element.removeClass('prepared')
    }
}

export class Sequence {
    static registry = {}

    constructor(name, animation, options = {}){        
        this.options = { name, animation, ...options }
    }

    prepare = ($elements) => {
        let { name, animation } = this.options
        Sequence._addToRegistry($elements, name)
        $elements.each((i, element) => {
            let $element = $(element)
            this.prepareElement($element, name, animation)
        })
    }

    prepareElement = ($element, name, animation) => {
        $element.attr('data-sequence', name)
        animation.prepare($element)
    }

    static _addToRegistry = ($elements, name, config) => {
        print(`adding ${name} elements to registry`)
        print($elements)
        Sequence.registry[name] = {
            $elements, name,
            data: {}, 
            ...config
        }
    }

    static trigger(name, delay = 150){
        let { $elements } = Sequence.registry[name]
        $elements.each((i, element) => {
            let $element = $(element)
            setTimeout(() => {
                Animation.trigger($element)
            }, delay * i)
        })
    }

    trigger = (delay = 150) => {
        let { name } = this.options
        Sequence.trigger(name, delay)
    }
}