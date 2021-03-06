import Vue from 'vue'
import VueRouter from 'vue-router'
import Agents from '../views/Agents'
import Agent from '../views/Agent'
import Weapons from '../views/Weapons'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Agents
    }, {
        path: '/agents/:id',
        component: Agent,
    },
    {
        path: '/weapons',
        component: Weapons
    },
    {
        path: '*',
        redirect: '/'
    }
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router