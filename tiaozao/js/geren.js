
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/getPerson",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({"token":localStorage.getItem("token")}),
		success:function(data){
			if(data.isSuccess==true){
				$(".banner img").attr("src", data.result[0].headImage);
				$(".NaMe").html(data.result[0].name);
			}
		}
	});
	
	$(document).on("click",".cancel",function() {
		localStorage.removeItem("token");
		location.href="loginLo.html";
	})
	