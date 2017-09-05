$.ajax({
	type:"post",
	url:"http://39.108.219.59/getShopCar",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({token:localStorage.getItem("token")}),
	success:function(data){
		setData(data);
	}
});
var setData=function(data){
	for(var n=0;n<data.result.length;n++){
		var strings='<li class="bicycle">'
					+'<a class="round"><span class="dots"></span></a>'
					+'<img src='+data.result[n].product.Image+' />'
					+'<div class="right">'
					+'<div class="top">'
					+'<p>'+data.result[n].product.Des+'</p>'
					+'<span>'+data.result[n].product.Carriage+'</span>'
					+'<span>'+data.result[n].product.Destination+'</span>'
					+'<a>'+data.result[n].product.Status+'</a>'
					+'</div>'
					+'<div class="undown">'
					+'<span>￥ <i class="newPrice">'+data.result[n].product.CurPrice+'</i></span>'
					+'<span>价格￥：<i>'+ data.result[n].product.OldPrice+'</i></span>'
					+'<span>X<i class="number">1</i></span>'
					+'</div>'
					+'</div>'
					+'</li>'
					$(".content").append(strings);
	}
}


$(document).on("click",".bicycle .dots",function(e){	
	if ($(this).hasClass("cur")) {
		$(this).removeClass("cur");
	} else{
		$(this).addClass("cur");
	}
	if($(".bicycle .dots").length==$(".round .cur").length){
		$(".dot .dots").addClass("cur");
	}else{
		$(".dot .dots").removeClass("cur");
	}
	setsum();
	setnum();
})
$(document).on("click",".dot .dots",function(e){
	var round=$(".bicycle .dots");
	if ($(this).hasClass("cur")) {
		$(this).removeClass("cur");
		round.removeClass("cur");
		} else{
		$(this).addClass("cur");
		round.addClass("cur");
		}
	setsum();
	setnum();		
})

function setsum(){
 	var sum=0;
 	var content=$(".bicycle .cur");
 	for (var i=0;i<content.length;i++) {
 		 var newPrice=parseInt(content.eq(i).parents(".bicycle").find(".newPrice").html());
 		 var number=parseInt(content.eq(i).parents(".bicycle").find(".number").html());
 		 sum=sum+newPrice*number;
 	}
 	$(".sum").html(sum);

}
function setnum(){
	var num=0;
	var content=$(".bicycle .cur");		
	for (var i=0;i<content.length;i++) {
		var number=parseInt(content.eq(i).parents(".bicycle").find(".number").html());
		num=num+number;
	}
	$(".zero").html("("+num+")");
	}





