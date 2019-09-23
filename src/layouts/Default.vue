<template>
    <div>
        <Header />

        <slot />

        <p>footer</p>
    </div>
</template>

<script>
    import Header from '@/components/Header/Header'

    export default {
        components: {
            Header
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
