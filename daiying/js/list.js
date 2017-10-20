//$(document).on("click",".shopcar",function(){
//	location.href="shopcar.html";
//})

var shopcars=new Vue({
	el:'.head',
	methods:{
		back:function(){
			history.back()
		},
		reverseMessage:function(){
			location.href="shopcar.html"
		}
	}
})
//
//var productlist=function(){
//	var productName=$(".seek").val();
//	$.ajax({
//		type:"post",
//		url:_url+"getOrder",
//		async:true,
//		contentType:"application/json",
//		data:JSON.stringify({
//			token:localStorage.getItem("token"),
//			productName:productName
//			}),
//		success:function(data){
//			if(data.isSuccess==true){
////				setproducts(data);
//			}
//		}
//	});
//}
//productlist();

//var setproducts=function(data){
//	for(var n=0;n<data.result.length;n++){
//			 var strings='<div class="max" data-id='+data.result[n].id+'>'
//			 			+'<div class="cat">'
//						+'<img src="img/people/list_11.png" />'
//						+'<span>君宝话费充值专营店</span>'
//						+'<a></a>'
//						+'<span class="success">交易成功</span>'
//						+'</div>'
//						+'<div class="center'+data.result[n].id+'"></div>'//用eq()不需要对class进行字符串拼接
//						+'<div class="foot">'
//						+'<a>共<i class="num">'+data.result[n].totalNum+'</i>件商品</a>'
//						+'<span>合计：￥<i class="zero">'+data.result[n].totalCost+'</i>(含运费￥<i>0.00</i>)</span>'
//						+'</div>'
//						+'<div class="button">'
//						+'<button class="delete">删除订单</button>'
//						+'<button class="evaluate">评价</button>'
//						+'</div>'
//						+'</div>'
//		$(".content").append(strings);
		
//		for (var i=0;i<data.result[n].products.length;i++) {
//			var stringone='<div class="shop">'
//						 +'<img src='+data.result[n].products[i].Image+'/>'
//						 +'<p class="recharge">'+data.result[n].products[i].Name+'</p>'
//						 +'<div class="price">'
//						 +'<p class="price_one">￥<i>'+data.result[n].products[i].CurPrice+'</i></p>'
//						 +'<p class="price_two">￥<i>'+data.result[n].products[i].OldPrice+'</i></p>'
//						 +'<p class="number">X<i>'+eval(data.result[n].productNum)[i]+'</i></p>'
//						 +'</div>'
//						 +'</div>'
//			var name = ".center" +data.result[n].id;//在有标识符的地方插入字符串
//			$(name).append(stringone);
////			$(".center").eq(n).append(stringone);
//			
//		}
//	}
//}


Vue.component('father',{
	props:['items','shows',"index"],
	template:'<div><div class="max" v-for="(item,index) in items" v-show="shows[index]">'
 			+'<div class="cat">'
			+'<img src="img/people/list_11.png" />'
			+'<span>君宝话费充值专营店</span>'
			+'<a></a>'
			+'<span class="success">交易成功</span>'
			+'</div>'
			+'<div @click="shop(item.id)">'
			+'<child :products="item.products" :product-num="JSON.parse(item.productNum)"></child>'
			+'</div>'
			+'<div class="foot">'
			+'<a>共<i class="num">{{item.totalNum}}</i>件商品</a>'
			+'<span>合计：￥<i class="zero">{{item.totalCost}}</i>(含运费￥<i>0.00</i>)</span>'
			+'</div>'
			+'<div class="button">'
			+'<button class="delete" @click="delOrder(item.id,index)">删除订单</button>'
			+'<button class="evaluate">评价</button>'
			+'</div>'
			+'</div></div>',
			methods:{
				shop:function(id){
					location.href="orderDetails.html?id="+id
				},
				delOrder: function(orderId,index) {
						var that = this;
						axios.post(_url+'delOrder',{
							token:localStorage.getItem("token"),orderId: orderId})
						  .then(function (response) {
						    console.log(response.data.result);
							Vue.set(content.showsData, index, false)
						  })
					  .catch(function (error) {//捕获  catch
					    console.log(error);
					  });
				}
		
			}
})

Vue.component('child',{
	props:['products','productNum'],
	template:'<div><div class="shop" v-for="(product,index) in products">'
			 +'<img :src="product.Image"/>'
			 +'<p class="recharge">{{product.Name}}</p>'
			 +'<div class="price">'
			 +'<p class="price_one">￥<i>{{product.CurPrice}}</i></p>'
			 +'<p class="price_two">￥<i>{{product.OldPrice}}</i></p>'
			 +'<p class="number">X<i>{{productNum[index]}}</i></p>'
			 +'</div>'
			 +'</div></div>'
})

var content=new Vue({
	el:'.content',
	data:{
		items:[],
		showsData:[]
	},
	created: function() {//钩子函数
			this.getName();
		},
	methods:{
		getName:function(productName){
			var that = this;
			axios.post(_url+"getOrder",
			{token:localStorage.getItem("token"),
			productName:productName})
			  .then(function (response) {
//			    console.log(response.data);
			    that.items = response.data.result;
			     for(var i = 0;i<response.data.result.length;i++) {
			    	that.showsData.push(true)
			    }
			  })
			  .catch(function (error) {//捕获  catch
//			    console.log(error);
			  });
		}
	}
})



//$(document).on("click",".delete",function(data){
//	var orderId=$(this).parents(".max").data("id");
//	var current=this;
//	$.ajax({
//	type:"post",
//	url:_url+"delOrder",
//	async:true,
//	contentType:"application/json",
//	data:JSON.stringify({
//		token:localStorage.getItem("token"),
//		orderId:orderId
//		}),
//	success:function(data){
//			if(data.isSuccess==true){
//				$(current).parents(".max").remove();
//			}
//		}
//	});
//})
//$(document).on("click",".shop",function(){
//	var orderId=$(this).parents(".max").data("id");
//	location.href="orderDetails.html?id="+orderId;
//})


//$(document).on("focus",".search",function(){
//	$(this).addClass("cur");
//	$(".miss").css("display","block");
//	if($(".max").length==1){
//		$(".bottom").css("display","block");
//	}
//})
//
//$(document).on("blur",".search",function(){
//	$(this).removeClass("cur");
//	$(".miss").css("display","none");
//	if($(".max").length==1){
//		$(".bottom").css("display","none");
//	}
//})



var _search=new Vue({
	el:".search",
	data:{
		curobj: {
		cur: false
		},
		misd:false,
		productName:''
	},
	methods: {
		search: function() {
			this.curobj.cur = true;
			this.misd=true;
		},
		scour: function() {
			this.curobj.cur = false;
			this.misd=false;
			content.getName(this.productName);
		}
	}
})
//
//$(document).on("change",".search",function(){
//	$(".max").empty();
//	productlist();
//})


