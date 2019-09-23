<template>
    <picture class="c-picture">
        <Source
            v-for="source in sources"
            :key="source.id"
            :srcset="source.srcset"
            :media="source.media"
            :type="source.type"
        />
        <img
            class="c-picture__img"
            :class="{ 'lazyload': lazy }"
            :src="lazy ? shim : loadImage(src)"
            :data-src="lazy && loadImage(src)"
            :alt="alt"
            :title="title"
        >
    </picture>
</template>

<script>
    import Source from '@/components/Source/Source.vue'

    export default {
        components: {
            Source
        },
        props: {
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: undefined
            },
            lazy: {
                type: Boolean,
                default: true
            },
            sources: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                shim: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            }
        },
        methods: {
            loadImage (src) {
                return require(`@/assets/images/${src}`)
            }
        }
    }
</script>
