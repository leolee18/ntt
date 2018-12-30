if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
    var version = parseFloat(RegExp.$1);
    if (version > 2.3) {
        var phoneScale = parseInt(window.screen.width) / 750;
       	document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi, user-scalable=0">');
    } else {
        document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi, user-scalable=0">');
    }
} else {
    document.write('<meta name="viewport" content="width=750, user-scalable=0">');
}
//手机系统区分
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

// 根据参数名称获取参数值
function getParamValue(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return r[2]; 
    return null;
}
