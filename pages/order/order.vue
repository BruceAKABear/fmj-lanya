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
				cansubmit: true,
				canSubmitClass: 'submit-button',
				canNotSubmitClass: 'can-not-submit'

			}
		},
		methods: {
			...mapMutations([
				'setUserId', 'setDeviceId',
				'setDeviceName', 'setDeviceImei', 'setResponseOrder', 'setIsFirst', 'setBlueToothOpen'
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
					if (that.bleConnected) {
						uni.showLoading({
							title: '加载中'
						})
						that.commitOrderRequstNetWork()
					} else {
						uni.showModal({
							title: '',
							content: '设备连接中，请稍后',
							showCancel: false,
							success: (res) => {
								if (res.confirm) {

								}
							}
						})
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
														serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
														characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
														value: String2Ab(chargeTimeOrder),
														success(res) {
															console.warn('下发真实命令成功', res)
															uni.writeBLECharacteristicValue({
																deviceId: that.deviceId,
																serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
																characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
																value: String2Ab(that.confirmOrder),
																success(res) {
																	console.warn('下发确认命令成功', res)
																	uni.hideLoading();
																	uni.redirectTo({
																		url: '../buyfinish/buyfinish',
																		complete(res) {
																			console.error('路由执行成功，结果为：', res)
																		}
																	})
																},
																fail(res) {
																	console.warn('下发确认命令失败', res)
																}
															})
														},
														fail(res) {
															console.warn('下发真实命令失败', res)

														}
													})


												} else {
													let orderTime = Math.floor(chargeTimeOrder.length / 40)
													//分包响应数据包
													that.setResponseOrder('')
													for (let i = 0; i <= orderTime; i++) {
														uni.writeBLECharacteristicValue({
															deviceId: that.deviceId,
															serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
															characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
															value: String2Ab(chargeTimeOrder.substring(i * 40, (i + 1) * 40)),
															success(res) {
																//延时并拼接响应
																sleep(200)
																//在最后一包发送完以后，监听响应
																if (i == orderTime) {
																	uni.writeBLECharacteristicValue({
																		deviceId: that.deviceId,
																		serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
																		characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
																		value: String2Ab(that.confirmOrder),
																		success(res) {
																			uni.hideLoading();
																			uni.redirectTo({
																				url: '../buyfinish/buyfinish',
																				complete(res) {
																					console.error('路由执行成功，结果为：', res)
																				}
																			})
																		}
																	})
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
				//1.判断手机蓝牙是否打开
				console.warn('buy页面页面显示获取到的蓝牙状态为', that.blueToothOpen)
				if (that.blueToothOpen) {
					if (that.deviceId != '') {
						//如果设备id存在就直接连接，同时下发Q01
						uni.createBLEConnection({
							deviceId: that.deviceId,
							success(res) {
								console.log('连接蓝牙成功', res)
								//即使知道了特征id也要搜索一下
								uni.getBLEDeviceCharacteristics({
									deviceId: that.deviceId,
									serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
									success(res) {
										uni.notifyBLECharacteristicValueChange({
											state: true,
											deviceId: that.deviceId,
											serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
											characteristicId: '6E400003-B5A3-F393-E0A9-E50E24DCCA9E',
											success(res) {
												console.log('开启监听服务成功')
												//写入Q01
												uni.writeBLECharacteristicValue({
													deviceId: that.deviceId,
													serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
													characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
													value: String2Ab('AABB00065130313D3140CB'),
													success(res) {
														console.info('下发在线命令成功')
														//只要调用了就不是第一次了
														that.setIsFirst(false)
													}
												})
											}
										})
									}
								})
							},
							fail(res) {
								console.warn('重新连接后错误', res)

							}
						})

					} else {
						//如果设备id不存在就信搜索设备后连接
						//1. 超时提示
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
										clearTimeout(searchTimeoutId)
										that.setDeviceId(device.deviceId)
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
															serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
															success(res) {
																uni.notifyBLECharacteristicValueChange({
																	state: true,
																	deviceId: device.deviceId,
																	serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
																	characteristicId: '6E400003-B5A3-F393-E0A9-E50E24DCCA9E',
																	success(res) {
																		console.log('开启监听服务成功')
																		//写入Q01
																		uni.writeBLECharacteristicValue({
																			deviceId: device.deviceId,
																			serviceId: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
																			characteristicId: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
																			value: String2Ab('AABB00065130313D3140CB'),
																			success(res) {
																				console.info('下发Q01成功')
																				//只要调用了就不是第一次了
																				that.setIsFirst(false)
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

				} else {
					//未开启蓝牙提示开启蓝牙
					uni.showModal({
						title: '提示',
						content: '请开启手机蓝牙',
						showCancel: false,
						success: (res) => {
							if (res.confirm) {
								console.info('提示用户开启蓝牙后用户点击确认')
							}
						}
					})
				}
			},
			getAndListenBTState() {
				var that = this
				uni.openBluetoothAdapter({
					success(res) {
						console.warn('开启适配器状态成功，意味着蓝牙开启', res)
						that.setBlueToothOpen(true)
						that.connectBle()
					},
					fail(res) {
						//开启失败的话说明没有开启手机蓝牙
						console.warn('开启适配器失败，意味着没有开启蓝牙', res)
						that.connectBle()
					}
				})
			},
			listenResponseOrder() {
				var that = this
				let timeLast = 0
				uni.onBLECharacteristicValueChange(function(res) {
					if (new Date().getTime() - timeLast < 200) {
						that.setResponseOrder(that.responseOrder + Ab2String(res.value))
						console.log('分包相应的结果合并为', that.responseOrder)
					} else {
						timeLast = new Date().getTime()
						let resOrder = Ab2String(res.value)
						if (resOrder.indexOf('5130383D') != -1) {
							let batteryNumber = resOrder.substring(8, 12)
							that.setbattery(parseInt(String.fromCharCode(parseInt(batteryNumber.substring(0, 2), 16)) + String.fromCharCode(
								parseInt(batteryNumber.substring(2), 16))))
						} else {
							that.setResponseOrder(resOrder)
						}
						console.log('监听到设备的响应为', resOrder)
					}

				})
			}

		},
		computed: {
			...mapState(['baseRequestUrl', 'deviceNamePrefix',
				'deviceImei', 'deviceName', 'deviceId',
				'responseOrder',
				'confirmOrder',
				'goodsObjectArray', 'commitGoodsArray', 'userId', 'bleConnected', 'mainUUID', 'writeUUID', 'notifyUUID',
				'blueToothOpen'
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
				return this.cansubmit && this.bleConnected ? '立即支付' : '订单加载中'
			}
		},
		onShow() {

		},
		onLoad() {

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
