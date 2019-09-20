import 'lazysizes'
import Carousel from 'modules/carousel/Carousel'
import TabsResize from 'modules/resizeTabs/resizeTabs'
import Header from 'modules/header/headerMix'
import AutoTrigger from 'modules/AutoTrigger'

const init = () =>
    new AutoTrigger([
        Header,
        Carousel,
        TabsResize
    ])

document.addEventListener('DOMContentLoaded', init)

window.Pegasus = window.Pegasus || {}
window.Pegasus.init = init
