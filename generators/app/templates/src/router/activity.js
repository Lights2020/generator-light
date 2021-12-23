/*班级管理*/
const classManage = [{
        path: '/activity/index',
        name: 'activity',
        // meta: { keepAlive: true },
        component: () =>
            import ( /* webpackChunkName: "activity" */ '../views/activity/index.vue')
    },

]

export default classManage