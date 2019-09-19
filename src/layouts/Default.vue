<template>
    <div>
        <header-site />

        <slot />

        <p>footer</p>
    </div>
</template>

<script>
    import HeaderSite from '@/components/Header/Header'

    export default {
        components: {
            HeaderSite
        },
        props: {
            brand: {
                type: String,
                default: undefined
            }
        },
        methods: {
            getBrandStyles: function () {
                const styles = []
                if (this.brand) styles.push({ rel: 'stylesheet', href: `/assets/css/${this.brand}/styles.css` })
                return styles
            }
        },
        metaInfo () {
            return {
                link: [
                    ...this.getBrandStyles()
                ]
            }
        }
    }
</script>
