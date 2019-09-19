<template>
    <button class="c-megamenu__nav-link c-megamenu__nav-link--back js-header__navigation-close-button">
        <span class="c-megamenu__nav-link-icon c-megamenu__nav-link-icon--back">
            <span class="c-icon c-icon--angle-left"></span>
        </span>
        <span class="c-megamenu__nav-link-text">{{ text }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: 'Atrás'
            }
        }
    }
</script>
