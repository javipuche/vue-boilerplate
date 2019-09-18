import { selectors } from 'modules/selectors'
import { Overlay, zIndex } from 'modules/overlay'
import getParents from 'utils/getParents'

const overlay = new Overlay(zIndex.rook)
const hasScrollClass = 'has-scroll-hidden'
const activeClass = 'is-active'

export default class Header {
    constructor (container) {
        this.selectors = selectors({
            block: Header.defaultClass,
            elements: [
                'scroll',
                'navigation-link',
                'navigation-content',
                'navigation-close-button',
                'megamenu',
                'mobile-button',
                'mobile-navigation'
            ]
        })

        this.el = container
        this.megamenu = this.el.querySelector(this.selectors.megamenu)
        this.mobileButton = this.el.querySelector(this.selectors.mobileButton)
        this.mobileNavigation = this.el.querySelector(this.selectors.mobileNavigation)
        this.navigationLink = this.el.querySelectorAll(this.selectors.navigationLink)
        this.navigationContent = this.el.querySelectorAll(this.selectors.navigationContent)
        this.navigationCloseButton = this.el.querySelectorAll(this.selectors.navigationCloseButton)
        this.bindEvents()
    }

    bindEvents () {
        this.bindMobileButtonEvents()
        this.bindNavigationLinkEvents()
        this.bindNavigationCloseButtonEvents()
        this.bindDocumentClick()
        this.bindWindowEvents()
    }

    bindWindowEvents () {
        window.addEventListener('resize', () => this.closeMegaMenu())
    }

    bindDocumentClick () {
        document.addEventListener('click', (e) => {
            if (this.isMegaMenuActive() && !this.isClickOnMegaMenu(e)) {
                this.closeMegaMenu()
            }
        })
    }

    bindNavigationCloseButtonEvents () {
        const navigationCloseButton = this.navigationCloseButton

        if (navigationCloseButton.length) {
            navigationCloseButton.forEach((link) => link.addEventListener('click', this.closeNavigation.bind(this)))
        }
    }

    bindNavigationLinkEvents () {
        const navigationLink = this.navigationLink

        if (navigationLink.length) {
            navigationLink.forEach((link) => link.addEventListener('click', this.toggleNavigation.bind(this)))
        }
    }

    bindMobileButtonEvents () {
        const mobileButton = this.mobileButton

        if (mobileButton) {
            mobileButton.addEventListener('click', () => this.toggleMobileNavigation())
        }
    }

    isMegaMenuActive () {
        return this.megamenu.closest(this.selectors.navigationLink).classList.contains(activeClass) || this.mobileNavigation.classList.contains(activeClass)
    }

    isClickOnMegaMenu ({ target }) {
        return target.closest(`${this.selectors.megamenu}, ${this.selectors.navigationLink} .${activeClass}, ${this.selectors.mobileButton}, ${this.selectors.mobileNavigation}`)
    }

    isSubmenu (element) {
        return getParents(element).includes(document.querySelector(this.selectors.navigationLink))
    }

    hasDefaultOpenNavigation () {
        return !!window.getComputedStyle(this.megamenu).getPropertyValue('--js-megamenu-enable-default-open-navigation')
    }

    closeMegaMenu () {
        this.megamenu.closest(this.selectors.navigationLink).classList.remove(activeClass)
        this.mobileNavigation.classList.remove(activeClass)
        this.mobileButton.classList.remove(activeClass)
        overlay.hideOverlay()
        this.resetNavigation()
    }

    resetNavigation () {
        this.navigationLink.forEach((link) => link.classList.remove(activeClass))
    }

    closeNavigation ({ target }) {
        const navigation = target.closest(this.selectors.navigationLink)
        navigation.classList.remove(activeClass)

        const nav = target.closest(`.${hasScrollClass}`)

        if (nav) {
            nav.classList.remove(hasScrollClass)
        }
    }

    selectDefaultNavigation (element) {
        const secondChild = element.querySelector(`${this.selectors.navigationLink}:nth-child(2)`)

        if (this.hasDefaultOpenNavigation() && secondChild) {
            secondChild.classList.add(activeClass)
            this.selectDefaultNavigation(secondChild)
        }
    }

    toggleNavigation ({ target }) {
        if (target.tagName === 'NAV' || target.tagName === 'UL') return

        const element = target.closest(this.selectors.navigationLink)
        const clickOnCloseButton = target.closest(this.selectors.navigationCloseButton)

        if (this.isSubmenu(element)) {
            this.navigationLink.forEach((link) => {
                if (!getParents(element).includes(link)) {
                    target.closest(this.selectors.scroll).classList.remove(hasScrollClass)
                    link.classList.remove(activeClass)
                }
            })
        }

        this.selectDefaultNavigation(element)

        if (!clickOnCloseButton) {
            target.closest(this.selectors.scroll).scrollTo({ top: 0 })
            target.closest(this.selectors.scroll).classList.add(hasScrollClass)

            if (!this.isSubmenu(element)) {
                element.classList.toggle(activeClass)
                if (this.hasDefaultOpenNavigation()) {
                    overlay.toggleOverlay()
                }
            } else {
                element.classList.add(activeClass)
            }
        }
    }

    toggleMobileNavigation () {
        this.mobileButton.classList.toggle(activeClass)
        this.mobileNavigation.classList.toggle(activeClass)
        overlay.toggleOverlay()
        this.resetNavigation()
    }
}

Header.defaultClass = '.js-header'
