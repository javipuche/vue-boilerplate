<template>
    <body>
        <RouterView />
    </body>
</template>

<script>
    export default {
        updated () {
            window.Pegasus.init()
        }
    }
</script>
