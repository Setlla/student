
var productName = $(".Allorders").val();
$.ajax({
	type:"post",
	url:"http://39.108.219.59/getOrder",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify({
		token:localStorage.getItem("token"),
		productName:productName
	}),
	success:function(data){
		if(data.isSuccess == true){
			list(data);
		}
	}
});
var list = function(data){
	var results = data.result;
   for( var i=0;i<data.result.length;i++){
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
     for(var s=0;s<results[i].products.length;s++){
     	var productNum =JSON.parse(results[i].productNum);
		   var content1='<div class="card">'
						+'<img src="'+results[i].products[s].Image +'" />'
			            +'<div class="text">'
			            +'<p>'+results[i].products[s].Des+'</p>'			           
			            +'</div>'
			            +'<div class="pricess">'
			            +'<span>￥'+results[i].products[s].CurPrice+'</span>'
			            +'<span class="noprice">￥'+results[i].products[s].OldPrice+'</span>'
			            +'<span class="number">x'+productNum[s]+'</a>'
						+'</div>'
						+'</div>'
				$(".cards").eq(i).append(content1);				
		}
                $(".totalNum").eq(i).text(results[i].totalNum);
				$(".totalCost").eq(i).text(results[i].totalCost);
	}
          
}
    	  
				
			
//删除订单
$(document).on("click",".delete",function(){
	  var orderId =$(this).parents(".products").data("id");
	  var current = this;
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/delOrder",
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

$(document).on("click",".head img",function(){
	location.href="ShopCar.html";
})
//搜索框
$(".Allorders").focus(function(){
	$(".input").addClass("cur"); 
	$(".Allorders").addClass("allorder"); 
})
$(".Allorders").blur(function(){
	$(".input").removeClass("cur"); 
	$(".Allorders").removeClass("allorder"); 
	
})
$(document).on("change",".Allorders",function(){
	$(".der").empty();
	search();
})