const tooltipCloseTpl = isFixed => isFixed ? '<a class="c-tooltip__close"></a>' : ''

const tooltipTpl = (content, isFixed) => `
    <div class="c-tooltip">
        ${tooltipCloseTpl(isFixed)}
        <div class="c-tooltip__arrow"></div>
        <div class="c-tooltip__inner">
            ${content}
        </div>
    </div>
`

export default tooltipTpl
