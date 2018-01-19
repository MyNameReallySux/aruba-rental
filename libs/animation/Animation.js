import $ from 'jquery'
import { print, info, debug, warn, error } from '@beautiful-code/console-utils'

export class Animation {
    static defaultOptions = {
        duration: 0.4,
        delay: 0,
        units: 's'
    }

    constructor(name, options = {}){
        options.name = name
        this.options = Object.assign({}, Animation.defaultOptions, options)
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