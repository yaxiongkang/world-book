<template>
  <div id="booksList-container">
    <div class="bookItem" v-for="(item,index) in booksList" :key="index">
      <figure class="book-img">
        <img :src="item.image" alt />
      </figure>
      <div class="info">
        <p>{{item.title}}</p>
        <p>{{item.author}}</p>
        <p>{{item.publisher}}</p>
      </div> 
			<p class="book-price">{{item.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			booksList:[]
		}
	},
	mounted() {
		//获取转接数据
		this.booksList=JSON.parse(this.$mp.query.bookArr)
	},
};
</script>

<style lang="scss" scoped>
.bookItem{
	display: flex;
	padding: 10rpx;
	border-bottom: 1rpx solid #eee;
	figure{
		width: 140rpx;
		height: 140rpx;
		margin-right: 20rpx;
	}
	.info{
		width: 70%;
		p{
			font-size: 35rpx;
			line-height: 50rpx;
		}
	}
	.book-price{
		font-size: 36rpx;
		font-weight: bold;
		color: red;
	}
}
</style>