(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/buy/buy"],{"393f":function(e,t,o){},"46a4":function(e,t,o){"use strict";o.r(t);var n=o("680b"),c=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);t["default"]=c.a},"680b":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("2f62"),c=o("0c81");function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){i(e,t,o[t])})}return e}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r=function(){return o.e("components/uni-icons/uni-icons").then(o.bind(null,"32f9"))},a=function(){return o.e("components/uni-number-box/uni-number-box").then(o.bind(null,"e665"))},u={data:function(){return{defaultImg:"../../static/prod.png",goodsList:[],banner:"",mallUrl:"",servicePhone:"",userProtocol:"",stylefull:"goods-item",styleEmpty:"goods-item-empty",notconnect:"蓝牙未连接"}},components:{uniIcon:r,uniNumberBox:a},methods:s({},(0,n.mapMutations)(["setGoodsObjectArray","setMachObject","setVoucherState","setCommitGoodsArray","setUserId","setDeviceImei","setOpenLocation","setDeviceId","setversionRight","setBlueToothOpen","setIsFirst"]),{openUserPro:function(){e.showModal({title:"用户协议",content:this.userProtocol?this.userProtocol:"默认用户协议",showCancel:!1,success:function(e){e.confirm}})},selectedGoods:function(t,o){if(o.empty)e.showModal({title:"",content:"此商品已经售空，请选择其他商品",showCancel:!1,success:function(e){e.confirm}});else{var n={};n.cabinetNo=o.id,n.goodsCount=parseInt(t),n.returnCount=0,n.goodsId=o.goods.id,n.goodsPrice=parseFloat(o.goods.price),n.goodsName=o.goods.name;var c={};c.product=o,c.number=parseInt(t);var s=this.commitGoodsArray,i=this.goodsObjectArray,r=this.containsObejct(s,o);r.flag?0==t?(s.splice(r.index,1),i.splice(r.index,1)):(s[r.index]=n,i[r.index]=c):(s.push(n),i.push(c)),this.showObjArray=s,this.setCommitGoodsArray([]),this.setCommitGoodsArray(s),this.setGoodsObjectArray(i)}},containsObejct:function(e,t){var o={flag:!1};if(0==e.length)return o;for(var n=0;n<e.length;n++)e[n].goodsId==t.goods.id&&(o.flag=!0,o.index=n);return o},callKefu:function(){e.makePhoneCall({phoneNumber:this.servicePhone})},queryAllGoods:function(){var t=this;e.request({url:t.baseRequestUrl+"infos/getMctIdByImei?deviceImei="+t.deviceImei,method:"GET",success:function(o){o.data.status?e.request({url:t.baseRequestUrl+"infos/getBrandInfoByMctId/?mctId="+o.data.data.mctId,method:"GET",success:function(o){if(o.data.status){var n=o.data.data.brandInfo;t.setMachObject(n),e.setNavigationBarTitle({title:n.mobileTitle}),t.servicePhone=n.servicePhone,t.userProtocol=n.userProtocol,t.mallUrl=n.mallUrl;var c=JSON.parse(n.imgInfo);t.banner=c[0].url,e.request({url:t.baseRequestUrl+"infos/getDeviceGoodsByImei?deviceImei="+t.deviceImei,method:"GET",success:function(o){o.data.status?t.goodsList=o.data.data.goodsList:e.showModal({title:"",content:o.data.message,showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})}}),e.request({url:t.baseRequestUrl+"infos/getVoucherStateByMctId?mctId="+n.mctId,method:"GET",success:function(o){o.data.status?o.data.data.state&&t.setVoucherState(!0):e.showModal({title:"",content:o.data.message,showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})}})}else e.showModal({title:"",content:o.data.message,showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})}}):e.showModal({title:"",content:o.data.message,showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})}})},gopay:function(){0!=this.commitGoodsArray.length&&e.reLaunch({url:"../order/order"})},setDeviceIdFromPath:function(e){if("undefined"!=typeof e.q){var t=decodeURIComponent(e.q),o=t.substring(t.indexOf("imei=")+5);this.setDeviceImei(o)}else this.setDeviceImei(e.imei)},userLogin:function(){var t=this;e.login({success:function(o){var n=o.code;e.request({url:t.baseRequestUrl+"userInfo/getWxUserInfo?code="+n+"&requestFrom=wx_fmj",success:function(o){o.data.status?(t.setUserId(o.data.data.openid),e.getUserInfo({provider:"weixin",success:function(e){console.log("用户昵称为：",e)}})):e.showModal({title:"",content:o.data.message,showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})},fail:function(t){e.showModal({title:"",content:"服务器开小差了,请稍后重试",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})}})}})},judgePlatformVersion:function(){var t=this;t.versionRight?t.judgeLocationOpen():e.getSystemInfo({success:function(o){(0,c.isNeedVersion)(o.platform,o.version)?(console.log("版本验证通过"),t.setversionRight(!0),t.judgeLocationOpen()):e.showModal({title:"提示",content:"当前微信版本过低,请更新至最新版本才能连接蓝牙哦!",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})}})},judgeLocationOpen:function(){var t=this;e.getLocation({type:"wgs84",success:function(e){t.setOpenLocation(!0),t.connectBle()},fail:function(){e.showModal({title:"",content:"请授予小程序获取位置功能",showCancel:!1,success:function(o){o.confirm&&e.openSetting({success:function(o){e.authorize({scope:"scope.userLocation",success:function(){e.getLocation({type:"wgs84",success:function(e){t.setOpenLocation(!0),console.log("用户手动开启定位权限成功")}})},fail:function(){e.showModal({title:"",content:"请授予小程序获取位置功能后重试",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})}})}})}})}})},closeBle:function(){var t=this;e.closeBLEConnection({deviceId:t.deviceId,success:function(t){e.closeBluetoothAdapter({success:function(e){console.log("页面隐藏后关闭蓝牙成功")}})}})},connectBle:function(){var t=this;if(console.warn("buy页面页面显示获取到的蓝牙状态为",t.blueToothOpen),t.blueToothOpen)if(""!=t.deviceId)e.createBLEConnection({deviceId:t.deviceId,success:function(o){console.log("连接蓝牙成功",o),e.getBLEDeviceCharacteristics({deviceId:t.deviceId,serviceId:"6E400001-B5A3-F393-E0A9-E50E24DCCA9E",success:function(o){e.notifyBLECharacteristicValueChange({state:!0,deviceId:t.deviceId,serviceId:"6E400001-B5A3-F393-E0A9-E50E24DCCA9E",characteristicId:"6E400003-B5A3-F393-E0A9-E50E24DCCA9E",success:function(o){console.log("开启监听服务成功"),e.writeBLECharacteristicValue({deviceId:t.deviceId,serviceId:"6E400001-B5A3-F393-E0A9-E50E24DCCA9E",characteristicId:"6E400002-B5A3-F393-E0A9-E50E24DCCA9E",value:(0,c.String2Ab)("AABB00065130313D3140CB"),success:function(e){console.info("下发在线命令成功"),t.setIsFirst(!1)}})}})}})},fail:function(e){console.warn("重新连接后错误",e)}});else{var o=setTimeout(function(){""==t.deviceId&&(console.error("未搜索到设备"),e.stopBluetoothDevicesDiscovery({success:function(t){e.showModal({title:"",content:"未搜索到设备,请靠近设备后重试",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../index/index"})}})}}))},5e3);e.startBluetoothDevicesDiscovery({success:function(n){e.onBluetoothDeviceFound(function(n){var s=n.devices[0];console.log("device",s),""!=s.name&&s.name==t.deviceNamePrefix+t.deviceImei&&(clearTimeout(o),t.setDeviceId(s.deviceId),e.stopBluetoothDevicesDiscovery({success:function(o){console.log("找到设备后关闭发现服务成功",s.deviceId),e.createBLEConnection({deviceId:s.deviceId,success:function(o){console.log("连接蓝牙成功",o),e.getBLEDeviceCharacteristics({deviceId:s.deviceId,serviceId:"6E400001-B5A3-F393-E0A9-E50E24DCCA9E",success:function(o){e.notifyBLECharacteristicValueChange({state:!0,deviceId:s.deviceId,serviceId:"6E400001-B5A3-F393-E0A9-E50E24DCCA9E",characteristicId:"6E400003-B5A3-F393-E0A9-E50E24DCCA9E",success:function(o){console.log("开启监听服务成功"),e.writeBLECharacteristicValue({deviceId:s.deviceId,serviceId:"6E400001-B5A3-F393-E0A9-E50E24DCCA9E",characteristicId:"6E400002-B5A3-F393-E0A9-E50E24DCCA9E",value:(0,c.String2Ab)("AABB00065130313D3140CB"),success:function(e){console.info("下发Q01成功"),t.setIsFirst(!1)}})}})}})}})}}))})}})}else e.showModal({title:"提示",content:"请开启手机蓝牙",showCancel:!1,success:function(e){e.confirm&&console.info("提示用户开启蓝牙后用户点击确认")}})},getAndListenBTState:function(){var t=this;e.openBluetoothAdapter({success:function(e){console.warn("开启适配器状态成功，意味着蓝牙开启",e),t.setBlueToothOpen(!0),t.connectBle()},fail:function(e){console.warn("开启适配器失败，意味着没有开启蓝牙",e),t.connectBle()}}),e.onBluetoothAdapterStateChange(function(o){console.warn("监听蓝牙的状态",o),t.isFirst||!o.available||o.discovering?t.isFirst||o.available||o.discovering||e.showModal({title:"提示",content:"使用小程序时请开启手机蓝牙功能",showCancel:!1,success:function(e){e.confirm}}):e.$emit("runtimebtreopen","")})}}),computed:s({},(0,n.mapState)(["deviceImei","baseRequestUrl","commitGoodsArray","goodsObjectArray","bleConnected","deviceId","deviceNamePrefix","mainUUID","writeUUID","checkOnlineOrder","notifyUUID","versionRight","battery","blueToothOpen","isFirst","platform"]),{havaSelectGoods:function(){return 0!=this.commitGoodsArray.length},showText:function(){var e=this.commitGoodsArray;if(0==e.length)return"未选购商品";var t=0;return e.forEach(function(e){t+=e.goodsCount*e.goodsPrice}),"总计¥"+t.toFixed(2)},batterylevel:function(){return this.battery}}),onLoad:function(t){this.setDeviceIdFromPath(t);var o=this;e.$once("runtimebtreopen",function(t){"android"==o.platform?(console.warn("android系统"),e.closeBluetoothAdapter({success:function(t){console.log("重连时关闭适配器成功"),e.openBluetoothAdapter({success:function(e){o.setDeviceId(""),o.connectBle()}})},fail:function(e){console.error("重连时关闭适配器失败",e)}})):o.connectBle()}),this.userLogin(),this.setCommitGoodsArray([]),this.setGoodsObjectArray([]),this.queryAllGoods()},onShow:function(){this.getAndListenBTState()},onHide:function(){this.closeBle()}};t.default=u}).call(this,o("543d")["default"])},8040:function(e,t,o){"use strict";var n=o("393f"),c=o.n(n);c.a},"87e1":function(e,t,o){"use strict";(function(e){o("6a51"),o("921b");n(o("66fd"));var t=n(o("c905"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},b4c5:function(e,t,o){"use strict";var n,c=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"b",function(){return c}),o.d(t,"c",function(){return s}),o.d(t,"a",function(){return n})},c905:function(e,t,o){"use strict";o.r(t);var n=o("b4c5"),c=o("46a4");for(var s in c)"default"!==s&&function(e){o.d(t,e,function(){return c[e]})}(s);o("8040");var i,r=o("f0c5"),a=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);t["default"]=a.exports}},[["87e1","common/runtime","common/vendor"]]]);