<template>
    <header class="c-header js-header">
        <div class="c-header__inner">
            <header-logo />

            <header-nav class="js-header__mobile-navigation js-header__scroll">
                <header-nav-list>
                    <header-nav-item v-for="(navItem, navIndex) in navigation.items" :key="navIndex" :class="{ 'js-header__navigation-link': navItem.children }">
                        <header-nav-link :href="navItem.href" :text="navItem.text" :icon="navItem.children ? 'angle-down' : undefined" />
                        <mega-menu v-if="navItem.children">
                            <mega-menu-nav class="js-header__scroll">
                                <mega-menu-nav-list>
                                    <mega-menu-button-back :text="navItem.text" />
                                    <mega-menu-nav-item v-for="(megaMenuLevelOne, megaMenuLevelOneIndex) in navItem.children" :key="megaMenuLevelOneIndex">
                                        <mega-menu-nav-link :href="megaMenuLevelOne.href" :text="megaMenuLevelOne.text" />
                                        <mega-menu-nav class="js-header__navigation-content">
                                            <mega-menu-nav-list>
                                                <mega-menu-button-back :text="megaMenuLevelOne.text" />
                                                <mega-menu-nav-item v-for="(megaMenuLevelTwo, megaMenuLevelTwoIndex) in megaMenuLevelOne.children" :key="megaMenuLevelTwoIndex">
                                                    <mega-menu-nav-link :href="megaMenuLevelTwo.href" :text="megaMenuLevelTwo.text" />
                                                    <mega-menu-content :text-button-back="megaMenuLevelTwo.text">
                                                        <mega-menu-title :text="megaMenuLevelTwo.text" />
                                                        <mega-menu-items>
                                                            <card-links v-for="(megaMenuContent, megaMenuContentIndex) in megaMenuLevelTwo.children" :key="megaMenuContentIndex" />
                                                        </mega-menu-items>
                                                    </mega-menu-content>
                                                </mega-menu-nav-item>
                                            </mega-menu-nav-list>
                                        </mega-menu-nav>
                                    </mega-menu-nav-item>
                                </mega-menu-nav-list>
                            </mega-menu-nav>
                        </mega-menu>
                    </header-nav-item>
                </header-nav-list>
            </header-nav>

            <header-phone-number />

            <header-origin />

            <header-account />

            <header-hamburger />
        </div>
    </header>
</template>

<script>
    import HeaderLogo from '@/components/Header/HeaderLogo.vue'
    import HeaderNav from '@/components/Header/HeaderNav.vue'
    import HeaderNavList from '@/components/Header/HeaderNavList.vue'
    import HeaderNavItem from '@/components/Header/HeaderNavItem.vue'
    import HeaderNavLink from '@/components/Header/HeaderNavLink.vue'
    import HeaderPhoneNumber from '@/components/Header/HeaderPhoneNumber.vue'
    import HeaderOrigin from '@/components/Header/HeaderOrigin.vue'
    import HeaderAccount from '@/components/Header/HeaderAccount.vue'
    import HeaderHamburger from '@/components/Header/HeaderHamburger.vue'
    import MegaMenu from '@/components/MegaMenu/MegaMenu.vue'
    import MegaMenuNav from '@/components/MegaMenu/MegaMenuNav.vue'
    import MegaMenuNavList from '@/components/MegaMenu/MegaMenuNavList.vue'
    import MegaMenuNavItem from '@/components/MegaMenu/MegaMenuNavItem.vue'
    import MegaMenuNavLink from '@/components/MegaMenu/MegaMenuNavLink.vue'
    import MegaMenuContent from '@/components/MegaMenu/MegaMenuContent.vue'
    import MegaMenuTitle from '@/components/MegaMenu/MegaMenuTitle.vue'
    import MegaMenuItems from '@/components/MegaMenu/MegaMenuItems.vue'
    import MegaMenuButtonBack from '@/components/MegaMenu/MegaMenuButtonBack.vue'
    import CardLinks from '@/components/CardLinks/CardLinks.vue'

    export default {
        components: {
            HeaderLogo,
            HeaderNav,
            HeaderNavList,
            HeaderNavItem,
            HeaderNavLink,
            HeaderPhoneNumber,
            HeaderOrigin,
            HeaderAccount,
            HeaderHamburger,
            MegaMenu,
            MegaMenuNav,
            MegaMenuNavList,
            MegaMenuNavItem,
            MegaMenuNavLink,
            MegaMenuContent,
            MegaMenuTitle,
            MegaMenuItems,
            MegaMenuButtonBack,
            CardLinks
        },
        data () {
            return {
                navigation: {
                    items: [
                        { text: 'Hoteles', href: '#' },
                        { text: 'Última llamada', href: '#' },
                        { text: 'Ofertas!', href: '#' },
                        { text: 'Vuelos', href: '#' },
                        { text: 'Vuelo + Hotel', href: '#' },
                        { text: 'Caribe', href: '#' },
                        {
                            text: 'Circuitos',
                            href: '#',
                            children: [
                                {
                                    text: 'Europa',
                                    href: '#',
                                    children: [
                                        {
                                            text: 'Norte de Europa',
                                            href: '#',
                                            children: [
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        { text: 'Vacaciones', href: '#' }
                    ]
                }
            }
        }
    }
</script>
