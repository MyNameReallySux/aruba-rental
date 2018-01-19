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
				if (data.childNodes.length > 0) {
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

export const handleScroller = ({ $, AnimationFactory, Scroller }) => {
	let { makeBasicAnimation, makeSequentialAnimation } = AnimationFactory
	let scroller = new Scroller([
		makeBasicAnimation('.card_horizontal', 'fade-in-from-left', { offset: 0, duration: 0.6 }),
		makeBasicAnimation('.parallax-card', 'fade-in-from-left', { offset: -100, duration: 0.6 }),
		makeSequentialAnimation(['#Carousel__Amenities', '.card'], 'fade-in-from-bottom', '@amenities-cards', { duration: 0.6, delay: 200}),
		makeSequentialAnimation(['#Carousel__Places', '.feature'], 'fade-in-from-bottom', '@feature-cards', { offset: 350, duration: 0.6, delay: 250 }),
	])
}