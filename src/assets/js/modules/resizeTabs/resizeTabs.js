import requestAnimationFrame from '../../utils/requestAnimationFrame'
import convertToPx from '../../utils/convertToPx'

export default class TabsResize {
    constructor (container) {
        this.el = container
        this.defaultNavigation = this.el.querySelector(this.el.dataset.navigation)
        this.navigation = this.defaultNavigation
        this.dropdownBox = this.el.querySelector(this.el.dataset.dropdownBox)
        this.dropdownBtn = this.dropdownBox.querySelector(this.el.dataset.dropdownBtn)
        this.dropdown = this.dropdownBox.querySelector(this.el.dataset.dropdown)
        this.disabledClass = this.el.dataset.disabledClass || '.is-hidden'
        this.activeClass = this.el.dataset.activeClass || '.is-active'
        this.gapTabs = convertToPx(window.getComputedStyle(this.el).getPropertyValue('--js-resize-tabs-navigation-gap')) || 0
        this.init()
    }

    adaptNavigation () {
        const disabledResizeTabs = window.getComputedStyle(this.el).getPropertyValue('--js-disabled-resize-tabs')

        if (!disabledResizeTabs) {
            this.getNavigationItems().forEach(el => {
                el.classList.remove(this.disabledClass)
            })

            let dropdownWidth = this.dropdownBox.offsetWidth
            const hiddenItems = []
            const navigationWidth = this.navigation.offsetWidth

            this.getNavigationItems().forEach((item, i) => {
                if (navigationWidth >= dropdownWidth + (item.offsetWidth + this.gapTabs)) {
                    dropdownWidth += item.offsetWidth + this.gapTabs
                } else {
                    item.classList.add(this.disabledClass)
                    hiddenItems.push(i)
                }
            })

            if (!hiddenItems.length) {
                this.dropdownBox.classList.add(this.disabledClass)
            } else {
                this.dropdownBox.classList.remove(this.disabledClass)
                this.getNavigationItems(this.dropdown).forEach((item, i) => {
                    if (!hiddenItems.includes(i)) {
                        item.classList.add(this.disabledClass)
                    } else {
                        item.classList.remove(this.disabledClass)
                    }
                })
            }

            // this.showCounter(hiddenItems.length)
        } else if (!this.restartedNavigation) {
            [...this.defaultNavigation.children].forEach((navigationItem) => {
                navigationItem.classList.remove(this.disabledClass)
            })

            this.dropdownBox.classList.add(this.disabledClass)
        }
    }

    getNavigationItems (container = this.navigation) {
        return [...container.children].filter(el => {
            return el.classList.value !== this.dropdownBox.classList.value
        })
    }

    renderDropdown () { return this.getNavigationItems().map((navigationItem) => navigationItem.outerHTML).join('') }

    showCounter (count) {
        this.dropdownBox.querySelector('[data-counter]').innerHTML = count
    }

    toggleDropdown () {
        this.dropdownBox.classList.toggle(this.activeClass)
    }

    bindEvents () {
        this.dropdownBtn.addEventListener('click', this.toggleDropdown.bind(this))
        window.addEventListener('resize', () => requestAnimationFrame(() => {
            this.adaptNavigation()
        }))
    }

    init () {
        this.dropdown.innerHTML = this.renderDropdown()
        this.adaptNavigation()
        this.bindEvents()
    }
}

TabsResize.defaultClass = '.js-tabs-resize'
