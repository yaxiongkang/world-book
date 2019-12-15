<template>
  <div id="detailContainer">
    <div class="bookInfo">
      <h1>《{{bookItem.title}}》</h1>
      <figure>
        <img :src="bookItem.image" alt />
      </figure>
      <div class="info-list">
        <p>{{bookItem.author}}</p>
        <p>出版社:{{bookItem.publisher}}</p>
        <p>出版日期:{{bookItem.pubdate}}</p>
        <p>价格:{{bookItem.price}}</p>
      </div>
    </div>
    <button class="shareBtn">分享给好友</button>
    <!-- 简介 -->
    <div class="content">
      <article>
        <h2>作者简介</h2>
        <section>{{bookItem.author_intro}}</section>
      </article>
      <article>
        <h2>内容简介</h2>
        <section>{{bookItem.summary}}</section>
      </article>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			bookItem:{}
		}
	},
	mounted() {
		//主页数据获取
		this.bookItem=JSON.parse(this.$mp.query.bookItem)
		//设置导航标题
		wx.setNavigationBarTitle({
			title:this.bookItem.title
		})
	},
};
</script>
<style lang="scss" scoped>
#detailContainer {
  .bookInfo {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 40rpx;
      font-weight: bold;
      text-align: center;
      margin: 10rpx 0;
    }
    figure {
      width: 70%;
      height: 700rpx;
      margin: 0 auto;
    }
    .info-list {
      margin-left: 15%;
      p {
        line-height: 50rpx;
      }
    }
  }
}
.shareBtn {
  width: 320rpx;
  height: 80rpx;
  line-height: 80rpx;
  margin: 20rpx auto;
}
.content {
  margin: 30rpx 100rpx;
  article {
    margin-top: 50rpx;
    h2 {
      font-size: 30rpx;
      font-weight: bold;
      color: #02a774;
      text-align: center;
    }
		section{
			font-size: 28rpx;
			text-indent: 56rpx;
		}
  }
}
</style>