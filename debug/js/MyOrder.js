$(document).on("click","ul li",function(){
	$(this).addClass("blue").siblings().removeClass("blue");
})
var id = getParams('id');
var click =function(){
$("ul li").eq(id).addClass("blue").siblings().removeClass("blue");
}
click();