$(document).ready(function(){
	$(document).on("click",".checkall span",function(){		
			$(".all").toggleClass("blue");
			if($(".all").hasClass("blue")){
				$(".single").addClass("blue")
			}else{
				$(".single").removeClass("blue")
			}
		money();
	})
	
$(document).on("click",".button",function(){
		for(var i=0;i<$(".button").children().length;i++){
			$(this).children().eq(i).toggleClass("blue");	
		}  	
		if($(".button").children().length == $(".single.blue").length){
			$(".all").addClass("blue")
		}else{
			$(".all").removeClass("blue")
		}
		money();
	 })
      
})
 function money(){
	
//  $(".settle i").html($(".single.blue").length);
	var content = $(".single.blue");
	var total = 0;
	var number = 0;
	for(var i = 0; i < content.length; i++){
		var money = $(content[i]).parents(".bike").find(".money").html();
		var num = $(content[i]).parents(".bike").find(".power").html();
		var result=parseInt(money)*parseInt(num);
		var total = total + result;
		var number = number + parseInt(num);
	}
	$(".sum").text(total);
	$(".settle i").text(number);
}

