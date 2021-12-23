import axios from '../axios/axios'

// get方式调用接口
export function getMethodGetData(url, data) {
    return axios({
        url: url,
        method: 'get',
        params: data,
    })
}
// post方式调用接口
export function postMethodGetData(url, data) {
    return axios({
        url: url,
        method: 'post',
        data: data,
    })
}

// post方式调用接口 --async
export async function postMethodGetDataAsync(url, data) {
    let result = await axios({
        url: url,
        method: 'post',
        data: data
    })
    return result
}
// post方式导出Excel接口
export function postMethodExcelData(url, data) {
    return axios({
        url: url,
        method: 'post',
        data: data,
        responseType: 'arraybuffer'
    })
}
// get方式导出Excel接口
export function getMethodExcelData(url, data) {
    return axios({
        url: url,
        method: 'get',
        params: data,
        responseType: 'arraybuffer'
    })
}