
	$(document).on("click",".content_one .round",function(){
		
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
			$(".information_small .round").removeClass("cur");
			
		}else{
			$(this).addClass("cur");
		}
		
		if ($(".content .round").length==$(".content .cur").length) {
			$(".information_small .round").addClass("cur");
		} else{
			$(".information_small .round").removeClass("cur");
		}




	})
	
	
	$(document).on("click",".information_small .round",function(){
		
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
			$(".content_one .round").removeClass("cur");
		}else{
			$(this).addClass("cur");
			$(".content_one .round").addClass("cur");
		}	
	
	
	
	
	
	})