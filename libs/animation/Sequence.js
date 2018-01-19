import $ from 'jquery'
import { print, info, debug, warn, error } from '@beautiful-code/console-utils'

import { Animation } from './Animation.js'

export class Sequence {
    static registry = {}

    static defaultOptions = {
        delay: 150
    }

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

