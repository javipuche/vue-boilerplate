const isMobileUserAgent = () => {
    return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i)
}

const checkUserAgent = () => {
    if (isMobileUserAgent()) {
        document.body.classList.add('is-device')
    }
}

const init = () => {
    checkUserAgent()
}

module.exports = init
