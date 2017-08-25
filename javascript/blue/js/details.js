	
	
		$.ajax({
			type:"post",
			url:"http://192.168.0.146:3900/productDetail",
			async:true,
			contentType:"application/json",
			data:JSON.stringify({id: getParams('id')}),
			success:function(data){
				fun(data)
				good(data)
				console.log(data)
			}
		})
		
		function getParams(name){
				 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
		            if (r != null) return unescape(r[2]); return null; //返回参数值
				 }
		
		function good(data){
			$(".book img").attr("src",data.result.product.Image);
		}
		function fun(data){ 
			var conpicture='<div class="heighter">'
								+'<div class="math">'
									+'<p class="height">'+data.result.product.Name+'</p>'
									+'<p></p>'
									+'<span>'+data.result.product.CurPrice+'</span>'
									+'<span>'+data.result.product.OldPrice+'</span>'
									+'<button>'+data.result.product.Status+'</button>'
								+'</div>'
								+'<div class="express">'
									+'<span>'+data.result.product.Carriage+'</span>'
									+'<span>23人看过</span>'
					                +'<span>'+data.result.product.Destination+'</span>'
								+'</div>'
							+'</div>'
							
							
							+'<div class="content">'
								+'<p>宝贝描述</p>'
								+'<p>'+data.result.product.Des+'<p>'
							+'</div>'
			$(".heighter").html(conpicture);
		}
		



//
//		var length=$(".round span").length;
//		var id=0;
//		
//		$(".round span").click(function(){
//			var index=$(".round span").index(this);
//			$(this).css("background","#33ccff").siblings().css("background","#fff");
//			$(".book").children("img").eq(index).show().siblings("img").hide();
//			id=index;
//	})
//		
//		var a=setTimeout("Carousel()",1000); 
//		var Carousel=function(){
//			$(".round span").eq(id).trigger("click");
//			id=(id+1)% length;
//			a=setTimeout(Carousel,1000);
//		}
//		$(".book img").hover(function(){
//			clearTimeout(a);
//		},function(){
//			a=setTimeout(Carousel,1000);
//		})
			
		var length=$(".round span").length;
		var id=0;
		$(".round span").click(function(){
			var index=$(".round span").index(this);
			$(this).css("background","#33ccff").siblings().css("background","#fff");
			$(".book").children("img").eq(index).show().siblings("img").hide();
			id=index;
		})
		
		
		var a=setInterval("Carousel()",1000); 
		var Carousel=function(){
			$(".round span").eq(id).trigger("click");
			 id=(id+1)% length;
			
		}
		$(".book img").hover(function(){
			clearInterval(a);
		},function(){
			a=setInterval(Carousel,1000);
		})