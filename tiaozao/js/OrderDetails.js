

users();
$.ajax({	
	type:"post",
	url:_url+"getOrderDetail",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({			
		token:localStorage.getItem("token"),
		orderId:getParams("id")
	}),
	success:function(data){
		setProduct(data.result)			
	}
});

		//内容拼接。

function  setProduct(result){
	for(i=0;i<result.products.length;i++){
	var content='<div class="content_two" data-id="'+result.products[i].id+'">'
			+'<img src="'+result.products[i].Image+'"/>'
			+'<div class="content_small">'
			+'<span>'+result.products[i].Des+'</span>'				
			+'</div>'
			+'<div class="right_con">'
			+'<span>￥<i class="moneyy">'+result.products[i].CurPrice +'</i></span>'
			+'<span>￥<i>'+result.products[i].OldPrice+'</i></span>'
			+'<span>X<i class="number">'+eval(result.productNum)[i]+'</i></span>'
			+'</div>'
//				+'<div class="Custome">'
//				+'<span>在线咨询</span>'
//				+'<span>申请售后</span>'
//				+'</div>'
			+'</div>'
			
		$(".content_noe").append(content)
	}
	var cont='<div class="Total">'
			+'<div class="left_cc">'
			+'<span>商品总价</span>'
			+'<span>运费</span>'
			+'<span>订单总价</span>'
			+'</div>'
			+'<div class="right_cc">'
			+'<span>￥<i>'+result.totalCost+'</i></span>'
			+'<span>￥<i>0.00</i></span>'
			+'<span>￥<i>'+result.totalCost+'</i></span>'
			+'</div>'		
			+'</div>'
			+'<div class="payment">'
			+'<span>实付款</span>'	
			+'<a>￥<i class="otals">'+result.totalCost+'</i></a>'
			+'</div>'
		$(".money").append(cont)	
}

$(document).on("click",".delete",function (){
	var orderId=getParams("id");
	var cc=this;
	$.ajax({
		type:"post",
		url:_url+"delOrder",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			orderId:orderId
		}),
		success:function(data){				
			if(data.result==1){					
				location.href="OrderList.html"					
			}
		}
	});	
})

