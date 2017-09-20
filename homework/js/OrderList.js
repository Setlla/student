$(document).on("click",".head span",function(){          //头部返回箭头
	history.go(-1);
})
$.ajax({
	type:"post",
	url:"http://39.108.219.59/getOrder",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify({token:localStorage.getItem("token")}),
	success:function(data){
		list(data);
	}
});

var list = function(data){
var results = data.result;
    for(var i=0; i<results.length; i++ ){
    	var content =   '<div class="products" data-id="'+ data.result[i].id +'">'
    	                +'<div class="success">'
						+'<img src="img/order_17.png"/>'	
						+'<p>君宝话费充值专营店</p>'	
						+'<span></span>'	
						+'<a>交易成功</a>'
						+'</div>'
						+'<div class="cards">'
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
						+'</div>'
           $(".der").append(content);   	
    	for(var s=0; s<results[i].products.length; s++){
    		var productNum = JSON.parse(data.result[i].productNum);   		
            var content1='<div class="card">'
						+'<img src="'+results[i].products[s].Image +'" />'
	                    +'<div class="text">'
	                    +'<p>'+results[i].products[s].Name+'</p>'
	                    +'<span>￥'+results[i].products[s].CurPrice+'</span>'
	                    +'<span class="noprice">￥'+results[i].products[s].OldPrice+'</span>'
	                    +'<span class="number">x'+productNum[s]+'</a>'
	                    +'</div>'
						+'</div>'	
				
				$(".cards").eq(i).append(content1);
    	}       
    	 $(".totalCost").eq(i).text(results[i].totalCost);
         $(".totalNum").eq(i).text(results[i].totalNum);
    }  						
}
//删除订单
$(document).on("click",".delete",function(){
	  var orderId =$(this).parents(".products").data("id");
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/delOrder",
		async:true,
		contentType:"application/JSON",
		data:JSON.stringify({token:localStorage.getItem("token"),orderId:orderId}),
		success:function(data){
			if(data.isSuccess == true){
				location.href = "OrderList.html";
			}
		}
	});
})
//跳转购物车
$(document).on("click",".head img",function(){
	location.href="ShopCar.html";
})
