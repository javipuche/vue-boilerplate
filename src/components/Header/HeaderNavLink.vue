<template>
    <a :href="href" class="c-header__nav-link">
        <span class="c-header__nav-link-text">{{ text }}</span>
        <div class="c-header__nav-link-icon">
            <Icon v-if="icon" :icon="icon" />
        </div>
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
                default: undefined
            }
        }
    }
</script>
