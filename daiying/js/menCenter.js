
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/getPerson",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({token:localStorage.getItem("token")}),
		success:function(data){
			if(data.isSuccess==true){
				localStorage.setItem("user",JSON.stringify(data.result[0]));
				$(".topimg").attr("src",data.result[0].headImage);
			}
		}
	});




$(document).on("click",".logout",function(){
	localStorage.removeItem("token");
	location.href="denglu.html";
})


$(document).on("click",".shopcar",function(){
	location.href="shopcar.html";
})
$(document).on("click",".hockshop",function(){
	location.href="hockshop.html";
})
