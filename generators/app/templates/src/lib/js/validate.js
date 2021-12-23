// 手机号
export function isvalidPhone(str) {
    const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    return reg.test(str)
}

//url
export function isURL(str) {
    return !! str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
}

