$(document).on("click",".goods li",function(){
	$(this).addClass("bur").siblings().removeClass("bur");
})

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 

var id=getQueryString("id");
$(".goods li").eq(id).addClass("bur").siblings().removeClass("bur");