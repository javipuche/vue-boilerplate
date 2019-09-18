import requestAnimationFrame from '../../utils/requestAnimationFrame'
import isElementOnViewPortPartially from '../../utils/isElementOnViewPortPartially'

const locators = {
    trigger: '.js-progress-bar'
}

const extractData = ({ dataset }) => {
    return {
        reference: dataset.reference
    }
}

const update = (el, isInViewPort, progressBar) => {
    const windowScrollTop = window.pageYOffset
    const elementHeight = el.getBoundingClientRect().height
    let totalScroll = -(Math.round(((windowScrollTop - el.offsetTop) / (window.innerHeight - elementHeight)) * 100))

    if (isInViewPort) {
        progressBar.bar.classList.remove('is-hidden')
        if (totalScroll > 100) {
            totalScroll = 100
        } else if (totalScroll < 0) {
            totalScroll = 0
            progressBar.bar.classList.add('is-hidden')
        }
        Object.assign(progressBar.current.style,
            {
                width: totalScroll + '%'
            }
        )
    } else {
        progressBar.bar.classList.add('is-hidden')
    }
}

const getProgressBar = el => {
    const bar = el.querySelector('.progress-bar')
    const current = bar.querySelector('.progress-bar__current')
    return {
        bar: bar,
        current: current
    }
}

const getDrawableElements = el => el.querySelectorAll('[data-drawable]')

const render = el => {
    const data = extractData(el)
    let points = ''
    getDrawableElements(el).forEach((point) => {
        const percentPosition = Math.round((point.offsetTop / el.getBoundingClientRect().height) * 100)
        points += `<div data-scroll="${point.offsetTop}" class="progress-bar__point" style="left:${percentPosition}%"></div>`
    })

    const progress = `<div class="progress-bar"><div class="progress-bar__inner">${points}<div class="progress-bar__current"></div></div></div>`

    document.querySelector(data.reference).insertAdjacentHTML('afterbegin', progress)
}

const checkVisibility = () => requestAnimationFrame(() => {
    document.querySelectorAll(locators.trigger).forEach(el => {
        update(el, isElementOnViewPortPartially(el), getProgressBar(el))
    })
})

const bindEvents = () => {
    const elements = [...document.querySelectorAll(locators.trigger)]
    elements.forEach(el => {
        render(el)
        update(el, isElementOnViewPortPartially(el), getProgressBar(el))
    })
    document.addEventListener('scroll', checkVisibility, { passive: true, capture: true })
}

const init = () => {
    bindEvents()
}

export default init
