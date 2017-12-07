var xxh=new XMLHttpRequest();
xxh.open("POST","http://39.108.219.59:8080/productDetail");
xxh.setRequestHeader("content-type","application/json");
xxh.send(JSON.stringify({id:1}));
xxh.onreadystatechange=function(){if(xxh.status==200&&xxh.readyState==4){hao(JSON.parse(xxh.response).result);}}
function hao(result){
var haa="<div class='banner'>"+
			"<img class='tupian' src="+result.product.Image+">"+
			"<p class='yuanquan'>"+
				"<i class='yuan-a'></i>"+
				"<i class='yuan'></i>"+
				"<i class='yuan'></i>"+
				"<i class='yuan'></i>"+
				"<i class='yuan'></i>"+
			"</p>"+
		"</div>"+
		"<div class='shuxue'>"+
			"<p class='chang-a'>"+result.product.Des+"</p>"+
			"<p class='chang-b'>"+
				"<span class='write-a'>￥</span>"+
				"<span class='write-b'>"+result.product.CurPrice+"</span>"+
				"<span class='write-c'>价格"+result.product.OldPrice+"</span>"+
				"<span class='write-d'>"+result.product.Status+"</span>"+
			"</p>"+
			"<p class='chang-c'>"+
				"<span class='write-e'>快递</span>"+
				"<span class='write-f'> 5.00元</span>"+
				"<span class='write-g'>  23人看过  </span>"+
				"<span class='write-i'>宝山</span>"+
				"<span class='write-h'> 上海 </span>"+
			"</p>"+
		"</div>"+

		"<div class='chang-d'>"+
			"<span class='write-t'>宝贝描述</span>"+
		"</div>"+
		"<div class='baobei'>"+result.product.ShopName+"</div>"
document.querySelector(".goods").innerHTML=haa
}















