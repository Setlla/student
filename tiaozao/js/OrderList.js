

var productList=function(){
	var productName=$(".inputs").val();
	$.ajax({
		type:"post",
		url:_url+"getOrder",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token : localStorage.getItem("token"),
			productName:productName,
		}),
		success:function(data){
			setProduct(data.result)
		}
	});	

}
productList();

//返回购物车
//$(document).on("click",".top_nav img",function () {
//	location.href="ShopCart.html"
//})
function setProduct(result){
	for (var i=0;i<result.length;i++) {				
		var conte='<div class="big_box" data-id="'+result[i].id+'">'	
					+'<div class="title" >'
					+'<img src="image/ddlb_14.png"/>'
					+'<span>君宝话费充值专营店</span>'
					+'<a></a>'
					+'<i>交易成功</i>'
					+'</div>'
					+'<div class="product"></div>'
					+'<div class="content_bottom">'
					+'<span>共计<i>'+result[i].totalNum+'</i>商品 合计：￥<i class="money">'+result[i].totalCost+'</i> (含运费￥<i>0.00</i>)</span>'
					+'</div>'	
					+'<div class="bottom_nav">'
					+'<div class="bottom_con">'
					+'<span class="delete">删除订单</span>'
					+'<span>评价</span>'
					+'</div></div></div></div>'						
		$(".content_one").append(conte)	;							
		for (var j=0;j<result[i].products.length;j++) {
			var cont='<div class="content_two" >'
					+'<img src="'+result[i].products[j].Image+'"/>'
					+'<div class="content_small">'
					+'<span>'+result[i].products[j].Des+'</span>'					
					+'</div>'
					+'<div class="right_con">'
					+'<span>￥<i>'+result[i].products[j].CurPrice+'</i></span>'
					+'<span>￥<i>'+result[i].products[j].OldPrice+'</i></span>'
					+'<span>X<i class="num">'+eval(result[i].productNum)[j]+'</i></span>'//立即执行里面，字符串转数组。
					+'</div>'
					+'</div>'
//				var name = ".product"+result[i].id;
			$(".product").eq(i).append(cont)	
		}					
	}
}

$(document).on("click",".delete",function () {
	//	var id = $(this).parents(".title").data("id");
	var id=	$(this).parents(".big_box").data("id");
	var cc=this;
	$.ajax({
		type:"post",
		url:_url+"delOrder",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			orderId:id
		}),
		success:function(data){				
			if(data.result==1){
				$(cc).parents(".big_box").remove(); //静态删除
//					location.reload()
			}
		}
	});		
})

//跳转订单详情
$(document).on("click",".content_two",function () {
	var orderId=$(this).parents(".big_box").data("id");
	$.ajax({
		type:"post",
		url:_url+"getOrderDetail",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			orderId:orderId
		}),
		success:function(data){
			if(data.isSuccess==true){
				location.href="OrderDetails.html?id="+orderId;
			}
		}
	});
})
////点击搜索  获得焦点 失去焦点
//$(document).on("focus",".search",function () {
//	$(this).addClass("cur");
//	$(".miss").css("display","block");
//})
//
//$(document).on("blur",".search",function () {
//	$(this).removeClass("cur");
//	$(".miss").css("display","none");
//})
//$(document).on("change",".search", function () {
//	$(".content_one").empty();
//	productList();		
//})



var search=new Vue({
	el:'.search',
	methods:{
		focusinput:function(){
			this.isCur=true,
			this.divstyle=true
		},			
		lose:function(){
			this.isCur=false,
			this.divstyle=false
		}					
	},
	data:{
		isCur:false,
		divstyle:false
	}	
})

































//箭头符号跳转
var topnav=new Vue({
	el:'.top_nav',
	methods:{
		jiantou:function(){
			history.go(-1);
		},
		tupian:function(){
			location.href="ShopCart.html";
		}
	}
})


