const getParents = (elem) => {
    var parents = []
    while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() !== 'body') {
        elem = elem.parentNode
        parents.push(elem)
    }
    return parents
}

export default getParents
