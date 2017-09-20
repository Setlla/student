	$(document).ready(function(){
		//渲染函数	
		var name;
		var datas=function(data){	
			for (var i=0;i<data.result.length;i++) {
				var content=
					'<div class="wl"  data-id="'+data.result[i].id+'">'
					+'<div class="monopoly">'
		        	+'<img src="img/icon/icon_63.png"/>'
		        	+'<span>君宝话费充值专营店</span>'
		        	+'<span class="mon_arr"></span>'
		        	+'<span class="mon_success">交易成功</span>'
		        	+'</div>'
		        	+'<div class="product">'
		        	+'</div>'
		        	+'<ul class="recharge_2">'
			    	+'<li>'
	        		+'<span>共</span><span>'+data.result[i].totalNum+'</span><span>件商品</span>'
	        		+'<span>合计：￥</span><span>'+data.result[i].totalCost+'</span>'
	        		+'<span>(含运费 ￥0.00)</span>'
	        		+'</li>'
	        		+'<li>'
		        	+'<button class="del_btn"><span>删除订单</span></button>'
		        	+'<button class="judge_btn"><span>评价</span></button>' 
	        		+'</li>'
	        		+'</ul>'
	        		+'</div>';

		        $('.warelist').append(content);
				name = ".wl"+data.result[i].id;
				for (var j=0;j<data.result[i].products.length;j++) {
					var productNum=JSON.parse(data.result[i].productNum);
					var content1=
						'<ul class="recharge_1">'
			        	+'<li>'
			        	+'<img src="'+data.result[i].products[j].Image+'"/>'
			        	+'</li>'
			        	+'<li>'
			        	+'<span>'+data.result[i].products[j].Name+'</span>'
			        	+'</li>'
			        	+'<li>'
			        	+'<p><span>￥</span><span class="new_price">'+data.result[i].products[j].CurPrice+'</span></p>'
			        	+'<p><span>￥</span><span class="old_price">'+data.result[i].products[j].OldPrice+'</span></p>'
			        	+'<p>X<span class="num">'+productNum[j]+'</span></p>'
			        	+'</li>'
			      		+'</ul>';
			      		
			      	$(".product").eq(i).append(content1);  	
				}
			}
		}
		
		//ajax调用渲染函数
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/getOrder",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({
				token:localStorage.getItem("token")
			}),
			success:function(data,status){
				datas(data);
			}			
		});
		
		
		//删除订单
		$(document).on("click",".del_btn",function(){
			var orderId=$(this).parents(".wl").data("id");
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
					$(this).parent(".wl").remove();
					location.reload();
				}			
			})
		})
		
		//点击订单列表任何一件商品跳转到订单详情
		$(document).on("click",".recharge_1",function(){
			var id=$(this).parents(".wl").data("id");
			location.href="order_details.html?id="+id;
		})
		
		//购物车跳转
		$(document).on("click",".header img",function(){
			location.href="shopping_trolley.html";
		})
		
		//箭头返回
		$(document).on("click",".header_arr",function(){
			history.go(-1);
		})
	})//ready
	