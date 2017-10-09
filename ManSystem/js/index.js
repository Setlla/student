$(document).ready(function(){
	$(document).on("click",".managelist li",function(){
		if ($(this).children("ul").hasClass("hide")) {
			$(this).children("ul").removeClass("hide");
			$(this).parents(".managelist").find(".arr").css("transform","translate(0,-50%) rotate(315deg)")
		} 
		else{
			$(this).children("ul").addClass("hide");
			$(this).parents(".managelist").find(".arr").css("transform","translate(0,-50%) rotate(225deg)")
		}
	})
})