<template>
    <div class="c-icon-text">
        <div class="c-icon-text__inner">
            <Icon class="c-icon-text__icon" :icon="icon" :class="iconClass" />
            <div class="c-icon-text__text">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '@/components/Icon/Icon.vue'

    export default {
        components: {
            Icon
        },
        props: {
            icon: {
                type: String,
                default: undefined
            },
            text: {
                type: String,
                default: ''
            },
            iconClass: {
                type: String,
                default: undefined
            }
        }
    }
</script>
