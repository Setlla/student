$(document).on("click",".one a",function(){
	location.href="firmOrder.html";
})
$(document).on("click",".shopcar",function(){
	location.href="shopcar.html";
})

var setproducts=function(){
	var products=JSON.parse(localStorage.getItem("products"));
	var contents=JSON.parse(localStorage.getItem("contents"));
	for(n=0;n<products.length;n++){
		var strings='<div class="shop">'
					+'<img src='+products[n].product.Image+'/>'
					+'<p class="recharge">'+products[n].product.Name+'</p>'
					+'<div class="price">'
					+'<p class="price_one">￥<i>'+products[n].product.CurPrice+'</i></p>'
					+'<p class="price_two">￥<i>'+products[n].product.OldPrice+'</i></p>'
					+'<p class="number">X<i>'+products[n].ProductNumber+'</i></p>'
					+'</div>'
					+'</div>'
		$(".content").append(strings);
	}
	$(".num").html(contents.totalCost);
	$(".zero").html(contents.totalNum);
}
setproducts();
