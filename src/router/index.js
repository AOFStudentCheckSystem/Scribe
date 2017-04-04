import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/pages/Menu.vue'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'Menu',
            component: Menu
        }
    ]
})
