import $ from 'jquery'
import { print, info, debug, warn, error } from '@beautiful-code/console-utils'

import { Animation } from './Animation.js'
import { Sequence } from './Sequence.js'


export class AnimationFactory {
    static ANIMATIONS = {
        FADE_IN_FROM_LEFT: 'fade-in-from-left',
        FADE_IN_FROM_LEFT: 'fade-in-from-bottom',
    }

    static defaultConfigOptions = {
		offset: 0,
		duration: 0.4,
		delay: 150
	}

    static isSupportedAnimation = (name, options) => Object.values(AnimationFactory.ANIMATIONS).includes(name)

    static makeAnimation = (name, options) => {
        if(!AnimationFactory.isSupportedAnimation) warn(`'${name}' is a potentially unsupported animation.`)
        return new Animation(name, options)
    }

    static makeBasicAnimation = (selector, name, config = {}) => {
		let { offset, duration } = Object.assign({}, AnimationFactory.defaultConfigOptions, config)
		let animation = AnimationFactory.makeAnimation(name, { duration })
		return {
			selector, offset, 
			onInitElement: ($element) => animation.prepare($element),
			onBottomIn: ($element) => Animation.trigger($element)
		}
    }
    
    static makeSequentialAnimation = (selectors, name, sequenceName, config = {}) => {
		print(config)
		print(AnimationFactory.defaultConfigOptions)
		let { offset, duration, delay } = Object.assign({}, AnimationFactory.defaultConfigOptions, config)
		let selector, childSelector
		print(offset)
		if(Array.isArray(selectors)){
			([selector, childSelector] = selectors)
		} else {
			selector = childSelector = selectors
		}
		let animation = AnimationFactory.makeAnimation(name, { duration })
		return {
			selector, offset,
			onInit: ($element) => {
				print(`Init '${sequenceName}' sequence`)
				let $elements = childSelector == selector 
					? $element
					: $element.find(childSelector)
				let sequence = new Sequence(sequenceName, animation)
				sequence.prepare($elements)
			},
			onBottomIn: ($element) => {
				print(`Trigger '${sequenceName}' sequence`)
				Sequence.trigger(sequenceName, delay)
			}
		}
	}
}

