	$(document).ready(function(){
		users();
		var orderId=getParams('id');
		var token=localStorage.getItem("token");
		//渲染函数
		var datas=function(data){			 	
			$(".warelist").data("id", orderId);			
			for (var i=0;i<data.result.products.length;i++) {
				var productNum=JSON.parse(data.result.productNum);
				var content=
					'<ul class="recharge">'
		        	+'<li>'
		        	+'<img src="'+data.result.products[i].Image+'"/>'
		        	+'</li>'
		        	+'<li>'
		        	+'<span>'+data.result.products[i].Name+'</span>'
		        	+'</li>'
		        	+'<li>'
		        	+'<p><span>￥</span><span class="new_price">'+data.result.products[i].CurPrice+'</span></p>'
		        	+'<p><span>￥</span><span class="old_price">'+data.result.products[i].OldPrice+'</span></p>'
		        	+'<p>X<span class="num">'+productNum[i]+'</span></p>'
		        	+'</li>'
		      		+'</ul>';
		      		
		      	$('.warelist').append(content);
			}
			
			$('.price').text(data.result.totalCost);
			
		}
		
		
		
		//ajax调用渲染函数
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/getOrderDetail",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({
				token:token,
				orderId:orderId
			}),
			success:function(data,status){
				if(data.isSuccess==true){
					datas(data);
				}
				
			}			
		});
		
		//删除功能
		$(document).on("click",".del_btn",function(){
			var that = this;
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/delOrder",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
					token:localStorage.getItem("token"),
					orderId:orderId
				}),
				success:function(data,status){
					if(data.isSuccess==true){
						$(that).parents().find(".wl").remove();
						location.href="order_list.html";
					}
				}			
			})
		})
		
		//箭头返回
		$(document).on("click",".header_arr",function(){
			history.go(-1);
		})
	})//ready的括号