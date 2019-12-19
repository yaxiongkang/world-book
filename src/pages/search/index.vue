<template>
  <div id="seachContainer">
    <div class="searsh-book">
      <input @confirm="confirm" confirm-type="搜索" type="text" v-model="searshBook" placeholder="書山有路勤為徑" placeholder-class="placeholder" />
			<span class="clear" v-show="searshBook" @click="clear">X</span>
    </div>
		<div v-if="bookList.length">
			<BookList :bookList="bookList"/>
		</div>
		
  </div>
</template>
<script>
import BookList from "../booksList/index"
export default {
	components:{
		BookList
	},
	data() {
		return {
			searshBook:"",
			bookList:[]
		}
	},
	methods: {
		clear(){
			this.searshBook = ""
			this.bookList = []
		},
		//搜索按鈕
		confirm(){
			// 1.获取用戶輸入的內容
			let data={req:this.searshBook}
			// 2.发送请求
			wx.request({
				url:"http://localhost:3000/searchBooks",
				data,
				success: (res)=> {
						this.bookList=res.data
				}

			})
		}
	},
};
</script>
<style lang="scss" scoped>
#seachContainer {
	position: relative;
  .searsh-book {
    width: 80%;
    height: 80rpx;
    margin: 0 auto;
    border-bottom: 1rpx solid red;
    input {
      width: 100%;
      height: 100%;
    }
		.clear{
			position: absolute;
			top: 20rpx;
			right: 80rpx;
			z-index: 99;
		}
  }
}
.placeholder {
  text-align: center;
  font-weight: 700;
  color: red;
}
</style>