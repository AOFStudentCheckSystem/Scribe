import Hello from '@/components/Hello'
import LoginView from '@/components/LoginView'
import Menu from '@/components/Login'

export default {
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        }
    ]
}
