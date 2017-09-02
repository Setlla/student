	

	$.ajax({
		type:"post",
		url:"http://39.108.219.59/productDetail",
//		url:"http://39.108.219.59/addShopCar ", 
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


		var id = 0;// 自动播放时的图片索引	
		var length=$(".round a").length; 	//当前图片总数
		$(document).on("click",".round a",function(e){
	        var index =$(".round a").index(this);
			$(this).css("background","#33CCFF").siblings().css("background","white");
			$(".banner").children().eq(index).show().siblings("img").hide();
			id = index ;	//
		})
		var a=setInterval("PicNumClick()",1000);	
			$(".banner img").mouseover(function(){
		 		clearTimeout(a)
		 	})
			$(".banner img").mouseout(function(){
		 	a=	setInterval("PicNumClick()",1000);
		 })			
	
	function PicNumClick() {
		$(".round a").eq(id).trigger("click");
		id = (id +1) % length;
	}
	
	$(document).on("click",".shopCart",function(){
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/addShopCar", 
			async:true,
			contentType:"application/json",
			data:JSON.stringify({
				token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.W3siaWQiOjMzLCJwaG9uZSI6IjE4NjcwNTIyODA4IiwiZW1haWwiOiIiLCJwYXNzd29yZCI6IjEyMzQ1NiIsImhlYWRJbWFnZSI6bnVsbCwibmFtZSI6bnVsbCwiZ2VuZGVyIjpudWxsLCJhZGRyZXNzIjpudWxsLCJjcmVhdGVkQXQiOiIyMDE3LTA5LTAyVDAyOjA2OjQ0LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTA5LTAyVDAyOjIyOjE3LjAwMFoifV0.NnSLiQD0XcXM85pcb0BgJ3E3dl2aRf5ja5JuKqUm75I",	
				id:getParams("id")
			}),
			success: function(data) {
				if(data.isSuccess==true){
					location.href="gouwuche.html"
				}
				console.log(data);
			}
		});

		
	})
	
	