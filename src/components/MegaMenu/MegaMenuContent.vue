<template>
    <div class="c-megamenu__content js-header__navigation-content">
        <MegaMenuButtonBack :text="textButtonBack" />
        <div class="c-megamenu__content-box">
            <slot />
        </div>
    </div>
</template>

<script>
    import MegaMenuButtonBack from '@/components/MegaMenu/MegaMenuButtonBack.vue'

    export default {
        components: {
            MegaMenuButtonBack
        },
        props: {
            textButtonBack: {
                type: String,
                default: undefined
            }
        }
    }
</script>
