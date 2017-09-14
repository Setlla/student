var user = JSON.parse(localStorage.getItem("user"));
    $(".name").html(user.name);
    $(".number").html(user.phone);
    $(".address").html(user.address);
var product2 = JSON.parse(localStorage.getItem("product2"));

var firmoder = function(){
	for(var i=0; i<product2.length; i++){
		var firmContent =   '<div class="commodity">'
							+'<img src="'+ product2[i].product.Image +'" />'
							+'<div class="means">'
							+'<p class="nickname">'+ product2[i].product.Name +'</p>'
							+'<p class="price">￥'
							+'<span> '+ product2[i].product.CurPrice +'</span>'
							+'</p>'
							+'<p class="amount1">X'
							+'<span class="amount">'+product2[i].ProductNumber+'</span>'
							+'</p>'
							+'<button>7天退换</button>'
							+'</div>'
							+'</div>'
							$(".content1").append(firmContent);							
	}
}
firmoder();

function money(){
var content = $("button");
var total = 0;
var number = 0;
	for(var i = 0; i < content.length; i++){
		var money1 = $(content[i]).parents(".means").find(".price span").html();
		var num = $(content[i]).parents(".means").find(".amount").html();
		var result=parseInt(money1)*parseInt(num);
		var total = total + result;
		var number = number + parseInt(num);
	}
	$(".sum").text(total);
	$(".one").text(number);
}
money();

$(document).on("click",".round",function(){
	if($(".round i").css("float") == "left"){
		$(".round i").css("float","right");
		$(".round").css("background","#33ccff");
	}else{
		$(".round i").css("float","left");
		$(".round").css("background","#FFFFFF");	}
})