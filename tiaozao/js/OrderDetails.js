//	var orderId=$(".content_two").data(id);
		users();
		function users(){
			var user =JSON.parse(localStorage.getItem("user"));
			$(".name").html(user.name);
			$(".address").html(user.address);
	}


	$.ajax({	
		type:"post",
		url:" http://39.108.219.59/getOrderDetail",
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
		function getParams(name) {
		 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
		 }
			//内容拼接。
	 function setBanner(result){
			$(".banner img").attr("src",result.product.Image);
	 }
	
	
	
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

		//点击箭头返回
	$(document).on("click",".arrow",function() {
		history.back();
	})
	
	$(document).on("click",".delete",function (){
		var orderId=getParams("id");
		var cc=this;
		$.ajax({
			type:"post",
			url:" http://39.108.219.59/delOrder",
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
	
