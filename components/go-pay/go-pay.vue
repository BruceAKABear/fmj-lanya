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
	export default {
		props: {
			defaultImg: {
				type: String,
				default: '../../utils/index.js'
			},
			checkV: {
				type: Boolean,
				default: true
			},
			youhuiCode: {
				type: String,
				default: null
			},
			placeholder: {
				type: String,
				default: '兑换码不区分大小写'
			},
			placeholder: {
				type: String,
				default: '兑换码不区分大小写'
			},


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
