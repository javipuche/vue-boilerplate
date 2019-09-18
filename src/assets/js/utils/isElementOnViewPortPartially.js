const isElementOnViewPortPartially = el => {
    let top = el.offsetTop
    const left = el.offsetLeft
    const width = el.offsetWidth
    const height = el.offsetHeight

    while (el.offsetParent) {
        el = el.offsetParent
        top += el.offsetTop
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    )
}

export default isElementOnViewPortPartially
