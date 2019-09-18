const calcLeftPosition = (el, ref) => {
    const refCalc = ref.getBoundingClientRect()
    const elCalc = el.getBoundingClientRect()
    const refOffsetRight = -Math.round(window.innerWidth - refCalc.right)
    const refXPosition = refCalc.x
    const refWidthMiddle = refCalc.width / 2
    const elWidthMiddle = elCalc.width / 2
    const checkIfCanBeCentered = () => {
        const enoughLeftSpace = elWidthMiddle > refWidthMiddle && refXPosition <= elWidthMiddle
        const enoughRightSpace = elWidthMiddle > refWidthMiddle && -refOffsetRight <= elWidthMiddle
        let correction = 0

        if (enoughLeftSpace) {
            correction = refWidthMiddle - refXPosition
        } else if (enoughRightSpace) {
            correction = refOffsetRight - refWidthMiddle
        }

        return correction
    }
    const setPosition = () => Math.round(refCalc.x - (elCalc.width / 2) + (refCalc.width / 2) + (checkIfCanBeCentered()))
    return setPosition()
}

const getLeftPosition = (el, ref) => calcLeftPosition(el, ref)

const getTopPosition = (el, tolerance = 10) => Math.round(el.offsetTop + tolerance + el.getBoundingClientRect().height)

const centerElements = (el, ref) => {
    return {
        top: getTopPosition(ref),
        left: getLeftPosition(el, ref)
    }
}

export default centerElements
