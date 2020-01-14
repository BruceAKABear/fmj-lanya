(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/order"],{

/***/ 34:
/*!********************************************************************************!*\
  !*** C:/Users/blab/Desktop/fmj-lanya/main.js?{"page":"pages%2Forder%2Forder"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _order = _interopRequireDefault(__webpack_require__(/*! ./pages/order/order.vue */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 35:
/*!*************************************************************!*\
  !*** C:/Users/blab/Desktop/fmj-lanya/pages/order/order.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=12a546ec& */ 36);
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ 38);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.vue?vue&type=style&index=0&lang=css& */ 40);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "fmj-lanya/pages/order/order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/*!********************************************************************************************!*\
  !*** C:/Users/blab/Desktop/fmj-lanya/pages/order/order.vue?vue&type=template&id=12a546ec& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=template&id=12a546ec& */ 37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_12a546ec___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 37:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/blab/Desktop/fmj-lanya/pages/order/order.vue?vue&type=template&id=12a546ec& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 38:
/*!**************************************************************************************!*\
  !*** C:/Users/blab/Desktop/fmj-lanya/pages/order/order.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=script&lang=js& */ 39);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 39:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/blab/Desktop/fmj-lanya/pages/order/order.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
























































var _index = __webpack_require__(/*! ../../utils/index.js */ 13);




var _vuex = __webpack_require__(/*! vuex */ 12);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =



