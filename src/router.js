import Vue from "vue"
import VueRouter from "vue-router"
import home  from  './views/home-product/home' 
import history from './views/history/history'

Vue.use(VueRouter)

const mainRouter = new VueRouter({
    routes: [
        {
            path: "/",
            name:  "home",
            component: home,
        },
        {
            path: "/history",
            name: "history",
            component: history,
            props:true
        },
    ],
})

export default  mainRouter