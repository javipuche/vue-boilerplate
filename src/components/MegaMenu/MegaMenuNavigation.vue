<template>
    <MegaMenuNav>
        <MegaMenuNavList>
            <MegaMenuButtonBack :text="textButtonBack" />
            <MegaMenuNavItem v-for="item in items" :key="item.id">
                <MegaMenuNavLink :href="item.href" :text="item.text" />
                <MegaMenuNavigation v-if="hasGrandSons(item.children)" :items="item.children" :text-button-back="item.text" />
                <MegaMenuContent v-if="!hasGrandSons(item.children) && item.children" :text-button-back="item.text">
                    <MegaMenuTitle :text="item.text" />
                    <MegaMenuItems>
                        <CardLinks v-for="cardLinkItem in item.children" :key="cardLinkItem.id" />
                    </MegaMenuItems>
                </MegaMenuContent>
            </MegaMenuNavItem>
        </MegaMenuNavList>
    </MegaMenuNav>
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
    import MegaMenuNavigation from '@/components/MegaMenu/MegaMenuNavigation.vue'
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
            MegaMenuNavigation,
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
