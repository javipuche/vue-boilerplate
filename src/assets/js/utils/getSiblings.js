const getSiblings = (elem, elemClass) => [...elem.parentNode.children].filter((sibling) => elemClass ? sibling.classList.contains(elemClass) : sibling !== elem)

export default getSiblings
