
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/getPerson",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({"token":localStorage.getItem("token")}),
		success:function(data){
			if(data.isSuccess==true){						
				localStorage.setItem("user",JSON.stringify(data.result[0]));				
				$(".banner img").attr("src", data.result[0].headImage);
				$(".NaMe").html(data.result[0].name);
			}
		}
	});
	
	$(document).on("click",".cancel",function() {
		localStorage.removeItem("token");
		location.href="loginLo.html";
	})
	






		//底部跳转
	$(document)	.on("click",".goods",function () {
//		location.href=""
	})
	$(document)	.on("click",".ShoCart",function () {
		location.href="ShopCart.html"
	})
	$(document)	.on("click",".Pawnshop",function () {
		location.href="Pawnshop.html"
	})
