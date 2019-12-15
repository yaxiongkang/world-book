<template>
  <div class="swiper">
    <swiper @change="handleChange" :indicator-dots="index !== 4 " indicator-color="pink" indicator-active-color="green" autoplay>
      <swiper-item v-for="(item,index) in images" :key="index">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
    <button @click="toIndex" class="start-btn" v-show="index == 4">开始体验</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index:0,
      images: [
        "/static/images/8.jpg",
        "/static/images/2.jpg",
        "/static/images/6.jpg",
        "/static/images/7.jpg",
        "/static/images/10.jpg"
      ]
    };
  },
  methods: {
    handleChange(event){
      this.index = event.mp.detail.current
    },
    // 跳转index 主页
    toIndex(){
      wx.navigateTo({
        url:"/apages/index/main"
      })
    }
  },
};
</script>
<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  swiper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .start-btn{
    position: absolute;
    bottom: 20rpx;
    left: 50%;
    width: 280rpx;
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin-left: -140rpx;
    background-color: rgba(255,255, 255, .5)
  }
}
</style>