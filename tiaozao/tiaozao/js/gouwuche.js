
	$(document).on("click",".content_one .round",function()	{	
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
		setsum();
	})
	
	
	
	$(document).on("click",".information_small .round",function(){
		
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
			$(".content_one .round").removeClass("cur");
		}else{
			$(this).addClass("cur");
			$(".content_one .round").addClass("cur");
		}
		setsum();
	})
	
	
	  $(document).on("click",".tips li",function(){
	  	 $(this).children("span").css("color","#33CCFF");
		 $(this).siblings().children("span").css("color","black");
	     $(this).children("i").addClass("cur");
		 $(this).siblings().children("i").removeClass("cur");  		  	
	  })	
	
	function setsum(){
	 	var sum=0;
	 	var content=$(".content_one .cur");
	 	for (var i=0;i<content.length;i++) {
	 		 var newPrice=parseInt(content.eq(i).parent().find(".newPrice").html());
	 		 var number=parseInt(content.eq(i).parent().find(".number").html());
	 		 sum=sum+newPrice*number;
	 	}
	 	$(".sum").html("￥"+sum);
	}


