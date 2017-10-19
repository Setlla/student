var as = new Vue({
	el:'.input',
	data:{
		isCur:false,
		isAllorder:false
	},
	methods:{
		have:function(){			
				this.isCur = true;
				this.isAllorder = true;
		},
		none:function(){
			this.isCur = false;
			this.isAllorder = false;
		}
	}	
})

var productName = $(".Allorders").val();
//$.ajax({
//	type:"post",
//	url:_url+"getOrder",
//	async:true,
//	contentType:"application/JSON",
//	data:JSON.stringify({
//		token:localStorage.getItem("token"),
//		productName:productName
//	}),
//	success:function(data){
//		if(data.isSuccess == true){
////			list(data);
//		}
//	}
//});
Vue.component('child',{
	props:['products'],
	template:
		 '<div><div v-for="product in products">'
        +'<div class="card">'
		+'<img src="{{product.Image}}" />'
        +'<div class="text">'
        +'<p>{{product.Des}}</p>'			           
        +'</div>'
        +'<div class="pricess">'
        +'<span>￥{{product.CurPrice}}</span>'
        +'<span class="noprice">￥{{product.OldPrice}}</span>'
        +'<span class="number">x{{product.productNum}}</a>'
		+'</div>'
		+'</div>'
        +'</div></div>'
	
})

Vue.component('father',{
	props:['items'],
	template:'<div><div  v-for="item in items">'
		+'<div class="products">'
		+'<div class="success">'
		+'<img src="img/order_17.png"/>'	
		+'<p>君宝话费充值专营店</p>'	
		+'<span></span>'	
		+'<a>交易成功</a>'
		+'</div>'
		+'<div class="cards">'
		+'<child :products ="item.products"></child>'
		+'</div>'
		+'<ul>'	
		+'<li class="product">'	
		+'<p>共<i class="totalNum">1</i>件商品 合计：￥'								
		+'<span class="totalCost">99</span>(含运费￥0.00)'	
		+'</p>'
		+'</li>'	
		+'<li class="button">'
		+'<button class="assess">评价</button>'
		+'<button class="delete">删除订单</button>'	
		+'</li>'
		+'</ul>'
		+'</div></div></div>'
})
new Vue({
	el:'.der',
	data:{
		items:[]
	},
	created:function(){
		var that = this;
		axios.post(_url+'getOrder',{token:localStorage.getItem("token")})
		  .then(function (response) {
		    console.log(response.data.result);
		    that.items = response.data.result;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });    	
	}
})
		
//删除订单
$(document).on("click",".delete",function(){
	  var orderId =$(this).parents(".products").data("id");
	  var current = this;
	$.ajax({
		type:"post",
		url:_url+"delOrder",
		async:true,
		contentType:"application/JSON",
		data:JSON.stringify({token:localStorage.getItem("token"),orderId:orderId}),
		success:function(data){
			if(data.isSuccess == true){
				$(current).parents(".products").remove();//静态删除
			}
		}
	});
})
//跳转购物车

//$(document).on("click",".head img",function(){
//	location.href="ShopCar.html";
//})
//搜索框
//$(".Allorders").focus(function(){
//	$(".input").addClass("cur"); 
//	$(".Allorders").addClass("allorder"); 
//})
//$(".Allorders").blur(function(){
//	$(".input").removeClass("cur"); 
//	$(".Allorders").removeClass("allorder"); 
//	
//})
//$(document).on("change",".Allorders",function(){
//	$(".der").empty();
//	search();
//})