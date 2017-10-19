
$(document).on("click",".content_nav span",function () {
 	$(this).addClass("cur").siblings().removeClass();
})

var id=getParams("id");
var  corresponding=function(){
	$(".content_nav span").eq(id).addClass("cur").siblings().removeClass("cur");
}
corresponding();