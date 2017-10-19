
$.ajax({
	type:"post",
	url:_url+"getPerson",
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


$(document).on("click",".Collection",function(){
	location.href="Collection.html"
})

$(document).on("click",".footprint",function(){
	location.href="footprint.html"
})





$(document).on("click",".cancel",function() {
	localStorage.removeItem("token");
	location.href="loginLo.html";
})

$(document).on("click",".order",function ( ) {
	location.href="OrderList.html";
})

$(document).on("click",".click_lok li",function() {
	var id=$(this).index();
	location.href="goos.html?id="+id;//跳转
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
