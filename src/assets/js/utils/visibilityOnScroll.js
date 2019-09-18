import requestAnimationFrame from '../utils/requestAnimationFrame'
import isElementOnViewPort from '../utils/isElementOnViewport'

const locators = {
    trigger: '.js-visibility-toggle',
    state: {
        visible: 'is-visible',
        hidden: 'is-hidden'
    }
}

const toggleVisibility = (el, shouldBeHidden, currentStatus) => {
    el.classList.toggle(locators.state.visible, !shouldBeHidden !== currentStatus)
}

const checkVisibility = () => requestAnimationFrame(() => {
    document.querySelectorAll(locators.trigger).forEach((el) => {
        const id = el.dataset.id
        const currentStatus = el.classList.contains(locators.state.hidden)
        document.querySelectorAll(`[data-visibility-limit="${id}"]`).forEach((limit) => {
            const shouldBeHidden = isElementOnViewPort(limit)
            toggleVisibility(el, shouldBeHidden, currentStatus)
        })
    })
})

const bindEvents = () => {
    // TODO: Change To QuerySelectorAll and loop
    checkVisibility()
    document.addEventListener('scroll', checkVisibility, { passive: true })
}

const init = () => {
    if (document.querySelectorAll(locators.trigger).length > 0) {
        bindEvents()
    }
}

init()
