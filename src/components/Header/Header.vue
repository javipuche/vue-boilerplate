<template>
    <header class="c-header js-header">
        <div class="c-header__inner">
            <header-logo />

            <header-nav class="js-header__mobile-navigation js-header__scroll">
                <header-nav-list>
                    <header-nav-item>
                        <header-nav-link href="#" text="Hoteles" />
                    </header-nav-item>

                    <header-nav-item>
                        <header-nav-link href="#" text="Última llamada" />
                    </header-nav-item>

                    <header-nav-item>
                        <header-nav-link href="#" text="Ofertas!" />
                    </header-nav-item>

                    <header-nav-item>
                        <header-nav-link href="#" text="Vuelos" />
                    </header-nav-item>

                    <header-nav-item>
                        <header-nav-link href="#" text="Vuelo + Hotel" />
                    </header-nav-item>

                    <header-nav-item>
                        <header-nav-link href="#" text="Caribe" />
                    </header-nav-item>

                    <header-nav-item class="js-header__navigation-link">
                        <header-nav-link href="#" text="Circuitos" icon="angle-down" />

                        <mega-menu>
                            <mega-menu-nav class="js-header__scroll">
                                <mega-menu-nav-list>
                                    <mega-menu-nav-item>
                                        <mega-menu-nav-link text="Europa" />

                                        <mega-menu-nav class="js-header__navigation-content">
                                            <mega-menu-nav-list>
                                                <mega-menu-nav-item>
                                                    <mega-menu-nav-link text="Centro de Europa" />

                                                    <mega-menu-content>
                                                        <mega-menu-title text="Centro Europa" />

                                                        <mega-menu-items>
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                        </mega-menu-items>
                                                    </mega-menu-content>
                                                </mega-menu-nav-item>
                                            </mega-menu-nav-list>
                                        </mega-menu-nav>
                                    </mega-menu-nav-item>

                                    <mega-menu-nav-item>
                                        <mega-menu-nav-link text="América" />

                                        <mega-menu-nav class="js-header__navigation-content">
                                            <mega-menu-nav-list>
                                                <mega-menu-nav-item>
                                                    <mega-menu-nav-link text="Centro América" />

                                                    <mega-menu-content>
                                                        <mega-menu-title text="Centro América" />

                                                        <mega-menu-items>
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
                                                            <card-links />
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

                    <header-nav-item>
                        <header-nav-link href="#" text="Vacaciones" />
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
            CardLinks
        }
    }
</script>
