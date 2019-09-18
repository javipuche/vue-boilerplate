const locators = {
    timer: {
        parent: '.tns-timer',
        progress: '.tns-timer__progress',
        info: '.tns-timer__info'
    }
}

const updateProgress = (carousel, speed) => {
    const timeOut = 100
    const timer = getProgressFromTimer(carousel)
    timer.removeAttribute('style')
    updateSlideCount(carousel)
    setTimeout(function () {
        Object.assign(timer.style,
            {
                transition: `width ${((speed - timeOut) / 1000)}s linear`,
                width: '100%'
            }
        )
    }, timeOut)
}

const updateSlideCount = carousel => {
    getInfoFromTimer(carousel).innerHTML = renderSlideCount(carousel)
}

const bindEvents = (carousel, speed) => {
    carousel.events.on('transitionStart', function () {
        updateProgress(carousel, speed)
    })
}

const renderSlideCount = carousel => {
    const carouselInfo = carousel.getInfo()
    return `${carouselInfo.navCurrentIndex + 1}/${carouselInfo.slideCount}`
}

const getContainerFromCarousel = carousel => carousel.getInfo().container

const getTimerFromCarousel = carousel => getContainerFromCarousel(carousel).parentNode.querySelector(locators.timer.parent)

const getProgressFromTimer = carousel => getTimerFromCarousel(carousel).querySelector(locators.timer.progress)

const getInfoFromTimer = carousel => getTimerFromCarousel(carousel).querySelector(locators.timer.info)

const renderTimer = carousel => {
    const timer = `<div class="tns-timer"><div class="tns-timer__info">${renderSlideCount(carousel)}</div><div class="tns-timer__progress"></div></div>`
    getContainerFromCarousel(carousel).insertAdjacentHTML('beforebegin', timer)
}

const progressTimer = (carousel, speed) => {
    renderTimer(carousel)
    updateProgress(carousel, speed)
    bindEvents(carousel, speed)
}

export default progressTimer
