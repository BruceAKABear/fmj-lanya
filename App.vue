<script>
	//引入vuex
	import {
		mapState,
		mapMutations
	} from "vuex"
	//导入工具类
	import {
		Ab2String,
		isNeedVersion,
		connectBle
	} from './utils/index.js'
	export default {
		onLaunch: function() {
			//首先检查是否有更新
			this.checkUpdateAndApply()
			//小程序启动时开始监听
			this.openBlueToothAdapterAndListenState()
			this.listenBLEConnectionStateChange()
			this.listenResponseOrder()
		},
		onShow: function() {
			//应用显示
		},
		methods: {
			...mapMutations([
				'setBlueToothOpen', 'setBleConnected', 'setResponseOrder', 'setOpenLocation', 'setbattery'
			]),
			/**
			 * 开启蓝牙适配器，并监听手机蓝牙是否可用
			 */
			openBlueToothAdapterAndListenState() {
				var that = this
				uni.openBluetoothAdapter({
					success(res) {
						that.setBlueToothOpen(true)
					},
					fail(res) {
						that.setBlueToothOpen(false)
					}
				})
				uni.onBluetoothAdapterStateChange(function(res) {
					that.setBlueToothOpen(res.available)
					if (!res.available) {
						console.warn('蓝牙被关闭了')
						uni.showModal({
							title: '',
							content: '使用小程序期间请保持蓝牙开启',
							showCancel: false,
							success: (res) => {
								if (res.confirm) {
									console.warn('用户关闭蓝牙后点击确认')
								}
							}
						})
					} else {
						console.warn('蓝牙打开了')
						//蓝牙打开以后连接蓝牙
						// connectBle(that)
					}
				})
			},
			/**
			 * 监听手机蓝牙连接状态
			 */
			listenBLEConnectionStateChange() {
				var that = this
				uni.onBLEConnectionStateChange(function(res) {
					that.setBleConnected(res.connected)
				})
			},
			/**
			 * 监听响应值
			 */
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
			},
			/**
			 * 检查并应用更新
			 */
			checkUpdateAndApply() {
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(function(res) {
					if (res.hasUpdate) {
						uni.showLoading({
							title: '新版本安装中',
						});
					}
					updateManager.onUpdateReady(function(res) {
						updateManager.applyUpdate();
					});
				});
				updateManager.onUpdateFailed(function(res) {
					uni.hideLoading();
					uni.showModal({
						title: '更新失败',
						content: '更新失败,请重启小程序',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							}
						}
					});
					// 新的版本下载失败
					console.error('更新下载失败')
				});
			},
			/**
			 * 判断微信版本是否是符合要求
			 * 
			 */
			judgePlatformVersion() {
				var that = this
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
						}
					}
				})
			}

		},
		computed: {
			...mapState(['responseOrder', 'deviceId'])
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '../../common/uni.css'

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
