$(document).ready(function(){
	$.ajax({
	type:"post",
	url:_url+"getOrderDetail",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify({token:localStorage.getItem("token"),orderId:id}),
	success:function(data){
		if(data.isSuccess == true){
			detai(data.result);
		}
	}
});
})


var detai =function(result){
	var productNum=JSON.parse(result.productNum);
	for(var i=0;i<result.products.length;i++){
		var detail =
	           '<div class="price" data-id="'+ result.id +'">'
	           +'<img src="'+ result.products[i].Image +'" />'
	           +'<p>'+ result.products[i].Des +'</p>'
	           +'<span class="newprice">￥'+ result.products[i].CurPrice +'</span>'
	           +'<span class="oldprice">￥'+ result.products[i].OldPrice +'</span>'
	           +'<i>X'+productNum[i]+'</i>'
	           +'</div>'	           
	        $(".cards").append(detail);
	}
	 $(".productprice").html(result.totalCost);
	 $(".orderprices").html(result.totalCost);
	 $(".prices").html(result.totalCost);
}
$(document).on("click",".delete",function(){
	var orderId = $(".price").data("id");
		$.ajax({
			type:"post",
			url:_url+"delOrder",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({token:localStorage.getItem("token"),orderId:orderId}),
			success:function(data){
				if(data.isSuccess == true){	
					location.href="OrderList.html";
				}
			}
		});

})