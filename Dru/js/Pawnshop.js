

$.ajax({
	type:"post",
	url:" http://192.168.0.146:3900/productList",
	contentType:"application/json",
	success:function(result){
		console.log(result);
		setProduct(result.result);
	},
})
	
	$(document).on("click",".content_noe",function(e){
		console.log(e.target);
		$(this).addClass("cur").siblings().removeClass("cur");
	})
	
	
	$(document).on("click",".qh p",function	()	{
		$(this).addClass("cur").siblings().removeClass("cur");  //点击当前添加标签CUR。所有兄弟元素删除标签CUR。
		$(".content").eq($(this).index()).show();		//选择点击对应的内容显示
		$(".content").eq($(this).index()).siblings(".content").hide();	//拿到当前内容块，另外内容块隐藏。
//		$(".content").toggle();

//		if (this.className=="left_click") {
//			$(".right_click").css("background","#33CCFF");
//			$(".left_click").css("background","#D6F5FF");
//			$(".content_three").hide();
//			$(".content_two").show();
//		} else{
//			$(".right_click").css("background","#D6F5FF");
//			$(".left_click").css("background","#33CCFF");
//			$(".content_three").show();
//			$(".content_two").hide();			
//		}
})



		//内容拼接。
	function setProduct(result){
				
		for(var i=0;i<result.length;i++){
			var	textContent='<div class="content_noe" data-id="'+result[i].id+'">'
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


			
//			var node=document.createElement("div");  //创造一个元素DIV 
////			node.setAttribute("class","textContent");  //设置一个属性textContent
//			node.innerHTML=textContent;			//选取HTML 的内容 
//////			textContent.innerHTML=node;
				
				
				//判断 。111
			if(result[i].IsBook==0){
				$(".content_two").append(textContent);
			}else{
				$(".content_three").append(textContent);
			}
		}
	}
	$(document).on("click",".content_noe",function(){
//		var id = $(this).data("id");
//		location.href="/student/Dru/details.html?id="+id;	
	location.href="details.html?id="+$(this).data("id");//跳转
})

















































