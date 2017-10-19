$(document).ready(function(){		  	 
	 $(".join a").click(function(){
		$.ajax({
		type:"post",
		url:_url+"addShopCar",
		async:true,
		contentType:"application/JSON",
		data:JSON.stringify({
			"id": id,
			token:localStorage.getItem("token"),
		}),
		success:function(data){
			if(data.isSuccess == true){
				location.href="ShopCar.html"
			}else{
				console.log(data)
			}
		}
       })
})
	
	$.ajax({
		type:"post",
		url:_url+"productDetail",
		async:true,
		contentType:"application/JSON",
		data:JSON.stringify({"id": id}),
		success:function(data){
			if(data.isSuccess == true){
				books(data);
				product0 = data.result;
				browse(data.result.product.BrowseTimes);
			}				
		}
	});
})
var product0;
var books = function(data){
//for(var i=0;i<data.result.lenght;i++){
	  var bokContent1='<p class="present">'+ data.result.product.Des +'</p>'
  	               +'<div class="rate">'
  	               +'<p>￥<span>'+ data.result.product.CurPrice +'</span></p>'
  	               +'<i>'+ data.result.product.OldPrice +'</i>'
  	               +'<button>'+ data.result.product.Status +'</button>'
	  	           +'<div class="city">'  
				   +'<p>'+ data.result.product.Carriage +'</p>'
				   +'<p><span class="BrowseTimes">'+data.result.product.BrowseTimes +'</span>人看过</p>'
				   +'<P>'+ data.result.product.Destination +'</P>'		
				   +'</div>'	               
  	     $('.price').append(bokContent1);	 
  	var bokContent2='<div class="depict">'
					+'<p>'+ data.result.product.Des +'</p>'
					+'</div>'
		$('.describe').append(bokContent2);  
}
//立即购买
$(document).on("click",".buy",function(){
	var product1= [];
	product1.push(product0);
	localStorage.setItem("product2",JSON.stringify(product1));
	location.href = "FirmOrder.html";
})
var id = getParams('id');
//浏览次数
var browse = function(BrowseTimes){
	BrowseTimes = parseInt(BrowseTimes) + 1;
	$.ajax({
		type:"post",
		url:_url+"productBrowseTimes",
		async:true,
		contentType:"application/JSON",
		data:JSON.stringify({
			"id":id,
			"BrowseTimes":BrowseTimes
			}),
		success:function(data){
			if(data.isSuccess == true){
				$("p .BrowseTimes").text(BrowseTimes);
			}
		}
	});
}
