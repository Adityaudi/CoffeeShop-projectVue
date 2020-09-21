import Vue from "vue"
import VueRouter from "vue-router"
import home  from  './views/home-product/home' 
import history from './views/history/history'
import login from './views/login'

Vue.use(VueRouter)

const mainRouter = new VueRouter({
    mode: 'history',
    
    routes: [
        {
            path: "/",
            name: 'login',
            component: login
        },
        {
            path: "/history",
            name: "history",
            component: history,
        },
        {
            path: "/home",
            name: "home",
            component : home
        },
       
    ],
})

export default  mainRouter