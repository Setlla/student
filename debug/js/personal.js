$(document).on("click",".head span",function(){
	location.href="information.html";	
})
var token = localStorage.getItem("token");
$.ajax({
	type:"post",
	url:_url+"getPerson",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify({
		token:token,
	}),
	success:function(data){
		localStorage.setItem("user",JSON.stringify(data.result[0]));
		$(".picture img").attr("src",data.result[0].headImage);
		$(".picture p").text(data.result[0].name);
	}
});
$(document).on("click",".cancel",function(){
	localStorage.removeItem("token");
	location.href = "denglu.html";
})
$(document).on("click",".oderform",function(){
	location.href = "OrderList.html";
})

$(document).on("click",".five li",function(){
	var id = $(this).index();
	location.href = "MyOrder.html?id="+id;
})