<template>
    <mega-menu-nav>
        <mega-menu-nav-list>
            <mega-menu-button-back :text="textButtonBack" />
            <mega-menu-nav-item v-for="item in items" :key="item.id">
                <mega-menu-nav-link :href="item.href" :text="item.text" />
                <mega-menu-navigation v-if="hasGrandSons(item.children)" :items="item.children" :text-button-back="item.text" />
                <mega-menu-content v-if="!hasGrandSons(item.children) && item.children" :text-button-back="item.text">
                    <mega-menu-title :text="item.text" />
                    <mega-menu-items>
                        <card-links v-for="cardLinkItem in item.children" :key="cardLinkItem.id" />
                    </mega-menu-items>
                </mega-menu-content>
            </mega-menu-nav-item>
        </mega-menu-nav-list>
    </mega-menu-nav>
</template>

<script>
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
        name: 'MegaMenuNavigation',
        components: {
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
        props: {
            items: {
                type: Array,
                default: () => []
            },
            textButtonBack: {
                type: String,
                default: undefined
            }
        },
        methods: {
            hasGrandSons: function (children) {
                if (children) {
                    return children.some(item => item.children)
                }
            }
        }
    }
</script>
