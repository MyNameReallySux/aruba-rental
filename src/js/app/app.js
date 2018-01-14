let $
let $document, $window
let resizeTimeout, scrollTimeout

export class App {
	constructor(options = {}){
		this.imports = { ...options.imports, $: options.jquery }

		let $ = options.jquery

		$document = $(document)
		$window = $(window)

		this.$document = $document
		this.$window = $window

		this.options = options

		if(!options.defer){
			this.init()
		}
	}

	init = () => {
		let modules = this.imports
		let options = this.options
		this.$document.ready(() => {
			this.onReady(modules)
		})
		
		this._resizeTimeout
		this.$window.resize(() => {
			this.onInstantaneousResize(modules)

			clearTimeout(this._resizeTimeout)
			this._resizeTimeout = setTimeout(() => {
				this.onResize(modules)
			}, options.resizeDelay || 50)
		})

		this._scrollTimeout
		this.$window.scroll(() => {
			this.onInstantaneousScroll(modules)
		
			clearTimeout(this._scrollTimeout)
			this._scrollTimeout = setTimeout(() => {
				this.onScroll(modules)
			}, options.scrollDelay || 50)
		})
	}

	onReady = () => {}
	onResize = () => {}
	onScroll = () => {}
	onInstantaneousResize = () => {}
	onInstantaneousScroll = () => {}
}