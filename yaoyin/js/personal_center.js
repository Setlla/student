$(document).ready(function(){
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
	
	
		
})//ready的括号