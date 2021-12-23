/*
* 获取某个元素下标
* arrays: 传入的数组
* obj : 需要获取下标的元素
**/
export function getIndex(arrays, obj) {
    var i = arrays.length;
    while (i--) {
        if (arrays[i] === obj) {
            return i;
        }
    }
    return false;
}

/*
* params：
*   date --- 标准时间
* return：
*   yyyy-mm-dd
* */
export function formatDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

/*
* params：
*   date --- 标准时间
* return：
*   yyyy-mm-dd hh：mm
* */
export function formatDateTime(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return y + '-' + m + '-' + d+' '+h+':'+minute;
}

//判断闰年
export function runNian(_year) {
  if (_year % 400 === 0 || (_year % 4 === 0 && _year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
//判断某年某月的1号是星期几
export function getFirstDay(_year,_month) {
  var allDay = 0, y = _year - 1, i = 1;
  allDay = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1;
  for (; i < _month; i++) {
    switch (i) {
      case 1: allDay += 31; break;
      case 2:
        if (runNian(_year)) { allDay += 29; }
        else { allDay += 28; }
        break;
      case 3: allDay += 31; break;
      case 4: allDay += 30; break;
      case 5: allDay += 31; break;
      case 6: allDay += 30; break;
      case 7: allDay += 31; break;
      case 8: allDay += 31; break;
      case 9: allDay += 30; break;
      case 10: allDay += 31; break;
      case 11: allDay += 30; break;
      case 12: allDay += 31; break;
    }
  }
  return allDay % 7;
}
//判断某年某月上一个月的最后一天是几号
export function getmonthLastDay(year,month) {
  let lastMonth = month==1?12:month-1;
  let days = getMonthDay(year,lastMonth);
  return days;
}
//判断某年某月有多少天
export function getMonthDay(_year, _month) {
  var allDay = 0, y = _year - 1, i = 1;
    switch (_month) {
      case 1: allDay = 31; break;
      case 2:
        if (runNian(_year)) { allDay = 29; }
        else { allDay = 28; }
        break;
      case 3: allDay = 31;break;
      case 4: allDay = 30;break;
      case 5: allDay = 31;break;
      case 6: allDay = 30;break;
      case 7: allDay = 31;break;
      case 8: allDay = 31;break;
      case 9: allDay = 30;break;
      case 10: allDay = 31;break;
      case 11: allDay = 30;break;
      case 12: allDay = 31;break;
    }
  return allDay;
}

/*
* 将时间戳（十三位时间搓，也就是带毫秒的时间搓）转换成时间格式
* params：stamp 时间戳
* */
export function getFormatDate(stamp) {
    //将时间戳（十三位时间搓，也就是带毫秒的时间搓）转换成时间格式
    // d.cTime = 1539083829787
    let date = new Date(stamp);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    month = month < 10 ? "0"+month:month;
    day = day < 10 ? "0"+day:day;
    date = year+'-'+month+'-'+day;
    // console.log(date); // 2018-10-09
    return date;
}

/*
* 获取今天截止0点的时间戳
* */
export function getTodayStartStramp(){
    return new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime();
}

/*
* 获取今天截止24点的时间戳
* */
export function getTodayEndStramp(){
    return new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1).getTime();
}

/*
* 获取指定时间的时间戳
* */
export function getDateStramp(dateTime){
    return new Date(new Date(new Date(dateTime)).getTime()).getTime();
}

/*
* 判断某一时间是否是当天
* */
export function dateTimeIsToday(dateTime){
    let todayStartStramp = getTodayStartStramp()
    let todayEndStramp = getTodayEndStramp();
    let currentStramp = getDateStramp(dateTime);
    if(currentStramp <= todayEndStramp && currentStramp >= todayStartStramp){
        return 1;
    }else {
        return 0;
    }
}

/**
 * 阿拉伯数字转换成汉字
 */
export function sectionToChinese(section){
    var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
    var chnUnitSection = ["","万","亿","万亿","亿亿"];
    var chnUnitChar = ["","十","百","千"];
    var strIns = '', chnStr = '';
    var unitPos = 0;
    var zero = true;
    while(section > 0){
        var v = section % 10;
        if(v === 0){
            if(!zero){
                zero = true;
                chnStr = chnNumChar[v] + chnStr;
            }
        }else{
            zero = false;
            strIns = chnNumChar[v];
            strIns += chnUnitChar[unitPos];
            chnStr = strIns + chnStr;
        }
        unitPos++;
        section = Math.floor(section / 10);
    }
    return chnStr;
}

/**
 * 格式化时间戳
 */
export function getdateUtils(dateTime) {
    var now = new Date(dateTime*1000),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    var day = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    var time = day.replace(/-/g, "-").split(' ')[0];
    return time;
}


