/**
 * Created by yiban on 16/5/23.
 *  author:liuchengbin
 *  desc:js<->oc js<->android
 */

/*
 函数名称：browser
 函数作用：判断访问终端
*/
var browser = {
  versions: function() {
    var u = navigator.userAgent,
      app = navigator.appVersion
    return {
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1 //是否iPad
    }
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

/*
 函数名称：phone
 函数作用：拨打电话
 参数说明：电话号码
 */
export function phone_yb(num, onerror) {
  var pre = /^1\d{10}$/
  var tre = /^0\d{2,3}-?\d{7,8}$/
  if (pre.test(num) || tre.test(num)) {
    if (browser.versions.android) {
      // android 调用方式
      window.local_obj.phone(num)
    } else if (browser.versions.ios) {
      phone(num)
    } else {
      onerror('该终端类型暂不支持使用')
    }
  } else {
    onerror('手机号格式错误')
  }
}

/*
 函数名称：photo
 函数作用：调用相册/拍照
 */
export function photo_yb() {
  if (browser.versions.android) {
    //android 调用方式
    window.local_obj.camera()
  } else if (browser.platform.ios) {
    camera()
  }
}
