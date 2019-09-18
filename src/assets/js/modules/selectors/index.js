import camelize from 'utils/camelize'

export const selectors = (obj) => {
    const blockClass = obj.block.replace('.', '')

    const selectors = {
        container: obj.block,
        containerClass: blockClass
    }

    obj.elements.forEach((element) => {
        selectors[camelize(element)] = `${obj.block}__${element}`
        selectors[`${camelize(element)}Class`] = `${blockClass}__${element}`
    })

    return selectors
}
