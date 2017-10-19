//
//
//var productList=function(){
//	var productName=$(".inputs").val();
//	$.ajax({
//		type:"post",
//		url:_url+"getOrder",
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
//
//}
//productList();

//返回购物车
//$(document).on("click",".top_nav img",function () {
//	location.href="ShopCart.html"
//})
//页面渲染
//function setProduct(result){
//	for (var i=0;i<result.length;i++) {				
//		var conte='<div class="big_box" data-id="'+result[i].id+'">'	
//					+'<div class="title" >'
//					+'<img src="image/ddlb_14.png"/>'
//					+'<span>君宝话费充值专营店</span>'
//					+'<a></a>'
//					+'<i>交易成功</i>'
//					+'</div>'
//					+'<div class="product"></div>'
//					+'<div class="content_bottom">'
//					+'<span>共计<i>'+result[i].totalNum+'</i>商品 合计：￥<i class="money">'+result[i].totalCost+'</i> (含运费￥<i>0.00</i>)</span>'
//					+'</div>'	
//					+'<div class="bottom_nav">'
//					+'<div class="bottom_con">'
//					+'<span class="dele2te">删除订单</span>'
//					+'<span>评价</span>'
//					+'</div></div></div></div>'						
//		$(".content_one").append(conte)	;							
//		for (var j=0;j<result[i].products.length;j++) {
//			var cont='<div class="content_two" >'
//					+'<img src="'+result[i].products[j].Image+'"/>'
//					+'<div class="content_small">'
//					+'<span>'+result[i].products[j].Des+'</span>'					
//					+'</div>'
//					+'<div class="right_con">'
//					+'<span>￥<i>'+result[i].products[j].CurPrice+'</i></span>'
//					+'<span>￥<i>'+result[i].products[j].OldPrice+'</i></span>'
//					+'<span>X<i class="num">'+eval(result[i].productNum)[j]+'</i></span>'//立即执行里面，字符串转数组。
//					+'</div>'
//					+'</div>'
////				var name = ".product"+result[i].id;
//			$(".product").eq(i).append(cont)	
//		}					
//	}
//}


//$(document).on("click",".delete",function () {
//	//	var id = $(this).parents(".title").data("id");
//	var id=	$(this).parents(".big_box").data("id");
//	var cc=this;
//	$.ajax({
//		type:"post",
//		url:_url+"delOrder",
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
//
////跳转订单详情
//$(document).on("click",".content_two",function () {
//	var orderId=$(this).parents(".big_box").data("id");
//	$.ajax({
//		type:"post",
//		url:_url+"getOrderDetail",
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
////点击搜索  获得焦点 失去焦点
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

 Vue.component('child',{
	props:['products','productNum'],
	template:'<div><div v-for="(product, index) in products">'
			+'<div class="content_two" >'
			+'<img :src="product.Image"/>'
			+'<div class="content_small">'
			+'<span>{{product.Des}}</span>'					
			+'</div>'
			+'<div class="right_con">'
			+'<span>￥<i>{{product.CurPrice}}</i></span>'
			+'<span>￥<i>{{product.OldPrice}}</i></span>'
			+'<span>X<i class="num">{{productNum[index]}}</i></span>'//立即执行里面，字符串转数组。
			+'</div>'
			+'</div></div></div>'
})
Vue.component('father',{
	props:['items'],
	template:'<div><div class="big_box" v-for="item in items">'	
			+'<div class="title" >'
			+'<img src="image/ddlb_14.png"/>'
			+'<span>君宝话费充值专营店</span>'
			+'<a></a>'
			+'<i>交易成功</i>'
			+'</div>'
			+'<child :products="item.products" :product-num="JSON.parse(item.productNum)"></child>'
			+'<div class="content_bottom">'
			+'<span>共计<i>{{item.totalNum}}</i>商品 合计：￥<i class="money">{{item.totalCost}}</i> (含运费￥<i>0.00</i>)</span>'
			+'</div>'	
			+'<div class="bottom_nav">'
			+'<div class="bottom_con">'
			+'<span class="dele2te">删除订单</span>'
			+'<span>评价</span>'
			+'</div></div></div></div></div>'				
})
var list=new Vue({   //axios是请求后台资源的模块，成功则返回在.then函数中，失败则是在.catch函数中。
	el:".content_one",
	data:{
		items:[],
		totalCost:"",
		productName: "",
		obj: {},
		isCur:false,
		divstyle:false
	},
	created: function() {  //创建完之后   钩子函数     
		this.getData();
	},	
	methods: {
		focusinput:function(){
			this.isCur=true,
			this.divstyle=true
		},			
		lose:function(){
			this.isCur=false,
			this.divstyle=false,
			this.getData();
		},
		getData:function() {
			var that = this;
			axios.post(_url+"getOrder", {token : localStorage.getItem("token"),
			productName:this.productName,})
		  .then(function (response) {   //// 回调函数  promise
		    console.log(response.data);
		    that.items = response.data.result;
		  })
		  .catch(function (error) {    //错误  error
		    console.log(error);
		  });
		}
	}
})

































//箭头符号跳转
var topnav=new Vue({
	el:'.top_nav',
	methods:{
		jiantou:function(){
			history.go(-1);
		},
		tupian:function(){
			location.href="ShopCart.html";
		}
	}
})


