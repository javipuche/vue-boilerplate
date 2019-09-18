<template>
    <div class="c-megamenu__title">
        <span class="c-megamenu__title-text">{{ text }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>
