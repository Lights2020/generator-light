import { Dialog } from 'vant'
export function alertDialog(msg='', title='', confirmBtnColor='#3F4658'){
    Dialog.alert({
        title: title,
        message: msg,
				width:'280',
        confirmButtonColor: confirmBtnColor
    }).then(() => {
    });
}

export function confirmDialog(confirmFun, msg='', title='', confirmBtnColor='#3F4658',cancelBtnText='取消',cancelBtnColor='#757F8D'){
    Dialog.confirm({
        title: title,
        message: msg,
				width:'280',
        confirmButtonColor: confirmBtnColor,
        cancelButtonText: cancelBtnText,
        cancelButtonColor: cancelBtnColor
    }).then(() => {
        if(confirmFun){
            confirmFun()
        }
    }).catch(() => {
        // on cancel
    });
}

