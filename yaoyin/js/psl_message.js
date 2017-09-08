	$(document).ready(function(){
		//input获取焦点文字左对齐
		$(document).on("focus","input",function(){
			$(this).removeAttr("readonly").css("text-align","left");
		})
		//input获取焦点文字右对齐
		$(document).on("blur","input",function(){
			$(this).attr("readonly","readonly").css("text-align","right");
		})
		
		
		
		
		//箭头跳转回个人中心
		$(document).on("click",".header_arr",function(){
			location.href="personal_center.html";
		})
	})//ready括号