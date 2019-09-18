import getRootElementFontSize from './getRootElementFontSize'

const convertToPx = (value) => parseFloat(value) * getRootElementFontSize()

export default convertToPx
