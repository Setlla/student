$(document).on("click",".one a",function(){
	location.href="firmOrder.html";
})
$(document).on("click",".shopcar",function(){
	location.href="shopcar.html";
})


$.ajax({
	type:"post",
	url:"http://39.108.219.59/getOrder",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({
		token:localStorage.getItem("token")
		}),
	success:function(data){
		if(data.isSuccess==true){
			setproducts(data);
		}
	}
});

var setproducts=function(data){
	for(var n=0;n<data.result.length;n++){
			 var strings='<div class="max" data-id='+data.result[n].id+'>'
			 			+'<div class="cat">'
						+'<img src="img/people/list_11.png" />'
						+'<span>君宝话费充值专营店</span>'
						+'<a></a>'
						+'<span class="success">交易成功</span>'
						+'</div>'
						+'<div class="center'+data.result[n].id+'"></div>'
						+'<div class="foot">'
						+'<a>共<i class="num">'+data.result[n].totalNum+'</i>件商品</a>'
						+'<span>合计：￥<i class="zero">'+data.result[n].totalCost+'</i>(含运费￥<i>0.00</i>)</span>'
						+'</div>'
						+'<div class="button">'
						+'<button class="delete">删除订单</button>'
						+'<button class="evaluate">评价</button>'
						+'</div>'
						+'</div>'
		$(".content").append(strings);
		
		for (var i=0;i<data.result[n].products.length;i++) {
			var stringone='<div class="shop">'
						 +'<img src='+data.result[n].products[i].Image+'/>'
						 +'<p class="recharge">'+data.result[n].products[i].Name+'</p>'
						 +'<div class="price">'
						 +'<p class="price_one">￥<i>'+data.result[n].products[i].CurPrice+'</i></p>'
						 +'<p class="price_two">￥<i>'+data.result[n].products[i].OldPrice+'</i></p>'
						 +'<p class="number">X<i>'+eval(data.result[n].productNum)[i]+'</i></p>'
						 +'</div>'
						 +'</div>'
			var name = ".center" +data.result[n].id;
			$(name).append(stringone);
		}
	}
}

$(document).on("click",".delete",function(data){
	for (var m=0;m<$(".cat").length;m++){
		var orderId=$(this).parent(".button").parent(".max").data("id");
	}
	
	$.ajax({
	type:"post",
	url:"http://39.108.219.59/delOrder",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({
		token:localStorage.getItem("token"),
		orderId:orderId
		}),
	success:function(data){
			if(data.isSuccess==true){
				location.reload();
			}
		}
	});
})
$(document).on("click",".shop",function(){
	location.href="orderDetails.html";
})