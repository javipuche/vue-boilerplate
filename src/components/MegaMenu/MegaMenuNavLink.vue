<template>
    <a :href="href" class="c-megamenu__nav-link">
        <span class="c-megamenu__nav-link-text">{{ text }}</span>
        <span class="c-megamenu__nav-link-icon">
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
                default: 'angle-right'
            }
        }
    }
</script>
