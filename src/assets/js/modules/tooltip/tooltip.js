import centerElements from '../../utils/centerElements'
// import hideOnClickOutside from '../../utils/hideOnClickOutside'
import tooltipTpl from './tpl/tooltipTpl'

const locators = {
    trigger: '.js-tooltip',
    tooltip: {
        locator: '.c-tooltip',
        isVisible: 'is-visible'
    }
}

const extractData = dataset => {
    return {
        fixed: dataset.fixed,
        content: dataset.content
    }
}

const getContent = el => extractData(el.dataset).content

const getTooltip = () => document.querySelector(locators.tooltip.locator)

const removeTooltip = tooltip => {
    tooltip.remove()
}

const render = (el, isFixed) => {
    if (getTooltip() !== null) {
        removeTooltip(getTooltip())
    }
    const content = getContent(el)
    const tooltip = tooltipTpl(content, isFixed)
    document.body.insertAdjacentHTML('beforeend', tooltip)
    setPosition(el)
}

const setPosition = el => {
    const tooltip = getTooltip()
    const position = centerElements(tooltip, el)
    Object.assign(tooltip.style,
        {
            top: `${position.top}px`,
            left: `${position.left}px`
        }
    )
    tooltip.classList.add(locators.tooltip.isVisible)
}

const bindEvents = elements => {
    elements.forEach(el => {
        const isFixed = 'fixed' in el.dataset
        if (isFixed) {
            el.addEventListener('click', function (e) {
                render(el, isFixed)
                // hideOnClickOutside('.tooltip', e)
            })
        } else {
            el.addEventListener('mouseover', function () {
                render(el, isFixed)
            })
            el.addEventListener('mouseout', function () {
                removeTooltip(getTooltip())
            })
        }
    })
}

const init = () => {
    const elements = document.querySelectorAll(locators.trigger)
    if (elements.length > 0) {
        bindEvents(elements)
    }
}

export default init
