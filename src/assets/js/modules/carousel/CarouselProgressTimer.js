import CarouselDefault from './CarouselDefault'
import progressTimer from './lib/progressTimerOLD'

class CarouselProgressTimer extends CarouselDefault {
    constructor (container) {
        super(container)
        this.el = container
    }

    load () {
        progressTimer(this.carousel, 5000)
    }
}

export default CarouselProgressTimer
