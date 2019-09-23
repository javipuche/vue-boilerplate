<template>
    <a :href="href" class="c-megamenu__nav-link">
        <span class="c-megamenu__nav-link-text">{{ text }}</span>
        <span class="c-megamenu__nav-link-icon">
            <Icon :icon="icon" />
        </span>
    </a>
</template>

<script>
    import Icon from '@/components/Icon/Icon.vue'

    export default {
        components: {
            Icon
        },
        props: {
            href: {
                type: String,
                default: '#'
            },
            text: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: 'angle-right'
            }
        }
    }
</script>
