<template>
  <div id="container">
    <swiper
      @change="handleChange"
      :indicator-dots="index !== 4 "
      indicator-color="pink"
      indicator-active-color="green"
      autoplay
    >
      <swiper-item v-for="(item,index) in swiperImage" :key="index">
        <img :src="item.image" alt />
      </swiper-item>
    </swiper>
    <!-- 图书列表 -->
    <div class="book-list">
      <!-- 列表导航 -->
      <div class="nav-title">
        <span>图书列表</span>
        <!-- 跳转到图书列表 -->
        <span class="more" @click="toBooksList(bookArr)">></span>
      </div>
      <!-- 列表 -->
      <div class="list">
        <div @click="toDetail(item)" class="book-item" v-for="(item,index) in bookArr" :key="index">
          <figure>
            <img :src="item.image" alt />
          </figure>
          <p>《{{item.title}}》</p>
          <p>{{item.author}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import datas from "./datas/data.json";
export default {
  data() {
    return {
      bookArr: datas
    };
  },
  computed: {
    swiperImage() {
      // 数组splice会修改原数组 es6[...]克隆
      return [...this.bookArr].splice(0, 4);
    }
  },
  methods: {
    //跳转详情
    toDetail(bookItem) {
      wx.navigateTo({
        url: "/pages/detail/main?bookItem=" + JSON.stringify(bookItem)
      });
    },
    //跳转到图书列表页
    toBooksList(bookArr) {
      wx.navigateTo({
        url: "/pages/booksList/main?bookArr=" + JSON.stringify(bookArr)
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
  swiper {
    width: 100%;
    height: 400rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// 图书列表
.book-list {
  .nav-title {
    line-height: 80rpx;
    padding: 10rpx;
  }
  .more {
    float: right;
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  .book-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    border-bottom: 1rpx solid #eee;
    box-sizing: border-box;
    &:nth-child(2n + 1) {
      border-right: 1rpx solid #eee;
    }
    figure {
      width: 200rpx;
      height: 300rpx;
      margin: 10rpx 0;
    }
    p {
      font-size: 24rpx;
      line-height: 50rpx;
    }
  }
}
</style>