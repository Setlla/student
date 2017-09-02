	
	
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/productDetail",
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
		


			//setTimeout 的方法
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
			
			
			
			
			
			//setInterval 的方法
			//不需要在函数里面引用
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
		
$(".shopcar").click(function(){
	$.ajax({
	type:"post",
	url:"http://39.108.219.59/addShopCar",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({
		token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.W3siaWQiOjM1LCJwaG9uZSI6IjEzMDM2NzQ1NjM5XG4iLCJlbWFpbCI6bnVsbCwicGFzc3dvcmQiOiIxMjM0NTYiLCJoZWFkSW1hZ2UiOm51bGwsIm5hbWUiOm51bGwsImdlbmRlciI6bnVsbCwiYWRkcmVzcyI6bnVsbCwiY3JlYXRlZEF0IjoiMjAxNy0wOS0wMlQwNjozNDo0MS4wMDBaIiwidXBkYXRlZEF0IjoiMjAxNy0wOS0wMlQwNjozNDo0MS4wMDBaIn1d.XfBj5-WvZDFtNGEP3B7e7OtFthlS_og8zDNL-KDTWfA",
		id: getParams('id')
	}),
	success:function(data){
		if(data.isSuccess==true){
			location.href="shopcar.html";
		}
	}
});
})

