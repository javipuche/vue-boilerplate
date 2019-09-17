import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import IberojetRoutes from '@/routes/iberojet'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'pages-list',
            component: Index
        },
        ...IberojetRoutes
    ]
})
