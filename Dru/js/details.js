	

	$.ajax({
		type:"post",
		url:"http://192.168.0.146:3900/productDetail",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			id:getParams("id")
			}),
		success:function(result){
			setBanner(result.result);
			setName(result.result);
			setDenote(result.result);
		}
		
	});
	function getParams(name) {
		 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
		 }
			//内容拼接。
	 function setBanner(result){
		$(".banner img").attr("src",result.product.Image);
	 }	
	 
	 function setName(result){
		   var cont='<p>'+result.product.Name+'</p>'
			+'<ul>'
				+'<li>'
					+'<span class="CurPrice">￥'+result.product.CurPrice+'</span>'
			 	    +'<span class="OldPrice"><i>价格'+result.product.OldPrice+'</i></span>'
		    		+'<span class="Status">'+result.product.Status+'</span>'	
				+'</li>'
			    +'<li>'
			   		+'<span>快递:</span>'
			   		+'<span class="Carriage">'+result.product.Carriage+'</span>'
					+'<span class="address">'+result.product.Destination+'</span>'	
			    +'</li>'
			+'</ul>';				
		$(".content").html(cont);
	}
	function setDenote(result){
		var ameP='<i>'+result.product.Des+'</i>';	
		$(".denote").append(ameP);
	}





			
//			var node=document.createElement("div");  //创造一个元素DIV 
////			node.setAttribute("class","textContent");  //设置一个属性textContent
//			node.innerHTML=textContent;			//选取HTML 的内容 
//////			textContent.innerHTML=node;
				
				
				//判断 。111


	$(document).on("click",".round a",function(e){
	        console.log(e.target.dataset.id);
   			var id = e.target.dataset.id;
			$(this).css("background","#33CCFF").siblings().css("background","white");
			$(".banner").children().eq(id).show().siblings("img").hide();			
	})
	
	
		
	var PicTotal = 5;// 当前图片总数
	var CurrentIndex;// 当前鼠标点击图片索引
	var ToDisplayPicNumber = 0;// 自动播放时的图片索引		
		
		
	function PicNumClick() {
		$(".banner .round a").eq(ToDisplayPicNumber).trigger("click");
		ToDisplayPicNumber = (ToDisplayPicNumber +1) % PicTotal;
//		setTimeout("PicNumClick()",1000);
	}
//		setTimeout("PicNumClick()",1000);