$(document).on("click",".head span",function(){
	location.href="information.html";
	
})



var token = localStorage.getItem("token");
$.ajax({
	type:"post",
	url:"http://39.108.219.59/getPerson",
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