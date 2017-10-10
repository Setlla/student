	

$.ajax({
	type:"post",
	url:_url+"productDetail",
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
		ss=result.result;
		Corresponding(ss.product.BrowseTimes);
	}
	
});
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
		   		+'<span class="Destination"><i class="num">'+result.product.BrowseTimes+'</i>人看过</span>'
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


//		var id = 0;// 自动播放时的图片索引	
//		var length=$(".round a").length; 	//当前图片总数
//		$(document).on("click",".round a",function(e){
//	        var index =$(".round a").index(this);
//			$(this).css("background","#33CCFF").siblings().css("background","white");
//			$(".banner").children().eq(index).show().siblings("img").hide();
//			id = index ;	//
//		})
//		var a=setInterval("PicNumClick()",1000);	
//			$(".banner img").mouseover(function(){
//		 		clearTimeout(a)
//		 	})
//			$(".banner img").mouseout(function(){
//		 	a=	setInterval("PicNumClick()",1000);
//		 })			
//	
//	function PicNumClick() {
//		$(".round a").eq(id).trigger("click");
//		id = (id +1) % length;
//	}
//	

$(document).on("click",".shopCart",function(){
	$.ajax({
		type:"post",
		url:_url+"addShopCar", 
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token: localStorage.getItem("token"),
			id:getParams("id")
		}),
		success: function(data) {
			if(data.isSuccess==true){
				location.href="ShopCart.html"
			}
			console.log(data);
		}
	});		
})
	
	var ss;
$(document).on("click",".buy",function () {
	var Products=[];
	Products.push(ss);
	localStorage.setItem("Products",JSON.stringify(Products));
	location.href="ConfirmOrder.html"
})

var Corresponding=function(BrowseTimes){
	if(BrowseTimes == null){
		BrowseTimes = 0;
	}
 	BrowseTimes=parseInt(BrowseTimes)+1;
	
	$.ajax({
		type:"post",
		url:_url+"productBrowseTimes",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			id:getParams("id"),
			BrowseTimes:BrowseTimes
		}),
		success:function(result){
			console.log(result)
		}
	});
}
