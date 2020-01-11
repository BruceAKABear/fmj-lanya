<template>
	<view class="content">
		<!-- 运营商banner -->
		<view class="operator-banner">
			<image class="operator-banner-pic" :src="banner" mode="widthFix"></image>

			<view class="head-info">
				<view class="head-info-connect-status">

					<view v-if="bleConnected">
						<image class="blutooth" mode="scaleToFill" src="../../static/lanya1.png" style="width: 35rpx;height: 52rpx;"></image>
					</view>
					<view v-if="bleConnected">
						<text style="color:#1aad19">已连接</text>
					</view>
					<view v-if="!bleConnected">
						<image class="blutooth" mode="scaleToFill" src="../../static/lanya2.png" style="width: 35rpx;height: 52rpx;"></image>
					</view>
					<view v-if="!bleConnected">
						<text>{{notconnect}}</text>
					</view>
					<!-- <image class="blutooth" mode="scaleToFill" src="../../static/lanya1.png"></image>
					<image class="blutooth" mode="scaleToFill" src="../../static/lanya2.png"></image> -->
				</view>
				<view class="head-info-battery-info" v-if="bleConnected">
					<view>
						<image mode="scaleToFill" src="../../static/1.png" style="width: 30rpx;height: 56rpx;" v-if="batterylevel<36&&batterylevel>0"></image>
						<image mode="scaleToFill" src="../../static/10.png" style="width: 30rpx;height: 56rpx;" v-if="batterylevel<39&&batterylevel>=36"></image>
						<image mode="scaleToFill" src="../../static/60.png" style="width: 30rpx;height: 56rpx;" v-if="batterylevel<43&&batterylevel>=39"></image>
						<image mode="scaleToFill" src="../../static/90.png" style="width: 30rpx;height: 56rpx;" v-if="batterylevel>=43"></image>
					</view>
					<view>
						<text>{{batterylevel}}%</text>
					</view>
				</view>

			</view>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view :class="goods.empty?styleEmpty:stylefull " v-for="(goods,index)  in goodsList " :key='index'>
				<!-- 根据available判断商品是否可用 -->
				<view class="goods-item-inner">
					<!-- 产品图片 -->
					<view class="goods-item-inner-pic-tunnel">
						<view class="goods-item-inner-tunnel-number">
							通道号:{{goods.id}}
						</view>
						<image class="goods-item-inner-pic" :src="goods.goods.imgUrl?goods.goods.imgUrl:defaultImg"></image>
					</view>
					<!-- 产品名称 -->
					<view class="goods-item-inner-name-price">
						<view class="goods-item-inner-name">
							{{goods.goods.name}}
						</view>
						<view class="goods-item-inner-price">
							￥{{goods.goods.price}}
						</view>
					</view>
					<!-- 产品数量选择 -->
					<view class="goods-item-inner-number">
						<uni-number-box :value="0" :min="0" :product="goods" :max="goods.stocks" :disabled="goods.empty || !bleConnected"
						 @change="selectedGoods"></uni-number-box>
					</view>
				</view>

			</view>
		</view>
		<!-- 底部通过 -->
		<view class="bottom-info">
			<view class="bottom-info-addcart">
				<view class="bottom-info-addcart-img">
					<image src="../../static/cart.png" style="width: 60rpx;height: 60rpx;"></image>
				</view>

				<view class="bottom-info-addcart-text">
					{{showText}}
				</view>
			</view>
			<view :class="havaSelectGoods?'bottom-info-gopay-yes':'bottom-info-gopay'" @click="gopay">
				去结算
			</view>

			<!-- <view class="bottom-item">
				<uni-icon type="home" color="#B2B2B2" size="50"></uni-icon>
				<text class="buy-text">旗舰店</text>
			</view>
			<view class="bottom-item" @tap="openUserPro()">
				<uni-icon type="email" color="#B2B2B2" size="50"></uni-icon>
				<text class="buy-text">用户协议</text>
			</view>
			<view class="bottom-item" @tap="callKefu()">
				<uni-icon type="contact" color="#B2B2B2" size="50"></uni-icon>
				<text class="buy-text">客服</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex'
	//导入工具类
	import {
		isNeedVersion,
		String2Ab
	} from '../../utils/index.js'
	import uniIcon from '../../components/uni-icons/uni-icons.vue'
	import uniNumberBox from "../../components/uni-number-box/uni-number-box.vue"
	export default {
		data() {
			return {
				defaultImg: '../../static/prod.png',
				goodsList: [],
				banner: '',
				mallUrl: '',
				servicePhone: '',
				userProtocol: '',
				stylefull: 'goods-item',
				styleEmpty: 'goods-item-empty',
				notconnect: '蓝牙未连接'
			}
		},
		components: {
			uniIcon,
			uniNumberBox
		},
		methods: {
			...mapMutations(['setGoodsObjectArray', 'setMachObject', 'setVoucherState', 'setCommitGoodsArray', 'setUserId',
				'setDeviceImei', 'setOpenLocation', 'setDeviceId', 'setversionRight'
			]),

			openUserPro() {
				uni.showModal({
					title: '用户协议',
					content: this.userProtocol ? this.userProtocol : '默认用户协议',
					showCancel: false,
					success: (res) => {
						if (res.confirm) {}
					}
				})
			},
			//选中商品
			selectedGoods(value, goods) {
				if (goods.empty) {
					uni.showModal({
						title: '',
						content: '此商品已经售空，请选择其他商品',
						showCancel: false,
						success: (res) => {
							if (res.confirm) {}
						}
					})
					return
				}
				//-------------购买的商品对象
				let pAndN = {}
				//货道号
				pAndN.cabinetNo = goods.id
				pAndN.goodsCount = parseInt(value)
				pAndN.returnCount = 0
				pAndN.goodsId = goods.goods.id
				pAndN.goodsPrice = parseFloat(goods.goods.price)
				pAndN.goodsName = goods.goods.name
				//-----------显示的商品
				let showObj = {}
				showObj.product = goods
				showObj.number = parseInt(value)

				let selectedCommitGoodsArray = this.commitGoodsArray
				let selectedGoodsObjectArray = this.goodsObjectArray

				let returnObj = this.containsObejct(selectedCommitGoodsArray, goods)
				if (returnObj.flag) {
					if (value == 0) {
						selectedCommitGoodsArray.splice(returnObj.index, 1);
						selectedGoodsObjectArray.splice(returnObj.index, 1);
					} else {
						selectedCommitGoodsArray[returnObj.index] = pAndN
						selectedGoodsObjectArray[returnObj.index] = showObj
					}
				} else {
					selectedCommitGoodsArray.push(pAndN)
					selectedGoodsObjectArray.push(showObj)
				}
				this.showObjArray = selectedCommitGoodsArray
				//先清空
				this.setCommitGoodsArray([])
				//再插入
				this.setCommitGoodsArray(selectedCommitGoodsArray)
				this.setGoodsObjectArray(selectedGoodsObjectArray)
				//选中商品，跳转订单页面，显示支付

			},
			containsObejct(objectArray, productObject) {
				let returnObj = {}
				returnObj.flag = false
				//如果为空，那就是不包含
				if (objectArray.length == 0) {
					return returnObj
				} else {
					for (let i = 0; i < objectArray.length; i++) {
						if (objectArray[i].goodsId == productObject.goods.id) {
							returnObj.flag = true
							returnObj.index = i
						}
					}
					return returnObj
				}
			},
			callKefu() {
				uni.makePhoneCall({
					phoneNumber: this.servicePhone
				});

			},
			queryAllGoods() {
				var that = this
				uni.request({
					url: that.baseRequestUrl + 'infos/getMctIdByImei?deviceImei=' + that.deviceImei,
					method: 'GET',
					success: (resm) => {
						if (resm.data.status) {
							uni.request({
								url: that.baseRequestUrl + 'infos/getBrandInfoByMctId/?mctId=' + resm.data.data.mctId,
								method: 'GET',
								success: (resb) => {
									if (resb.data.status) {
										let wholedata = resb.data.data.brandInfo
										that.setMachObject(wholedata)
										uni.setNavigationBarTitle({
											title: wholedata.mobileTitle
										})
										that.servicePhone = wholedata.servicePhone
										that.userProtocol = wholedata.userProtocol
										that.mallUrl = wholedata.mallUrl
										let imageInfoArray = JSON.parse(wholedata.imgInfo)
										that.banner = imageInfoArray[0].url
										uni.request({
											url: that.baseRequestUrl + 'infos/getDeviceGoodsByImei?deviceImei=' + that.deviceImei,
											method: 'GET',
											success: (resg) => {
												if (resg.data.status) {
													that.goodsList = resg.data.data.goodsList
												} else {
													uni.showModal({
														title: '',
														content: resg.data.message,
														showCancel: false,
														success: (resgs) => {
															if (resgs.confirm) {
																uni.reLaunch({
																	url: '../index/index'
																})
															}
														}
													})
													return
												}
											}
										});
										//请求是否开启优惠券
										uni.request({
											url: that.baseRequestUrl + 'infos/getVoucherStateByMctId?mctId=' + wholedata.mctId,
											method: 'GET',
											success(res) {
												if (res.data.status) {
													if (res.data.data.state) {
														that.setVoucherState(true)
													}
												} else {
													uni.showModal({
														title: '',
														content: res.data.message,
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

									} else {
										uni.showModal({
											title: '',
											content: resb.data.message,
											showCancel: false,
											success: (resbs) => {
												if (resbs.confirm) {
													uni.reLaunch({
														url: '../index/index'
													})
												}
											}
										})
										return
									}
								}
							});

						} else {
							uni.showModal({
								title: '',
								content: resm.data.message,
								showCancel: false,
								success: (resms) => {
									if (resms.confirm) {
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
			gopay() {
				if (this.commitGoodsArray.length == 0) {
					return
				} else {
					uni.navigateTo({
						url: '../order/order'
					})
				}

			},
			/**
			 * 从请求中封装数据
			 */
			setDeviceIdFromPath(param) {
				if (typeof(param.q) != 'undefined') {
					//微信直接扫码进入
					let sanUrl = decodeURIComponent(param.q)
					let scanImei = sanUrl.substring(sanUrl.indexOf('imei=') + 5)
					this.setDeviceImei(scanImei)
				} else {
					//从index扫码跳转
					this.setDeviceImei(param.imei)
				}
			},
			userLogin() {
				var that = this
				uni.login({
					success: function(loginRes) {
						let weixinCode = loginRes.code
						uni.request({
							url: that.baseRequestUrl + 'userInfo/getWxUserInfo?code=' + weixinCode + '&requestFrom=wx_fmj',
							success: (res) => {
								//数据响应成功
								if (res.data.status) {
									that.setUserId(res.data.data.openid)
									// 获取用户信息
									uni.getUserInfo({
										provider: 'weixin',
										success: function(infoRes) {
											console.log('用户昵称为：', infoRes);
										}
									})
								} else {
									//服务器响应失败
									uni.showModal({
										title: '',
										content: res.data.message,
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
									content: '服务器开小差了,请稍后重试',
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
				})
			},
			/**
			 * 判断微信版本是否是符合要求
			 * 
			 */
			judgePlatformVersion() {
				var that = this
				if (that.versionRight) {
					//判断是否授予定位
					that.judgeLocationOpen()
				} else {
					//获取到设备信息
					uni.getSystemInfo({
						success: function(res) {
							if (!isNeedVersion(res.platform, res.version)) {
								uni.showModal({
									title: '提示',
									content: '当前微信版本过低,请更新至最新版本才能连接蓝牙哦!',
									showCancel: false,
									success: (res) => {
										if (res.confirm) {
											uni.reLaunch({
												url: '../index/index'
											})

										}
									}
								})
							} else {
								console.log('版本验证通过')
								that.setversionRight(true)
								//判断是否授予定位
								that.judgeLocationOpen()
							}
						}
					})

				}
			},
			judgeLocationOpen() {
				var that = this
				//兼容微信奇怪的要求，使用蓝牙需要开启位置权限
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						that.setOpenLocation(true)
						//判断蓝牙是否打开

						//连接蓝牙
						that.connectBle()

					},
					fail() {
						uni.showModal({
							title: '',
							content: '请授予小程序获取位置功能',
							showCancel: false,
							success: (res) => {
								if (res.confirm) {
									uni.openSetting({
										success(res) {
											uni.authorize({
												scope: 'scope.userLocation',
												success() {
													uni.getLocation({
														type: 'wgs84',
														success: function(res) {
															that.setOpenLocation(true)
															console.log('用户手动开启定位权限成功')
														}
													})
												},
												fail() {
													uni.showModal({
														title: '',
														content: '请授予小程序获取位置功能后重试',
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
			}

		},
		computed: {
			...mapState(['deviceImei', 'baseRequestUrl', 'commitGoodsArray', 'goodsObjectArray', 'bleConnected', 'deviceId',
				'deviceNamePrefix', 'mainUUID', 'writeUUID', 'checkOnlineOrder', 'notifyUUID', 'versionRight', 'battery'
			]),
			havaSelectGoods() {
				return this.commitGoodsArray.length != 0
			},
			showText() {
				let selectedCommitGoodsArray = this.commitGoodsArray
				if (selectedCommitGoodsArray.length == 0) {
					return '未选购商品'
				} else {
					let totalP = 0
					selectedCommitGoodsArray.forEach(function(item) {
						totalP = totalP + (item.goodsCount * item.goodsPrice)

					})
					return '总计¥' + totalP.toFixed(2)
				}
			},
			batterylevel() {
				return this.battery

			}
		},
		//页面加载时查询运营商的banner
		onLoad(params) {
			//用户静默登录
			this.userLogin()
			//封装请求参数
			this.setCommitGoodsArray([])
			this.setGoodsObjectArray([])
			this.queryAllGoods()
		},

		onShow() {
			//判断微信版本是否正确
			//this.judgePlatformVersion()
			this.connectBle()
		},
		onHide() {
			//关闭蓝牙连接
			this.closeBle()
		}
	}
</script>

<style>
	.buy-text {
		font-size: 28rpx;
	}

	.operator-banner {
		text-align: center;
	}

	.operator-banner-pic {
		width: 100%;
	}

	.head-info {
		position: absolute;
		top: 0;
		right: 40rpx;
		display: flex;
		width: 20%;
		font-size: 22rpx;
		color: #999999;
		padding-top: 30rpx;
		justify-content: space-between;
		align-items: center;
	}

	.head-info-battery-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		height: 90rpx;
		color: #FFFFFF;
	}

	.goods-list {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 10vh;
		padding: 10rpx;
		justify-content: space-between;

	}

	.goods-list:after {
		content: '';
		width: 30%;
	}

	.goods-item {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding-bottom: 15rpx;
	}


	.goods-item-empty {
		opacity: 0.4;
	}

	.goods-item-inner {
		margin: 10rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.goods-item-inner-pic-tunnel {
		position: relative;
	}

	.goods-item-inner-tunnel-number {
		position: absolute;
		top: 10rpx;
		left: 10rpx;
		background-color: #B2B2B2;
		opacity: 0.7;
		font-size: 20rpx;
		border-radius: 10rpx;

	}

	.goods-item-inner-pic {
		width: 190rpx;
		height: 190rpx;
	}

	.goods-item-inner-name-price {
		margin-top: 20rpx;
		display: flex;
		font-size: 25rpx;
		align-items: center;
		justify-content: space-between;
	}

	.goods-item-inner-name {
		font-size: 25rpx;
		max-width: 120rpx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.goods-item-inner-price {
		font-size: 28rpx;
		color: #E80080;
	}

	.goods-item-inner-number {
		margin-top: 20rpx;
		width: 200rpx;
	}

	.bottom-info {
		position: fixed;
		z-index: 100;
		height: 100rpx;
		bottom: 0;
		display: flex;
		width: 100%;
		justify-content: center;
		border-top: solid 1rpx #BBBBBB;
		background-color: #515151;
	}

	.bottom-info-addcart {
		width: 70%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bottom-info-addcart-img {
		background-color: #515151;
		padding: 20rpx;
		border-radius: 60rpx;
		position: absolute;
		bottom: 10rpx;
		left: 60rpx;
	}

	.bottom-info-addcart-text {
		color: #FFFFFF;
		padding-left: 15rpx;
	}

	.bottom-info-gopay {
		display: flex;
		width: 30%;
		color: #FFFFFF;
		background-color: #666;
		align-items: center;
		justify-content: center;
	}

	.bottom-info-gopay-yes {
		display: flex;
		width: 30%;
		color: #FFFFFF;
		background-color: #ff5f5f;
		align-items: center;
		justify-content: center;
	}

	.bottom-info-gopay-yes:active {
		opacity: 0.5;
	}

	.bottom-item {
		display: flex;
		flex-direction: column;
		font-size: 25rpx;
		color: #B2B2B2;
		width: 200rpx;
		text-align: center;
	}
</style>
