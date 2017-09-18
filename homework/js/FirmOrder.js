var user = JSON.parse(localStorage.getItem("user"));
    $(".name").html(user.name);
    $(".number").html(user.phone);
    $(".address").html(user.address);
var product2 = JSON.parse(localStorage.getItem("product2"));





var firmoder = function(){
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
	totalCost = total;
	totalNum = number;
}
money();

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
	var ProductNumber;
	var productId;
	var id = "[";
	var Number = "[";
	for(var i=0; i<product2.length; i++){		
		    productId = product2[i].product.id;
		    id = id + productId + ",";
		    ProductNumber = product2[i].ProductNumber + ",";
		    Number = Number + ProductNumber;
	}
	id = id + "]";
	Number = Number + "]";
	var productId = id.replace(",]","]");
	var ProductNumber = Number.replace(",]","]");
	var data = {
			token:localStorage.getItem("token"),
			totalCost:totalCost,
			totalNum:totalNum,
			message:message,
			isInvoice:isInvoice,
			productId:productId,
			productNum:ProductNumber
	      }
$.ajax({
	type:"post",
	url:"http://39.108.219.59/addOrder",
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
