const state = {
    menuTheme: '',
    themeColor: '',

}
const mutations = {
    changeMenuTheme(state, val) {
        state.menuTheme = val;
        localStorage.setItem('menuTheme', val);
    },
    changeMainTheme(state, val) {
        state.themeColor = val;
        localStorage.setItem('themeColor', val);
    },
}
const getters = {
    getMenuTheme(state) {
        if (localStorage.getItem('menuTheme')) {
            state.menuTheme = localStorage.getItem('menuTheme');
        }
        return state.menuTheme;
    },
    getMainTheme(state) {
        if (localStorage.getItem('themeColor')) {
            state.themeColor = localStorage.getItem('themeColor');
        }
        return state.themeColor;
    }

}
const actions = {
    changeMenuTheme(context, val) {
        context.commit('changeMenuTheme', val)
    },
    changeMainTheme(context, val) {
        context.commit('changeMainTheme', val)
    },
}
export default {
    state, //将state进行输出
    mutations,
    actions,
    getters
}