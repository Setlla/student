var product2 = JSON.parse(localStorage.getItem("product2"));
var ProductNumber = [];
var productId = [];
var firmoder = function(){
	
	var total = 0;
    var number = 0;
	for(var i=0; i<product2.length; i++){
		var firmContent =   '<div class="commodity" data-id='+ product2[i].product.id +'>'
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
					var total = total + parseInt(product2[i].product.CurPrice)*parseInt(product2[i].ProductNumber);
					var number = number + parseInt(product2[i].ProductNumber);
					var productIds = productId.push(product2[i].product.id);
					var ProductNumbers = ProductNumber.push(product2[i].ProductNumber);
	}

	$(".sum").text(total);
	$(".one").text(number);
	totalCost = total;
	totalNum = number;
}
firmoder();

$(document).on("click",".round",function(){
	if($(".round i").css("float") == "left"){
		$(".round i").css("float","right");
		$(".round").css("background","#33ccff");
		isInvoice = 1;
	}else{
		$(".round i").css("float","left");
		$(".round").css("background","#FFFFFF");
		isInvoice = 0;
	}
})
var totalCost;
var totalNum;
var isInvoice = 0;	 
$(document).on("click",".push",function(){
	var message = $("li input").val();	
	var data = {
			token:localStorage.getItem("token"),
			totalCost:totalCost,
			totalNum:totalNum,
			message:message,
			isInvoice:isInvoice,
			productId:"["+ productId +"]",
			productNum:"["+ ProductNumber +"]"
	      }
$.ajax({
	type:"post",
	url:_url+"addOrder",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify(data),
	success:function(data){
		if(data.isSuccess == true){
			location.href = "OrderList.html";
		}
	}
 });
})
$("input").blur(function(){
	$("input").css("text-align","right");
})