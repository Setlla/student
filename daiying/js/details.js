var _data;

$.ajax({
	type:"post",
	url:_url+"productDetail",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({id: getParams('id')}),
	success:function(data){
		if(data.isSuccess==true){
		fun(data);
		good(data);
		_data = data.result;
		BrowseTimes(data.result.product.BrowseTimes);
		}
	}
})
		
//getParams();

function good(data){
	$(".book img").attr("src",data.result.product.Image);
}
function fun(data){ 
	var conpicture='<div class="heighter">'
						+'<div class="math" data-id='+data.result.product.id+'>'
						+'<p class="height">'+data.result.product.Name+'</p>'
						+'<p></p>'
						+'<span>'+data.result.product.CurPrice+'</span>'
						+'<span>'+data.result.product.OldPrice+'</span>'
						+'<button>'+data.result.product.Status+'</button>'
						+'</div>'
						+'<div class="express">'
						+'<span>'+data.result.product.Carriage+'</span>'
						+'<span><i class="much">'+data.result.product.BrowseTimes+'</i>人看过</span>'
		                +'<span>'+data.result.product.Destination+'</span>'
						+'</div>'
						+'</div>'
						
						+'<div class="content">'
						+'<p>宝贝描述</p>'
						+'<p>'+data.result.product.Des+'<p>'
						+'</div>'
	$(".heighter").html(conpicture);
}

$(document).on("click",".shopcar",function(){
	$.ajax({
		type:"post",
		url:_url+"addShopCar",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			id: getParams('id'),
			token:localStorage.getItem("token")
			}),
		success:function(data){
			if(data.isSuccess==true){
				location.href="shopcar.html";
			}
		}
	});
})

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

$(document).on("click",".buying",function(data){
	var data = [];
	data.push(_data);
//	var data = '['+JSON.stringify(_data)+']';
	localStorage.setItem("products",JSON.stringify(data));
	location.href="firmOrder.html";
})

var BrowseTimes=function(BrowseTimes) {
	BrowseTimes=parseInt(BrowseTimes)+1;
	$.ajax({
		type:"post",
		url:_url+"productBrowseTimes",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			id: getParams('id'),
			BrowseTimes:BrowseTimes
		}),
		success:function(data){
			if(data.isSuccess==true){
				BrowseTimes=BrowseTimes+1;
			}
		}
	});
}

