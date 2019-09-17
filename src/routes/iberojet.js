import IberojetHome from '@/pages/iberojet/Home.vue'

export default [
    {
        path: '/iberojet',
        name: 'iberojet-home',
        component: IberojetHome,
        children: [
            {
                path: 'test',
                name: 'iberojet-test',
                component: IberojetHome
            },
            {
                path: 'test2',
                name: 'iberojet-test2',
                component: IberojetHome
            }
        ]
    }
]
