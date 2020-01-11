<template>
	<view class="content">
		<view class="order">
			<view class="goods-list">
				<view class="list-header">
					<text class="text">商品清单</text>
				</view>
				<view class="list-content" v-for="(goodsoObj,index) in goodsObjectArray" :key="index">
					<image class="list-content-pic" :src="goodsoObj.product.goods.imgUrl?goodsoObj.product.goods.imgUrl:defaultImg"></image>
					<view class="list-content-name">
						<text class="text">{{goodsoObj.product.goods.name}}</text>
					</view>
					<view class="list-content-number">
						<view class="real-number">
							<text class="text">X{{goodsoObj.number}}</text>
						</view>
						<view class="real-price">
							<text class="text" style="color: #E80080;">￥{{goodsoObj.product.goods.price}}</text>
						</view>
					</view>
				</view>
				<view class="list-summery">
					<text class="text">小计</text>
					<span class="count-price">￥{{totalPrice}}</span>
				</view>
				<!-- 是否显示输入优惠码 -->
				<view class="youhui-code" v-if="voucherState">
					<view class="youhui-code-text">
						<text>使用兑换码:</text>
					</view>
					<view class="youhui-code-input">
						<input type="text" v-model="youhuiCode" class="inpclass" :placeholder="placeholder" placeholder-class="pclass" />
					</view>
				</view>
			</view>
			<view class="pay-agree">
				<view class="use-code">

				</view>
				<view :class="checkV&&cansubmit?canSubmitClass:canNotSubmitClass" @tap="gotoPay()">
					<text>{{buttonMsg}}</text>
				</view>
				<view class="agree-doc">
					<view class="inner-agree-doc">
						<view @tap="changeRadioV()">
							<radio :value="checkV" :checked="checkV" />
						</view>
						我已阅读并同意<view @tap="oepnxieyi" class="yonghuxieyi">《用户协议》</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		String2Ab,
		Ab2String,
		sleep
	} from '../../utils/index.js'
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				checkV: true,
				defaultImg: '../../static/prod.png',
				youhuiCode: null,
				placeholder: '兑换码不区分大小写',
				cansubmit: false,
				canSubmitClass: 'submit-button',
				canNotSubmitClass: 'can-not-submit'

			}
		},
		methods: {
			...mapMutations([
				'setUserId', 'setDeviceId', 'setServiceId', 'setWriteServiceId', 'setNotifyServiceId', 'setCheckOnlineOrder',
				'setDeviceName', 'setDeviceImei', 'setResponseOrder'
			]),
			changeRadioV() {
				this.checkV = !this.checkV
			},
			oepnxieyi() {
				uni.showModal({
					title: '用户协议',
					content: this.machObject.userProtocol,
					showCancel: false,
					success: (res) => {
						if (res.confirm) {}
					}
				})
			},
			/**
			 * 提交订单支付
			 */
			gotoPay() {
				var that = this
				if (that.cansubmit) {
					if (that.phoneBlueToothCanUse) {
						//需要同意用户协议
						if (!that.checkV) {
							uni.showToast({
								title: '请同意用户协议',
								icon: 'none',
								mask: true,
								duration: 1500
							});
							return
						}
						//按钮不可点
						that.cansubmit = false
						if (that.bleConnectedStatus && that.writeServiceId != '') {
							uni.showLoading({
								title: '加载中'
							});
							that.startService()
						} else {
							//蓝牙未连接，重新连接
							uni.showModal({
								title: '',
								content: '设备连接中,请稍后重试',
								showCancel: false,
								success: (res) => {
									if (res.confirm) {
										that.cansubmit = true
									}
								}
							})
							return
						}
					} else {
						that.judgeBlueToothCanUse()
					}
				}
			},


			/**
			 * 提交订单，请求网络
			 */
			commitOrderRequstNetWork() {
				var that = this
				//发起网络请求提交订单
				uni.request({
					url: that.baseRequestUrl + 'microProgramOrder/commitWeixinMicroOrder',
					method: 'POST',
					data: {
						orderFrom: 'wx_fmj',
						userId: that.userId,
						deviceImei: that.deviceImei,
						voucherCode: that.youhuiCode,
						goodsInfo: JSON.stringify(that.commitGoodsArray)
					},
					success: (res) => {
						let param = res.data
						if (param.code === 1) {
							uni.requestPayment({
								provider: 'wxpay',
								timeStamp: param.timeStamp,
								nonceStr: param.nonceStr,
								package: 'prepay_id=' + param.prepayId,
								signType: 'MD5',
								paySign: param.sign,
								success: function(res) {
									//请求实际命令
									uni.request({
										url: that.baseRequestUrl + 'order/getRealOrder?sysOrderId=' + param.sysOrderId,
										success: (res) => {
											if (res.data.code === 1) {
												let chargeTimeOrder = res.data.order
												/**
												 * 包小于20字节就直接下发
												 */
												if (chargeTimeOrder.length <= 40) {
													uni.writeBLECharacteristicValue({
														deviceId: that.deviceId,
														serviceId: that.serviceId,
														characteristicId: that.writeServiceId,
														value: String2Ab(chargeTimeOrder),
														success(res) {
															var chargeIntervalTimmerId = setInterval(function() {
																if (chargeTimeOrder.indexOf(that.responseOrder) != -1) {
																	clearInterval(chargeIntervalTimmerId)
																	clearTimeout(chargeTimeOutTimmerId)
																	uni.writeBLECharacteristicValue({
																		deviceId: that.deviceId,
																		serviceId: that.serviceId,
																		characteristicId: that.writeServiceId,
																		value: String2Ab(that.confirmOrder),
																		success(res) {
																			uni.closeBLEConnection({
																				deviceId: that.deviceId,
																				success(res) {}
																			})
																			uni.hideLoading();
																			uni.reLaunch({
																				url: '../buyfinish/buyfinish'
																			})
																		}
																	})
																}
															}, 200)
															var chargeTimeOutTimmerId = setTimeout(function() {
																if (chargeTimeOrder.indexOf(that.responseOrder) === -1) {
																	clearInterval(chargeIntervalTimmerId)
																	uni.hideLoading();
																	uni.showModal({
																		title: '',
																		content: '设备异常正在退款,请稍后重试',
																		showCancel: false,
																		success: (res) => {
																			if (res.confirm) {
																				//发起退款
																				uni.reLaunch({
																					url: '../index/index'
																				})

																			}
																		}
																	})
																}
															}, 3000);
														}
													})

												} else {
													let orderTime = Math.floor(chargeTimeOrder.length / 40)
													//分包响应数据包
													that.setResponseOrder('')
													for (let i = 0; i <= orderTime; i++) {
														uni.writeBLECharacteristicValue({
															deviceId: that.deviceId,
															serviceId: that.serviceId,
															characteristicId: that.writeServiceId,
															value: String2Ab(chargeTimeOrder.substring(i * 40, (i + 1) * 40)),
															success(res) {
																//延时并拼接响应
																sleep(200)
																//在最后一包发送完以后，监听响应
																if (i == orderTime) {
																	var chargeTimeOutTimmerId = setTimeout(function() {
																		if (chargeTimeOrder.indexOf(that.responseOrder) === -1 || that.responseOrder === '') {
																			clearInterval(chargeIntervalTimmerId)
																			uni.hideLoading();
																			uni.showModal({
																				title: '',
																				content: '设备异常正在退款,请稍后重试',
																				showCancel: false,
																				success: (res) => {
																					//发起退款
																					if (res.confirm) {
																						uni.reLaunch({
																							url: '../index/index'
																						})
																					}
																				}
																			})
																		}
																	}, 3000)
																	//定时判断是否相同
																	var chargeIntervalTimmerId = setInterval(function() {
																		if (that.responseOrder != '' && chargeTimeOrder.indexOf(that.responseOrder) != -1) {
																			clearInterval(chargeIntervalTimmerId)
																			clearTimeout(chargeTimeOutTimmerId)
																			uni.writeBLECharacteristicValue({
																				deviceId: that.deviceId,
																				serviceId: that.serviceId,
																				characteristicId: that.writeServiceId,
																				value: String2Ab(that.confirmOrder),
																				success(res) {
																					uni.closeBLEConnection({
																						deviceId: that.deviceId,
																						success(res) {}
																					})
																					uni.hideLoading();
																					uni.reLaunch({
																						url: '../buyfinish/buyfinish'
																					})
																				}
																			})
																		}
																	}, 200)
																}
															}
														})
													}
												}

											} else {
												//服务器响应失败
												uni.showModal({
													title: '',
													content: '服务器开小差,请稍后重试',
													showCancel: false,
													success: (res) => {
														if (res.confirm) {
															uni.reLaunch({
																url: '../index/index'
															})

														}
													}
												})

											}

										}
									})
								},
								fail: function(err) {
									uni.hideLoading()
									that.cansubmit = true
									//支付失败的话跳转到首页
									console.error('支付失败' + JSON.stringify(err));
								}
							});
						} else {
							uni.showModal({
								title: '',
								content: param.message,
								showCancel: false,
								success: (res) => {
									if (res.confirm) {
										uni.reLaunch({
											url: '../index/index'
										})

									}
								}
							})
						}
					},
					fail(res) {
						//服务器响应失败
						uni.showModal({
							title: '',
							content: '服务器开小差,请稍后重试',
							showCancel: false,
							success: (res) => {
								if (res.confirm) {
									uni.reLaunch({
										url: '../index/index'
									})

								}
							}
						})
					}
				})

			},
			closeBle() {
				var that = this
				//关闭连接
				uni.closeBLEConnection({
					deviceId: that.deviceId,
					success(res) {
						uni.closeBluetoothAdapter({
							success(res) {
								console.log('页面隐藏后关闭蓝牙成功')
							}
						})
					}
				})
			},
			connectBle() {
				var that = this
				uni.openBluetoothAdapter({
					success(res) {
						if (that.deviceId && that.deviceId != '') {
							uni.stopBluetoothDevicesDiscovery({
								success(res) {
									//连接蓝牙
									uni.createBLEConnection({
										deviceId: that.deviceId,
										success(res) {
											console.log('连接蓝牙成功', res)
											//即使知道了特征id也要搜索一下
											uni.getBLEDeviceCharacteristics({
												deviceId: that.deviceId,
												serviceId: that.mainUUID,
												success(res) {
													uni.notifyBLECharacteristicValueChange({
														state: true,
														deviceId: that.deviceId,
														serviceId: that.mainUUID,
														characteristicId: that.notifyUUID,
														success(res) {
															console.log('开启监听服务成功')
															//写入Q01
															uni.writeBLECharacteristicValue({
																deviceId: that.deviceId,
																serviceId: that.mainUUID,
																characteristicId: that.writeUUID,
																value: String2Ab(that.checkOnlineOrder),
																success(res) {
																	console.log('writeBLECharacteristicValue success', res.errMsg)
																}
															})
														}
													})
												}
											})
										}
									})
								}
							})

						} else {
							var searchTimeoutId = setTimeout(function() {
								if (that.deviceId == '') {
									console.error('未搜索到设备')
									uni.stopBluetoothDevicesDiscovery({
										success(res) {
											uni.showModal({
												title: '',
												content: '未搜索到设备,请靠近设备后重试',
												showCancel: false,
												success: (res) => {
													if (res.confirm) {
														uni.reLaunch({
															url: '../index/index'
														})

													}
												}
											})
										}
									})
								}
							}, 5000)
							uni.startBluetoothDevicesDiscovery({
								success(res) {
									uni.onBluetoothDeviceFound(function(res) {
										let device = res.devices[0]
										console.log('device', device)
										if (device.name != '' && device.name == that.deviceNamePrefix + that.deviceImei) {
											that.setDeviceId(device.deviceId)
											clearTimeout(searchTimeoutId)
											uni.stopBluetoothDevicesDiscovery({
												success(res) {
													console.log('找到设备后关闭发现服务成功', device.deviceId)
													//连接蓝牙
													uni.createBLEConnection({
														deviceId: device.deviceId,
														success(res) {
															console.log('连接蓝牙成功', res)
															//即使知道了特征id也要搜索一下
															uni.getBLEDeviceCharacteristics({
																deviceId: device.deviceId,
																serviceId: that.mainUUID,
																success(res) {
																	uni.notifyBLECharacteristicValueChange({
																		state: true,
																		deviceId: device.deviceId,
																		serviceId: that.mainUUID,
																		characteristicId: that.notifyUUID,
																		success(res) {
																			console.log('开启监听服务成功')
																			//写入Q01
																			uni.writeBLECharacteristicValue({
																				deviceId: device.deviceId,
																				serviceId: that.mainUUID,
																				characteristicId: that.writeUUID,
																				value: String2Ab(that.checkOnlineOrder),
																				success(res) {
																					console.log('writeBLECharacteristicValue success', res.errMsg)
																				}
																			})
																		}
																	})
																}
															})

														}
													})
												}
											})
										}
									})
								}
							})

						}
					}
				})
			},
			needConnect() {
				if (!bleConnected) {
					//需要重新连接
					this.connectBle()
				}
			}

		},
		computed: {
			...mapState(['phoneBlueToothCanUse', 'baseRequestUrl', 'charging', 'deviceNamePrefix', 'notifyIdPrefix',
				'writeIdPrefix', 'serviceIdPrefix',
				'deviceImei', 'deviceName', 'deviceId',
				'serviceId', 'notifyServiceId', 'writeServiceId', 'bleConnectedStatus', 'responseOrder', 'checkOnlineOrder',
				'confirmOrder',
				'goodsObjectArray', 'commitGoodsArray', 'userId', 'bleConnected', 'mainUUID', 'writeUUID', 'notifyUUID'
			]),
			totalPrice() {
				let pric = 0
				let goa = this.goodsObjectArray
				for (var i = 0; i < goa.length; i++) {
					let singleProduc = goa[i]
					pric += singleProduc.product.goods.price * singleProduc.number
				}
				return pric
			},
			buttonMsg() {
				return this.cansubmit ? '立即支付' : '连接中'
			}
		},
		onShow() {
			//判断蓝牙是否需要连接
			this.needConnect()
		},
		onHide() {
			//关闭蓝牙
			this.closeBle()
		}

	}
