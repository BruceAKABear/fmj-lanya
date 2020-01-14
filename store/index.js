//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//网络请求基础路径
		baseUrl: 'http://bt.ayilink.com/',
		baseRequestUrl: 'https://bt.ayilink.com/',
		projectName: 'fmj',
		//设备名前缀
		deviceNamePrefix: 'LShare',
		mainUUID: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
		notifyUUID: '6E400003-B5A3-F393-E0A9-E50E24DCCA9E',
		writeUUID: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
		//开启定位标识，默认为false
		openLocation: false,
		//用户id
		userId: '',
		//设备imei
		deviceImei: '',
		//查询出来的设备的id
		deviceId: '',
		//真实设备名称
		deviceName: '',
		//商品对象数组
		goodsObjectArray: [],
		//提交的商品数组
		commitGoodsArray: [],
		//运营商对象
		machObject: {},
		// 检查是否在线的命令
		checkOnlineOrder: 'AABB00065130313D3140CB',
		// 确认命令
		confirmOrder: 'AABB00065130363D3140D0',
		//加盟合作咨询热线
		joinPhone: '4000032400',
		//优惠券开启状态
		voucherState: false,
		// 手机蓝牙是否可用
		blueToothOpen: false,
		//蓝牙连接状态标识
		bleConnected: false,
		//设备相应命令
		responseOrder: null,
		//小程序版本是否正确
		versionRight: false,
		//电量信息
		battery: 0,
		//是否第一次进入小程序
		isFirst: true,
		platform: 'ios'
	},
	mutations: {
		setPlatform(state, platform) {
			state.platform = platform
		},
		setIsFirst(state, isfirst) {
			state.isFirst = isfirst
		},
		setbattery(state, battery) {
			state.battery = battery
		},
		setversionRight(state, versionRight) {
			state.versionRight = versionRight
		},
		//设置服务id
		setOpenLocation(state, status) {
			state.openLocation = status
		},
		//设置用户id
		setUserId(state, userId) {
			state.userId = userId
		},
		//设置设备的imei
		setDeviceImei(state, deviceImei) {
			state.deviceImei = deviceImei
		},
		//设置查询出来的设备id
		setDeviceId(state, deviceId) {
			state.deviceId = deviceId
		},
		//设备设备真实名字
		setDeviceName(state, deviceName) {
			state.deviceName = deviceName
		},
		//设置商品数组
		setGoodsObjectArray(state, goodsObjectArray) {
			state.goodsObjectArray = goodsObjectArray
		},
		//设置提交商品数组
		setCommitGoodsArray(state, commitGoodsArray) {
			state.commitGoodsArray = commitGoodsArray
		},
		//设置运营商对象
		setMachObject(state, machObject) {
			state.machObject = machObject
		},
		//设置检查在线命令
		setCheckOnlineOrder(state, checkOnlineOrder) {
			state.checkOnlineOrder = checkOnlineOrder
		},
		//设置确认命令
		setConfirmOrder(state, confirmOrder) {
			state.confirmOrder = confirmOrder
		},
		//设置优惠券开启状态
		setVoucherState(state, voucherState) {
			state.voucherState = voucherState
		},
		//设置手机蓝牙功能是否开启
		setBlueToothOpen(state, blueToothOpen) {
			state.blueToothOpen = blueToothOpen
		},
		//设置手机蓝牙连接状态
		setBleConnected(state, status) {
			state.bleConnected = status
		},
		//设置设备相应的命令
		setResponseOrder(state, responseOrder) {
			state.responseOrder = responseOrder
		}
	}
})
export default store
