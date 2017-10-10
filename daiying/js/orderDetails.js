var content=function(data){
	for(var n=0;n<data.result.products.length;n++) {
		var things='<div class="content" data-id='+data.result.id+'>'
				  +'<img src='+data.result.products[n].Image+' />'
				  +'<p class="recharge">'+data.result.products[n].Name+'</p>'
				  +'<div class="number">'
				  +'<span>￥<i class="newprice">'+data.result.products[n].CurPrice+'</i></span>'
				  +'<p>￥<i class="oldprice">'+data.result.products[n].OldPrice+'</i></p>'
				  +'<a>x<i class="num">'+eval(data.result.productNum)[n]+'</i></a>'
				  +'</div>'
				  +'<div class="button">'
				  +'<button class="advisory">在线咨询</button>'
				  +'<button class="afterSales">申请售后</button>'
				  +'</div>'
				  +'</div>'
		$(".max").append(things);
	}
	
		var strings='<div class="prices">'
					 +'<p class="shopTotal">商品总价<span>￥<i>'+data.result.totalCost+'</i></span></p>'
					 +'<p class="extra">运费<span>￥<i></i>0.00</span></p>'
					 +'<p class="orders">订单总价<span>￥<i>'+data.result.totalCost+'</i></span></p>'
					 +'<img src="img/orderdetails_05.png"/>'
				     +'</div>'
				     +'<p class="pay">实付款<span>￥<i>'+data.result.totalCost+'</i></span></p>'
		$(".center").append(strings);
}

$.ajax({
	type:"post",
	url:_url+"getOrderDetail",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({
		token:localStorage.getItem("token"),
		orderId:getParams('id')
	}),
	success:function(data){
		content(data);
	}
});



$(document).on("click",".delete",function(){
	var orderId=$(this).parents(".footer").siblings(".max")
	.children(".content").data("id");
	var current=this;
	$.ajax({
	type:"post",
	url:_url+"delOrder",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({
		token:localStorage.getItem("token"),
		orderId:orderId
		}),
	success:function(data){
			if(data.isSuccess==true){
				location.href="list.html";
			}
		}
	});
})


