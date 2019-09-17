<template>
    <Layout>
        <div class="home">
            <div>sadasd</div>
            <img src="@/assets/images/water.jpg" alt="" asda="" asdasd="sadsd">
        </div>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'

    export default {
        name: 'Home',
        components: {
            Layout
        },
        metaInfo: {
            title: 'My Example App',
            titleTemplate: '%s - Yay!',
            link: [
                // { rel: 'stylesheet', href: '/css/index.css' }
            ]
        }
    }
</script>
