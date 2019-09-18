import modelA from './models/model-a'
import modelB from './models/model-b'
import single from './models/single'
import searcherCarousel from './models/searcherCarousel'
import offersTransfer from './models/offersTransfer'

import CarouselDefault from './CarouselDefault'
import CarouselProgressTimer from './CarouselProgressTimer'

export default class Carousel {
    constructor (container) {
        this.el = container
        this.model = this.settings()[this.el.dataset.model]
        this.loadCarousel()
    }

    settings () {
        return {
            modelA: modelA,
            modelB: modelB,
            single: single,
            searcherCarousel: searcherCarousel,
            offersTransfer: offersTransfer
        }
    }

    hasProgressTimer () {
        return 'autoplayTimeout' in this.model && 'customTimer' in this.model
    }

    loadCarousel (options) {
        if (!this.hasProgressTimer()) {
            return new CarouselDefault(this.el, this.model)
        } else {
            return new CarouselProgressTimer(this.el).load()
        }
    }
}

Carousel.defaultClass = '.js-carousel'
