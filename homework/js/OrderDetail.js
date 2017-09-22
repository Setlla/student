$(document).on("click",".head span",function(){
	history.go(-1);
})
var user = JSON.parse(localStorage.getItem("user"));
    $(".name").html(user.name);
    $(".add").html(user.address);
    
function getParams(name) {
			 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	            if (r != null) return unescape(r[2]); return null; //返回参数值           
			 }
var id=getParams('id');

$.ajax({
	type:"post",
	url:"http://39.108.219.59/getOrderDetail",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify({token:localStorage.getItem("token"),orderId:id}),
	success:function(data){
		if(data.isSuccess == true){
			detai(data.result);
		}
	}
});

var detai =function(result){
	var productNum=JSON.parse(result.productNum);
	for(var i=0;i<result.products.length;i++){
		var detail =
	           '<div class="price" data-id="'+ result.id +'">'
	           +'<img src="'+ result.products[i].Image +'" />'
	           +'<p>'+ result.products[i].Des +'</p>'
	           +'<span class="newprice">￥'+ result.products[i].CurPrice +'</span>'
	           +'<span class="oldprice">￥'+ result.products[i].OldPrice +'</span>'
	           +'<i>X'+productNum[i]+'</i>'
	           +'</div>'	           
	        $(".cards").append(detail);
	}
	 $(".productprice").html(result.totalCost);
	 $(".orderprices").html(result.totalCost);
	 $(".prices").html(result.totalCost);
}
$(document).on("click",".delete",function(){
	var orderId = $(".price").data("id");
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/delOrder",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({token:localStorage.getItem("token"),orderId:orderId}),
			success:function(data){
				if(data.isSuccess == true){	
					location.href="OrderList.html";
				}
			}
		});

})