var get;
$.ajax({
	type:"post",
	url:"http://39.108.219.59/getShopCar",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({token:localStorage.getItem("token")}),
	success:function(data){
		setData(data);
		get=data.result;
	}
});
var setData=function(data){
	for(var n=0;n<data.result.length;n++){
		var strings='<li class="bicycle" data-id='+data.result[n].product.id+'>'
					+'<span class="dots round"></span>'
					+'<div class="right">'
					+'<img src='+data.result[n].product.Image+'/>'
					+'<div class="together">'
					+'<div class="top">'
					+'<p>'+data.result[n].product.Des+'</p>'
					+'<span>'+data.result[n].product.Carriage+'</span>'
					+'<span>'+data.result[n].product.Destination+'</span>'
					+'<a>'+data.result[n].product.Status+'</a>'
					+'</div>'
					+'<div class="undown">'
					+'<span>￥ <i class="newPrice">'+data.result[n].product.CurPrice+'</i></span>'
					+'<span>价格￥: '+ data.result[n].product.OldPrice+'</span>'
					+'<span>X<i class="number">'+data.result[n].ProductNumber+'</i></span>'
					+'</div>'
					+'</div>'
					+'</div>'
					+'</li>'
					
		var things='<div class="contents" data-id='+data.result[n].id+'>'
					+'<span class="dots round"></span>'
					+'<img src='+data.result[n].product.Image+'/>'
					+'<div class="numbers">'
					+'<a class="decrease">-</a>'
					+'<span class="one">'+data.result[n].ProductNumber+'</span>'
					+'<a class="add">+</a>'
					+'</div>'
					+'<a class="delete">删除</a>'
					+'</div>'
		$(".shops").append(things);
		$(".content").append(strings);
	}
}


$(document).on("click",".bicycle .dots",function(e){	
	if ($(this).hasClass("cur")) {
		$(this).removeClass("cur");
	} else{
		$(this).addClass("cur");
	}
	if($(".bicycle .dots").length==$(".bicycle .cur").length){
	   $(".all .dot").addClass("cur");
	}else{
	   $(".all .dot").removeClass("cur");
	}
	setsum();
	setDisabled();
})
$(document).on("click",".all .dot",function(e){
	var round=$(".bicycle .dots");
	if ($(this).hasClass("cur")) {
		$(this).removeClass("cur");
		round.removeClass("cur");
		} else{
		$(this).addClass("cur");
		round.addClass("cur");
		}
	setsum();
	setDisabled();
})

function setDisabled() {
	if($(".dots.round.cur").length) {
		$(".balance").removeAttr("disabled").removeClass("gray");
	}else {
		$(".balance").attr("disabled","disabled").addClass("gray");
	}
}

function setsum(){
 	var sum=0;
 	var num=0;
 	var content=$(".bicycle .cur");
 	for (var i=0;i<content.length;i++) {
 		 var newPrice=parseInt(content.eq(i).parents(".bicycle").find(".newPrice").html());
 		 var number=parseInt(content.eq(i).parents(".bicycle").find(".number").html());
 		 sum=sum+newPrice*number;
 		 num=num+number;
 	}
 	$(".sum").html(sum);
 	$(".zero").html("("+num+")");
}

$(document).on("click",".switch a",function(e){
	$(this).hide().siblings().show();
	if($(".edit").css("display") == "none"){
	   $(".content").hide();
	   $(".shops").show();
	}
})

$(document).on("click",".delete",function(e){
	var id = $(this).parents(".contents").data("id");
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/delShopCar",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({token: localStorage.getItem("token"),id: id}),
		success:function(data){
			if(data.isSuccess==true){
				location.reload();
			}
		}
	});
})

$(document).on("click",".add",function(){
 	var add=parseInt($(this).parent(".numbers").find(".one").html())+1;
   		$(this).parent(".numbers").find(".one").html(add);
})
$(document).on("click",".decrease",function(){
	var decrease=parseInt($(this).parent(".numbers").find(".one").html())-1;
	if(decrease>0){
   		$(this).parent(".numbers").find(".one").html(decrease);
	}
})

$(document).on("click",".complete",function(){
	var products = [];
	for(var i = 0; i<$(".contents").length;i++){
		var id = $(".contents").eq(i).data("id");
		var ProductNumber = $(".contents").eq(i).find(".one").html();
		var product = {
			id: id,
			ProductNumber:ProductNumber
		}
		products.push(product);
	}
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/updateShopCar",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			products:products
		}),
		success:function(data){
			if(data.isSuccess==true){
				location.reload();
			}
		}
	});	
})
$(document).on("click",".hockshop",function(){
	location.href="hockshop.html";
})
$(document).on("click",".menCenter",function(){
	location.href="menCenter.html";
})


$(document).on("click",".balance",function(){
	var products = [];
	var content = $(".dots.cur");
	for(var i = 0; i<content.length;i++){
		var m=content.eq(i).parents(".bicycle").index();
		products.push(get[m]);
	}
	localStorage.setItem("products",JSON.stringify(products));
	location.href="firmOrder.html";
})
$(document).on("click",".right",function(){
	var id=$(this).parents(".bicycle").data("id");
	location.href = "details.html?id="+id;
})