
	 $(document).on("click",".content_one .round",function() {
	 	if ($(this).hasClass("cur")) {
	 		$(this).removeClass("cur");
	 	} else{
	 		$(this).addClass("cur");
	 	}
	 	if ($(".content_one").length==$(".content_one  .cur").length) {
	 		$(".small_box").addClass("cur");
	 	} else{
	 		$(".small_box").removeClass("cur");
	 	}
	 })


	$(document).on("click",".small_box",function() {
		
 		if ($(this).hasClass("cur")) {
 			$(".content_one .round").removeClass("cur");
	 		$(this).removeClass("cur");
	 	} else{
	 		$(this).addClass("cur");
			$(".content_one .round").addClass("cur");
	 		
	 	}
 	})
	$(document).on("click",".qh",function() {
		location.href="gouwuche.html";
	})
