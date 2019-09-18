import { tns } from 'tiny-slider/src/tiny-slider'

class CarouselDefault {
    constructor (container, model) {
        this.el = container
        this.model = model
        this.carousel = tns(Object.assign({ container: this.el }, this.model))
    }
}

export default CarouselDefault
