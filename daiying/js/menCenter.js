	$.ajax({
		type:"post",
		url:_url+"getPerson",
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

$(document).on("click",".list",function(){
	location.href="list.html";
})


$(document).on("click",".serve li",function(){
	var id=$(this).index();
	location.href="orders.html?id="+id;
})