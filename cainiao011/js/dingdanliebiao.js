//productList=function(){
//	var productName=$(".inputs").val();
//	$.ajax({
//		type:"post",
//		url:preUrl+"getOrder",
//		async:true,
//		contentType:"application/json",
//		data:JSON.stringify({
//			token : localStorage.getItem("token"),
//			productName:productName,
//		}),
//		success:function(data){
//			setProduct(data.result)
//		}
//	});	
//}
var Fanh=new Vue({
	el:"#fanh",
	 methods: {
		rime: function () {
		location.href="tijiaodingdan.html";
		}
	}
})

var as=new Vue({
	el:'.search',
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
Vue.component('child',{
	props:['products','productNum'],
	template:'<div><div v-for="(product,index) in products"><div class="Recharge">'
			+'<img :src="product.Image"/>'
			+'<div class="last">'
			+'<span>{{product.Des}}</span>'
			+'</div>'
			+'<div class="Price">	'	
			+'<a>￥{{product.CurPrice}}</a>'
			+'<p>￥{{product.OldPrice}}</p>'
			+'<i>x{{productNum[index]}}</i>'
			+'</div>'
			+'</div></div></div>'
})

Vue.component('father',{
	props:['items'],
	template:'<div><div v-for="(item,index) in items"><div class="junbao">'
			+'<img src="images/tianmao.png"/>'
			+'<p>君宝话费充值专营店<i></i></p>'
			+'<span>交易成功</span>'
		    +'</div>'
		    +'<div><child :products="item.products" :product-num="JSON.parse(item.productNum)"></child></div>'		    
		    +'<div class="Total">'
			+'<p>共{{item.totalNum}}件商品 合计：￥{{item.totalCost}}（含运费￥0.00）</p>'
		    +'</div>'
			+'<div class="revmo">'
			+'<a>评价</a><a>删除订单</a>'
		    +'</div></div></div>'
})

new Vue({
	el:'#order',
	data:{
		items:[]
	},
	created:function(){
		var that = this;
		axios.post(preUrl+"/getOrder",{token:localStorage.getItem("token")})
		  .then(function (response) {
		    console.log(response);
		    that.items=response.data.result;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });	
	}
})



//$(document).on("click",".delete",function () {
//	//	var id = $(this).parents(".title").data("id");
//	var id=	$(this).parents(".big_box").data("id");
//	var cc=this;
//	$.ajax({
//		type:"post",
//		url:preUrl+"delOrder",
//		async:true,
//		contentType:"application/json",
//		data:JSON.stringify({
//			token:localStorage.getItem("token"),
//			orderId:id
//		}),
//		success:function(data){				
//			if(data.result==1){
//				$(cc).parents(".big_box").remove(); //静态删除
////					location.reload()
//			}
//		}
//	});		
//})

//跳转订单详情
//$(document).on("click",".content_two",function () {
//	var orderId=$(this).parents(".big_box").data("id");
//	$.ajax({
//		type:"post",
//		url:preUrl+"getOrderDetail",
//		async:true,
//		contentType:"application/json",
//		data:JSON.stringify({
//			token:localStorage.getItem("token"),
//			orderId:orderId
//		}),
//		success:function(data){
//			if(data.isSuccess==true){
//				location.href="OrderDetails.html?id="+orderId;
//			}
//		}
//	});
//})
//点击搜索  获得焦点 失去焦点
//$(document).on("focus",".search",function () {
//	$(this).addClass("cur");
//	$(".miss").css("display","block");
//})
//
//$(document).on("blur",".search",function () {
//	$(this).removeClass("cur");
//	$(".miss").css("display","none");
//})
//$(document).on("change",".search", function () {
//	$(".content_one").empty();
//	productList();		
//})


