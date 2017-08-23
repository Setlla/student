
$.ajax({
	type:"post",
	url:" http://192.168.0.146:3900/productList",
	contentType:"application/json",
	success:function(result){
		console.log(result);
		setProduct(result.result);
	},
})

	$(document).on("click",".qh p",function	()	{
		if (this.className=="left_click") {
			$(".right_click").css("background","#33CCFF");
			$(".left_click").css("background","#D6F5FF");
			$(".content_three").hide();
			$(".content_two").show();
		} else{
			$(".right_click").css("background","#D6F5FF");
			$(".left_click").css("background","#33CCFF");
			$(".content_three").show();
			$(".content_two").hide();			
		}
	})




	function setProduct(result){
		
		
		for(var i=0;i<result.length;i++){

			var	textContent='<div class="content_noe">'
					+'<img src="'+result[i].Image+'"/ width="180" height="140">'
					+'<div class="right_one">'
					+'<p>'+result[i].Des+'</p>'
					+'<span>'+result[i].Carriage+'</span>'
					+'<span>'+result[i].Destination+'</span>'
					+'<span>'+result[i].Status+'</span>'
					+'<span><i>￥</i>'+result[i].CurPrice+'</span>'
					+'<span>￥'+result[i].OldPrice+'</span>'
					+'<div class="round">'
						+'<a></a>'
						+'<a></a>'
						+'<a></a>'
					+'</div>'
				
			var node=document.createElement("div");  //创造一个元素DIV 
//			node.setAttribute("class","textContent");  //设置一个属性textContent
			node.innerHTML=textContent;			//选取HTML 的内容 
////			textContent.innerHTML=node;
				
			if(result[i].IsBook==0){
				$(".content_two").append(node);
			}else{
				$(".content_three").append(node);
			}
		}
	}


















































