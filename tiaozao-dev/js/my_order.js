$(document).ready(function(){
	
	//箭头返回
	$(document).on("click",".header_arr",function(){
		history.go(-1);
	})
	
	//待付款点击事件
	$(document).on("click",".order_header li",function(){
		for(var i=0;i<$(".order_header li").length;i++){
		$(this).eq(i).addClass('ordernumber').siblings().removeClass('ordernumber');
		}
	})
	
	//个人中心点击哪个待XX跳转过来对应哪个待XX功能
	var wait=function(){
		var id=getParams("id");
		for(var i=0;i<$(".order_header li").length;i++){
			if (id==i) {
				$(".order_header li").eq(i).addClass('ordernumber').siblings().removeClass('ordernumber');
			}
		}
	}
	wait();
})