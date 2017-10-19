//
//var one=new Vue({
//	el:'.content',
//	data:{
//		items:[],
//		obj:{},
//	},
//	methods:{
//		ShopCart:function(id){
//			axios.post(_url+'addShopCar',
//				{id: id, token:localStorage.getItem("token")})
//				.then(function (response) {   //// 回调函数  promise
//				    console.log(response.data);
//				    if(response.data.isSuccess) {
//				    	location.href="ShopCart.html";
//				    }
//				})
//				  .catch(function (error) {    //错误  error
//				    console.log(error);
//				});			
//		}		
//	}
//})
//
//getBrowseLog

Vue.component('father',{
	props:['items'],
	template:'<div class="content_one"><div v-for="item in items" v-bind="getId">'
			+'<h1>9月3日</h1>'
			+'<div class="content_small">'			
			+'<img src="item.Image"/>'
			+'<div class="right">'
			+'<p>{{item.Name}}</p>'
			+'<div class="float">'
			+'<span>￥<i>2199.00</i></span>'
			+'<span>看相似</span>'
			+'<img src="image/zujis_06.png"  @click="ShopCart(item.product[0].id)"/>'							
			+'</div></div></div></div></div>'												
})			
			
var list=new Vue({
	el:'.content',
	data:{
		items:[],
	},
	methods:{
		getId:function(id){
			axios.post(_url+'addShopCar',
				{id: id, token:localStorage.getItem("token")})
				.then(function (response) {   //// 回调函数  promise
				    console.log(response.data);
				    if(response.data.isSuccess) {
				    }
				})
				  .catch(function (error) {    //错误  error
				    console.log(error);
				});			
		}		
	},
	created: function() {  //创建完之后   钩子函数     
			axios.post(_url+"getBrowseLog", {token : localStorage.getItem("token"),
			productName:this.productName,})
		  .then(function (response) {   //// 回调函数  promise
		    console.log(response.data);
		    that.items = response.data.result;
		  })
		  .catch(function (error) {    //错误  error
		    console.log(error);
		  })
	}
	
})



var two=new Vue({	
	el:'.top_nav',
	data:{
		arrow:function(){
			history.back();
		}
	}
})
