var products=JSON.parse(localStorage.getItem("products"));
var user = JSON.parse(localStorage.getItem("user"));
	$(".name").html(user.name);
	$(".phone").html(user.phone);
	$(".address").html(user.address);

var content=function(products){
	var sum=0;
 	var num=0;
	for(var n=0;n<products.length;n++){
		var strings='<div class="book">'
				+'<img src='+products[n].priture+'/>'
				+'<div class="seven">'
				+'<p>'+products[n].suggest+'</p>'
				+'<a>七天退换</a>'
				+'</div>'
				+'<div class="number">'
				+'<p>￥<i class="Prices">'+products[n].price+'</i></p>'
				+'<a>X<i class="Numbers">'+products[n].ProductNumber+'</i></a>'
				+'</div>'
				+'</div>'
		$(".shop").append(strings);
 		var newPrice=parseInt(products[n].price);
 		var number=parseInt(products[n].ProductNumber);
 		sum=sum+newPrice*number;
 		num=num+number;
	}
	$(".total").html(sum);
 	$(".numbers").html(num);
}
content(products);
$(document).on("click",".back",function(){
	history.back();
})

$(document).on("click",".round",function(){
	var round=$(".round");
	if($(this).hasClass("cur")){
		$(this).removeClass("cur");
		round.css({left:"0"});
	}else{
		$(this).addClass("cur");
		round.css({left:"0.4rem"})
	}
})
