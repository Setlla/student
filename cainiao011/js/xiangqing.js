$.ajax({
	type:"post",
	url:preUrl+"/productDetail",
	contentType:"application/json",
	data:JSON.stringify({id:getQueryString("id")}),
	success:function(result){
		setP(result.result);
		setDes(result.result);
		setImg(result.result);
	}
})

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 

function setP(result){	
			var content='<li class="l_one">'+result.product.Name+'</li>'
			+'<li class="l_two">￥'
				+'<i>'+result.product.CurPrice+'</i>'
				+'<span>价格'+result.product.OldPrice+'</span>'
				+'<p>'+result.product.Status+'</p>'
			+'</li>'
			+'<li class="l_three">'
			    +result.product.Carriage
				+'<i>5.00元</i>'
				+'<span>23人看过</span>'
				+'<p>'+result.product.Destination+' 宝山</p>'
			+'</li>'			
			$(".nr ul").html(content);	
}

function setDes(result){
	var ameP='<span>'+result.product.Des+'</span>';
	$(".ms").append(ameP);	
}
function setImg(result){
	$(".xq img").attr("src",result.product.Image);
}


$(document).on("click",".gw",function(){
	$.ajax({
		type:"post",
		url:preUrl+"/addShopCar",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({id:getQueryString("id"),token:localStorage.getItem("token")}),
		success:function(result){
			location.href="gouwuche.html";
		}
	})
		
		
		if(localStorage.getItem("token")){
		location.href="gouwuche.html";	
		}
		else{
		alert("请您登陆！")
			location.href="denglu.html";
		}
	});
