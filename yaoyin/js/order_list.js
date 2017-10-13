	$(document).ready(function(){
		//搜索功能
		var vm_search=new Vue({
			el:".search",
			data:{
				isSearch:false,
				isSer:false
			},
			methods:{
				search_ipt1:function(){
					this.isSearch=true;
					this.isSer=true;
				},
				search_ipt2:function(){
					this.isSearch=false;
					this.isSer=false;
				}
			}
			
			
		})	
//		$(document).on("change",".search_ipt",function(){
//			$(".warelist").empty();
//			romance();
//		})
		
		
		//PC端回车函数
//		$(".search_ipt").keydown(function(event) {  
//	        if (event.keyCode == 13) { 
//	        	$(".warelist").empty();
//	             romance();	
//	        }  
//  	}) 
		
		
		//渲染函数	
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
		var romance=function(){
			var productName=$(".search_ipt").val();
			$.ajax({
				type:"post",
				url:_url+"/getOrder",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
					token:localStorage.getItem("token"),
					productName:productName
				}),
				success:function(data,status){
					if(data.isSuccess==true){
						datas(data);
					}										
				}			
			})
		}
		romance();
		
		//删除订单
		$(document).on("click",".del_btn",function(){
			var orderId=$(this).parents(".wl").data("id");
			var that = this;
			$.ajax({
				type:"post",
				url:_url+"/delOrder",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
					token:localStorage.getItem("token"),
					orderId:orderId
				}),
				success:function(data,status){
					if(data.result>0){
						$(that).parents(".wl").remove();
					}					
				}			
			})
		})
		
		//点击订单列表任何一件商品跳转到订单详情
		$(document).on("click",".recharge_1",function(){
			var id=$(this).parents(".wl").data("id");
			location.href="order_details.html?id="+id;
		})
		
		
		var vm_header=new Vue({
			el:".header",
			methods:{
				//购物车跳转
				header_img:function(){
					location.href="shopping_trolley.html";
				},
				//箭头返回
				header_arr:function(){
					history.go(-1);
				}
			}
		})
	
	})//ready
	