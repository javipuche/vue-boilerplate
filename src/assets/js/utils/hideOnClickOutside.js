const hideOnClickOutside = event => {
    const tooltip = document.querySelector(locators.tooltip)
    const isClickInside = event.target.closest(locators.tooltip)
    const clickedElement = event.target
    const triggerElement = document.querySelector(locators.trigger)
    const closeElement = document.querySelector(locators.close)

    if ((tooltip && !isClickInside && clickedElement !== triggerElement) || clickedElement === closeElement) {
        close(tooltip)
        document.removeEventListener('click', hideOnClickOutside)
    }
}

export default hideOnClickOutside
