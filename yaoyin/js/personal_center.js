$(document).ready(function(){
		//公用token
		var token=localStorage.getItem("token");		
			
		//获取后台用户中心的头像，姓名函数
		var  modify=function(data){
			$('.scu_name').text(data.result[0].name);
			$('.scu_circle').attr('src',data.result[0].headImage);
		}
		//把地址姓名图片电话等都存入到localStorage
		var local=function(data){
			localStorage.setItem("headImage",data.result[0].headImage);
			localStorage.setItem("name",data.result[0].name);
			localStorage.setItem("gender",data.result[0].gender);
			localStorage.setItem("address",data.result[0].address);			
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
					modify(data);//调用从后台渲染的函数
					local(data);//调用存储用户各种信息的函数
					console.log(data+"测试数据");					
				}
			})
		}
		xuanran();

	
		//当铺页面跳转
		$('.shopping_trolley').click(function(){
			location.href="shopping_trolley.html";
		})
		
		//购物车页面跳转
		$('.hockshop').click(function(){
			location.href="hockshop.html";
		})
		
		//设置跳转到个人信息		
		$(document).on("click",".header_left",function(){
			location.href="personal_message.html";
		})
	
		//注销
		$(document).on("click",".header_dot",function(){
			localStorage.removeItem("token");
			location.href="login.html";
		})
		
})//ready的括号