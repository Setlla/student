$(document).on("click",".icon li",function(){
	$(this).addClass("cur").siblings().removeClass("cur");
})
var id=getParams('id');
$(".icon li").eq(id).addClass("cur").siblings().removeClass("cur");