{
  data: function data() {
    return {
      checkV: true,
      defaultImg: '../../static/prod.png',
      youhuiCode: null,
      placeholder: '兑换码不区分大小写',
      cansubmit: true,
      canSubmitClass: 'submit-button',
      canNotSubmitClass: 'can-not-submit' };


  },
  methods: _objectSpread({},
  (0, _vuex.mapMutations)([
  'setUserId', 'setDeviceId',
  'setDeviceName', 'setDeviceImei', 'setResponseOrder', 'setIsFirst', 'setBlueToothOpen']), {

    changeRadioV: function changeRadioV() {
      this.checkV = !this.checkV;
    },
    oepnxieyi: function oepnxieyi() {
      uni.showModal({
        title: '用户协议',
        content: this.machObject.userProtocol,
        showCancel: false,
        success: function success(res) {
          if (res.confirm) {}
        } });

    },
    /**
        * 提交订单支付
        */
    gotoPay: function gotoPay() {
      var that = this;
      if (that.cansubmit) {
        //需要同意用户协议
        if (!that.checkV) {
          uni.showToast({
            title: '请同意用户协议',
            icon: 'none',
            mask: true,
            duration: 1500 });

          return;
        }
        //按钮不可点
        that.cansubmit = false;
        if (that.bleConnected) {
          uni.showLoading({
            title: '加载中' });

          that.commitOrderRequstNetWork();
        } else {
          uni.showModal({
            title: '',
            content: '设备连接中，请稍后',
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {

              }
            } });

        }
      }
    },


    /**
        * 提交订单，请求网络
        */
    commitOrderRequstNetWork: function commitOrderRequstNetWork() {
      var that = this;
      //发起网络请求提交订单
      uni.request({
        url: that.baseRequestUrl + 'microProgramOrder/commitWeixinMicroOrder',
        method: 'POST',
        data: {
          orderFrom: 'wx_fmj',
          userId: that.userId,
          deviceImei: that.deviceImei,
          voucherCode: that.youhuiCode,
          goodsInfo: JSON.stringify(that.commitGoodsArray) },

        success: function success(res) {
          var param = res.data;
          if (param.code === 1) {
            uni.requestPayment({
              provider: 'wxpay',
              timeStamp: param.timeStamp,
              nonceStr: param.nonceStr,
              package: 'prepay_id=' + param.prepayId,
              signType: 'MD5',
              paySign: param.sign,
              success: function success(res) {
                //请求实际命令
                uni.request({
                  url: that.baseRequestUrl + 'order/getRealOrder?sysOrderId=' + param.sysOrderId,
                  success: function success(res) {
                    if (res.data.code === 1) {
                      var chargeTimeOrder = res.data.order;
                      /**
                                                             * 包小于20字节就直接下发
                                                             */
                      if (chargeTimeOrder.length <= 40) {
                        uni.writeBLECharacteristicValue({
                          deviceId: that.deviceId,
                          serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                          characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
                          value: (0, _index.String2Ab)(chargeTimeOrder),
                          success: function success(res) {
                            console.warn('下发真实命令成功', res);
                            uni.writeBLECharacteristicValue({
                              deviceId: that.deviceId,
                              serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                              characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
                              value: (0, _index.String2Ab)(that.confirmOrder),
                              success: function success(res) {
                                console.warn('下发确认命令成功', res);
                                uni.hideLoading();
                                uni.redirectTo({
                                  url: '../buyfinish/buyfinish',
                                  complete: function complete(res) {
                                    console.error('路由执行成功，结果为：', res);
                                  } });

                              },
                              fail: function fail(res) {
                                console.warn('下发确认命令失败', res);
                              } });

                          },
                          fail: function fail(res) {
                            console.warn('下发真实命令失败', res);

                          } });



                      } else {(function () {
                          var orderTime = Math.floor(chargeTimeOrder.length / 40);
                          //分包响应数据包
                          that.setResponseOrder('');var _loop = function _loop(
                          i) {
                            uni.writeBLECharacteristicValue({
                              deviceId: that.deviceId,
                              serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                              characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
                              value: (0, _index.String2Ab)(chargeTimeOrder.substring(i * 40, (i + 1) * 40)),
                              success: function success(res) {
                                //延时并拼接响应
                                (0, _index.sleep)(200);
                                //在最后一包发送完以后，监听响应
                                if (i == orderTime) {
                                  uni.writeBLECharacteristicValue({
                                    deviceId: that.deviceId,
                                    serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                                    characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
                                    value: (0, _index.String2Ab)(that.confirmOrder),
                                    success: function success(res) {
                                      uni.hideLoading();
                                      uni.redirectTo({
                                        url: '../buyfinish/buyfinish',
                                        complete: function complete(res) {
                                          console.error('路由执行成功，结果为：', res);
                                        } });

                                    } });

                                }
                              } });};for (var i = 0; i <= orderTime; i++) {_loop(i);

                          }})();
                      }

                    } else {
                      //服务器响应失败
                      uni.showModal({
                        title: '',
                        content: '服务器开小差,请稍后重试',
                        showCancel: false,
                        success: function success(res) {
                          if (res.confirm) {
                            uni.reLaunch({
                              url: '../index/index' });


                          }
                        } });


                    }

                  } });

              },
              fail: function fail(err) {
                uni.hideLoading();
                that.cansubmit = true;
                //支付失败的话跳转到首页
                console.error('支付失败' + JSON.stringify(err));
              } });

          } else {
            uni.showModal({
              title: '',
              content: param.message,
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  uni.reLaunch({
                    url: '../index/index' });


                }
              } });

          }
        },
        fail: function fail(res) {
          //服务器响应失败
          uni.showModal({
            title: '',
            content: '服务器开小差,请稍后重试',
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                uni.reLaunch({
                  url: '../index/index' });


              }
            } });

        } });


    },
    closeBle: function closeBle() {
      var that = this;
      //关闭连接
      uni.closeBLEConnection({
        deviceId: that.deviceId,
        success: function success(res) {
          uni.closeBluetoothAdapter({
            success: function success(res) {
              console.log('页面隐藏后关闭蓝牙成功');
            } });

        } });

    },
    connectBle: function connectBle() {
      var that = this;
      //1.判断手机蓝牙是否打开
      console.warn('buy页面页面显示获取到的蓝牙状态为', that.blueToothOpen);
      if (that.blueToothOpen) {
        if (that.deviceId != '') {
          //如果设备id存在就直接连接，同时下发Q01
          uni.createBLEConnection({
            deviceId: that.deviceId,
            success: function success(res) {
              console.log('连接蓝牙成功', res);
              //即使知道了特征id也要搜索一下
              uni.getBLEDeviceCharacteristics({
                deviceId: that.deviceId,
                serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                success: function success(res) {
                  uni.notifyBLECharacteristicValueChange({
                    state: true,
                    deviceId: that.deviceId,
                    serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                    characteristicId: '6E400003-B5A3-F393-E0A9-E50E24DCCA9E',
                    success: function success(res) {
                      console.log('开启监听服务成功');
                      //写入Q01
                      uni.writeBLECharacteristicValue({
                        deviceId: that.deviceId,
                        serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                        characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
                        value: (0, _index.String2Ab)('AABB00065130313D3140CB'),
                        success: function success(res) {
                          console.info('下发在线命令成功');
                          //只要调用了就不是第一次了
                          that.setIsFirst(false);
                        } });

                    } });

                } });

            },
            fail: function fail(res) {
              console.warn('重新连接后错误', res);

            } });


        } else {
          //如果设备id不存在就信搜索设备后连接
          //1. 超时提示
          var searchTimeoutId = setTimeout(function () {
            if (that.deviceId == '') {
              console.error('未搜索到设备');
              uni.stopBluetoothDevicesDiscovery({
                success: function success(res) {
                  uni.showModal({
                    title: '',
                    content: '未搜索到设备,请靠近设备后重试',
                    showCancel: false,
                    success: function success(res) {
                      if (res.confirm) {
                        uni.reLaunch({
                          url: '../index/index' });


                      }
                    } });

                } });

            }
          }, 5000);
          uni.startBluetoothDevicesDiscovery({
            success: function success(res) {
              uni.onBluetoothDeviceFound(function (res) {
                var device = res.devices[0];
                console.log('device', device);
                if (device.name != '' && device.name == that.deviceNamePrefix + that.deviceImei) {
                  clearTimeout(searchTimeoutId);
                  that.setDeviceId(device.deviceId);
                  uni.stopBluetoothDevicesDiscovery({
                    success: function success(res) {
                      console.log('找到设备后关闭发现服务成功', device.deviceId);
                      //连接蓝牙
                      uni.createBLEConnection({
                        deviceId: device.deviceId,
                        success: function success(res) {
                          console.log('连接蓝牙成功', res);
                          //即使知道了特征id也要搜索一下
                          uni.getBLEDeviceCharacteristics({
                            deviceId: device.deviceId,
                            serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                            success: function success(res) {
                              uni.notifyBLECharacteristicValueChange({
                                state: true,
                                deviceId: device.deviceId,
                                serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                                characteristicId: '6E400003-B5A3-F393-E0A9-E50E24DCCA9E',
                                success: function success(res) {
                                  console.log('开启监听服务成功');
                                  //写入Q01
                                  uni.writeBLECharacteristicValue({
                                    deviceId: device.deviceId,
                                    serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                                    characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
                                    value: (0, _index.String2Ab)('AABB00065130313D3140CB'),
                                    success: function success(res) {
                                      console.info('下发Q01成功');
                                      //只要调用了就不是第一次了
                                      that.setIsFirst(false);
                                    } });

                                } });

                            } });


                        } });

                    } });

                }
              });
            } });


        }

      } else {
        //未开启蓝牙提示开启蓝牙
        uni.showModal({
          title: '提示',
          content: '请开启手机蓝牙',
          showCancel: false,
          success: function success(res) {
            if (res.confirm) {
              console.info('提示用户开启蓝牙后用户点击确认');
            }
          } });

      }
    },
    getAndListenBTState: function getAndListenBTState() {
      var that = this;
      uni.openBluetoothAdapter({
        success: function success(res) {
          console.warn('开启适配器状态成功，意味着蓝牙开启', res);
          that.setBlueToothOpen(true);
          that.connectBle();
        },
        fail: function fail(res) {
          //开启失败的话说明没有开启手机蓝牙
          console.warn('开启适配器失败，意味着没有开启蓝牙', res);
          that.connectBle();
        } });

    },
    listenResponseOrder: function listenResponseOrder() {
      var that = this;
      var timeLast = 0;
      uni.onBLECharacteristicValueChange(function (res) {
        if (new Date().getTime() - timeLast < 200) {
          that.setResponseOrder(that.responseOrder + (0, _index.Ab2String)(res.value));
          console.log('分包相应的结果合并为', that.responseOrder);
        } else {
          timeLast = new Date().getTime();
          var resOrder = (0, _index.Ab2String)(res.value);
          if (resOrder.indexOf('5130383D') != -1) {
            var batteryNumber = resOrder.substring(8, 12);
            that.setbattery(parseInt(String.fromCharCode(parseInt(batteryNumber.substring(0, 2), 16)) + String.fromCharCode(
            parseInt(batteryNumber.substring(2), 16))));
          } else {
            that.setResponseOrder(resOrder);
          }
          console.log('监听到设备的响应为', resOrder);
        }

      });
    } }),


  computed: _objectSpread({},
  (0, _vuex.mapState)(['baseRequestUrl', 'deviceNamePrefix',
  'deviceImei', 'deviceName', 'deviceId',
  'responseOrder',
  'confirmOrder',
  'goodsObjectArray', 'commitGoodsArray', 'userId', 'bleConnected', 'mainUUID', 'writeUUID', 'notifyUUID',
  'blueToothOpen']), {

    totalPrice: function totalPrice() {
      var pric = 0;
      var goa = this.goodsObjectArray;
      for (var i = 0; i < goa.length; i++) {
        var singleProduc = goa[i];
        pric += singleProduc.product.goods.price * singleProduc.number;
      }
      return pric;
    },
    buttonMsg: function buttonMsg() {
      return this.cansubmit && this.bleConnected ? '立即支付' : '订单加载中';
    } }),

  onShow: function onShow() {

  },
  onLoad: function onLoad() {

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 40:
/*!**********************************************************************************************!*\
  !*** C:/Users/blab/Desktop/fmj-lanya/pages/order/order.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=style&index=0&lang=css& */ 41);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/blab/Desktop/fmj-lanya/pages/order/order.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[34,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/order.js.map