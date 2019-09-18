const camelize = (str) => str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase())

export default camelize
