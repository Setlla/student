$(document).ready(function(){
		//公用token
		var token=localStorage.getItem("token");		
			
		//获取后台用户中心的头像，姓名函数
		var  modify=function(data){
			$('.scu_name').text(data.result[0].name);
			$('.scu_circle').attr('src',data.result[0].headImage);
		}

		//渲染函数
		var xuanran=function(){
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/getPerson",
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
		
})//ready的括号