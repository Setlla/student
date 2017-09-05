	
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/getShopCar",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({token: localStorage.getItem("token"),}),
		success:function(result){
			setproduct(result.result);
		}
	});


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
		setnum();
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
		setnum();
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
	
	function setnum(){
		var num=0;
		var content=$(".content_one .cur");		
		for (var i=0;i<content.length;i++) {
			var number=parseInt(content.eq(i).parent().find(".number").html());
			num=num+number;
		}
		$(".buy").html("结算("+num+")");
	}



	function  setproduct(result){
		for (var i=0;i<result.length;i++) {		
		var cont='<div class="content_one"><div class="round" style="border-color: #5d5d5d;">'
					+'<a class="blue_round" href="#" style="display: none;"></a>'
				+'</div>'			
				+'<img src='+result[i].product.Image+'>'
				+'<div class="right">'
						+'<p>'+result[i].product.Name+'</p>'
						+'<span>'+result[i].product.Carriage+'</span>'
						+'<span>'+result[i].product.Destination+'</span>'
						+'<span class="nine">9成新</span>'
						+'<strong>￥<em class="newPrice">'+result[i].product.CurPrice+'</em></strong>'
						+'<i class="OldPrice">价格：￥'+result[i].product.OldPrice+'</i>'
						+'<a>X<i class="number">1</i></a>'					
				+'</div></div>'
			$(".content").append(cont);
		}
	}	