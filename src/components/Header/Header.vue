<template>
    <header class="c-header js-header">
        <div class="c-header__inner">
            <header-logo />

            <header-nav class="js-header__mobile-navigation js-header__scroll">
                <header-nav-list>
                    <header-nav-item v-for="navItem in navigation.items" :key="navItem.id" :class="{ 'js-header__navigation-link': navItem.children }">
                        <header-nav-link :href="navItem.href" :text="navItem.text" :icon="navItem.children ? 'angle-down' : undefined" />
                        <mega-menu v-if="navItem.children">
                            <mega-menu-navigation :items="navItem.children" :text-button-back="navItem.text" />
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
    import MegaMenuNavigation from '@/components/MegaMenu/MegaMenuNavigation.vue'

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
            MegaMenuNavigation
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
                                        },
                                        {
                                            text: 'Norte de Europa2',
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
                                },
                                {
                                    text: 'Europa2',
                                    href: '#',
                                    children: [
                                        {
                                            text: 'Norte de Europa3',
                                            href: '#',
                                            children: [
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' }
                                            ]
                                        },
                                        {
                                            text: 'Norte de Europa4',
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
                                        },
                                        {
                                            text: 'Norte de Europa2',
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
                                },
                                {
                                    text: 'Europa2',
                                    href: '#',
                                    children: [
                                        {
                                            text: 'Norte de Europa3',
                                            href: '#',
                                            children: [
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' }
                                            ]
                                        },
                                        {
                                            text: 'Norte de Europa4',
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
                                        },
                                        {
                                            text: 'Norte de Europa2',
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
                                },
                                {
                                    text: 'Europa2',
                                    href: '#',
                                    children: [
                                        {
                                            text: 'Norte de Europa3',
                                            href: '#',
                                            children: [
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' }
                                            ]
                                        },
                                        {
                                            text: 'Norte de Europa4',
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
                                        },
                                        {
                                            text: 'Norte de Europa2',
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
                                },
                                {
                                    text: 'Europa2',
                                    href: '#',
                                    children: [
                                        {
                                            text: 'Norte de Europa3',
                                            href: '#',
                                            children: [
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' }
                                            ]
                                        },
                                        {
                                            text: 'Norte de Europa4',
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
                                        },
                                        {
                                            text: 'Norte de Europa2',
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
                                },
                                {
                                    text: 'Europa2',
                                    href: '#',
                                    children: [
                                        {
                                            text: 'Norte de Europa3',
                                            href: '#',
                                            children: [
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' },
                                                { text: 'test', href: '#' }
                                            ]
                                        },
                                        {
                                            text: 'Norte de Europa4',
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
