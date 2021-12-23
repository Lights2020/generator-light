import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import activity from './activity' //活动模块


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: Home
    },
    ...activity,
]

const createRouter = () => new VueRouter({
    mode: 'history', // require service support
    base: '/',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

export default router