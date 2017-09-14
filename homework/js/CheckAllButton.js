$(document).ready(function(){
	$(document).on("click",".checkall span",function(){		
			$(".checkall span").toggleClass("blue");
			if($(".checkall span").hasClass("blue")){
				$(".button").addClass("blue")
			}else{
				$(".button").removeClass("blue")
			}
		disable();
		money();
	})
	
$(document).on("click",".button",function(){
		for(var i=0;i<$(".button").length;i++){
			$(this).eq(i).toggleClass("blue");	
		}  	
		if($(".button").length == $(".button.blue").length){
			$(".checkall span").addClass("blue")
		}else{
			$(".checkall span").removeClass("blue")
		}	
		disable();
		money();
	 })    
})
 
 function money(){
	var content = $(".button.blue");
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
var disable = function(){
	if($(".button.blue").length == 0){
		$(".settle").attr("disabled","disabled");
		$(".settle").css("background","#979797");
	}else{
		$(".settle").removeAttr("disabled");
		$(".settle").css("background","#ee8219");
	}
}
	