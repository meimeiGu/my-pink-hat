Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
function getDate(){  //获取当前日期
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
        : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
        .getDate();
    return year + "-" + month + "-" + day;
}
function  DateDiff1(sDate3 , flag){    //sDate1和sDate2是2006-12-18格式 //日期之间的间隔

    var  aDate,  oDate1,  oDate2,  iDays,sDate2,sDate1;
    sDate2=getDate();
    //sDate1 = new Date(sDate3).Format("yyyy-MM-dd");
    sDate1 = sDate3.split(" ")[0];

    aDate  =  sDate1.split("-");
    oDate1  =  new  Date(aDate[0]  +  '-'  +  aDate[1]  +  '-'  +  aDate[2]); //转换为12-18-2006格式

    aDate  =  sDate2.split("-");
    oDate2  =  new  Date(aDate[0]  +  '-'  +  aDate[1]  +  '-'  +  aDate[2])
    iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数
    if(iDays==0){
        sDate3 = sDate3.replace(new RegExp("-","gm"),"/");
        var date1=new Date(sDate3);//开始时间
        var date2=new Date();    //结束时间
        var date3=date2.getTime()-date1.getTime();//时间差的毫秒数
        //计算出相差天数
        /*var days=Math.floor(date3/(24*3600*1000));*/
        //计算出小时数
        var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
        var hours=Math.floor(leave1/(3600*1000));
        //计算相差分钟数
        var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
        var minutes=Math.floor(leave2/(60*1000));
        //计算相差秒数
        var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
        var seconds=Math.round(leave3/1000);
        if(hours>0)
        {
            return hours+"小时前";
        }else if(minutes>0){
            return minutes+"分钟前";
        }else if(seconds>0){
            return seconds+"秒前";
        }else{
            return "今天";
        }
    }else if(iDays==1)
        return "昨天";
    else if(iDays>1 && iDays<31)
        return iDays+"天前";
    else(iDays>30)
    {
        if(flag==1)
            return sDate1;
        else
            return "一个月前";
    }
}
function phoneType(){
    var u = navigator.userAgent;
    if (u.indexOf('iPhone') > -1) {//苹果手机
        return "iphone";
    }else{//安卓手机(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        return "android";
    }
}
function GetQueryString(name) //URL参数
{
     name = decodeURI(name);
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
function accSub(arg1, arg2) { //减法
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

function accAdd(arg1, arg2) { //加法
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}


function accDiv(arg1, arg2) { //除
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}


function accMul(arg1, arg2) {  //乘
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
function test(id){

     var allImg = $(".upload-box li img");
     var allLength = allImg.size();
     if(allLength>1){
         var tempurl = $("#"+id).attr("url");
         var temppic = $("#"+id).attr("src");
         $("#"+id).attr("src",$(allImg[0]).attr("src"));
         $(allImg[0]).attr("src",temppic);         
         $("#"+id).attr("url",$(allImg[0]).attr("url"));
         $(allImg[0]).attr("url", tempurl);
     }
}