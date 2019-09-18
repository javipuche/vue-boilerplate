const getRootElementFontSize = (context) => parseFloat(window.getComputedStyle(context || document.documentElement).fontSize)

export default getRootElementFontSize
