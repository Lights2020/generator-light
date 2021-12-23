import axios from 'axios'
// import md5 from 'js-md5';
import { Toast } from 'vant'
console.log('===当前环境===>', process.env.VUE_APP_API)
axios.defaults.baseURL = process.env.VUE_APP_API_APIS;
axios.defaults.withCredentials = false
    // let v = new Vue();
    // http request 拦截器
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.headers.common['CH'] = '2'
    // axios.defaults.headers.common['Channel'] = '2'
axios.interceptors.request.use(
    config => {
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
        });
        let token = window.localStorage.getItem('Authorization');
        if (token) {
            token = 'Bearer' + ' ' + token.replace(/'|"/g, '') // 把token加入到默认请求参数中
            config.headers.common['Authorization'] = token
        }
        return config;
    },
    err => {
        Toast.clear();
        return Promise.reject(err);
    });
// http response 拦截器
axios.interceptors.response.use(
    response => {
        Toast.clear();
        return response;
    },
    error => {
        console.log(error)
        console.log('=====================error')
        console.log(error.response)

        if (error.response) {
            Toast('ERROR：' + error.response.config.url + '==>' + error.response.data.message)
        } else {
            Toast('ERROR：' + error.config.url + '接口报错')
        }
        Toast.clear();
        return Promise.reject(error)
    });
export default axios