import 'lazysizes'
import Carousel from 'modules/carousel/Carousel'
import TabsResize from 'modules/resizeTabs/resizeTabs'
import Header from 'modules/header/headerHover'
import AutoTrigger from 'modules/AutoTrigger'

document.addEventListener('DOMContentLoaded', () => {
    return new AutoTrigger([
        Header,
        Carousel,
        TabsResize
    ])
})