</script>

<style>
	.order {
		padding: 30rpx;
	}

	.list-header {
		padding-bottom: 12rpx;
		border-bottom: solid 1rpx #BBBBBB;
	}

	.list-content {
		display: flex;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		border-bottom: solid 1rpx #BBBBBB;
	}

	.list-content-pic {
		width: 80rpx;
		height: 80rpx;
	}

	.list-content-name {
		margin-left: 20rpx;
		padding: 0;
		max-width: 350rpx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.list-content-number {
		position: absolute;
		right: 10%;
		text-align: left;
		display: flex;
		flex-direction: column;
	}

	.list-summery {
		padding: 30rpx;
		text-align: right;
	}

	.count-price {
		font-size: 28rpx;
		color: #E80080;
		margin-left: 40rpx;
	}

	.submit-button {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		bottom: 40%;
		width: 600rpx;
		text-align: center;
		padding: 30rpx;
		background-color: #007AFF;
		border-radius: 10rpx;
		color: #FFFFFF;
	}

	.submit-button:active {
		opacity: 0.4;
	}

	.can-not-submit {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		bottom: 40%;
		width: 600rpx;
		text-align: center;
		padding: 30rpx;
		background-color: #555555;
		border-radius: 10rpx;
		color: #FFFFFF;
	}

	.text {
		color: black;
		font-size: 28rpx;
	}

	.youhui-code {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		margin-top: 60rpx;
		margin-bottom: 20rpx;
	}

	.youhui-code-text {
		font-size: 30rpx;
	}

	.youhui-code-input {
		border: solid 1rpx #BBBBBB;
		margin-left: 20rpx;
	}

	.agree-doc {
		position: absolute;
		left: 50%;
		width: 600rpx;
		transform: translate(-50%);
		bottom: 33%;
		display: flex;
		justify-content: center;
		font-size: 30rpx;
		color: #B2B2B2;
	}

	.inner-agree-doc {
		display: flex;
		flex-direction: row;
	}

	.inpclass {
		font-size: 30rpx;
		padding-left: 20rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
	}


	.yonghuxieyi {
		color: #E80080;
	}

	.pclass {
		font-size: 30rpx;
	}
</style>
