<template>
    <a :href="href" class="c-header__nav-link">
        <span class="c-header__nav-link-text">{{ text }}</span>
        <span v-if="icon" class="c-header__nav-link-icon">
            <span class="c-icon" :class="`c-icon--${icon}`"></span>
        </span>
    </a>
</template>

<script>
    export default {
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
