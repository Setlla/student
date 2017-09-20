var setUser = function(){
	var user = JSON.parse(localStorage.getItem("user"));
	$(".name").html(user.name);
	$(".phone").html(user.phone);
	$(".address").html(user.address);
}
setUser();
var products;
var content=function(){
	products=JSON.parse(localStorage.getItem("products"));
	var sum=0;
 	var num=0;
	for(var n=0;n<products.length;n++){
		var strings='<div class="book">'
				+'<img src='+products[n].product.Image+'/>'
				+'<div class="seven">'
				+'<p>'+products[n].product.Des+'</p>'
				+'<a>七天退换</a>'
				+'</div>'
				+'<div class="number">'
				+'<p>￥<i class="Prices">'+products[n].product.CurPrice+'</i></p>'
				+'<a>X<i class="Numbers">'+products[n].ProductNumber+'</i></a>'
				+'</div>'
				+'</div>'
		$(".shop").append(strings);
 		var newPrice=parseInt(products[n].product.CurPrice);
 		var number=parseInt(products[n].ProductNumber);
 		sum=sum+newPrice*number;
 		num=num+number;
	}
	$(".total").html(sum);
 	$(".numbers").html(num);
}
content();
$(document).on("click",".back",function(){
	history.back();
})

var flag = 0;
$(document).on("click",".botton",function(){
	var round=$(".round");
	if($(this).hasClass("cur")){
		$(this).removeClass("cur");
		round.css({left:"0",background:"#fff"});
		flag = 0;
	}else{
		$(this).addClass("cur");
		round.css({left:"0.4rem",background:"#fff"});
		flag = 1;
	}
})

$(document).on("click",".submit",function(){
	var productId="[";
	var productNum="[";
	for (var i=0;i<products.length;i++) {
		var Id=products[i].ProductId;
		productId=productId+Id+',';
		var Num=products[i].ProductNumber;
		productNum=productNum+Num+',';
	}
	productId=productId+"]";
	productId=productId.replace(",]","]")
	
	productNum=productNum+"]";
	productNum=productNum.replace(",]","]")
	
	
	var message=$(".message").val();
	var totalNum=$(".numbers").html();
	var totalCost=$(".total").html(); 
	$.ajax({
	type:"post",
	url:"http://39.108.219.59/addOrder",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify({
		token:localStorage.getItem("token"),
		productNum:productNum,
		productId:productId,
		totalNum:totalNum,
		totalCost:totalCost,
		message:message,
		isInvoice:flag	
	}),
	success:function(data){
		if(data.isSuccess==true){
			location.href="list.html";
			
		}
	}
	});
})

