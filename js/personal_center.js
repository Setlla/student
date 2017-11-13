$(document).ready(function(){
		//公用token
		var token=localStorage.getItem("token");		
			
		//获取后台用户中心的头像，姓名函数
		var  modify=function(data){
			$('.scu_name').text(data.result[0].name);
			$('.scu_circle').attr('src',data.result[0].headImage);
		}

		//个人信息渲染函数
		var xuanran=function(){
			$.ajax({
				type:"post",
				url:_url+"/getPerson",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
						token:token
					}),
				success:function(data){
					localStorage.setItem("user",JSON.stringify(data.result[0]));	
					modify(data);//调用从后台渲染的函数
					console.log(data+"测试数据");					
				}
			})
		}
		xuanran();
		
		
		//收藏数量渲染
		var coll_num=function(){
			$.ajax({			
				type:"post",
				url:_url+"/getCollectionLog",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					token: token
				}),
				success:function(data,status){
					$('.collections').text(data.result.length);
				}
			})
		}
		coll_num();
		
		//足迹数量渲染
		var track_num=function(){
			$.ajax({			
				type:"post",
				url:_url+"/getBrowseLog",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					token: token
				}),
				success:function(data,status){
					var num = 0;
					for (var i=0;i<data.result.length;i++) {
						var a=data.result[i].browselogs.length;
						num = num + a;
						$(".tracks").text(num);
					}
					
				}
			})
		}
		track_num();
		
//		var acco=function(){
//			$.ajax({
//				type:"post",
//				url:_url+"/delAllShopCar",
//				async:true,
//				contentType:'application/JSON',
//				data:JSON.stringify({
//					
//				})
//			});
//		}  
//		
//		acco(); 
		
		
		//设置跳转到个人信息		
		$(document).on("click",".header_left",function(){
			location.href="personal_message.html";
		})
	
		//注销
		$(document).on("click",".header_dot",function(){
			localStorage.removeItem("token");
			location.href="login.html";
		})
		
		//订单列表页
		$(document).on("click",".bill_goods",function(){
			location.href="order_list.html";
		})
		
		//待付款待发货待评价等
		$(document).on("click",".WaitHandle li",function(){
			var id=$(this).index();
			location.href="my_order.html?id="+id;
		})
		
		//我的收藏
		$(document).on("click",".collect",function(){
			location.href="collection.html";
		})
		//我的足迹
		$(document).on("click",".track",function(){
			location.href="Browsing_History.html";
		})
		//头像跳转		
		$(document).on("click",".scu_circle",function(){
			location.href="personal_message.html";
		})
		$(document).on("click",".bill_2",function(){
			location.href="comment.html";
		})
})//ready的括号