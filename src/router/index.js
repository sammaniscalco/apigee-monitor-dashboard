import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue' // this is the import line to add
import Servers from '@/views/Servers.vue' // this is the import line to add
import Components from '@/views/Components.vue' // this is the import line to add

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Servers',
            name: 'Servers',
            component: Servers
        },
        {
            path: '/Servers/:id',
            name: 'ServerDetail',
            props: true,
            component: Servers
        },
        {
            path: '/Components/:id',
            name: 'ComponentDetail',
            props: true,
            component: Components
        },
        {
            path: '/Components',
            name: 'Components',
            component: Components
        }
    ]
})
