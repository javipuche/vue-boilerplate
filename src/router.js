import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import iberojetRoutes from '@/routes/iberojet'
import muchoviajeRoutes from '@/routes/muchoviaje'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'pages-list',
            component: Index
        },
        ...iberojetRoutes,
        ...muchoviajeRoutes
    ]
})
