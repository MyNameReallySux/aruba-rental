export const handleParallax = ({ $, Parallax }) => {
	const parallax = new Parallax('[data-parallax]')
	parallax.animate({
		speed: 0.5
	})
}

export const handleLightbox = ({ $, Luminous }) => {
	let luminous = []
	$('[data-lightbox]').each((i, item) => {
		let caption = $(item).attr('data-caption')
		let options = { caption }
		luminous = [...luminous, new Luminous(item, options)]
	})
}

export const handleOwlCarousel = ({ $ }) => {
	let carousels = {
		main: $('[data-carousel="main"]').owlCarousel({
			items: 1
		}),
		amenities: $('[data-carousel="amenities"]').owlCarousel({
			responsive: {
				0: {
					items: 1,
					autoplay: true,
					nav: false,
					dots: true
				},
				768: {
					items: 3,
					nav: true,
					navText: [
						'<i class="fas fa-angle-left"></i>',
						'<i class="fas fa-angle-right"></i>'
					],
					stagePadding: 64
				}
			}
			
		}),
		places: $('[data-carousel="places"]').owlCarousel({
			items: 2,
			nav: true,
			navText: [
				'<i class="fas fa-angle-left"></i>',
				'<i class="fas fa-angle-right"></i>'
			],
			stagePadding: 64,
		})
	}
}

export const handleStickyElements = ({ $ }, customSelectors = []) => {
	let selectors = [
		'.sticky',
		'[data-sticky]',
		...customSelectors
	]

	let $elements = $(selectors.join(', '))
	$elements.each((i, element) => {
		let $element = $(element)
		handleSticky($element, $element.attr('data-sticky') || 0)
	})
}

const handleSticky = ($element) => {
	const buffer = 5;
	let offset = $window.scrollTop()
	let position = $element.position().top
	if(offset > position){
		$element.addClass('is-stuck');
	} else {
		$element.removeClass('is-stuck');
	}
}

export const loadSVGs = ({ $ }) => {
	const $svgs = $('[data-svg]')
	$svgs.each(function(i, element){
		let $svg = $(element)
		let src = $svg.attr('data-svg')
		$.ajax({
			url: src,
			success: function(data){
				if (data.childNodes.length > 0) { //should be one, _could_ be more
					$svg.append(data.childNodes[0]);
				} else {
					console.log('invalid SVG');
				}
			},
			error: function(data) {
				console.error('Error loading SVG!');
			}
		})
	})
}

export const loadImages = ({ $ }) => {
	const $images = $('[data-src]')
	$images.each(function(i, element){
		let $image = $(element)
		let src = $image.attr('data-src')

		let $sources = $image.find('source')
		if($sources){
			$sources.each(function(j, source){
				let $source = $(source)
				let media = $source.attr('media')
				let srcset = $source.attr('srcset')

				if(window.matchMedia(media).matches){
					console.log(media, 'matches, loading', srcset);
					src = srcset
				}

				return false
			})
		}

		if($image.is('div')){
			$image.css('background-image', `url(${src}`)
		} else {
			$image.attr('src', src)
		}
		$image.removeAttr('data-src');
	})
}

export const handleScroller = ({ $, Animation, Sequence, Scroller }) => {
	// let fadeInSequentiallyOnInit = (selector, duration = 'default', delay = 100, initialDelay = 400) => {
	// 	let animationIndex = 0
	// 	return {
	// 		selector,
	// 		onInitialize: ($element) => {
	// 			setTimeout(() => {
	// 				$element.removeClass('prepared')
	// 			}, animationIndex * delay + initialDelay)
	// 			animationIndex++
	// 		},
	// 		onBottomIn: ($element) => {
	// 			$element.removeClass('prepared')
	// 		}
	// 	}
	// }

	// let fadeInFromLeft = (selector, duration = 'default', offset = 0) => {
	// 	return {
	// 		selector, offset,
	// 		onInitialize: ($element) => {
	// 			$element.attr('data-animate', 'fade-in-right')
	// 			$element.attr('data-duration', duration)
	// 			$element.addClass('prepared')
	// 		},
	// 		onBottomIn: ($element) => {
	// 			$element.removeClass('prepared')
	// 		}
	// 	}
	// }

	// let fadeInSequentiallyFromBottom = (selector, duration = 'default', offset = 0, delay = 100) => {
	// 	let animationIndex = 0;
	// 	return {
	// 		selector, offset,
	// 		onInitialize: ($element) => {
	// 			$element.attr('data-animate', 'fade-in-up')
	// 			$element.attr('data-duration', duration)
	// 			$element.attr('data-index', animationIndex)
	// 			$element.addClass('prepared')
	// 			animationIndex++
	// 		},
	// 		onBottomIn: ($element) => {
	// 			let animationIndex = $element.attr('data-index')
	// 			setTimeout(() => {
	// 				$element.removeClass('prepared')
	// 			}, animationIndex * delay)
	// 		}
	// 	}
	// }

	let fadeInFromLeft = new Animation('fade-in-from-left')
	let fadeInFromBottom = new Animation('fade-in-from-bottom', { duration: 1 })

	let fadeInSequentiallyFromLeft = new Sequence('parallax-cards', fadeInFromLeft)
	let fadeInSequentiallyFromBottom = new Sequence('amenities-cards', fadeInFromBottom)

	let scroller = new Scroller([{
		selector: '.card_horizontal', offset: 0, 
		onInitElement: ($element) => fadeInFromLeft.prepare($element),
		onBottomIn: ($element) => Animation.trigger($element)
	}, {
		selector: '#Carousel__Amenities', offset: 0,
		onInit: ($element) => {
			let $elements = $element.find('.slide .card')
			fadeInSequentiallyFromBottom.prepare($elements)
		},
		onBottomIn: ($element) => Sequence.trigger('amenities-cards', 150),
	}, {
		selector: '.parallax-cards', offset: 0,
		onInit: ($element) => {
			let $elements = $element.find('.parallax-card')
			fadeInSequentiallyFromLeft.prepare($elements)
		},
		onBottomIn: ($element) => Sequence.trigger('parallax-cards', 150),
	}])

	// let scroller = new Scroller([
	// 	fadeInSequentiallyOnInit('.intro-content > *', 'long', 400, 400),
	// 	fadeInFromLeft('.card_horizontal', 'default', 100),
	// 	fadeInFromLeft('.parallax-card', 'default,' -100),
	// 	fadeInSequentiallyFromBottom('.slide .card', 'long', 0, 150),
	// 	fadeInSequentiallyFromBottom('.slide .feature', 'long', 400, 300)
	// ])

	// console.log(Scroller.registry)
}