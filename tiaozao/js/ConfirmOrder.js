
users();
var productId=[];
var productNum=[];
var	prods=function(){
	var Products =JSON.parse(localStorage.getItem("Products"));
	var num=0;
	var sum=0;
	for(var i=0;i<Products.length;i++) {		
		var ctent='<div class="content" data-id="'+Products[i].product.id+'">'
				+'<img src="'+Products[i].product.Image+'">'
				+'<div class="small_content">'
				+'<span class="Des">'+Products[i].product.Des+'</span>'
				+'<span>七天退换</span>'
				+'</div>'
				+'<div class="right_content">'
				+'<span > ￥<span class="newPrice">'+Products[i].product.CurPrice+'</span></span>'
				+'<i>X <em class="number">'+Products[i].ProductNumber+'</em></i>'
				+'</div></div>';
		var sum = sum + parseInt(Products[i].product.CurPrice)*parseInt(Products[i].ProductNumber);
		var num= num + parseInt(Products[i].ProductNumber);
		var productIds=productId.push(Products[i].product.id);
		var	productNums=productNum.push(Products[i].ProductNumber);
		$(".big_box").append(ctent);			
	}

	$(".moneys").html(sum);		
	$(".nummber").html(num);		
}
prods();		
//		$(document).on("click",".small_ruond", function () {			
//			if($(this).css("background-color")=="rgb(51, 204, 255)"){
//				$(this).css({background:"#dadada",right:".42rem"});
//				$(".big_ruond").css("border-color","#dadada");
//			}else{
//				$(this).css({background:"#33CCFF",right:"0",border:"#33CCFF"});
//				$(".big_ruond").css("border-color","#33CCFF");
//			}
//			
//		})

	
	//开发票
var Ufo=0;
$(document).on("click",".small_ruond",function () {
	if ($(this).hasClass("cur")) {
		$(this).removeClass("cur");
		$(".big_ruond").css({background:"#fff",border:"1px solid #dadada"});	
		Ufo=1;
	}else{
		$(this).addClass("cur");
		$(".big_ruond").css({background:"#33CCFF",border:"1px solid #33CCFF"});				
		Ufo=2;
	}
	
})
	
//	$(document).on("click",".content", function () {
//			location.href="details.html?id="+$(this).data("id");//跳转
//	})
//这一段不会


//	var productId = "";
//	var productNum = "";
//	
//	function setData() {
//		var Products =JSON.parse(localStorage.getItem("Products"));
//		productId = '[';
//		productNum = '[';
//		for(var i = 0;i<Products.length;i++) {
//			productId = productId + Products[i].product.id + ',';
//			productNum = productNum + Products[i].ProductNumber + ',';
//		}
//		productId = productId.substr(0,productId.length-1) + ']';
//		productNum = productNum.substr(0,productNum.length-1) + ']';
//	}

$(document).on("click",".confirm",function () {
//		setData();
	$.ajax({
		type:"post",
		url:_url+"addOrder ",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			totalCost:$(".moneys").html(),
			totalNum:$(".nummber").html(),
			message:$(".message input").val(),
			isInvoice:Ufo,
			productId:"["+productId+"]",
			productNum:"["+productNum+"]",
		}),
		success:function(data){
			if(data.isSuccess==true){
				location.href="OrderList.html";
			}
		}
	});
})






