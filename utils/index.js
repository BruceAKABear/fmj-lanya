//16进制字符串转2进制
export function String2Ab(str) {
	str = str.toUpperCase()
	var pos = 0;
	var len = str.length;
	if (len % 2 != 0) {
		return null;
		console.error('命令长度异常')
	}
	len /= 2;
	let buffer = new ArrayBuffer(len)
	let dataView = new DataView(buffer)
	for (let i = 0; i < len; i++) {
		let s = str.substr(pos, 2);
		dataView.setUint8(i, parseInt(s, 16))
		pos += 2;
	}
	console.log('下发的数据：', str.toUpperCase())
	return buffer;
}
//二进制转16进制字符串
export function Ab2String(arr) {
	let view = new DataView(arr);
	let str = "";
	for (let i = 0; i < arr.byteLength; i++) {
		let tmp = view.getUint8(i).toString(16);
		if (tmp.length == 1) {
			tmp = "0" + tmp;
		}
		str += tmp;
	}
	return str.toUpperCase();
}
/**
 * @param {Object} delay演示工具方法,演示毫秒
 */
export function sleep(delay) {
	var start = (new Date()).getTime();
	while ((new Date()).getTime() - start < delay) {
		continue;
	}
}

export function isNeedVersion(phoneType, searchedVersion) {
	let androidNeedVersion = 657
	let iosNeedVersion = 656

	if (phoneType == 'android') {
		let varr = searchedVersion.split('.')
		let vm1 = parseInt(varr.join(''))
		return vm1 > androidNeedVersion

	} else if (phoneType == 'ios') {
		let varr = searchedVersion.split('.')
		let vm1 = parseInt(varr.join(''))
		return vm1 > iosNeedVersion
	}
}

/**
 * 关闭蓝牙连接工具类
 * 
 * @param {Object} deviceId
 */
export function closeBle(deviceId) {
	//关闭连接
	uni.closeBLEConnection({
		deviceId: deviceId,
		success(res) {
			uni.closeBluetoothAdapter({
				success(res) {
					console.log('页面隐藏后关闭蓝牙成功')
				}
			})
		}
	})
}

/**
 * 连接蓝牙并下发Q01
 * 
 */
export function connectBle(that) {
	console.log('工具类中的this', that)
	uni.openBluetoothAdapter({
		success(res) {
			if (that.$store.state.deviceId != '') {
				//如果设备id不为空那么说明搜索过，就不再搜索直接连接
				uni.createBLEConnection({
					deviceId: that.$store.state.deviceId,
					success(res) {
						console.log('连接蓝牙成功', res)
						//即使知道了特征id也要搜索一下
						uni.getBLEDeviceCharacteristics({
							deviceId: that.$store.state.deviceId,
							serviceId: that.$store.state.mainUUID,
							success(res) {
								uni.notifyBLECharacteristicValueChange({
									state: true,
									deviceId: that.$store.state.deviceId,
									serviceId: that.$store.state.mainUUID,
									characteristicId: that.$store.state.notifyUUID,
									success(res) {
										console.log('开启监听服务成功')
										//写入Q01
										uni.writeBLECharacteristicValue({
											deviceId: that.$store.state.deviceId,
											serviceId: that.$store.state.mainUUID,
											characteristicId: that.$store.state.writeUUID,
											value: String2Ab(that.$store.state.checkOnlineOrder),
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
			} else {
				//到这一步说明设备没有搜索过，那么搜索以后连接
				var searchTimeoutId = setTimeout(function() {
					if (that.$store.state.deviceId == '') {
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
							if (device.name != '' && device.name == that.$store.state.deviceNamePrefix + that.$store.state.deviceImei) {
								that.$store.state.deviceId = device.deviceId
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
													serviceId: that.$store.state.mainUUID,
													success(res) {
														uni.notifyBLECharacteristicValueChange({
															state: true,
															deviceId: device.deviceId,
															serviceId: that.$store.state.mainUUID,
															characteristicId: that.$store.state.notifyUUID,
															success(res) {
																console.log('开启监听服务成功')
																//写入Q01
																uni.writeBLECharacteristicValue({
																	deviceId: device.deviceId,
																	serviceId: that.$store.state.mainUUID,
																	characteristicId: that.$store.state.writeUUID,
																	value: String2Ab(that.$store.state.checkOnlineOrder),
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
