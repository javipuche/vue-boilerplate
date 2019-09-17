<template>
    <section class="body">
        <div class="container">
            <h4 class="h4">
                Pages
            </h4>
            <PagesList :items="items" />
        </div>
    </section>
</template>

<script>
    import PagesList from '@/components/PagesList.vue'

    export default {
        components: {
            PagesList
        },
        data () {
            return {
                items: []
            }
        },
        created: function () {
            this.$router.options.routes.forEach(route => {
                this.items.push({
                    brand: route.brand,
                    name: route.name,
                    path: route.path,
                    children: route.children
                })
            })
        }
    }
</script>

 <style scoped>
  .body {
    margin: 0;
    font-family: sans-serif;
    background-color: #f5f5f5;
    min-height: 100vh;
  }

  .h4 {
    margin-top: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    width: 100%;
  }
</style>
